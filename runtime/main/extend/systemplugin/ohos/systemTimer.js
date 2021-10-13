import {paramMock} from "../utils"

export function mockSystemTimer() {
    global.ohosplugin.systemTimer = {
        TIMER_TYPE_REALTIME: '[PC preview] unknow TIMER_TYPE_REALTIME',
        TIMER_TYPE_WAKEUP: '[PC preview] unknow TIMER_TYPE_WAKEUP',
        TIMER_TYPE_EXACT: '[PC preview] unknow TIMER_TYPE_EXACT',
        TIMER_TYPE_IDLE: '[PC preview] unknow TIMER_TYPE_IDLE',
        createTimer: function (...args) {
            console.warn("systemTimer.createTimer interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock)
            } else {
                return new Promise((resolve, reject) => {
                    resolve(paramMock.paramNumberMock);
                })
            }
        },
        startTimer: function (...args) {
            console.warn("systemTimer.startTimer interface mocked in the Previewer. How this interface works on the" +
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
        stopTimer: function (...args) {
            console.warn("systemTimer.stopTimer interface mocked in the Previewer. How this interface works on the" +
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
        destroyTimer: function (...args) {
            console.warn("systemTimer.destroyTimer interface mocked in the Previewer. How this interface works on the" +
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