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

export function mockInputDevice() {
  const AxisRange = {
    source: '[PC preview] unknow source',
    axis: '[PC preview] unknow axis',
    max: '[PC preview] unknow max',
    min: '[PC preview] unknow min',
    fuzz: '[PC preview] unknow fuzz',
    flat: '[PC preview] unknow flat',
    resolution: '[PC preview] unknow resolution',
  }
  const InputDeviceData = {
    id: '[PC preview] unknow id',
    name: '[PC preview] unknow name',
    sources: ['[PC preview] unknow sources'],
    axisRanges: [AxisRange],
    bus: '[PC preview] unknow bus',
    product: '[PC preview] unknow product',
    vendor: '[PC preview] unknow vendor',
    version: '[PC preview] unknow version',
    phys: '[PC preview] unknow phys',
    uniq: '[PC preview] unknow uniq',
  }

  const EventType = ['changed']
  const DeviceIds = [0, 1, 2, 3, 4]
  const inputDevice = {
    on: function (...args) {
      console.warn("inputDevice.on interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length;
      if (len === 2) {
        if (EventType.indexOf(args[0]) === -1) {
          console.warn("the first parameter must be 'changed'")
        }
        if (typeof args[1] != 'function') {
          console.warn("the second parameter type must be 'function'")
        }
      } else {
        console.warn("the number of parameter must be two")
      }
    },
    off: function (...args) {
      console.warn("inputDevice.off interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length;
      if (len < 1 || len > 2) {
        console.warn("a maximum of two parameters")
      } else if (len === 1) {
        if (EventType.indexOf(args[0]) === -1) {
          console.warn("first parameter must be 'changed'")
        }
      } else {
        if (EventType.indexOf(args[0]) === -1) {
          console.warn("first parameter must be 'changed'")
        }
        if (typeof args[1] != 'function') {
          console.warn("second parameter type must be 'function'")
        }
      }
    },
    getDeviceSync: function (...args) {
      console.warn("inputDevice.getDeviceSync interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length;
      if (len != 1) {
        console.warn("the number of parameter must be one")
      } else {
        if (DeviceIds.indexOf(args[len - 1]) != -1) {
          return InputDeviceData;
        } else {
          console.warn("parameter error")
          return paramMock.businessErrorMock;
        }
      }
    },
    getDeviceIdsSync: function () {
      console.warn("inputDevice.getDeviceIdsSync interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return DeviceIds;
    },
    getDeviceIds: function (...args) {
      console.warn("inputDevice.getDeviceIds interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length;
      if (len > 1) {
        console.warn("the number of parameter must be one")
        return;
      }
      if (len === 1) {
        if (typeof args[0] === 'function') {
          args[0].call(this, DeviceIds);
        } else {
          console.warn("parameter type must be 'function'")
        }
      } else {
        return new Promise((resolve, reject) => {
          resolve(DeviceIds);
        })
      }
    },
    getDevice: function (...args) {
      console.warn("inputDevice.getDevice interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.");
      const len = args.length;
      if (len < 1 || len > 2) {
        console.warn("the number of parameter must be two");
        return;
      }
      if (typeof args[0] !== 'number') {
        console.warn("the first parameter error");
        return;
      }
      if (len === 1) {
        return new Promise((resolve, reject) => {
          resolve(InputDeviceData);
        })
      } else {
        if (typeof args[1] !== 'function') {
          console.warn("the second parameter type must be 'function'");
          return;
        }
        args[1].call(this, InputDeviceData);
      }
    },
    supportKeys: function(...args) {
      console.warn("inputDevice.supportKeys interface mocked in the Previewer." + 
      "How this interface works on the" + " Previewer may be different from that on a real device.");
      const len = args.length;
      if (len < 2 || len > 3) {
        console.warn("parameter number error");
        return;
      }
      if (typeof args[0] !== 'number') {
        console.warn("the first parameter error");
        return;
      }
      if (typeof args[1] !== 'object') {
        console.warn("the second parameter type must be array");
        return;
      }
      if (len === 2) {
        var KeystrokeAbilityArr = [];
        for (var i = 0; i < args[1].length; ++i) {
          KeystrokeAbilityArr.unshift('[PC preview] unknow boolean');
        }
        return new Promise((resolve, reject) => {
          resolve(KeystrokeAbilityArr);
        })
      } else {
        if (typeof args[2] !== 'function') {
          console.warn("the second parameter type must be array");
          return;
        }
        var KeystrokeAbilityArr = [];
        for (var i = 0; i < args[1].length; ++i) {
          KeystrokeAbilityArr.unshift('[PC preview] unknow boolean');
        }
        args[2].call(this, KeystrokeAbilityArr);
      }
    }
  }
  return inputDevice
}