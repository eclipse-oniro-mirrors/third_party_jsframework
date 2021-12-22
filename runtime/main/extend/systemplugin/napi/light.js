import { paramMock } from "../utils"

export function mockLight() {
  const LightId = {
    LIGHT_ID_LED: 0,
    LIGHT_ID_KEYBOARD: 1,
    LIGHT_ID_BUTTONS: 2,
    LIGHT_ID_BELT: 3,
    UNKNOWN: 4
  }
  const LightEffectId = {
    LIGHT_ID_LED: "0",
    LIGHT_ID_KEYBOARD: "1",
    LIGHT_ID_BUTTONS: "2",
    LIGHT_ID_BELT: "3",
    UNKNOWN: "4"
  }
  const LightBrightness = {
    redBrightness: "[PC preview] unknown redBrightness",
    greenBrightness: "[PC preview] unknown greenBrightness",
    blueBrightness: "[PC preview] unknown blueBrightness"
  }
  const LightEffect = {
    lightBrightness: "[PC preview] unknown lightBrightness",
    onDuration: "[PC preview] unknown onDuration",
    offDuration: "[PC preview] unknown offDuration"
  }
  const light = {
    turnOn: function (...args) {
      console.warn("light.turnOn interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve) => {
          resolve();
        })
      }
    },
    turnOff: function (...args) {
      console.warn("light.turnOff interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve) => {
          resolve();
        })
      }
    },
    getLightIdList: function (...args) {
      console.warn("light.getLightIdList interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      var lightIdArray = new Array();
      lightIdArray.push(paramMock.paramNumberMock);
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, lightIdArray);
      } else {
        return new Promise((resolve) => {
          resolve(lightIdArray);
        })
      }
    },
    isSupport: function (...args) {
      console.warn("light.isSupport interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock);
      } else {
        return new Promise((resolve) => {
          resolve(paramMock.paramBooleanMock);
        })
      }
    },
    isEffectSupport: function (...args) {
      console.warn("light.isEffectSupport interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock);
      } else {
        return new Promise((resolve) => {
          resolve(paramMock.paramBooleanMock);
        })
      }
    }
  }
  return light
}