import {paramMock} from "./utils"

export function mockDeviceManager() {
    const deviceInfoMock = {
        deviceId: "[PC Preview] unknow mNetworkId",
        deviceName: "[PC Preview] unknow mDeviceName",
        deviceType: 0x0E
    }
    const deviceStateChangeMock = {
        action: 0,
        device: deviceInfoMock
    }
    const deviceManagerMock = {
        release: function () {
            console.warn("DeviceManager.release interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return
        },
        getTrustedDeviceListSync: function () {
            console.warn("DeviceManager.getTrustedDeviceListSync interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            var array = new Array();
            array.push(deviceInfoMock);
            return array ;
        },
        getTrustedDeviceList: function (...args) {
            console.warn("DeviceManager.getTrustedDeviceList interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            var array = new Array();
            array.push(deviceInfoMock);
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, array);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(array);
                })
            }
        },
        getLocalDeviceInfoSync: function () {
            console.warn("DeviceManager.getLocalDeviceInfoSync interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            return deviceInfoMock;
        },
        getLocalDeviceInfo: function (...args) {
            console.warn("DeviceManager.getLocalDeviceInfo interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, deviceInfoMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(deviceInfoMock);
                })
            }
        },
        startDeviceDiscovery: function (...args) {
            console.warn("DeviceManager.startDeviceDiscovery interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
        },
        stopDeviceDiscovery: function (...args) {
            console.warn("DeviceManager.stopDeviceDiscovery interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
        },
        authenticateDevice: function (...args) {
            console.warn("DeviceManager.authenticateDevice interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, {
                    deviceId: "[PC Preview] unknow deviceId",
                    pinToke: "[PC Preview] unknow pinToke"
                });
            }
        },
        verifyAuthInfo: function (...args) {
            console.warn("DeviceManager.verifyAuthInfo interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, {
                    deviceId: "[PC Preview] unknow deviceId",
                    level: "[PC Preview] unknow level"
                });
            }
        },
        on: function (...args) {
            console.warn("DeviceManager.on interface mocked in the Previewer. How this interface works on the Previewer may" +
                " be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                if (args[0] == 'deviceStateChange') {
                    args[len - 1].call(this, paramMock.businessErrorMock, deviceStateChangeMock);
                } else if (args[0] == 'deviceFound') {
                    args[len - 1].call(this, paramMock.businessErrorMock, {
                        subscribeId: "[PC Preview] unknow subscribeId",
                        device: deviceInfoMock
                    });
                } else if (args[0] == 'discoverFail') {
                    args[len - 1].call(this, paramMock.businessErrorMock, {
                        subscribeId: "[PC Preview] unknow subscribeId",
                        reason: "[PC Preview] unknow reason"
                    });
                } else {
                    args[len - 1].call(this);
                }
            }
        },
        off: function (...args) {
            console.warn("DeviceManager.off interface mocked in the Previewer. How this interface works on the Previewer may" +
                " be different from that on a real device.")
        }
    }
    global.systemplugin.distributedHardware = global.systemplugin.distributedHardware || {};
    global.systemplugin.distributedHardware.deviceManager = {
        createDeviceManager: function (...args) {
            console.warn("distributedHardware.deviceManager.createDeviceManager interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, deviceManagerMock)
            }
        }
    }
}