<!--
Web Toothbrush Inspector
Copyright (c) 2025 @printminion
Licensed under the MIT License - see LICENSE file for details
-->

# Philips Sonicare Bluetooth Protocol - Quick Summary

## Disclaimer
This is an independent, unofficial, open-source project. It is not affiliated with, endorsed by, or sponsored by Koninklijke Philips N.V. or any of its "Sonicare" branded products. All trademarks, logos, and brand names are the property of their respective owners.

## Overview
The Philips Sonicare toothbrush uses BLE (Bluetooth Low Energy) with custom GATT services based on UUID pattern: `477ea600-a260-11e4-ae37-0002a5d5XXXX`

## Main Services

### 1. **Sonicare Service** (0001)
**Primary toothbrush control**
- Handle State (0010): Off/Standby/Run/Charge/Shutdown - **Read, Notify**
- Handle Time (0050): Timestamp for sync - **Read, Notify**  
- Routine ID (0022): Active routine - **Read, Write**
- Motor Runtime (0040): Total usage - **Read**

### 2. **Brush Head Service** (0006)
**Brush head tracking**
- Serial Number (0230): Unique ID - **Read, Notify**
- Lifetime Usage (0290): Current usage - **Read**
- Lifetime Limit (0280): Max usage - **Read**
- Ring ID (42C0): Head identification - **Read**

### 3. **Routine Service** (0002)
**Brushing session control**
- Brushing Time (0090): Session duration - **Read**
- Intensity (0080): Power level - **Read, Write**
- Session ID (40b0): Unique session - **Read**

### 4. **Sensor Service** (0005)
**Real-time data streaming**
- Sensor Data (0120): Motion/position data - **Read, Notify**
- Selected Sensors (0130): Active sensors config - **Read, Notify**

### 5. **Diagnostic Service** (0007)
**Troubleshooting & errors**
- Error Persistent (0310): Stored errors - **Read, Notify**
- Error Volatile (0320): Current errors - **Read, Notify**
- Pressure Sensor (0350): Brush pressure - **Read**
- Debug Info (0370): Diagnostic text - **Read**

### 6. **Battery Service** (Standard BLE)
- Battery Level (2A19): 0-100% - **Read, Notify**

### 7. **Byte Streaming Service** (Custom UUIDs)
**High-throughput data transfer**
- Two variants: Legacy (a651fff1-...) and Modern (e50ba3c0-...)
- RX/TX channels with acknowledgments
- Used for coaching, firmware updates

## Key Characteristics Summary

| Characteristic | UUID Suffix | Data | Access |
|---------------|-------------|------|--------|
| **Handle State** | 4010 | 1 byte (0-7) | R, N |
| **Handle Time** | 4050 | 4 bytes timestamp | R, N |
| **Routine ID** | 4022 | 1 byte | R, W |
| **Brush Head Serial** | 4230 | String | R, N |
| **Intensity** | 4080 | Byte array | R, W |
| **Sensor Data** | 4120 | Byte array | R, N |
| **Battery Level** | 2A19 | 1 byte (%) | R, N |
| **Error Codes** | 4310/4320 | Integer | R, N |

## Common Operations

### Read Handle State
```
UUID: 477ea600-a260-11e4-ae37-0002a5d54010
Returns: 1 byte
  0=Off, 1=Standby, 2=Run, 3=Charge, 4=Shutdown
```

### Set Brushing Intensity
```
UUID: 477ea600-a260-11e4-ae37-0002a5d54080
Write: Byte array with intensity level
```

### Read Battery
```
UUID: 00002A19-0000-1000-8000-00805F9B34FB
Returns: 1 byte (0-100%)
```

### Monitor Brush Head
```
UUID: 477ea600-a260-11e4-ae37-0002a5d54230
Enable notifications for serial number changes
```

## Data Types
- **Integers**: 1-4 bytes, little-endian
- **Strings**: ASCII byte arrays
- **Timestamps**: Unix epoch (32-bit)
- **Booleans**: 1 byte (0/1)

## Notifications
Enable notifications on these for real-time updates:
- Handle State (mode changes)
- Sensor Data (coaching)
- Battery Level (charging)
- Brush Head Serial (head changes)
- Error Codes (problems)

## Implementation Tips
1. **Connection**: Pair device first, then discover services
2. **Permissions**: Need BLUETOOTH_CONNECT & BLUETOOTH_SCAN on Android 12+
3. **Time Sync**: Read handle time, calculate offset, write back
4. **State Monitoring**: Subscribe to handle state notifications immediately
5. **Error Handling**: Check both persistent and volatile error characteristics
6. **Streaming**: Use byte streaming service for bulk data (coaching, updates)

## Protocol Flow
```
1. Connect to device
2. Discover services
3. Enable notifications on key characteristics
4. Sync time
5. Monitor handle state
6. Read/write characteristics as needed
7. Handle disconnection gracefully
```

## Security
- BLE pairing required
- Link-layer encryption
- No application-level encryption documented
- Device authentication via pairing

---
**Full documentation:** See `BLUETOOTH_PROTOCOL_DOCUMENTATION.md` for complete details
