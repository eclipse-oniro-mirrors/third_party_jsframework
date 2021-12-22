import { paramMock } from "../utils"

export function mockWantAgent() {
    const WantMock = {
        deviceId: '[PC preview] unknow deviceId',
        bundleName: '[PC preview] unknow bundleName',
        abilityName: '[PC preview] unknow abilityName',
        uri: '[PC preview] unknow uri',
        type: '[PC preview] unknow type',
        flags: '[PC preview] unknow flags',
        action: '[PC preview] unknow action',
        parameters: '[PC preview] unknow parameters',
        entities: '[PC preview] unknow entities',
    }
    const CompleteDataMock = {
        info: '[PC preview] unknow info',
        want: '[PC preview] unknow want',
        finalCode: '[PC preview] unknow finalCode',
        finalData: '[PC preview] unknow finalData',
        extraInfo: '[PC preview] unknow extraInfo',
    }
    const WantAgentMock = {}
    global.ohosplugin.wantAgent = {
        OperationType: {
            UNKNOWN_TYPE: 0,
            START_ABILITY: 1,
            START_ABILITIES: 2,
            START_SERVICE: 3,
            SEND_COMMON_EVENT: 4
        },
        WantAgentFlags: {
            ONE_TIME_FLAG: 0,
            NO_BUILD_FLAG: 1,
            CANCEL_PRESENT_FLAG: 2,
            UPDATE_PRESENT_FLAG: 3,
            CONSTANT_FLAG: 4,
            REPLACE_ELEMENT: 5,
            REPLACE_ACTION: 6,
            REPLACE_URI: 7,
            REPLACE_ENTITIES: 8,
            REPLACE_BUNDLE: 9
        },
        getBundleName: function (...args) {
            console.warn("wantAgent.getBundleName interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock);
            } else {
                return new Promise((resolve) => {
                    resolve(paramMock.paramStringMock);
                });
            }
        },
        getUid: function (...args) {
            console.warn("wantAgent.getUid interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
            } else {
                return new Promise((resolve) => {
                    resolve(paramMock.paramNumberMock);
                });
            }
        },
        getWant: function (...args) {
            console.warn("wantAgent.getWant interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, WantMock);
            } else {
                return new Promise((resolve) => {
                    resolve(WantMock);
                });
            }
        },
        cancel: function (...args) {
            console.warn("wantAgent.cancel interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve) => {
                    resolve();
                });
            }
        },
        trigger: function (...args) {
            console.warn("wantAgent.trigger interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, CompleteDataMock);
            }
        },
        equal: function (...args) {
            console.warn("wantAgent.equal interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock);
            } else {
                return new Promise((resolve) => {
                    resolve(paramMock.paramBooleanMock);
                });
            }
        },
        getWantAgent: function (...args) {
            console.warn("wantAgent.getWantAgent interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, WantAgentMock);
            } else {
                return new Promise((resolve) => {
                    resolve(WantAgentMock);
                });
            }
        },
    }

}
