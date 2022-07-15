/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

export const AbilityState = {
  INITIAL: 0,
  FOREGROUND: 9,
  BACKGROUND: 10,
  FOREGROUNDING: 11,
  BACKGROUNDING: 12
}
export function mockAbilityManager() {
  const AbilityRunningInfoMock = {
    ability: ElementNameMock,
    pid: '[PC preview] unknow pid',
    uid: '[PC preview] unknow uid',
    processName: '[PC preview] unknow processName',
    startTime: '[PC preview] unknow startTime',
    AbilityStateMock: '[PC preview] unknow abilityStateMock'
  }
  const ElementNameMock = {
    deviceId: '[PC preview] unknow deviceId',
    bundleName: '[PC preview] unknow bundleName',
    abilityName: '[PC preview] unknow abilityName',
    uri: '[PC preview] unknow uri',
    shortName: '[PC preview] unknow shortName'
  }
  const ExtensionRunningInfoMock = {
    extension: ElementNameMock,
    pid: '[PC preview] unknow pid',
    uid: '[PC preview] unknow uid',
    processName: '[PC preview] unknow processName',
    startTime: '[PC preview] unknow startTime',
    clientPackage: [paramMock.paramStringMock],
    ExtensionAbilityTypeMock: '[PC preview] unknow ExtensionAbilityTypeMock',
  }
  const elementName = {
    deviceId: "[PC preview] unknown deviceId",
    bundleName: "[PC preview] unknown bundleName",
    abilityName: "[PC preview] unknown abilityName",
    uri: "[PC preview] unknown uri",
    shortName: "[PC preview] unknown shortName",
    moduleName: "[PC preview] unknown moduleName",
  }
  const abilityManager = {
    updateConfiguration: function (...args) {
      console.warn('abilityManager.updateConfiguration interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve) => {
          resolve();
        });
      }
    },
    getAbilityRunningInfos: function (...args) {
      console.warn('abilityManager.getAbilityRunningInfos interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, [AbilityRunningInfoMock]);
      } else {
        return new Promise((resolve) => {
          resolve([AbilityRunningInfoMock]);
        });
      }
    },
    getExtensionRunningInfos: function (...args) {
      console.warn('abilityManager.getExtensionRunningInfos interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, [ExtensionRunningInfoMock]);
      } else {
        return new Promise((resolve) => {
          resolve([ExtensionRunningInfoMock]);
        });
      }
    },
    getTopAbility: function (...args) {
      console.warn('abilityManager.getTopAbility interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, elementName);
      } else {
        return new Promise((resolve) => {
          resolve(elementName);
        });
      }
    }
  }
  return abilityManager
}