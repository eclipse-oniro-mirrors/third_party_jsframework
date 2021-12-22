import { paramMock } from "./utils"

const CallState = "[PC Preview] unknow CallState";
export function mockCall() {
    const CallWaitingStatus = "[PC Preview] unknow CallWaitingStatus";
    const RestrictionStatus = "[PC Preview] unknow RestrictionStatus";
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
    const CallTransferResult = {
        status: "[PC Preview] unknow status",
        number: "[PC Preview] unknow number",
    }
    global.systemplugin.telephony = global.systemplugin.telephony || {}
    global.systemplugin.telephony.call = {
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
                    args[len - 1].call(this, paramMock.paramObjectMock);
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
                    args[len - 1].call(this, paramMock.paramObjectMock);
                }
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
}
export function mockData() {
    global.systemplugin.telephony.data = {
        getDefaultCellularDataSlotId: function (...args) {
            console.warn("telephony.data.getDefaultCellularDataSlotId interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        setDefaultCellularDataSlotId: function (...args) {
            console.warn("telephony.data.setDefaultCellularDataSlotId interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        getCellularDataFlowType: function (...args) {
            console.warn("telephony.data.getCellularDataFlowType interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        getCellularDataState: function (...args) {
            console.warn("telephony.data.getCellularDataState interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        isCellularDataEnabled: function (...args) {
            console.warn("telephony.data.isCellularDataEnabled interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        enableCellularData: function (...args) {
            console.warn("telephony.data.enableCellularData interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        disableCellularData: function (...args) {
            console.warn("telephony.data.disableCellularData interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        isCellularDataRoamingEnabled: function (...args) {
            console.warn("telephony.data.isCellularDataRoamingEnabled interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        enableCellularDataRoaming: function (...args) {
            console.warn("telephony.data.enableCellularDataRoaming interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        disableCellularDataRoaming: function (...args) {
            console.warn("telephony.data.disableCellularDataRoaming interface mocked in the Previewer. How this interface works on the Previewer may" +
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
}
const NetworkState = {
    longOperatorName: "[PC Preview] unknow longOperatorName",
    shortOperatorName: "[PC Preview] unknow shortOperatorName",
    plmnNumeric: "[PC Preview] unknow plmnNumeric",
    isRoaming: "[PC Preview] unknow isRoaming",
    regState: "[PC Preview] unknow regState",
    nsaState: "[PC Preview] unknow nsaState",
    isCaActive: "[PC Preview] unknow isCaActive",
    isEmergency: "[PC Preview] unknow isEmergency",
}
const SignalInformation = {
    signalType: "[PC Preview] unknow signalType",
    signalLevel: "[PC Preview] unknow signalLevel"
}
const DataFlowType = "[PC Preview] unknow DataFlowType"
const DataConnectState = "[PC Preview] unknow DataConnectState"
const CellInformation = {
    networkType: "[PC Preview] unknow networkType",
    isCamped: "[PC Preview] unknow isCamped",
    timeStamp: "[PC Preview] unknow timeStamp",
    signalInformation: "[PC Preview] unknow signalInformation",
    data: "[PC Preview] unknow unkown data"
}
export function mockRadio() {
    const NetworkSearchResult = {
        isNetworkSearchSuccess: "[PC Preview] unknow isNetworkSearchSuccess",
        networkSearchResult: [{
            operatorName: "[PC Preview] unknow operatorName",
            operatorNumeric: "[PC Preview] unknow operatorNumeric",
            state: "[PC Preview] unknow state",
            radioTech: "[PC Preview] unknow radioTech"
        }]
    }
    const PreferredNetworkMode = "[PC Preview] unknow PreferredNetworkMode"
    const NrOptionMode = "[PC Preview] unknow NrOptionMode"
    const NetworkSelectionMode = "[PC Preview] unknow unkown NetworkSelectionMode"
    global.systemplugin.telephony.radio = {
        getRadioTech: function (...args) {
            console.warn("telephony.radio.getRadioTech interface mocked in the Previewer. How this interface works on the Previewer may" +
                " be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, {
                    psRadioTech: "[PC Preview] unknow psRadioTech",
                    csRadioTech: "[PC Preview] unknow csRadioTech"
                });
            } else {
                return new Promise((resolve, reject) => {
                    resolve({
                        psRadioTech: "[PC Preview] unknow psRadioTech",
                        csRadioTech: "[PC Preview] unknow csRadioTech"
                    });
                })
            }
        },
        getNetworkState: function (...args) {
            console.warn("telephony.radio.getNetworkState interface mocked in the Previewer. How this interface works on the Previewer may" +
                " be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, NetworkState);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(NetworkState);
                })
            }
        },
        sendUpdateCellLocationRequest: function (...args) {
            console.warn("telephony.radio.sendUpdateCellLocationRequest interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        getCellInformation: function (...args) {
            console.warn("telephony.radio.getCellInformation interface mocked in the Previewer. How this interface works on the Previewer may" +
                " be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, [CellInformation]);
            } else {
                return new Promise((resolve, reject) => {
                    resolve([CellInformation]);
                })
            }
        },
        getNetworkSelectionMode: function (...args) {
            console.warn("telephony.radio.getNetworkSelectionMode interface mocked in the Previewer. How this interface works on the Previewer may" +
                " be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, NetworkSelectionMode);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(NetworkSelectionMode);
                })
            }
        },
        setNetworkSelectionMode: function (...args) {
            console.warn("telephony.radio.setNetworkSelectionMode interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        getNetworkSearchInformation: function (...args) {
            console.warn("telephony.radio.getNetworkSearchInformation interface mocked in the Previewer. How this interface works on the Previewer may" +
                " be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, NetworkSearchResult);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(NetworkSearchResult);
                })
            }
        },
        getISOCountryCodeForNetwork: function (...args) {
            console.warn("telephony.radio.getISOCountryCodeForNetwork interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        getNrOptionMode: function (...args) {
            console.warn("telephony.radio.getNrOptionMode interface mocked in the Previewer. How this interface works on the Previewer may" +
                " be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, NrOptionMode);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(NrOptionMode);
                })
            }
        },
        getIMEI: function (...args) {
            console.warn("telephony.radio.getIMEI interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        getMEID: function (...args) {
            console.warn("telephony.radio.getMEID interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        getUniqueDeviceId: function (...args) {
            console.warn("telephony.radio.getUniqueDeviceId interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        getPrimarySlotId: function (...args) {
            console.warn("telephony.radio.getPrimarySlotId interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        getSignalInformation: function (...args) {
            console.warn("telephony.radio.getSignalInformation interface mocked in the Previewer. How this interface works on the Previewer may" +
                " be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, [SignalInformation]);
            } else {
                return new Promise((resolve, reject) => {
                    resolve([SignalInformation]);
                })
            }
        },
        isNrSupported: function () {
            console.warn("telephony.radio.isNrSupported interface mocked in the Previewer. How this interface works on the Previewer may" +
                " be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isRadioOn: function (...args) {
            console.warn("telephony.radio.isRadioOn interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        turnOnRadio: function (...args) {
            console.warn("telephony.radio.turnOnRadio interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        turnOffRadio: function (...args) {
            console.warn("telephony.radio.turnOffRadio interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        getOperatorName: function (...args) {
            console.warn("telephony.radio.getOperatorName interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        setPreferredNetwork: function (...args) {
            console.warn("telephony.radio.setPreferredNetwork interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        getPreferredNetwork: function (...args) {
            console.warn("telephony.radio.getPreferredNetwork interface mocked in the Previewer. How this interface works on the Previewer may" +
                " be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, PreferredNetworkMode);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(PreferredNetworkMode);
                })
            }
        },
        getIMEISV: function (...args) {
            console.warn("telephony.radio.getIMEISV interface mocked in the Previewer. How this interface works on the Previewer may" +
                " be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(paramMock.paramStringMock);
                })
            }
        }
    }
}
export function mockSim() {
    const IccAccountInfo = {
        simId: "[PC Preview] unknow simId",
        slotIndex: "[PC Preview] unknow slotIndex",
        isEsim: "[PC Preview] unknow isEsim",
        isActive: "[PC Preview] unknow isActive",
        iccId: "[PC Preview] unknow iccId",
        showName: "[PC Preview] unknow showName",
        showNumber: "[PC Preview] unknow showNumber"
    }
    const OperatorConfigMock = {
        field: "[PC Preview] unknow field",
        value: "[PC Preview] unknow value"
    }
    const LockStatusResponse = {
        result: "[PC Preview] unknow result",
        remain: "[PC Preview] unknow remain"
    }
    const DiallingNumbersInfo = {
        efid: "[PC Preview] unknow efid",
        recordNumber: "[PC Preview] unknow recordNumber",
        alphaTag: "[PC Preview] unknow alphaTag",
        number: "[PC Preview] unknow number",
        emails: "[PC Preview] unknow emails"
    }
    const CardType = "[PC Preview] unknow CardType";
    const SimState = "[PC Preview] unknow SimState";
    global.systemplugin.telephony.sim = {
        isSimActive: function (...args) {
            console.warn("telephony.sim.isSimActive interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        getDefaultVoiceSlotId: function (...args) {
            console.warn("telephony.sim.getDefaultVoiceSlotId interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        hasOperatorPrivileges: function (...args) {
            console.warn("telephony.sim.hasOperatorPrivileges interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        getISOCountryCodeForSim: function (...args) {
            console.warn("telephony.sim.getISOCountryCodeForSim interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        getSimOperatorNumeric: function (...args) {
            console.warn("telephony.sim.getSimOperatorNumeric interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        getSimSpn: function (...args) {
            console.warn("telephony.sim.getSimSpn interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        getSimState: function (...args) {
            console.warn("telephony.sim.getSimState interface mocked in the Previewer. How this interface works on the Previewer may" +
                " be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, SimState);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(SimState);
                })
            }
        },
        getCardType: function (...args) {
            console.warn("telephony.sim.getCardType interface mocked in the Previewer. How this interface works on the Previewer may" +
                " be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, CardType);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(CardType);
                })
            }
        },
        getSimIccId: function (...args) {
            console.warn("telephony.sim.getSimIccId interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        getVoiceMailIdentifier: function (...args) {
            console.warn("telephony.sim.getVoiceMailIdentifier interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        getVoiceMailNumber: function (...args) {
            console.warn("telephony.sim.getVoiceMailNumber interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        getVoiceMailCount: function (...args) {
            console.warn("telephony.sim.getVoiceMailCount interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        getSimTelephoneNumber: function (...args) {
            console.warn("telephony.sim.getSimTelephoneNumber interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        getSimGid1: function (...args) {
            console.warn("telephony.sim.getSimGid1 interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        getSimTeleNumberIdentifier: function (...args) {
            console.warn("telephony.sim.getSimTeleNumberIdentifier interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        getLine1NumberFromImpu: function (...args) {
            console.warn("telephony.sim.getLine1NumberFromImpu interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        getMaxSimCount: function () {
            console.warn("telephony.sim.getMaxSimCount interface mocked in the Previewer. How this interface works on the Previewer may" +
                " be different from that on a real device.")
            return paramMock.paramNumberMock;
        },
        getIMSI: function (...args) {
            console.warn("telephony.sim.getIMSI interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        hasSimCard: function (...args) {
            console.warn("telephony.sim.hasSimCard interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        getSimAccountInfo: function (...args) {
            console.warn("telephony.sim.getSimAccountInfo interface mocked in the Previewer. How this interface works on the Previewer may" +
                " be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, IccAccountInfo);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(IccAccountInfo);
                })
            }
        },
        getActiveSimAccountInfoList: function (...args) {
            console.warn("telephony.sim.getActiveSimAccountInfoList interface mocked in the Previewer. How this interface works on the Previewer may" +
                " be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, [IccAccountInfo]);
            } else {
                return new Promise((resolve, reject) => {
                    resolve([IccAccountInfo]);
                })
            }
        },
        setDefaultVoiceSlotId: function (...args) {
            console.warn("telephony.sim.setDefaultVoiceSlotId interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        activateSim: function (...args) {
            console.warn("telephony.sim.activateSim interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        deactivateSim: function (...args) {
            console.warn("telephony.sim.deactivateSim interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        setShowName: function (...args) {
            console.warn("telephony.sim.setShowName interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        getShowName: function (...args) {
            console.warn("telephony.sim.getShowName interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        setShowNumber: function (...args) {
            console.warn("telephony.sim.setShowNumber interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        getShowNumber: function (...args) {
            console.warn("telephony.sim.getShowNumber interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        getOperatorConfigs: function (...args) {
            console.warn("telephony.sim.getOperatorConfigs interface mocked in the Previewer. How this interface works on the Previewer may" +
                " be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, [OperatorConfigMock]);
            } else {
                return new Promise((resolve, reject) => {
                    resolve([OperatorConfigMock]);
                })
            }
        },
        unlockPin: function (...args) {
            console.warn("telephony.sim.unlockPin interface mocked in the Previewer. How this interface works on the Previewer may" +
                " be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, LockStatusResponse);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(LockStatusResponse);
                })
            }
        },
        unlockPuk: function (...args) {
            console.warn("telephony.sim.unlockPuk interface mocked in the Previewer. How this interface works on the Previewer may" +
                " be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, LockStatusResponse);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(LockStatusResponse);
                })
            }
        },
        alterPin: function (...args) {
            console.warn("telephony.sim.alterPin interface mocked in the Previewer. How this interface works on the Previewer may" +
                " be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, LockStatusResponse);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(LockStatusResponse);
                })
            }
        },
        setLockState: function (...args) {
            console.warn("telephony.sim.setLockState interface mocked in the Previewer. How this interface works on the Previewer may" +
                " be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, LockStatusResponse);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(LockStatusResponse);
                })
            }
        },
        unlockPin2: function (...args) {
            console.warn("telephony.sim.unlockPin2 interface mocked in the Previewer. How this interface works on the Previewer may" +
                " be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, LockStatusResponse);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(LockStatusResponse);
                })
            }
        },
        unlockPuk2: function (...args) {
            console.warn("telephony.sim.unlockPuk2 interface mocked in the Previewer. How this interface works on the Previewer may" +
                " be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, LockStatusResponse);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(LockStatusResponse);
                })
            }
        },
        alterPin2: function (...args) {
            console.warn("telephony.sim.alterPin2 interface mocked in the Previewer. How this interface works on the Previewer may" +
                " be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, LockStatusResponse);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(LockStatusResponse);
                })
            }
        },
        queryIccDiallingNumbers: function (...args) {
            console.warn("telephony.sim.queryIccDiallingNumbers interface mocked in the Previewer. How this interface works on the Previewer may" +
                " be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, [DiallingNumbersInfo]);
            } else {
                return new Promise((resolve, reject) => {
                    resolve([DiallingNumbersInfo]);
                })
            }
        },
        addIccDiallingNumbers: function (...args) {
            console.warn("telephony.sim.addIccDiallingNumbers interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        delIccDiallingNumbers: function (...args) {
            console.warn("telephony.sim.delIccDiallingNumbers interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        updateIccDiallingNumbers: function (...args) {
            console.warn("telephony.sim.updateIccDiallingNumbers interface mocked in the Previewer. How this interface works on the Previewer may" +
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
}
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
    global.systemplugin.telephony.sms = {
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
            return;
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
}
export function mockObserver() {
    const SimStateData = {
        type: "[PC Preview] unknow type",
        state: "[PC Preview] unknow state",
    }
    global.systemplugin.telephony.observer = {
        on: function (...args) {
            console.warn("telephony.observer.on interface mocked in the Previewer. How this interface works on the Previewer may " +
                "be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                if (args[0] === 'networkStateChange') {
                    args[len - 1].call(this, NetworkState);
                } else if (args[0] === 'signalInfoChange') {
                    args[len - 1].call(this, [SignalInformation]);
                } else if (args[0] === 'cellInfoChange') {
                    args[len - 1].call(this, [CellInformation]);
                } else if (args[0] === 'cellularDataConnectionStateChange') {
                    args[len - 1].call(this, paramMock.businessErrorMock, {
                        state: "[PC Preview] unknow state",
                        network: "[PC Preview] unknow network"
                    });
                } else if (args[0] === 'cellularDataFlowChange') {
                    args[len - 1].call(this, DataFlowType);
                } else if (args[0] === 'callStateChange') {
                    args[len - 1].call(this, paramMock.businessErrorMock, {
                        state: "[PC Preview] unknow state",
                        number: "[PC Preview] unknow number"
                    });
                } else if (args[0] === 'cfuIndicatorChange' || 'voiceMailMsgIndicatorChange') {
                    args[len - 1].call(this, paramMock.paramBooleanMock);
                } else if (args[0] === 'simStateChange') {
                    args[len - 1].call(this, SimStateData);
                }
            }
        },
        off: function (...args) {
            console.warn("telephony.observer.off interface mocked in the Previewer. How this interface works on the Previewer may " +
                "be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                if (args[0] === 'networkStateChange') {
                    args[len - 1].call(this, NetworkState);
                } else if (args[0] === 'signalInfoChange') {
                    args[len - 1].call(this, [SignalInformation]);
                } else if (args[0] === 'cellInfoChange') {
                    args[len - 1].call(this, [CellInformation]);
                } else if (args[0] === 'cellularDataConnectionStateChange') {
                    args[len - 1].call(this, paramMock.businessErrorMock, {
                        state: "[PC Preview] unknow state",
                        network: "[PC Preview] unknow network"
                    });
                } else if (args[0] === 'cellularDataFlowChange') {
                    args[len - 1].call(this, DataFlowType);
                } else if (args[0] === 'callStateChange') {
                    args[len - 1].call(this, paramMock.businessErrorMock, {
                        state: "[PC Preview] unknow state",
                        number: "[PC Preview] unknow number"
                    });
                } else if (args[0] === 'cfuIndicatorChange' || 'voiceMailMsgIndicatorChange') {
                    args[len - 1].call(this, paramMock.paramBooleanMock);
                } else if (args[0] === 'simStateChange') {
                    args[len - 1].call(this, SimStateData);
                }
            }
        },
        once: function (...args) {
            console.warn("telephony.observer.once interface mocked in the Previewer. How this interface works on the Previewer may " +
                "be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                if (args[0] === 'networkStateChange') {
                    args[len - 1].call(this, NetworkState);
                } else if (args[0] === 'signalInfoChange') {
                    args[len - 1].call(this, [SignalInformation]);
                } else if (args[0] === 'cellInfoChange') {
                    args[len - 1].call(this, [CellInformation]);
                } else if (args[0] === 'cellularDataConnectionStateChange') {
                    args[len - 1].call(this, paramMock.businessErrorMock, {
                        state: "[PC Preview] unknow state",
                        network: "[PC Preview] unknow network"
                    });
                } else if (args[0] === 'cellularDataFlowChange') {
                    args[len - 1].call(this, DataFlowType);
                } else if (args[0] === 'callStateChange') {
                    args[len - 1].call(this, paramMock.businessErrorMock, {
                        state: "[PC Preview] unknow state",
                        number: "[PC Preview] unknow number"
                    });
                } else if (args[0] === 'cfuIndicatorChange' || 'voiceMailMsgIndicatorChange') {
                    args[len - 1].call(this, paramMock.paramBooleanMock);
                } else if (args[0] === 'simStateChange') {
                    args[len - 1].call(this, SimStateData);
                }
            }
        }
    }
}