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

export function mockSMS() {
  const SimShortMessage = {
    shortMessage: "[PC Preview] unknow shortMessage",
    simMessageStatus: "[PC Preview] unknow simMessageStatus",
    indexOnSim: "[PC Preview] unknow indexOnSim"
  }
  const ShortMessage = {
    visibleMessageBody: "[PC Preview] unknow visibleMessageBody",
    visibleRawAddress: "[PC Preview] unknow visibleRawAddress",
    messageClass: "[PC Preview] unknow messageClass",
    protocolId: "[PC Preview] unknow protocolId",
    scAddress: "[PC Preview] unknow scAddress",
    scTimestamp: "[PC Preview] unknow scTimestamp",
    isReplaceMessage: "[PC Preview] unknow isReplaceMessage",
    hasReplyPath: "[PC Preview] unknow hasReplyPath",
    pdu: ["[PC Preview] unknow pdu"],
    status: "[PC Preview] unknow status",
    isSmsStatusReportMessage: "[PC Preview] unknow isSmsStatusReportMessage",
    emailAddress: "[PC Preview] unknow emailAddress",
    emailMessageBody: "[PC Preview] unknow emailMessageBody",
    userRawData: ["[PC Preview] unknow userRawData"],
    isEmailMessage: "[PC Preview] unknow isEmailMessage",
  }
  const sms = {
    splitMessage: function (...args) {
      console.warn("telephony.sms.splitMessage interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, [paramMock.paramStringMock]);
      } else {
        return new Promise((resolve, reject) => {
          resolve([paramMock.paramStringMock]);
        })
      }
    },
    createMessage: function (...args) {
      console.warn("telephony.sms.createMessage interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, ShortMessage);
      } else {
        return new Promise((resolve, reject) => {
          resolve(ShortMessage);
        })
      }
    },
    sendMessage: function (...args) {
      console.warn("telephony.sms.sendMessage interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
    },
    setDefaultSmsSlotId: function (...args) {
      console.warn("telephony.sms.setDefaultSmsSlotId interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    getDefaultSmsSlotId: function (...args) {
      console.warn("telephony.sms.getDefaultSmsSlotId interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramNumberMock);
        })
      }
    },
    setSmscAddr: function (...args) {
      console.warn("telephony.sms.setSmscAddr interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    getSmscAddr: function (...args) {
      console.warn("telephony.sms.getSmscAddr interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramStringMock);
        })
      }
    },
    hasSmsCapability: function () {
      console.warn("telephony.sms.hasSmsCapability interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    addSimMessage: function (...args) {
      console.warn("telephony.sms.addSimMessage interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    delSimMessage: function (...args) {
      console.warn("telephony.sms.delSimMessage interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    updateSimMessage: function (...args) {
      console.warn("telephony.sms.updateSimMessage interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    getAllSimMessages: function (...args) {
      console.warn("telephony.sms.getAllSimMessages interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, [SimShortMessage]);
      } else {
        return new Promise((resolve, reject) => {
          resolve([SimShortMessage]);
        })
      }
    },
    setCBConfig: function (...args) {
      console.warn("telephony.sms.setCBConfig interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
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
  return sms
}