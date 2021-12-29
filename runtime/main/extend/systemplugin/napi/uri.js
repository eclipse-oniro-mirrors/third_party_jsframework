import { paramMock } from "../utils"

export function mockUri() {
    const result = {
        URI: function(...args) {
            console.warn("uri.URI interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return URIMock;
        }
    }
    const URIMock = {
        toString: function(...args) {
            console.warn("URI.toString interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramStringMock;
        },
        equals: function(...args) {
            console.warn("URI.equals interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        checkIsAbsolute: function(...args) {
            console.warn("URI.checkIsAbsolute interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        normalize: function(...args) {
            console.warn("URI.normalize interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramObjectMock;
        },
        scheme: '[PC preview] unknow scheme',
        userinfo: '[PC preview] unknow userinfo',
        host: '[PC preview] unknow host',
        port: '[PC preview] unknow port',
        path: '[PC preview] unknow path',
        query: '[PC preview] unknow query',
        fragment: '[PC preview] unknow fragment',
        authority: '[PC preview] unknow authority',
        ssp: '[PC preview] unknow ssp'
    }
    return result;
}
