<!--
Web Toothbrush Inspector
Copyright (c) 2025 @printminion
Licensed under the MIT License - see LICENSE file for details
-->

# Web Toothbrush Inspector for Philips Sonicare Toothbrush

## Disclaimer
This is an independent, unofficial, open-source project. It is not affiliated with, endorsed by, or sponsored by Koninklijke Philips N.V. or any of its "Sonicare" branded products. All trademarks, logos, and brand names are the property of their respective owners.
        
Goto https://printminion.github.io/web-toothbrush-inspector/ and follow instructions.

## Support & Follow

If you find this project useful, please consider:

- 🌟 **GitHub Repository:** [web-toothbrush-inspector](https://github.com/printminion/web-toothbrush-inspector)
- 🐦 **Follow on X/Twitter:** [@printminion](https://x.com/printminion)
- 🖨️ **3D Enclosures:** Check out custom 3D printed enclosures for DIY display modules on [Cults3D](https://cults3d.com/@printminion)
- ☕ **Buy Me a Coffee:** Support development at [buymeacoffee.com/printminion](https://buymeacoffee.com/printminion)

## Links
### Key Reverse-Engineering Resources

* [My toothbrush streams gyroscope data (J. Mittendorfer)](https://blog.jmittendorfer.at/artikel/2020/10/my-toothbrush-streams-gyroscope-data/): The foundational blog post detailing the reverse-engineering of the HX992B, including the first public list of custom GATT services and characteristics.[1]
* [joushx/python-sonicare (GitHub)](https://github.com/joushx/python-sonicare): The original Python library for communicating with Sonicare toothbrushes, which served as a reference for service and characteristic names.[2]
* [GrumpyMeow/sonicare-ble-hacs (GitHub)](https://github.com/GrumpyMeow/sonicare-ble-hacs): A Home Assistant integration for Sonicare, providing a modern implementation and reference.[3]
* [GrumpyMeow/sonicare-ble (GitHub)](https://github.com/GrumpyMeow/sonicare-ble): The underlying Bluetooth library for the HACS integration.[4]

### Community Implementation & Analysis

* ([https://community.home-assistant.io/t/philips-sonicare-integration-for-bluetooth-toothbrushes/178229](https://community.home-assistant.io/t/philips-sonicare-integration-for-bluetooth-toothbrushes/178229)): A long-running discussion capturing real-world implementation challenges, including connection stability, battery reporting flaws, and BLE proxy scanning issues.[5, 6, 7, 8]

### Technical & Official Documentation

* [https://docs.python.org/3/library/struct.html](https://docs.python.org/3/library/struct.html): Official documentation for the Python module used to parse packed binary data (like C-style structs) from the BLE characteristics.[9]
* [https://www.bluetooth.com/specifications/assigned-numbers/](https://www.bluetooth.com/specifications/assigned-numbers/): Specification for the standard BLE Battery Service (`0x180F`) and Battery Level characteristic (`0x2A19`).[10, 11]
* [https://www.usa.philips.com/c-f/XC000006604/how-do-i-connect-my-toothbrush-to-the-sonicare-app](https://www.usa.philips.com/c-f/XC000006604/how-do-i-connect-my-toothbrush-to-the-sonicare-app): Official user documentation confirming the "wake-on-lift" and "app open" connection requirements.[12]
* [https://www.usa.philips.com/c-f/XC000012709/what-do-the-symbols-on-my-sonicare-toothbrush-mean](https://www.usa.philips.com/c-f/XC000012709/what-do-the-symbols-on-my-sonicare-toothbrush-mean): Official documentation detailing the physical battery indicator lights.[13]
