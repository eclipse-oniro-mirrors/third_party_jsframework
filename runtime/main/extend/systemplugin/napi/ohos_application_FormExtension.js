/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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
import { ExtensionContextClass } from "./application/abilityContext"

export function mockFormExtension() {
  const formBindingDataMock = {
    data: paramMock.paramObjectMock
  }
  const formExtensionContextClass = class formExtensionContext extends ExtensionContextClass {
    constructor() {
      super();
      console.warn('formExtension.formExtensionContext.constructor interface mocked in the Previewer. How this interface works on' +
        ' the Previewer may be different from that on a real device.');
      this.updateForm = function (...args) {
        console.warn("formExtension.formExtensionContext.updateForm interface mocked in the Previewer." +
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
      this.startAbility = function (...args) {
        console.warn("formExtension.formExtensionContext.startAbility interface mocked in the Previewer." +
          " How this interface works on the Previewer may be different from that on a real device.");
        const len = args.length;
        if (len > 0 && typeof args[len - 1] === 'function') {
            args[len - 1].call(this, paramMock.businessErrorMock);
          } else {
            return new Promise((resolve, reject) => {
              resolve();
            })
          }
      };
    }
  }
  const formExtensionClass = class formExtension {
    constructor() {
      console.warn('application.formExtension.constructor interface mocked in the Previewer. How this interface works on' +
        ' the Previewer may be different from that on a real device.');
      this.context = new formExtensionContextClass();
      this.onCreate = function (...args) {
        console.warn("application.formExtension.onCreate interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
        return formBindingDataMock
      };
      this.onCastToNormal = function (...args) {
        console.warn("application.formExtension.onCastToNormal interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
      };
      this.onUpdate = function (...args) {
        console.warn("application.formExtension.onUpdate interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
      };
      this.onVisibilityChange = function (...args) {
        console.warn("application.formExtension.onVisibilityChange interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
      };
      this.onEvent = function (...args) {
        console.warn("application.formExtension.onEvent interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
      };
      this.onDestroy = function (...args) {
        console.warn("application.formExtension.onDestroy interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
      };
    }
  }
  return formExtensionClass;
}