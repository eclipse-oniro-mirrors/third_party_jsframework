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

import { paramMock } from "./utils"

export function mockInputMethod() {
  const KeyboardType = {
    labelId: 1,
    iconId: 2,
    language: "[PC Preview] unknow language",
    inputSource: "[PC Preview] unknow inputSource",
    customizedValue: {
      key: 1
    },
    supportsAscii: true
  }
  const KeyboardTypeArry = [
    {
      labelId: 1,
      iconId: 2,
      language: "[PC Preview] unknow language",
      inputSource: "[PC Preview] unknow inputSource",
      customizedValue: {
        key: 1
      },
      supportsAscii: true
    }
  ]
  const InputMethodProperty = {
    methodId: "[PC Preview] unknow method id",
    bundleName: "[PC Preview] unknow bundle name",
    abilityName: "[PC Preview] unknow ability name",
    configurationPage: "[PC Preview] unknow configuration page",
    isSystemIme: true,
    typeCount: 1,
    defaultImeId: 2,
    keyboardTypes: KeyboardTypeArry
  }
  const InputMethodPropertyArry = [
    {
      methodId: "[PC Preview] unknow method id",
      bundleName: "[PC Preview] unknow bundle name",
      abilityName: "[PC Preview] unknow ability name",
      configurationPage: "[PC Preview] unknow configuration page",
      isSystemIme: true,
      typeCount: 1,
      defaultImeId: 2,
      keyboardTypes: KeyboardTypeArry
    }
  ]
  const InputMethodControllerMock = {
    stopInput: function (...args) {
      console.warn("InputMethodController.stopInput interface mocked in the Previewer. How this interface works on" +
        " the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramBooleanMock);
        })
      }
    }
  }
  const InputMethodSettingMock = {
    getCurrentKeyboardType: function (...args) {
      console.warn("InputMethodSetting.getCurrentKeyboardType interface mocked in the Previewer. How this interface works on" +
        " the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, KeyboardType);
      } else {
        return new Promise((resolve, reject) => {
          resolve(KeyboardType);
        })
      }
    },
    listInputMethodEnabled: function (...args) {
      console.warn("InputMethodSetting.listInputMethodEnabled interface mocked in the Previewer. How this interface works on" +
        " the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, InputMethodPropertyArry);
      } else {
        return new Promise((resolve, reject) => {
          resolve(InputMethodPropertyArry);
        })
      }
    },
    listKeyboardType: function (...args) {
      console.warn("InputMethodSetting.listKeyboardType interface mocked in the Previewer. How this interface works on" +
        " the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, KeyboardTypeArry);
      } else {
        return new Promise((resolve, reject) => {
          resolve(KeyboardTypeArry);
        })
      }
    },
    listInputMethod: function (...args) {
      console.warn("InputMethodSetting.listInputMethod interface mocked in the Previewer. How this interface works on" +
        " the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, InputMethodPropertyArry);
      } else {
        return new Promise((resolve, reject) => {
          resolve(InputMethodPropertyArry);
        })
      }
    },
    displayOptionalInputMethod: function (...args) {
      console.warn("InputMethodSetting.displayOptionalInputMethod interface mocked in the Previewer. How this interface works on" +
        " the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
  }
  global.systemplugin.inputMethod = {
    MAX_TYPE_MUN: 128,
    getInputMethodController: function () {
      console.warn("inputmethod.getInputMethodController interface mocked in the Previewer. How this interface works" +
        " on the Previewer may be different from that on a real device.")
      return InputMethodControllerMock;
    },
    getInputMethodSetting: function () {
      console.warn("inputmethod.getInputMethodSetting interface mocked in the Previewer. How this interface works" +
        " on the Previewer may be different from that on a real device.")
      return InputMethodSettingMock;
    }
  }
}