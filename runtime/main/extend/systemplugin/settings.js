import { paramMock } from "./utils"

export function mockSettings () {
    const mockInfo = {
        URI : "[PC Preview] unknow string"
    }
    global.systemplugin.settings = {
        getURI: function (...args) {
            console.warn("settings.getURI interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, mockInfo)
            } else {
                return new Promise((resolve) => {
                    resolve(mockInfo);
                })
            }
        },
        getValue: function (...args) {
            console.warn("settings.getValue interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock)
            } else {
                return new Promise((resolve) => {
                    resolve(paramMock.paramStringMock);
                })
            }
        },
        setValue: function (...args) {
            console.warn("settings.setValue interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock)
            } else {
                return new Promise((resolve) => {
                    resolve();
                })
            }
        },
        enableAirplaneMode: function (...args) {
            console.warn("settings.enableAirplaneMode interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock)
            } else {
                return new Promise((resolve) => {
                    resolve();
                })
            }
        },
        canShowFloating: function (...args) {
            console.warn("settings.canShowFloating interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock)
            } else {
                return new Promise((resolve) => {
                    resolve(paramMock.paramBooleanMock);
                })
            }
        },
    }
}