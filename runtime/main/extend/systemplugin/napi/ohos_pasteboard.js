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

export function mockPasteBoard() {
  const PasteDataMock = {
    getPrimaryText: function () {
      console.warn("PasteData.getPrimaryText interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return "[PC Preview] unknow primarytext"
    }
  }
  const SystemPasteboardMock = {
    getPasteData: function (...args) {
      console.warn("SystemPasteboard.getPasteData interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, PasteDataMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(PasteDataMock);
        })
      }
    },
    setPasteData: function (...args) {
      console.warn("SystemPasteboard.setPasteData interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
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
  const pasteboard = {
    createPlainTextData: function () {
      console.warn("pasteboard.createPlainTextData interface mocked in the Previewer. How this interface works on" +
        " the Previewer may be different from that on a real device.")
      return PasteDataMock;
    },
    getSystemPasteboard: function () {
      console.warn("pasteboard.getSystemPasteboard interface mocked in the Previewer. How this interface works on" +
        " the Previewer may be different from that on a real device.")
      return SystemPasteboardMock;
    }
  }
  return pasteboard
}
