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

export function mockSMS() {
  const SimShortMessage = {
    shortMessage: "[PC Preview] unknow shortMessage",
    simMessageStatus: "[PC Preview] unknow simMessageStatus",
    indexOnSim: "[PC Preview] unknow indexOnSim"
  }
  const MmsInformation = {
    messageType: MessageType,
    mmsType: "[PC Preview] unknow mmsType",
    attachment: [MmsAttachment]
  }
  const MessageType = "[PC Preview] unknow MessageType";
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
  const MmsRetrieveConf = {
    transactionId: "[PC Preview] unknow transactionId",
    messageId: "[PC Preview] unknow messageId",
    date: "[PC Preview] unknow date",
    contentType: "[PC Preview] unknow contentType",
    to: [MmsAddress],
    version: MmsVersionType,
    from: MmsAddress,
    cc: [MmsAddress],
    subject: ["[PC Preview] unknow subject"],
    priority: MmsPriorityType,
    deliveryReport: "[PC Preview] unknow deliveryReport",
    readReport: "[PC Preview] unknow readReport",
    retrieveStatus: "[PC Preview] unknow retrieveStatus",
    retrieveText: ["[PC Preview] unknow retrieveText"],
  }
  const MmsAcknowledgeInd = {
    transactionId: "[PC Preview] unknow transactionId",
    version: MmsVersionType,
    reportAllowed: ReportType,
  }
  const MmsDeliveryInd = {
    transactionId: "[PC Preview] unknow transactionId",
    date: "[PC Preview] unknow date",
    to: [MmsAddress],
    status: "[PC Preview] unknow status",
    version: MmsVersionType,
  }
  const MmsReadRecInd = {
    version: MmsVersionType,
    messageId: "[PC Preview] unknow messageId",
    to: [MmsAddress],
    from: MmsAddress,
    readStatus: "[PC Preview] unknow readStatus",
    date: "[PC Preview] unknow date",
  }
  const MmsAttachment = {
    contentId: "[PC Preview] unknow contentId",
    contentLocation: "[PC Preview] unknow contentLocation",
    contentDisposition: DispositionType,
    contentTransferEncoding: "[PC Preview] unknow contentTransferEncoding",
    contentType: "[PC Preview] unknow contentType",
    isSmil: "[PC Preview] unknow isSmil",
    path: "[PC Preview] unknow path",
    inBuff: "[PC Preview] unknow inBuff",
    fileName: "[PC Preview] unknow fileName",
    charset: MmsCharSets,
  }
  const MmsReadOrigInd = {
    version: MmsVersionType,
    messageId: "[PC Preview] unknow messageId",
    to: [MmsAddress],
    from: MmsAddress,
    date: "[PC Preview] unknow date",
    readStatus: "[PC Preview] unknow readStatus",
  }
  const MmsRespInd = {
    transactionId: "[PC Preview] unknow transactionId",
    status: "[PC Preview] unknow transactionId",
    version: MmsVersionType,
    reportAllowed: ReportType,
  }
  const CBConfigOptions = {
    slotId: "[PC Preview] unknow slotId",
    enable: "[PC Preview] unknow enable",
    startMessageId: "[PC Preview] unknow startMessageId",
    endMessageId: "[PC Preview] unknow endMessageId",
    ranType: RanType
  }
  const SimMessageOptions = {
    slotId: "[PC Preview] unknow slotId",
    smsc: "[PC Preview] unknow smsc",
    pdu: "[PC Preview] unknow pdu",
    status: SimMessageStatus,
  }
  const UpdateSimMessageOptions = {
    slotId: "[PC Preview] unknow slotId",
    msgIndex: "[PC Preview] unknow msgIndex",
    newStatus: SimMessageStatus,
    pdu: "[PC Preview] unknow pdu",
    smsc: "[PC Preview] unknow smsc",
  }
  const SendMessageOptions = {
    slotId: "[PC Preview] unknow slotId",
    destinationHost: "[PC Preview] unknow destinationHost",
    serviceCenter: "[PC Preview] unknow serviceCenter",
    content: "[PC Preview] unknow content",
    destinationPort: "[PC Preview] unknow destinationPort",
    sendCallback: ISendShortMessageCallback,
    deliveryCallback: IDeliveryShortMessageCallback,
  }
  const IDeliveryShortMessageCallback = {
    pdu: "[PC Preview] unknow pdu",
  }
  const ISendShortMessageCallback = {
    result: SendSmsResult,
    url: "[PC Preview] unknow url",
    isLastPart: "[PC Preview] unknow isLastPart",
  }
  const SendSmsResult = "[PC Preview] unknow SendSmsResult";
  const ShortMessageClass = "[PC Preview] unknow ShortMessageClass";
  const RanType = "[PC Preview] unknow RanType";
  const SimMessageStatus = "[PC Preview] unknow SimMessageStatus";
  const DispositionType = "[PC Preview] unknow DispositionType";
  const MmsCharSets = "[PC Preview] unknow MmsCharSets";
  const ReportType = "[PC Preview] unknow ReportType";
  const MmsNotificationInd = {
    transactionId: "[PC Preview] unknow transactionId",
    messageClass: "[PC Preview] unknow messageClass",
    messageSize: "[PC Preview] unknow messageSize",
    expiry: "[PC Preview] unknow expiry",
    contentLocation: "[PC Preview] unknow contentLocation",
    version: MmsVersionType,
    from: MmsAddress,
    subject: "[PC Preview] unknow subject",
    deliveryReport: ["[PC Preview] unknow deliveryReport"],
    contentClass: "[PC Preview] unknow contentClass",
  }
  const MmsAddress = {
    address: "[PC Preview] unknow address",
    charset: MmsCharSets,
  }
  const MmsVersionType = "[PC Preview] unknow MmsVersionType";
  const MmsPriorityType = "[PC Preview] unknow MmsPriorityType";
  const MmsSendReq = {
    from: MmsAddress,
    transactionId: "[PC Preview] unknow transactionId",
    contentType: "[PC Preview] unknow contentType",
    version: MmsVersionType,
    to: "[PC Preview] unknow to",
    date: "[PC Preview] unknow date",
    cc: "[PC Preview] unknow cc",
    bcc: "[PC Preview] unknow bcc",
    subject: ["[PC Preview] unknow subject"],
    messageClass: "[PC Preview] unknow messageClass",
    expiry: "[PC Preview] unknow expiry",
    priority: MmsPriorityType,
    senderVisibility: "[PC Preview] unknow senderVisibility",
    deliveryReport: ["[PC Preview] unknow deliveryReport"],
    readReport: "[PC Preview] unknow readReport",
    responseState: "[PC Preview] unknow responseState",
    transactionId: "[PC Preview] unknow transactionId",
    version: "[PC Preview] unknow version",
    messageId: "[PC Preview] unknow messageId",
  }
  const MmsSendConf = {
    responseState: "[PC Preview] unknow responseState",
    transactionId: "[PC Preview] unknow transactionId",
    version: MmsVersionType,
    messageId: "[PC Preview] unknow messageId",
  }

  const SmsSegmentsInfo = {
    splitCount: "[PC Preview] unknow splitCount",
    encodeCount: "[PC Preview] unknow encodeCount",
    encodeCountRemaining: "[PC Preview] unknow encodeCountRemaining",
    scheme: SmsEncodingScheme,
  }
  const SmsEncodingScheme = "[PC Preview] unknow SmsEncodingScheme";
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
    getSmsSegmentsInfo: function (...args) {
      console.warn("telephony.sms.getSmsSegmentsInfo interface mocked in the Previewer. How this interface works on the Previewer may" +
      " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, SmsSegmentsInfo);
      } else {
        return new Promise((resolve, reject) => {
          resolve(SmsSegmentsInfo);
        })
      }
    },
    isImsSmsSupported: function (...args) {
      console.warn("telephony.sms.isImsSmsSupported interface mocked in the Previewer. How this interface works on the Previewer may" +
      " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.paramBooleanMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramBooleanMock);
        })
      }
    },
    getImsShortMessageFormat: function (...args) {
      console.warn("telephony.sms.getImsShortMessageFormat interface mocked in the Previewer. How this interface works on the Previewer may" +
      " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.paramStringMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramStringMock);
        })
      }
    },
    decodeMms: function (...args) {
      console.warn("telephony.sms.decodeMms interface mocked in the Previewer. How this interface works on the Previewer may" +
      " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, MmsInformation);
      } else {
        return new Promise((resolve, reject) => {
          resolve(MmsInformation);
        })
      }
    },
    encodeMms: function (...args) {
      console.warn("telephony.sms.encodeMms interface mocked in the Previewer. How this interface works on the Previewer may" +
      " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.paramArrayMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramArrayMock);
        })
      }
    },
    isImsSmsSuppo: function (...args) {
      console.warn("telephony.sms.isImsSmsSuppo interface mocked in the Previewer. How this interface works on the Previewer may" +
      " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramBooleanMock);
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