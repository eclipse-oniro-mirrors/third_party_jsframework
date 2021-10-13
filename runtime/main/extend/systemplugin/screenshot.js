import { paramMock } from "./utils"

export function mockScreenshot() {
    const screenshotMock = {
        ImageSource: '[PC preview] unknow ImageSource'
    }

    global.systemplugin.screenshot = {
        save: function (...args) {
            console.warn("screenshot.save interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, screenshotMock)
            } else {
                return new Promise((resolve, reject) => {
                    resolve(screenshotMock)
                })
            }
        }
    }
}