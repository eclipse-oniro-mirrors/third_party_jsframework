/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { paramMock } from "../utils"

export function mockXml() {
    const result = {
        XmlSerializer: function(...args) {
            console.warn("xml.XmlSerializer interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
                return XmlSerializerMock;
        },
        XmlPullParser: function(...args) {
            console.warn("xml.XmlPullParser interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
                return XmlPullParserMock;
        }
    }
    const XmlSerializerMock = {
        setAttributes: function(...args) {
            console.warn("XmlSerializer.setAttributes interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
        },
        addEmptyElement: function(...args) {
            console.warn("XmlSerializer.addEmptyElement interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
        },
        setDeclaration: function(...args) {
            console.warn("XmlSerializer.setDeclaration interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
        },
        startElement: function(...args) {
            console.warn("XmlSerializer.startElement interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
        },
        endElement: function(...args) {
            console.warn("XmlSerializer.endElement interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
        },
        setNamespace: function(...args) {
            console.warn("XmlSerializer.setNamespace interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
        },
        setCommnet: function(...args) {
            console.warn("XmlSerializer.setCommnet interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
        },
        setCData: function(...args) {
            console.warn("XmlSerializer.setCData interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
        },
        setText: function(...args) {
            console.warn("XmlSerializer.setText interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
        },
        setDocType: function(...args) {
            console.warn("XmlSerializer.setDocType interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
        }
    }
    const XmlPullParserMock = {
        parse: function(...args) {
            console.warn("XmlPullParser.parse interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
        }
    }
    return result;
}
