import { paramMock } from "./utils"

export function mockScreenLock () {
    global.systemplugin.screenLock = {
        isScreenLocked: function (...args) {
            console.warn("screenLock.isScreenLocked interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock,paramMock.paramBooleanMock)
            } else {
                return new Promise((resolve) => {
                    resolve(paramMock.paramBooleanMock);
                })
            }
        },
        isSecureMode: function (...args) {
            console.warn("screenLock.isSecureMode interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock,paramMock.paramBooleanMock)
            } else {
                return new Promise((resolve) => {
                    resolve(paramMock.paramBooleanMock);
                })
            }
        },
        unlockScreen: function (...args) {
            console.warn("screenLock.unlockScreen interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock)
            } else {
                return new Promise((resolve) => {
                    resolve();
                })
            }
        }
    }
}