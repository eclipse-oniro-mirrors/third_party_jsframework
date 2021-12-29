import {paramMock} from "../utils"

export function mockSystemTime() {
    global.ohosplugin.systemTime = {
        setTime: function (...args) {
            console.warn('systemTime.setTime interface mocked in the Previewer. How this interface works on the'
            + 'Previewer may be different from that on a real device.');
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve();
                });
            }
        },
        getCurrentTime: function (...args) {
            console.warn('systemTime.getCurrentTime interface mocked in the Previewer. How this interface works on the'
            + 'Previewer may be different from that on a real device.');
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(paramMock.paramNumberMock);
                });
            }
        },
        getCurrentTimeNs: function (...args) {
            console.warn('systemTime.getCurrentTimeNs interface mocked in the Previewer.'
            + 'How this interface works on the Previewer may be different from that on a real device.');
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(paramMock.paramNumberMock);
                });
            }
        },
        getRealActiveTime: function (...args) {
            console.warn('systemTime.getRealActiveTime interface mocked in the Previewer.'
            + 'How this interface works on the Previewer may be different from that on a real device.');
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(paramMock.paramNumberMock);
                });
            }
        },
        getRealActiveTimeNs: function (...args) {
            console.warn('systemTime.getRealActiveTimeNs interface mocked in the Previewer.'
            + 'How this interface works on the Previewer may be different from that on a real device.');
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(paramMock.paramNumberMock);
                });
            }
        },
        getRealTime: function (...args) {
            console.warn('systemTime.getRealTime interface mocked in the Previewer. How this interface works on the'
            + 'Previewer may be different from that on a real device.');
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(paramMock.paramNumberMock);
                });
            }
        },
        getRealTimeNs: function (...args) {
            console.warn('systemTime.getRealTimeNs interface mocked in the Previewer. How this interface works on the'
            + 'Previewer may be different from that on a real device.');
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(paramMock.paramNumberMock);
                });
            }
        },
        setDate: function (...args) {
            console.warn('systemTime.setDate interface mocked in the Previewer. How this interface works on the'
            + 'Previewer may be different from that on a real device.');
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve();
                });
            }
        },
        getDate: function (...args) {
            console.warn('systemTime.getDate interface mocked in the Previewer. How this interface works on the'
            + 'Previewer may be different from that on a real device.');
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramObjectMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(paramMock.paramObjectMock);
                });
            }
        },
        setTimezone: function (...args) {
            console.warn('systemTime.setTimezone interface mocked in the Previewer. How this interface works on the'
            + 'Previewer may be different from that on a real device.');
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve();
                });
            }
        },
        getTimeZone: function (...args) {
            console.warn('systemTime.getTimeZone interface mocked in the Previewer. How this interface works on the'
            + 'Previewer may be different from that on a real device.');
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(paramMock.paramStringMock);
                });
            }
        },
    };
}