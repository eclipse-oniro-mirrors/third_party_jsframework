import { paramMock } from "../utils"

export function mockConvertXml() {
    const result = {
        ConvertXML: function(...args) {
            console.warn("convertXml.ConvertXML interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
                return ConvertXMLMock;
        }
    }
    const ConvertXMLMock = {
        convert: function(...args) {
            console.warn("ConvertXML.convert interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramObjectMock;
        }
    }
    return result;
}
