import { paramMock } from "../utils"

export function mockUrl() {
    const result = {
        URLSearchParams: function(...args) {
            console.warn("url.URLSearchParams interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return URLSearchParamsMock;
        },
        URL: function(...args) {
            console.warn("url.URL interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return URLMock;
        }
    }
    const URLSearchParamsMock = {
        append: function(...args) {
            console.warn("URLSearchParams.append interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
        },
        delete: function(...args) {
            console.warn("URLSearchParams.delete interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
        },
        getAll: function(...args) {
            console.warn("URLSearchParams.getAll interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            var arrStr =  new Array()
            return arrStr;
        },
        entries: function(...args) {
            console.warn("URLSearchParams.entries interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramObjectMock;
        },
        forEach: function(...args) {
            console.warn("URLSearchParams.forEach interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
        },
        get: function(...args) {
            console.warn("URLSearchParams.get interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramStringMock;
        },
        has: function(...args) {
            console.warn("URLSearchParams.has interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        set: function(...args) {
            console.warn("URLSearchParams.set interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
        },
        sort: function(...args) {
            console.warn("URLSearchParams.sort interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
        },
        keys: function(...args) {
            console.warn("URLSearchParams.keys interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramObjectMock;
        },
        values: function(...args) {
            console.warn("URLSearchParams.values interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramObjectMock;
        },
        [Symbol.iterator]: function(...args) {
            console.warn("URLSearchParams.[Symbol.iterator] interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramObjectMock;
        },
        toString: function(...args) {
            console.warn("URLSearchParams.toString interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramStringMock;
        }
    }
    const URLMock = {
        toString: function(...args) {
            console.warn("URL.toString interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramStringMock;
        },
        toJSON: function(...args) {
            console.warn("URL.toJSON interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramStringMock;
        },
        hash: '[PC preview] unknow hash',
        host: '[PC preview] unknow host',
        hostname: '[PC preview] unknow hostname',
        href: '[PC preview] unknow href',
        origin: '[PC preview] unknow origin',
        password: '[PC preview] unknow password',
        pathname: '[PC preview] unknow pathname',
        port: '[PC preview] unknow port',
        protocol: '[PC preview] unknow protocol',
        search: '[PC preview] unknow search',
        searchParams: URLSearchParamsMock,
        username: '[PC preview] unknow username',
    }
    return result;
}