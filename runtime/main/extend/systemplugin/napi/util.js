import { paramMock } from "../utils"

export function mockUtil() {
    const result = {
        printf: function(...args) {
            console.warn("util.printf interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramStringMock;
        },
        getErrorString: function(...args) {
            console.warn("util.getErrorString interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramStringMock;
        },
        callbackWrapper: function(...args) {
            console.warn("util.callbackWrapper interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
        },
        promiseWrapper: function(...args) {
            console.warn("util.promiseWrapper interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramObjectMock;
        },
        TextDecoder: function(...args) {
            console.warn("util.TextDecoder interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return TextDecoderMock;
        },
        TextEncoder: function(...args) {
            console.warn("util.TextEncoder interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return TextEncoderMock;
        }
    }
    const TextDecoderMock = {
        encoding: '[PC preview] unknow encoding',
        fatal: '[PC preview] unknow fatal',
        ignoreBOM: '[PC preview] unknow ignoreBOM',
        decode: function (...args) {
            console.warn("TextDecoder.decode interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramStringMock;
        },
    }
    const TextEncoderMock = {
        encoding: '[PC preview] unknow encoding',
        encode: function(...args) {
            console.warn("TextEncoder.encode interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            const arr = new Uint8Array()
            return arr;
        },
        encodeInto: function(...args) {
            console.warn("TextEncoder.encodeInto interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramObjectMock;
        }
    }
    return result;
}
