import {paramMock} from "../utils"

export function mockSystemTime() {
    global.ohosplugin.systemTime = {
        setTime: function (...args) {
            console.warn("systemTime.setTime interface mocked in the Previewer. How this interface works on the" +
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
        setDate: function (...args) {
            console.warn("systemTime.setDate interface mocked in the Previewer. How this interface works on the" +
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
        setTimezone: function (...args) {
            console.warn("systemTime.setTimezone interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock)
            } else {
                return new Promise((resolve, reject) => {
                    resolve();
                })
            }
        }
    }
}