<!--
Web Toothbrush Inspector
Copyright (c) 2025 @printminion
Licensed under the MIT License - see LICENSE file for details
-->

# Philips Sonicare Bluetooth Protocol Documentation

## Disclaimer
This is an independent, unofficial, open-source project. It is not affiliated with, endorsed by, or sponsored by Koninklijke Philips N.V. or any of its "Sonicare" branded products. All trademarks, logos, and brand names are the property of their respective owners.

## Overview
This document describes the Bluetooth Low Energy (BLE) protocol used by the Philips Sonicare toothbrush application to communicate with Sonicare toothbrush devices. The protocol is based on GATT (Generic Attribute Profile) services and characteristics.

## Base UUID Pattern
All Sonicare-specific UUIDs follow this pattern:
```
477ea600-a260-11e4-ae37-0002a5d5XXXX
```
Where `XXXX` is the specific identifier for each service or characteristic.

---

## 1. Sonicare Service (Main Service)

**Service UUID:** `477ea600-a260-11e4-ae37-0002a5d50001`

This is the primary service for toothbrush handle control and status monitoring.

### Characteristics:

#### 1.1 Handle State
- **UUID:** `477ea600-a260-11e4-ae37-0002a5d54010`
- **Properties:** Read, Notify
- **Description:** Current state of the toothbrush handle
- **Data Type:** 1 byte (integer)
- **Values:**
  - `0` - Off
  - `1` - Standby
  - `2` - Run (brushing)
  - `3` - Charge
  - `4` - Shutdown
  - `6` - Validate
  - `7` - Background

#### 1.2 Handle Time
- **UUID:** `477ea600-a260-11e4-ae37-0002a5d54050`
- **Properties:** Read, Notify
- **Description:** Current time on the toothbrush handle (used for synchronization)
- **Data Type:** 32-bit timestamp (4 bytes, 36-bit value)
- **Unit:** Unix timestamp

#### 1.3 Available Brushing Routines
- **UUID:** `477ea600-a260-11e4-ae37-0002a5d54020`
- **Properties:** Read, Notify
- **Description:** List of available brushing routines on the device
- **Data Type:** Byte array

#### 1.4 Routine ID
- **UUID:** `477ea600-a260-11e4-ae37-0002a5d54022`
- **Properties:** Read, Write
- **Description:** Current selected routine ID
- **Data Type:** 1 byte (integer)
- **Note:** Used to set/read which brushing routine is active

#### 1.5 Cumulative Motor Runtime
- **UUID:** `477ea600-a260-11e4-ae37-0002a5d54040`
- **Properties:** Read
- **Description:** Total runtime of the motor (for diagnostics/warranty)
- **Data Type:** Integer (milliseconds or seconds)

---

## 2. Brush Head Service

**Service UUID:** `477ea600-a260-11e4-ae37-0002a5d50006`

This service manages brush head information and tracking.

### Characteristics:

#### 2.1 NFC Tag Version
- **UUID:** `477ea600-a260-11e4-ae37-0002a5d54210`
- **Properties:** Read
- **Description:** Version of the NFC tag on the brush head

#### 2.2 Serial Number
- **UUID:** `477ea600-a260-11e4-ae37-0002a5d54230`
- **Properties:** Read, Notify
- **Description:** Unique serial number of the brush head
- **Data Type:** String (ASCII encoded bytes)

#### 2.3 Factory Mode
- **UUID:** `477ea600-a260-11e4-ae37-0002a5d54220`
- **Properties:** Read
- **Description:** Factory mode status/configuration
- **Data Type:** 17-bit integer

#### 2.4 Lifetime Limit
- **UUID:** `477ea600-a260-11e4-ae37-0002a5d54280`
- **Properties:** Read
- **Description:** Maximum lifetime usage limit for the brush head
- **Data Type:** 18-bit integer

#### 2.5 Lifetime Usage
- **UUID:** `477ea600-a260-11e4-ae37-0002a5d54290`
- **Properties:** Read
- **Description:** Current lifetime usage of the brush head
- **Data Type:** 18-bit integer

#### 2.6 Ring ID
- **UUID:** `477ea600-a260-11e4-ae37-0002a5d542C0`
- **Properties:** Read
- **Description:** Brush head ring identification
- **Data Type:** 18-bit integer

---

## 3. Routine Service

**Service UUID:** `477ea600-a260-11e4-ae37-0002a5d50002`

This service handles brushing routine configuration and monitoring.

### Characteristics:

#### 3.1 Brushing Time
- **UUID:** `477ea600-a260-11e4-ae37-0002a5d54090`
- **Properties:** Read
- **Description:** Duration of the current/last brushing session
- **Data Type:** Integer (seconds)

#### 3.2 Intensity
- **UUID:** `477ea600-a260-11e4-ae37-0002a5d54080`
- **Properties:** Read, Write
- **Description:** Brushing intensity level
- **Data Type:** Byte array
- **Note:** Used to control motor power/vibration intensity

#### 3.3 Routine Number
- **UUID:** `477ea600-a260-11e4-ae37-0002a5d54091`
- **Properties:** Read
- **Description:** Current routine number/identifier
- **Data Type:** Integer

#### 3.4 Routine Length
- **UUID:** `477ea600-a260-11e4-ae37-0002a5d54070`
- **Properties:** Read
- **Description:** Total length/duration of the selected routine
- **Data Type:** Integer

#### 3.5 Session ID
- **UUID:** `477ea600-a260-11e4-ae37-0002a5d540b0`
- **Properties:** Read
- **Description:** Unique identifier for the current brushing session
- **Data Type:** Integer

---

## 4. Sensor Service

**Service UUID:** `477ea600-a260-11e4-ae37-0002a5d50005`

This service handles sensor data from the toothbrush.

### Characteristics:

#### 4.1 Selected Sensors
- **UUID:** `477ea600-a260-11e4-ae37-0002a5d54130`
- **Properties:** Read, Notify
- **Description:** Configuration of which sensors are active
- **Data Type:** Byte array

#### 4.2 Sensor Data
- **UUID:** `477ea600-a260-11e4-ae37-0002a5d54120`
- **Properties:** Read, Notify
- **Description:** Real-time sensor data stream
- **Data Type:** Byte array
- **Note:** Contains motion/orientation data for coaching features

---

## 5. Device Diagnostic Service

**Service UUID:** `477ea600-a260-11e4-ae37-0002a5d50007`

This service provides diagnostic and troubleshooting information.

### Characteristics:

#### 5.1 Error Value Persistent
- **UUID:** `477ea600-a260-11e4-ae37-0002a5d54310`
- **Properties:** Read, Notify
- **Description:** Persistent error codes stored in device memory
- **Data Type:** 20-bit integer

#### 5.2 Error Value Volatile
- **UUID:** `477ea600-a260-11e4-ae37-0002a5d54320`
- **Properties:** Read, Notify
- **Description:** Current/temporary error codes
- **Data Type:** 20-bit integer

#### 5.3 Proximity Value
- **UUID:** `477ea600-a260-11e4-ae37-0002a5d54330`
- **Properties:** Read
- **Description:** Proximity sensor data
- **Data Type:** Byte array

#### 5.4 External Flash
- **UUID:** `477ea600-a260-11e4-ae37-0002a5d54340`
- **Properties:** Read
- **Description:** External flash memory status/data
- **Data Type:** Byte array

#### 5.5 Pressure Sensor
- **UUID:** `477ea600-a260-11e4-ae37-0002a5d54350`
- **Properties:** Read
- **Description:** Pressure sensor readings (for brush pressure detection)
- **Data Type:** Integer

#### 5.6 Invalid Charger Detect Count
- **UUID:** `477ea600-a260-11e4-ae37-0002a5d54360`
- **Properties:** Read, Notify
- **Description:** Counter for invalid charger detections
- **Data Type:** Integer

#### 5.7 Debug Information
- **UUID:** `477ea600-a260-11e4-ae37-0002a5d54370`
- **Properties:** Read
- **Description:** Debug/diagnostic text information
- **Data Type:** String

---

## 6. Extended Service

**Service UUID:** `477ea600-a260-11e4-ae37-0002a5d50008`

Extended features and capabilities.

### Characteristics:

#### 6.1 Extended Feature
- **UUID:** `477ea600-a260-11e4-ae37-0002a5d54420`
- **Properties:** Read, Write
- **Description:** Extended feature control/configuration
- **Data Type:** Byte array

---

## 7. Storage Service

**Service UUID:** `477ea600-a260-11e4-ae37-0002a5d50004`

Handles data storage and retrieval from the toothbrush.

### Characteristics:

#### 7.1 Storage Data 1
- **UUID:** `477ea600-a260-11e4-ae37-0002a5d540d0`
- **Properties:** Read, Write
- **Description:** Storage data channel 1

#### 7.2 Storage Data 2
- **UUID:** `477ea600-a260-11e4-ae37-0002a5d540D5`
- **Properties:** Read, Write
- **Description:** Storage data channel 2

#### 7.3 Storage Data 3
- **UUID:** `477ea600-a260-11e4-ae37-0002a5d540E0`
- **Properties:** Read, Write
- **Description:** Storage data channel 3

#### 7.4 Storage Control 1
- **UUID:** `477ea600-a260-11e4-ae37-0002a5d54110`
- **Properties:** Read, Write
- **Description:** Storage control commands

#### 7.5 Storage Control 2
- **UUID:** `477ea600-a260-11e4-ae37-0002a5d54100`
- **Properties:** Read, Write
- **Description:** Storage control commands (alternate)

#### 7.6 Storage Status
- **UUID:** `477ea600-a260-11e4-ae37-0002a5d540d2`
- **Properties:** Read, Write
- **Description:** Storage operation status

---

## 8. Battery Service (Standard BLE)

**Service UUID:** `0000180F-0000-1000-8000-00805F9B34FB` (Standard BLE Battery Service)

### Characteristics:

#### 8.1 Battery Level
- **UUID:** `00002A19-0000-1000-8000-00805F9B34FB` (Standard BLE)
- **Properties:** Read, Notify
- **Description:** Current battery level percentage
- **Data Type:** 1 byte (0-100%)

---

## 9. Byte Streaming Service (Condor Protocol)

Two variants exist for different device types:

### Variant 1 (Legacy):
**Service UUID:** `a651fff1-4074-4131-bce9-56d4261bc7b1`

### Variant 2 (Modern):
**Service UUID:** `e50ba3c0-af04-4564-92ad-fef019489de6`

This service handles high-throughput data streaming for features like real-time brushing data, coaching information, and firmware updates.

### Characteristics (Variant 1):

#### 9.1 RX (Receive)
- **UUID:** `a6510001-4074-4131-bce9-56d4261bc7b1`
- **Properties:** Write
- **Description:** Data receive channel from app to device

#### 9.2 RX ACK (Receive Acknowledgment)
- **UUID:** `a6510002-4074-4131-bce9-56d4261bc7b1`
- **Properties:** Write
- **Description:** Acknowledgment for received data

#### 9.3 TX (Transmit)
- **UUID:** `a6510003-4074-4131-bce9-56d4261bc7b1`
- **Properties:** Notify
- **Description:** Data transmit channel from device to app

#### 9.4 TX ACK (Transmit Acknowledgment)
- **UUID:** `a6510004-4074-4131-bce9-56d4261bc7b1`
- **Properties:** Notify
- **Description:** Acknowledgment for transmitted data

#### 9.5 Protocol Config
- **UUID:** `a6510005-4074-4131-bce9-56d4261bc7b1`
- **Properties:** Read, Write
- **Description:** Protocol configuration parameters

### Characteristics (Variant 2):
Similar to Variant 1 but with UUIDs starting with `e50b000X-af04-4564-92ad-fef019489de6` where X is 1-7.

Additional characteristics:
- **Server Config:** `e50b0006-af04-4564-92ad-fef019489de6`
- **Client Config:** `e50b0007-af04-4564-92ad-fef019489de6`

---

## Communication Patterns

### Reading Data
Most characteristics support standard BLE read operations. Simply read from the characteristic UUID to get the current value.

### Writing Data
Writable characteristics (like intensity, routine ID) accept byte arrays. The format depends on the specific characteristic.

### Notifications
Many characteristics support notifications for real-time updates:
1. Enable notifications on the characteristic
2. The device will push updates when values change
3. This is particularly important for:
   - Handle State changes
   - Sensor data streaming
   - Battery level updates
   - Brush head detection

### Time Synchronization
The app typically:
1. Reads the current handle time
2. Calculates the offset from app time
3. Writes the corrected time back to the device
4. Used for accurate brushing session timestamps

---

## Data Type Encoding

### Integers
- Small integers (0-255): 1 byte
- Larger integers: Multiple bytes, typically little-endian
- Bit-specific integers (17-bit, 18-bit, 20-bit, 36-bit): Packed into minimum required bytes

### Strings
- ASCII encoded as byte arrays
- Null-terminated or length-prefixed depending on characteristic

### Timestamps
- Unix timestamp format (seconds since epoch)
- 32-bit or 36-bit values depending on precision needed

---

## Error Handling

### Error Codes
Error values are typically integers where:
- `0` indicates no error
- Non-zero values indicate specific error conditions
- Persistent errors are stored in flash memory
- Volatile errors are cleared on reboot

### Connection States
The app monitors:
- Bluetooth adapter state
- Device connection state
- Service discovery completion
- Characteristic read/write success/failure

---

## Quick Reference Table

| Feature | Service UUID (Suffix) | Main Characteristics | Read | Write | Notify |
|---------|----------------------|---------------------|------|-------|--------|
| Handle Control | 0001 | State, Time, Routine | ✓ | ✓ | ✓ |
| Brush Head | 0006 | Serial, Usage, Limits | ✓ | - | ✓ |
| Routines | 0002 | Time, Intensity, Session | ✓ | ✓ | - |
| Sensors | 0005 | Sensor Data | ✓ | - | ✓ |
| Diagnostics | 0007 | Errors, Debug Info | ✓ | - | ✓ |
| Storage | 0004 | Data Channels | ✓ | ✓ | - |
| Battery | Standard | Battery Level | ✓ | - | ✓ |
| Streaming | Custom | RX/TX Channels | ✓ | ✓ | ✓ |
