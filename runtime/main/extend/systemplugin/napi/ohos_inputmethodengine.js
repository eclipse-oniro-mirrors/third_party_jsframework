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

const NOTIFY = "[PC Preview] unknow"
const Properties = [
  'ENTER_KEY_TYPE_NEXT',
  'ENTER_KEY_TYPE_PREVIOUS',
  'ENTER_KEY_TYPE_UNSPECIFIED',
  'ENTER_KEY_TYPE_SEARCH',
  'ENTER_KEY_TYPE_GO',
  'ENTER_KEY_TYPE_SEND',
  'ENTER_KEY_TYPE_DONE',
  'DISPLAY_MODE_PART',
  'DISPLAY_MODE_FULL',
  'OPTION_AUTO_CAP_CHARACTERS',
  'OPTION_AUTO_CAP_WORDS',
  'OPTION_AUTO_CAP_SENTENCES',
  'OPTION_NO_FULLSCREEN',
  'OPTION_ASCII',
  'OPTION_NONE',
  'OPTION_MULTI_LINE',
  'FLAG_SINGLE_LINE',
  'FLAG_SELECTING',
  'PATTERN_TEXT',
  'PATTERN_NUMBER',
  'PATTERN_NULL',
  'PATTERN_PHONE',
  'PATTERN_DATETIME',
  'PATTERN_URI',
  'PATTERN_EMAIL',
  'PATTERN_PASSWORD'
]

export function mockInputMethodEngine() {
  const EditingText = {
    textContent: "[PC Preview] unknow textContent",
    offset: 1,
    changedStart: 2,
    changedEnd: 3,
    selectionStart: 4,
    selectionEnd: 5,
    additionalBitFlags: 6,
    prompt: "[PC Preview] unknow prompt"
  }
  const EditingCapability = {
    maxLines: 1,
    maxChars: 2
  }
  const EditorAttribute = {
    inputPattern: 1,
    enterKeyType: 2,
    inputOption: 3
  }
  const RichContent = {
    contentURI: "[PC Preview] unknow contentURI",
    linkURI: "[PC Preview] unknow linkURI",
    mimeTypes: "[PC Preview] unknow mimeTypes",
    detail: "[PC Preview] unknow detail"
  }
  const KeyboardControllerMock = {
    setDisplayMode: function (...args) {
      console.warn("KeyboardController.setDisplayMode interface mocked in the Previewer. How this interface works on" +
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
    getDisplayMode: function (...args) {
      console.warn("KeyboardController.getDisplayMode interface mocked in the Previewer. How this interface works on" +
        " the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramNumberMock);
        })
      }
    },
    hideKeyboard: function (...args) {
      console.warn("KeyboardController.hideKeyboard interface mocked in the Previewer. How this interface works on" +
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
    toNextInputMethod: function (...args) {
      console.warn("KeyboardController.toNextInputMethod interface mocked in the Previewer. How this interface works on" +
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
    getScreenOrientation: function (...args) {
      console.warn("KeyboardController.getScreenOrientation interface mocked in the Previewer. How this interface works on" +
        " the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramNumberMock);
        })
      }
    }
  }
  const TextInputClientMock = {
    getEditorAttribute: function (...args) {
      console.warn("TextInputClientMock.getEditorAttribute interface mocked in the Previewer. How this interface works on" +
        " the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, EditorAttribute);
      } else {
        return new Promise((resolve, reject) => {
          resolve(EditorAttribute);
        })
      }
    },
    insertText: function (...args) {
      console.warn("TextInputClientMock.insertText interface mocked in the Previewer. How this interface works on" +
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
    insertRichContent: function (...args) {
      console.warn("TextInputClientMock.insertRichContent interface mocked in the Previewer. How this interface works on" +
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
    deleteBackward: function (...args) {
      console.warn("TextInputClientMock.deleteBackward interface mocked in the Previewer. How this interface works on" +
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
    deleteForward: function (...args) {
      console.warn("TextInputClientMock.deleteForward interface mocked in the Previewer. How this interface works on" +
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
    getForward: function (...args) {
      console.warn("TextInputClientMock.getForward interface mocked in the Previewer. How this interface works on" +
        " the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramStringMock);
        })
      }
    },
    getBackward: function (...args) {
      console.warn("TextInputClientMock.getBackward interface mocked in the Previewer. How this interface works on" +
        " the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramStringMock);
        })
      }
    },
    getEditingText: function (...args) {
      console.warn("TextInputClientMock.getEditingText interface mocked in the Previewer. How this interface works on" +
        " the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, EditingText);
      } else {
        return new Promise((resolve, reject) => {
          resolve(EditingText);
        })
      }
    },
    sendKeyEvent: function (...args) {
      console.warn("TextInputClientMock.sendKeyEvent interface mocked in the Previewer. How this interface works on" +
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
    sendKeyFunction: function (...args) {
      console.warn("TextInputClientMock.sendKeyFunction interface mocked in the Previewer. How this interface works on" +
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
    selectText: function (...args) {
      console.warn("TextInputClientMock.selectText interface mocked in the Previewer. How this interface works on" +
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
    requestCurrentCursorContext: function (...args) {
      console.warn("TextInputClientMock.requestCurrentCursorContext interface mocked in the Previewer. How this interface works on" +
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
    getAutoCapitalizeMode: function (...args) {
      console.warn("TextInputClientMock.getAutoCapitalizeMode interface mocked in the Previewer. How this interface works on" +
        " the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramNumberMock);
        })
      }
    },
    reviseText: function (...args) {
      console.warn("TextInputClientMock.reviseText interface mocked in the Previewer. How this interface works on" +
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
    markText: function (...args) {
      console.warn("TextInputClientMock.markText interface mocked in the Previewer. How this interface works on" +
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
    unmarkText: function (...args) {
      console.warn("TextInputClientMock.unmarkText interface mocked in the Previewer. How this interface works on" +
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
    replaceMarkedText: function (...args) {
      console.warn("TextInputClientMock.replaceMarkedText interface mocked in the Previewer. How this interface works on" +
        " the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    }
  }
  const InputMethodEngineMock = {
    on: function (...args) {
      console.warn("InputMethodEngine.on interface mocked in the Previewer. How this interface works on" +
        " the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        if (args[0] == 'configurationUpdate') {
          args[len - 1].call(this, paramMock.paramObjectMock);
        } else if (args[0] == 'inputStart') {
          args[len - 1].call(this, KeyboardControllerMock, TextInputClientMock);
        } else if (args[0] == 'inputStop' || args[0] == 'keyboardShow' || args[0] == 'directionChange' || args[0] == 'keyboardHide') {
          args[len - 1].call(this);
        }
      }
    },
    off: function (...args) {
      console.warn("InputMethodEngine.off interface mocked in the Previewer. How this interface works on" +
        " the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        if (args[0] == 'configurationUpdate') {
          args[len - 1].call(this, paramMock.paramObjectMock);
        } else if (args[0] == 'inputStart') {
          args[len - 1].call(this, KeyboardControllerMock, TextInputClientMock);
        } else if (args[0] == 'inputStop' || args[0] == 'keyboardShow' || args[0] == 'directionChange' || args[0] == 'keyboardHide') {
          args[len - 1].call(this);
        }
      }
    }
  }
  const KeyboardDelegateMock = {
    on: function (...args) {
      console.warn("KeyboardDelegate.on interface mocked in the Previewer. How this interface works on" +
        " the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        if (args[0] == 'keyDown' || args[0] == 'keyUp') {
          args[len - 1].call(this, paramMock.paramObjectMock);
        } else if (args[0] == 'selectionChange') {
          args[len - 1].call(this, paramMock.paramNumberMock, paramMock.paramNumberMock, paramMock.paramNumberMock, paramMock.paramNumberMock);
        } else if (args[0] == 'cursorContextChange') {
          args[len - 1].call(this, paramMock.paramNumberMock, paramMock.paramNumberMock, paramMock.paramNumberMock);
        } else if (args[0] == 'textChange') {
          args[len - 1].call(this, paramMock.paramStringMock);
        }
      }
    },
    off: function (...args) {
      console.warn("KeyboardDelegate.off interface mocked in the Previewer. How this interface works on" +
        " the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        if (args[0] == 'keyDown' || args[0] == 'keyUp') {
          args[len - 1].call(this, paramMock.paramObjectMock);
        } else if (args[0] == 'selectionChange') {
          args[len - 1].call(this, paramMock.paramNumberMock, paramMock.paramNumberMock, paramMock.paramNumberMock, paramMock.paramNumberMock);
        } else if (args[0] == 'cursorContextChange') {
          args[len - 1].call(this, paramMock.paramNumberMock, paramMock.paramNumberMock, paramMock.paramNumberMock);
        } else if (args[0] == 'textChange') {
          args[len - 1].call(this, paramMock.paramStringMock);
        }
      }
    },
  }
  const inputMethodEngine = {
    getInputMethodEngine: function () {
      console.warn("inputMethodEngine.getInputMethodEngine interface mocked in the Previewer. How this interface works" +
        " on the Previewer may be different from that on a real device.")
      return InputMethodEngineMock;
    },
    createKeyboardDelegate: function () {
      console.warn("inputMethodEngine.createKeyboardDelegate interface mocked in the Previewer. How this interface works" +
        " on the Previewer may be different from that on a real device.")
      return KeyboardDelegateMock;
    }
  }

  for (let Property of Properties) {
    inputMethodEngine[Property] = NOTIFY + " " + Property
  }
  return inputMethodEngine
}