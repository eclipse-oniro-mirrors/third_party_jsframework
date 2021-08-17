import { paramMock } from "./utils"

export function mockAbilityFeatureAbility() {
  global.systemplugin.ability = {}
  const WantMock = {
    deviceId: "[PC Preview] unknow deviceId",
    bundleName: "[PC Preview] unknow bundleName",
    abilityName: "[PC Preview] unknow abilityName",
    uri: "[PC Preview] unknow uri",
    type: "[PC Preview] unknow type",
    flag: "[PC Preview] unknow flag",
    action: "[PC Preview] unknow action",
    parameters: "[PC Preview] unknow parameters",
    entities: "[PC Preview] unknow entities"
  }
  const ContextMock = {
    getCacheDir: function (...args) {
      console.warn("Context.getCacheDir interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock)
      } else {
        return new Promise((resolve) => {
          resolve("[PC Preview] unknow string")
        })
      }
    },
    getFilesDir: function (...args) {
      console.warn("Context.getFilesDir interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock)
      } else {
        return new Promise((resolve) => {
          resolve("[PC Preview] unknow string")
        })
      }
    },
    getExternalCacheDir: function (...args) {
      console.warn("Context.getExternalCacheDir interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock)
      } else {
        return new Promise((resolve) => {
          resolve("[PC Preview] unknow string")
        })
      }
    }
  }
  global.systemplugin.ability.featureAbility = {
    getWant: function (...args) {
      console.warn("ability.featureAbility.getWant interface mocked in the Previewer. How this interface works on" +
        " the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, WantMock)
      } else {
        return new Promise((resolve) => {
          resolve(WantMock)
        })
      }
    },
    startAbility: function (...args) {
      console.warn("ability.featureAbility.startAbility interface mocked in the Previewer. How this interface works" +
        " on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock)
      } else {
        return new Promise((resolve) => {
          resolve(paramMock.paramNumberMock)
        })
      }
    },
    getContext: function () {
      console.warn("ability.featureAbility.getContext interface mocked in the Previewer. How this interface works on" +
        " the Previewer may be different from that on a real device.")
      return ContextMock;
    }
  }
}