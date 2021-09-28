import { paramMock } from "../utils"

export function mockBackgroundTaskManager () {
    const DelaySuspendInfoMock = {
        requestId : '[PC preview] unknown requestId',
        actualDelayTime: '[PC preview] unknown actualDelayTime',
    }
    global.ohosplugin.backgroundTaskManager = {
        requestSuspendDelay: function (...args) {
            console.warn("backgroundTaskManager.requestSuspendDelay interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock)
                return DelaySuspendInfoMock;
            }
        },
        cancelSuspendDelay: function (...args) {
            console.warn("backgroundTaskManager.cancelSuspendDelay interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
        },
        getRemainingDelayTime: function (...args) {
            console.warn("backgroundTaskManager.getRemainingDelayTime interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, DelaySuspendInfoMock.actualDelayTime)
            } else {
                return new Promise((resolve) => {
                    resolve(DelaySuspendInfoMock.actualDelayTime)
                });
            }
        }
    }
}