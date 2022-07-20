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
    },
    addHtmlRecord: function () {
      console.warn("PasteData.addHtmlRecord interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    addWantRecord: function () {
      console.warn("PasteData.addWantRecord interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    addRecord: function () {
      console.warn("PasteData.addRecord interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    addTextRecord: function () {
      console.warn("PasteData.addTextRecord interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    addUriRecord: function () {
      console.warn("PasteData.addUriRecord interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    getMimeTypes: function () {
      console.warn("PasteData.getMimeTypes interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.");
      let mimeTypes = new Array();
      mimeTypes.push('[PC preview] unknow MIMETYPE_TEXT_HTML');
      mimeTypes.push('[PC preview] unknow MIMETYPE_TEXT_PLAIN');
      return mimeTypes;
    },
    getPrimaryHtml: function () {
      console.warn("PasteData.getPrimaryHtml interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return "[PC Preview] unknow getPrimaryHtml"
    },
    getPrimaryWant: function () {
      console.warn("PasteData.getPrimaryWant interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return "[PC Preview] unknow getPrimaryWant"
    },
    getPrimaryMimeType: function () {
      console.warn("PasteData.getPrimaryMimeType interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return "[PC Preview] unknow getPrimaryMimeType"
    },
    getPrimaryUri: function () {
      console.warn("PasteData.getPrimaryUri interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return "[PC Preview] unknow getPrimaryUri"
    },
    getProperty: function () {
      console.warn("PasteData.getProperty interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return PasteDataPropertyMock;
    },
    getRecordAt: function () {
      console.warn("PasteData.getRecordAt interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return PasteDataRecordMock;
    },
    getRecordCount: function () {
      console.warn("PasteData.getRecordCount interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return "[PC Preview] unknow getRecordCount"
    },
    getTag: function () {
      console.warn("PasteData.getTag interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return "[PC Preview] unknow getTag"
    },
    hasMimeType: function () {
      console.warn("PasteData.hasMimeType interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return "[PC Preview] unknow hasMimeType"
    },
    removeRecordAt: function () {
      console.warn("PasteData.removeRecordAt interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return "[PC Preview] unknow removeRecordAt"
    },
    replaceRecordAt: function () {
      console.warn("PasteData.replaceRecordAt interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return "[PC Preview] unknow replaceRecordAt"
    }
  }
  const PasteDataRecordMock = {
    htmlText: '[PC preview] unknow htmlText',
    want: '[PC preview] unknow want',
    mimeType: '[PC preview] unknow mimeType',
    plainText: '[PC preview] unknow plainText',
    uri: '[PC preview] unknow uri',
    convertToText: function (...args) {
      console.warn("PasteDataRecord.convertToText interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramStringMock);
        })
      }
    }
  }
  const PasteDataPropertyMock = {
    additions: '[PC preview] unknow additions',
    mimeTypes: new Array('[PC preview] unknow MIMETYPE_TEXT_PLAIN'),
    tag: '[PC preview] unknow tag',
    timestamp: '[PC preview] unknow timestamp',
    localOnly: '[PC preview] unknow localOnly',
  }
  const SystemPasteboardMock = {
    on: function (...args) {
      console.warn("SystemPasteboard.on interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.");
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        if (args[0] == 'update') {
          args[len - 1].call(this);
        }
      }
    },
    off: function (...args) {
      console.warn("SystemPasteboard.off interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.");
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        if (args[0] == 'update') {
          args[len - 1].call(this);
        }
      }
    },
    clear: function (...args) {
      console.warn("SystemPasteboard.clear interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    hasPasteData: function (...args) {
      console.warn("SystemPasteboard.hasPasteData interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramBooleanMock);
        })
      }
    },
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
    MAX_RECORD_NUM: '[PC preview] unknow MAX_RECORD_NUM',
    MIMETYPE_TEXT_HTML: '[PC preview] unknow MIMETYPE_TEXT_HTML',
    MIMETYPE_TEXT_WANT: '[PC preview] unknow MIMETYPE_TEXT_WANT',
    MIMETYPE_TEXT_PLAIN: '[PC preview] unknow MIMETYPE_TEXT_PLAIN',
    MIMETYPE_TEXT_URI: '[PC preview] unknow MIMETYPE_TEXT_URI',
    createPlainTextData: function () {
      console.warn("pasteboard.createPlainTextData interface mocked in the Previewer. How this interface works on" +
        " the Previewer may be different from that on a real device.")
      return PasteDataMock;
    },
    createHtmlData: function () {
      console.warn("pasteboard.createHtmlData interface mocked in the Previewer. How this interface works on" +
        " the Previewer may be different from that on a real device.")
      return PasteDataMock;
    },
    createUriData: function () {
      console.warn("pasteboard.createUriData interface mocked in the Previewer. How this interface works on" +
        " the Previewer may be different from that on a real device.")
      return PasteDataMock;
    },
    createWantData: function () {
      console.warn("pasteboard.createWantData interface mocked in the Previewer. How this interface works on" +
        " the Previewer may be different from that on a real device.")
      return PasteDataMock;
    },
    createHtmlTextRecord: function () {
      console.warn("pasteboard.createHtmlTextRecord interface mocked in the Previewer. How this interface works on" +
        " the Previewer may be different from that on a real device.")
      return PasteDataRecordMock;
    },
    createWantRecord: function () {
      console.warn("pasteboard.createWantRecord interface mocked in the Previewer. How this interface works on" +
        " the Previewer may be different from that on a real device.")
      return PasteDataRecordMock;
    },
    createUriRecord: function () {
      console.warn("pasteboard.createUriRecord interface mocked in the Previewer. How this interface works on" +
        " the Previewer may be different from that on a real device.")
      return PasteDataRecordMock;
    },
    createPlainTextRecord: function () {
      console.warn("pasteboard.createPlainTextRecord interface mocked in the Previewer. How this interface works on" +
        " the Previewer may be different from that on a real device.")
      return PasteDataRecordMock;
    },
    getSystemPasteboard: function () {
      console.warn("pasteboard.getSystemPasteboard interface mocked in the Previewer. How this interface works on" +
        " the Previewer may be different from that on a real device.")
      return SystemPasteboardMock;
    }
  }
  return pasteboard
}
