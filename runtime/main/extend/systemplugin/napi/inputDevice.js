import { paramMock } from "../utils"

export function mockInputDevice() {
  const AxisRange = {
      source: '[PC preview] unknow source',
      axis : '[PC preview] unknow axis',
      max : '[PC preview] unknow max',
      min: '[PC preview] unknow min'
  }
  const InputDeviceData = {
      id: '[PC preview] unknow id',
      name: '[PC preview] unknow name',
      sources : ['[PC preview] unknow sources'],
      axisRanges : [AxisRange]
  }

  const EventType = ['add', 'remove', 'update']
  const DeviceIds = [-1,0,1,2,3,4,5,6,7]
  const inputDevice = {
    on: function (...args) {
      console.warn("inputDevice.on interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length;
      if (len === 2) {
        if (EventType.indexOf(args[0]) === -1) {
          console.warn("the first parameter must be 'add'|'remove'|'update'")
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
      if (len < 1 || len >2) {
        console.warn("the number of parameter must be one or two")
      } else if (len === 1) {
        if (EventType.indexOf(args[0]) === -1) {
          console.warn("first parameter must be 'add'|'remove'|'update'")
        }
      } else {
        if (EventType.indexOf(args[0]) === -1) {
          console.warn("first parameter must be 'add'|'remove'|'update'")
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
      if (len != 1) {
        console.warn("the number of parameter must be one")
      }
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, DeviceIds);
      } else {
        console.warn("parameter type must be 'function")
      }
    },
    getDevice: function (...args) {
      console.warn("inputDevice.getDevice interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length;
      if (len != 2) {
        console.warn("the number of parameter must be two")
      }
      if (DeviceIds.indexOf(args[0]) === -1) {
        console.warn("the first parameter error")
      }
      if (typeof args[1] === 'function') {
        console.warn("asynchronous callback")
        args[1].call(this, InputDeviceData);
      } else {
        console.warn("the second parameter type must be 'function'")
      }
    }
  }
  return inputDevice
}