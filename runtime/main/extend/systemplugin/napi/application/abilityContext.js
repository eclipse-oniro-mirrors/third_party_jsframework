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

import { paramMock } from "../../utils"
import { MessageParcelClass } from "../rpc"
import { ContextClass } from "../applicationServiceExtAbility"

const ModuleInfoMock = {
  moduleName: '[PC preview] unknow moduleName',
  moduleSourceDir: '[PC preview] unknow moduleSourceDir',
}
export const AbilityInfoMock = {
  bundleName: '[PC preview] unknow bundleName',
  name: '[PC preview] unknow name',
  label: '[PC preview] unknow label',
  description: '[PC preview] unknow description',
  icon: '[PC preview] unknow icon',
  labelId: '[PC preview] unknow labelId',
  descriptionId: '[PC preview] unknow descriptionId',
  iconId: '[PC preview] unknow iconId',
  moduleName: '[PC preview] unknow moduleName',
  process: '[PC preview] unknow process',
  targetAbility: '[PC preview] unknow targetAbility',
  backgroundModes: '[PC preview] unknow backgroundModes',
  isVisible: '[PC preview] unknow isVisible',
  abilityTypeMock: '[PC preview] unknow abilityTypeMock',
  AbilitySubTypeMock: '[PC preview] unknow AbilitySubTypeMock',
  DisplayOrientationMock: '[PC preview] unknow DisplayOrientationMock',
  launchModeMock: '[PC preview] unknow launchModeMock',
  formEnabled: '[PC preview] unknow formEnabled',
  permissions: [paramMock.paramStringMock],
  deviceTypes: [paramMock.paramStringMock],
  deviceCapabilities: [paramMock.paramStringMock],
  readPermission: '[PC preview] unknow readPermission',
  writePermission: '[PC preview] unknow writePermission',
  applicationInfo: applicationInfoMock,
  formEntity: '[PC preview] unknow formEntity',
  minFormHeight: '[PC preview] unknow minFormHeight',
  defaultFormHeight: '[PC preview] unknow defaultFormHeight',
  minFormWidth: '[PC preview] unknow minFormWidth',
  defaultFormWidth: '[PC preview] unknow defaultFormWidth',
  uri: '[PC preview] unknow uri',
  customizeData: new Map([["[PC Preview] unknow customizeDataKey", "[PC Preview] unknow customizeDataValue"]])
}
const applicationInfoMock = {
  name: '[PC preview] unknow name',
  description: '[PC preview] unknow description',
  descriptionId: '[PC preview] unknow descriptionId',
  systemApp: '[PC preview] unknow systemApp',
  enabled: '[PC preview] unknow enabled',
  label: '[PC preview] unknow label',
  labelId: '[PC preview] unknow labelId',
  icon: '[PC preview] unknow icon',
  iconId: '[PC preview] unknow iconId',
  process: '[PC preview] unknow process',
  supportedModes: '[PC preview] unknow supportedModes',
  moduleSourceDirs: [paramMock.paramStringMock],
  permissions: [paramMock.paramStringMock],
  moduleInfo: [ModuleInfoMock],
  entryDir: '[PC preview] unknow entryDir',
  codepath: '[PC preview] unknow codepath',
  removable: '[PC preview] unknow removable',
  customizeData: new Map([["[PC Preview] unknow customizeDataKey", "[PC Preview] unknow customizeDataValue"]])
}
const HapModuleInfoMock = {
  name: '[PC preview] unknow name',
  description: '[PC preview] unknow description',
  descriptionId: '[PC preview] unknow descriptionId',
  icon: '[PC preview] unknow icon',
  label: '[PC preview] unknow label',
  labelId: '[PC preview] unknow labelId',
  iconId: '[PC preview] unknow iconId',
  backgroundImg: '[PC preview] unknow backgroundImg',
  supportedModes: '[PC preview] unknow supportedModes',
  reqCapabilities: [paramMock.paramStringMock],
  deviceTypes: [paramMock.paramStringMock],
  abilityInfo: AbilityInfoMock,
  moduleName: '[PC preview] unknow moduleName',
  mainAbilityName: '[PC preview] unknow mainAbilityName',
  installationFree: '[PC preview] unknow installationFree',
}
const screenDensityMock = {
  SCREEN_SDPI: '[PC preview] unknow SCREEN_SDPI',
  SCREEN_MDPI: '[PC preview] unknow SCREEN_MDPI',
  SCREEN_LDPI: '[PC preview] unknow SCREEN_LDPI',
  SCREEN_XLDPI: '[PC preview] unknow SCREEN_XLDPI',
  SCREEN_XXLDPI: '[PC preview] unknow SCREEN_XXLDPI',
  SCREEN_XXXLDPI: '[PC preview] unknow SCREEN_XXXLDPI'
}
const deviceTypeMock = {
  DEVICE_TYPE_PHONE: '[PC preview] unknow DEVICE_TYPE_PHONE',
  DEVICE_TYPE_TABLET: '[PC preview] unknow DEVICE_TYPE_TABLET',
  DEVICE_TYPE_CAR: '[PC preview] unknow DEVICE_TYPE_CAR',
  DEVICE_TYPE_PC: '[PC preview] unknow DEVICE_TYPE_PC',
  DEVICE_TYPE_TV: '[PC preview] unknow DEVICE_TYPE_TV',
  DEVICE_TYPE_WEARABLE: '[PC preview] unknow DEVICE_TYPE_WEARABLE'
}
const DeviceCapabilityClass = class DeviceCapability {
  constructor() {
    console.warn('DeviceCapability.constructor interface mocked in the Previewer. How this interface works on' +
      ' the Previewer may be different from that on a real device.');
    this.screenDensity = screenDensityMock;
    this.deviceType = deviceTypeMock;
  }
}
const configurationClass = class configuration {
  constructor() {
    console.warn('configuration.constructor interface mocked in the Previewer. How this interface works on' +
      ' the Previewer may be different from that on a real device.');
    this.directionMock = '[PC preview] unknow directionMock';
    this.locale = '[PC preview] unknow locale';
  }
}
const resourceManagerMock = {
  getString: function (...args) {
    console.warn("ResourceManager.getString interface mocked in the Previewer." +
      " How this interface works on the Previewer may be different from that on a real device.")
    const len = args.length
    if (len > 0 && typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock);
    } else {
      return new Promise((resolve, reject) => {
        resolve(paramMock.paramStringMock);
      })
    }
  },
  getStringArray: function (...args) {
    console.warn("ResourceManager.getStringArray interface mocked in the Previewer." +
      " How this interface works on the Previewer may be different from that on a real device.")
    const len = args.length
    if (len > 0 && typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock, [paramMock.paramStringMock]);
    } else {
      return new Promise((resolve, reject) => {
        resolve([paramMock.paramStringMock]);
      })
    }
  },
  getMedia: function (...args) {
    console.warn("ResourceManager.getMedia interface mocked in the Previewer." +
      " How this interface works on the Previewer may be different from that on a real device.")
    const len = args.length
    if (len > 0 && typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock, new Uint8Array());
    } else {
      return new Promise((resolve, reject) => {
        resolve(new Uint8Array());
      })
    }
  },
  getMediaBase64: function (...args) {
    console.warn("ResourceManager.getMediaBase64 interface mocked in the Previewer." +
      " How this interface works on the Previewer may be different from that on a real device.")
    const len = args.length
    if (len > 0 && typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock);
    } else {
      return new Promise((resolve, reject) => {
        resolve(paramMock.paramStringMock);
      })
    }
  },
  getDeviceCapability: function (...args) {
    console.warn("ResourceManager.getDeviceCapability interface mocked in the Previewer." +
      " How this interface works on the Previewer may be different from that on a real device.")
    const len = args.length
    if (len > 0 && typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock, new DeviceCapabilityClass());
    } else {
      return new Promise((resolve, reject) => {
        resolve(new DeviceCapabilityClass());
      })
    }
  },
  getConfiguration: function (...args) {
    console.warn("ResourceManager.getConfiguration interface mocked in the Previewer." +
      " How this interface works on the Previewer may be different from that on a real device.")
    const len = args.length
    if (len > 0 && typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock, new configurationClass());
    } else {
      return new Promise((resolve, reject) => {
        resolve(new configurationClass());
      })
    }
  },
  getPluralString: function (...args) {
    console.warn("ResourceManager.getPluralString interface mocked in the Previewer." +
      " How this interface works on the Previewer may be different from that on a real device.")
    const len = args.length
    if (len > 0 && typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock);
    } else {
      return new Promise((resolve, reject) => {
        resolve(paramMock.paramStringMock);
      })
    }
  },
  getRawFile: function (...args) {
    console.warn("ResourceManager.getRawFile interface mocked in the Previewer." +
      " How this interface works on the Previewer may be different from that on a real device.")
    const len = args.length
    if (len > 0 && typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock, new Uint8Array());
    } else {
      return new Promise((resolve, reject) => {
        resolve(new Uint8Array());
      })
    }
  },
}
export const abilityStageContextClass = class abilityStageContext extends ContextClass {
  constructor() {
    super();
    console.warn('Context.abilityStageContext.constructor interface mocked in the Previewer. How this interface works on' +
      ' the Previewer may be different from that on a real device.');
    this.currentHapModuleInfo = HapModuleInfoMock;
  }
}
export const ExtensionContextClass = class ExtensionContext extends ContextClass {
  constructor() {
    super();
    console.warn('Context.ExtensionContext.constructor interface mocked in the Previewer. How this interface works on' +
      ' the Previewer may be different from that on a real device.');
    this.currentHapModuleInfo = HapModuleInfoMock;
  }
};
export const AbilityResultMock = {
  resultCode: "[PC Preview] unknow resultCode",
}
const ConfigurationMock = {
  language: '[PC preview] unknow language'
}
const PermissionRequestResultMock = {
  permissions: [paramMock.paramStringMock],
  authResults: [paramMock.paramNumberMock]
}
const CallerMock = {
  call: function (...args) {
    console.warn("AbilityContext.Caller.call interface mocked in the Previewer." +
      " How this interface works on the Previewer may be different from that on a real device.")
    return new Promise((resolve, reject) => {
      resolve();
    })
  },
  callWithResult: function (...args) {
    console.warn("AbilityContext.Caller.callWithResult interface mocked in the Previewer." +
      " How this interface works on the Previewer may be different from that on a real device.")
    return new Promise((resolve, reject) => {
      resolve(new MessageParcelClass());
    })
  },
  release: function (...args) {
    console.warn("AbilityContext.Caller.release interface mocked in the Previewer. How this interface works on the Previewer" +
      " may be different from that on a real device.")
  },
  onRelease: function (...args) {
    console.warn("AbilityContext.Caller.onRelease interface mocked in the Previewer. How this interface works on the Previewer" +
      " may be different from that on a real device.")
  },
}
export const AbilityContextClass = class AbilityContext extends ContextClass {
  constructor() {
    super();
    console.warn('Ability.AbilityContext.constructor interface mocked in the Previewer. How this interface works on' +
      ' the Previewer may be different from that on a real device.');
    this.abilityInfo = AbilityInfoMock;
    this.currentHapModuleInfo = HapModuleInfoMock;
    this.config = ConfigurationMock;
    this.startAbility = function (...args) {
      console.warn("Ability.AbilityContext.startAbility interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    };
    this.startAbilityByCall = function (...args) {
      console.warn("Ability.AbilityContext.startAbilityByCall interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      return new Promise((resolve, reject) => {
        resolve(CallerMock);
      })
    };
    this.startAbilityWithAccount = function (...args) {
      console.warn("Ability.AbilityContext.startAbilityWithAccount interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    };
    this.startAbilityForResult = function (...args) {
      console.warn("Ability.AbilityContext.startAbilityForResult interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, AbilityResultMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(AbilityResultMock);
        })
      }
    };
    this.startAbilityForResultWithAccount = function (...args) {
      console.warn("Ability.AbilityContext.startAbilityForResultWithAccount interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, AbilityResultMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(AbilityResultMock);
        })
      }
    };
    this.terminateSelf = function (...args) {
      console.warn("Ability.AbilityContext.terminateSelf interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    };
    this.terminateSelfWithResult = function (...args) {
      console.warn("Ability.AbilityContext.terminateSelfWithResult interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    };
    this.connectAbility = function (...args) {
      console.warn("Ability.AbilityContext.connectAbility interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return paramMock.paramNumberMock
    };
    this.connectAbilityWithAccount = function (...args) {
      console.warn("Ability.AbilityContext.connectAbilityWithAccount interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return paramMock.paramNumberMock
    };
    this.disconnectAbility = function (...args) {
      console.warn("Ability.AbilityContext.disconnectAbility interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    };
    this.setMissionLabel = function (...args) {
      console.warn("Ability.AbilityContext.setMissionLabel interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    };
    this.requestPermissionsFromUser = function (...args) {
      console.warn("Ability.AbilityContext.requestPermissionsFromUser interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, PermissionRequestResultMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(PermissionRequestResultMock);
        })
      }
    };
  }
}
export function mockAbilityContext() {
  return new AbilityContextClass();
}
