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
import { AbilityContextClass } from "./application/abilityContext"

const WantClass = class Want {
  constructor() {
    console.warn('Ability.Want.constructor interface mocked in the Previewer. How this interface works on' +
      ' the Previewer may be different from that on a real device.');
    this.deviceId = "[PC Preview] unknow deviceId";
    this.bundleName = "[PC Preview] unknow bundleName";
    this.abilityName = "[PC Preview] unknow abilityName";
    this.uri = "[PC Preview] unknow uri";
    this.type = "[PC Preview] unknow type";
    this.flag = "[PC Preview] unknow flag";
    this.action = "[PC Preview] unknow action";
    this.parameters = {};
    this.entities = [paramMock.paramStringMock];
  }
}
export function mockAbility() {
  const AbilityClass = class Ability {
    constructor() {
      console.warn('application.Ability.constructor interface mocked in the Previewer. How this interface works on' +
        ' the Previewer may be different from that on a real device.');
      this.context = new AbilityContextClass();
      this.launchWant = new WantClass();
      this.lastRequestWant = new WantClass();
      this.onCreate = function (...args) {
        console.warn("application.Ability.onCreate interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
      };
      this.onWindowStageCreate = function (...args) {
        console.warn("application.Ability.onWindowStageCreate interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
      };
      this.onWindowStageDestroy = function () {
        console.warn("application.Ability.onWindowStageDestroy interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
      };
      this.onDestroy = function () {
        console.warn("application.Ability.onDestroy interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
      };
      this.onForeground = function () {
        console.warn("application.Ability.onForeground interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
      };
      this.onBackground = function () {
        console.warn("application.Ability.onBackground interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
      };
    }
  }
  return new AbilityClass();
}
