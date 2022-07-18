/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { paramMock } from "../utils"

export function mockDeviceManager() {
  const wantAgent = {
    DeviceType: {
      UNKNOWN_TYPE: 0,
      SPEAKER: 0x0A,
      PHONE: 0x0E,
      TABLET: 0x11,
      WEARABLE: 0x6D,
      CAR: 0x83,
      TV: 0x9C
    },
    DeviceStateChangeAction: {
      ONLINE: 0,
      READY: 1,
      OFFLINE: 2,
      CHANGE: 3
    },
    DiscoverMode: {
      DISCOVER_MODE_PASSIVE: 0x55,
      DISCOVER_MODE_ACTIVE: 0xAA
    },
    ExchangeMedium: {
      AUTO: 0,
      BLE: 1,
      COAP: 2,
      USB: 3
    },
    ExchangeFreq: {
      LOW: 0,
      MID: 1,
      HIGH: 2,
      SUPER_HIGH: 3
    },
    SubscribeCap: {
      SUBSCRIBE_CAPABILITY_DDMP: 0,
      SUBSCRIBE_CAPABILITY_OSD: 1
    },
  }
  const deviceInfoMock = {
    deviceId: "[PC Preview] unknow mDeviceId",
    deviceName: "[PC Preview] unknow mDeviceName",
    deviceType: 0x0E,
    networkId: "[PC Preview] unknow mNetworkId"
  }
  const deviceStateChangeMock = {
    action: 0,
    device: deviceInfoMock
  }
  const subscribeInfoMock = {
    subscribeId: "[PC Preview] unknow mSubscribeId",
    mode: "[PC Preview] unknow mMode",
    medium: "[PC Preview] unknow mMedium",
    freq: "[PC Preview] unknow mFreq",
    isSameAccount: "[PC Preview] unknow mIsSameAccount",
    isWakeRemote: "[PC Preview] unknow mIsWakeRemote",
    capability: "[PC Preview] unknow mCapability"
  }
  const authParamMock = {
    authType: "[PC Preview] unknow mAuthType",
    extraInfo: "[PC Preview] unknow mExtraInfo"
  }
  const authInfoMock = {
    authType: "[PC Preview] unknow mAuthType",
    token: "[PC Preview] unknow mToken",
    extraInfo: "[PC Preview] unknow mExtraInfo"
  }
  const deviceManagerMock = {
    release: function () {
      console.warn("DeviceManager.release interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
    },
    getTrustedDeviceListSync: function () {
      console.warn("DeviceManager.getTrustedDeviceListSync interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      var array = new Array();
      array.push(deviceInfoMock);
      return array;
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
          pinToken: "[PC Preview] unknow pinToken"
        });
      }
    },
    unAuthenticateDevice: function (...args) {
      console.warn("DeviceManager.unAuthenticateDevice interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
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
  const deviceManager = {
    deviceManagerMock,
    createDeviceManager: function (...args) {
      console.warn("distributedHardware.deviceManager.createDeviceManager interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, deviceManagerMock)
      }
    }
  }
  return deviceManager
}