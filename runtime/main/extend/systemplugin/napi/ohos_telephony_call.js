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

export function mockCall() {
  const CallWaitingStatus = "[PC Preview] unknow CallWaitingStatus";
  const RestrictionStatus = "[PC Preview] unknow RestrictionStatus";
  const ImsCallMode = "[PC Preview] unknow ImsCallMode";
  const AudioDevice = "[PC Preview] unknow AudioDevice";
  const CallRestrictionType = "[PC Preview] unknow CallRestrictionType";
  const CallTransferType = "[PC Preview] unknow CallTransferType";
  const CallTransferSettingType = "[PC Preview] unknow CallTransferSettingType";
  const ConferenceState = "[PC Preview] unknow ConferenceState";
  const CallType = "[PC Preview] unknow CallType";
  const VideoStateType = "[PC Preview] unknow VideoStateType";
  const DetailedCallState = "[PC Preview] unknow DetailedCallState";
  const CallRestrictionMode = "[PC Preview] unknow CallRestrictionMode";
  const CallAbilityEventId = "[PC Preview] unknow CallAbilityEventId";
  const DialScene = "[PC Preview] unknow DialScene";
  const DialType = "[PC Preview] unknow DialType";
  const CallState = "[PC Preview] unknow CallState";
  const TransferStatus = "[PC Preview] unknow TransferStatus";
  const DisconnectedDetails = "[PC Preview] unknow DisconnectedDetails";
  const EmergencyNumberOptions = {
    slotId: "[PC Preview] unknow slotId"
  }
  const CallTransferResult = {
    status: "[PC Preview] unknow status",
    number: "[PC Preview] unknow number",
  }
  const CallTransferInfo = {
    transferNum: "[PC Preview] unknow transferNum",
    type: CallTransferType,
    settingType: CallTransferSettingType,
  }
  const NumberFormatOptions = {
    countryCode: "[PC Preview] unknow countryCode"
  }
  const CallRestrictionInfo = {
    type: CallRestrictionType,
    password: "[PC Preview] unknow password",
    mode: CallRestrictionMode,
  }
  const CallEventOptions = {
    eventId: CallAbilityEventId
  }
  const RejectMessageOptions = {
    messageContent: "[PC Preview] unknow messageContent"
  }
  const CallAttributeOptions = {
    accountNumber: "[PC Preview] unknow accountNumber",
    speakerphoneOn: "[PC Preview] unknow speakerphoneOn",
    accountId: "[PC Preview] unknow accountId",
    videoState: "[PC Preview] unknow videoState",
    startTime: "[PC Preview] unknow startTime",
    isEcc: "[PC Preview] unknow isEcc",
    callType: "[PC Preview] unknow callType",
    callId: "[PC Preview] unknow callId",
    callState: "[PC Preview] unknow callState",
    conferenceState: "[PC Preview] unknow conferenceState"
  }
  const DialOptions = {
    extras: "[PC Preview] unknow extras",
    accountId: "[PC Preview] unknow accountId",
    videoState: VideoStateType,
    dialScene: DialScene,
    dialType: DialType,
  }
  const call = {
    dial: function (...args) {
      console.warn("telephony.call.dial interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    makeCall: function (...args) {
      console.warn("telephony.call.makeCall interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    hasCall: function (...args) {
      console.warn("telephony.call.hasCall interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    getCallState: function (...args) {
      console.warn("telephony.call.getCallState interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, CallState);
      } else {
        return new Promise((resolve, reject) => {
          resolve(CallState);
        })
      }
    },
    displayCallScreen: function (...args) {
      console.warn("telephony.call.displayCallScreen interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    muteRinger: function (...args) {
      console.warn("telephony.call.muteRinger interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    hasVoiceCapability: function () {
      console.warn("telephony.call.hasVoiceCapability interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    isVideoCallingEnabled: function (...args) {
      console.warn("telephony.call.isVideoCallingEnabled interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    inputDialerSpecialCode: function (...args) {
      console.warn("telephony.call.inputDialerSpecialCode interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    isHacEnabled: function (...args) {
      console.warn("telephony.call.isHacEnabled interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    isEmergencyPhoneNumber: function (...args) {
      console.warn("telephony.call.isEmergencyPhoneNumber interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    formatPhoneNumber: function (...args) {
      console.warn("telephony.call.formatPhoneNumber interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    formatPhoneNumberToE164: function (...args) {
      console.warn("telephony.call.formatPhoneNumberToE164 interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    comparePhoneNumbers: function (...args) {
      console.warn("telephony.call.comparePhoneNumbers interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    getCallerIndex: function (...args) {
      console.warn("telephony.call.getCallerIndex interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    getCountryCodeFromDbNumber: function (...args) {
      console.warn("telephony.call.getCountryCodeFromDbNumber interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    getIntlPrefixAndCountryCodeLen: function (...args) {
      console.warn("telephony.call.getIntlPrefixAndCountryCodeLen interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    answer: function (...args) {
      console.warn("telephony.call.answer interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    hangup: function (...args) {
      console.warn("telephony.call.hangup interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    reject: function (...args) {
      console.warn("telephony.call.reject interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    holdCall: function (...args) {
      console.warn("telephony.call.holdCall interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    unHoldCall: function (...args) {
      console.warn("telephony.call.unHoldCall interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    switchCall: function (...args) {
      console.warn("telephony.call.switchCall interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    combineConference: function (...args) {
      console.warn("telephony.call.combineConference interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    getMainCallId: function (...args) {
      console.warn("telephony.call.getMainCallId interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    getSubCallIdList: function (...args) {
      console.warn("telephony.call.getSubCallIdList interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramArrayMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramArrayMock);
        })
      }
    },
    getCallIdListForConference: function (...args) {
      console.warn("telephony.call.getCallIdListForConference interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramArrayMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramArrayMock);
        })
      }
    },
    getCallWaitingStatus: function (...args) {
      console.warn("telephony.call.getCallWaitingStatus interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, CallWaitingStatus);
      } else {
        return new Promise((resolve, reject) => {
          resolve(CallWaitingStatus);
        })
      }
    },
    setCallWaiting: function (...args) {
      console.warn("telephony.call.setCallWaiting interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    startDTMF: function (...args) {
      console.warn("telephony.call.startDTMF interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    stopDTMF: function (...args) {
      console.warn("telephony.call.stopDTMF interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    isInEmergencyCall: function (...args) {
      console.warn("telephony.call.isInEmergencyCall interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    on: function (...args) {
      console.warn("telephony.call.on interface mocked in the Previewer. How this interface works on the Previewer may " +
        "be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        if (args[0] == 'callDetailsChange') {
          args[len - 1].call(this, CallAttributeOptions);
        } else if (args[0] == 'callEventChange') {
          args[len - 1].call(this, CallEventOptions);
        } else if (args[0] == 'callDisconnectedCause') {
          args[len - 1].call(this, DisconnectedDetails);
        }
      }
    },
    off: function (...args) {
      console.warn("telephony.call.off interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        if (args[0] == 'callDetailsChange') {
          args[len - 1].call(this, CallAttributeOptions);
        } else if (args[0] == 'callEventChange') {
          args[len - 1].call(this, CallEventOptions);
        } else if (args[0] == 'callDisconnectedCause') {
          args[len - 1].call(this, DisconnectedDetails);
        }
      }
    },
    cancelMuted: function (...args) {
      console.warn("telephony.call.cancelMuted interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    joinConference: function (...args) {
      console.warn("telephony.call.joinConference interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    disableImsSwitch: function (...args) {
      console.warn("telephony.call.disableImsSwitch interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    enableImsSwitch: function (...args) {
      console.warn("telephony.call.enableImsSwitch interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    updateImsCallMode: function (...args) {
      console.warn("telephony.call.updateImsCallMode interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    isNewCallAllowed: function (...args) {
      console.warn("telephony.call.isNewCallAllowed interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    separateConference: function (...args) {
      console.warn("telephony.call.separateConference interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    getCallRestrictionStatus: function (...args) {
      console.warn("telephony.call.getCallRestrictionStatus interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, RestrictionStatus);
      } else {
        return new Promise((resolve, reject) => {
          resolve(RestrictionStatus);
        })
      }
    },
    setCallRestriction: function (...args) {
      console.warn("telephony.call.setCallRestriction interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    setCallTransfer: function (...args) {
      console.warn("telephony.call.setCallTransfer interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    getCallTransferInfo: function (...args) {
      console.warn("telephony.call.getCallTransferInfo interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, CallTransferResult);
      } else {
        return new Promise((resolve, reject) => {
          resolve(CallTransferResult);
        })
      }
    },
    setCallTransferInfo: function (...args) {
      console.warn("telephony.call.setCallTransferInfo interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    isRinging: function (...args) {
      console.warn("telephony.call.isRinging interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    isImsSwitchEnabled: function (...args) {
      console.warn("telephony.call.isImsSwitchEnabled interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    setMuted: function (...args) {
      console.warn("telephony.call.setMuted interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    setAudioDevice: function (...args) {
      console.warn("telephony.call.setAudioDevice interface mocked in the Previewer. How this interface works on the Previewer may" +
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
  return call
}