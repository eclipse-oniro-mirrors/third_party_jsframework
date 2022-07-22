/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

export function mockUri() {
  const uri = {
    URI: function (...args) {
      console.warn("uri.URI interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return URIMock;
    }
  }
  const URIMock = {
    constructor(...args) {
      console.warn("uri.URI.constructor interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
	},
    toString: function (...args) {
      console.warn("URI.toString interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return paramMock.paramStringMock;
    },
    equals: function (...args) {
      console.warn("URI.equals interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    checkIsAbsolute: function (...args) {
      console.warn("URI.checkIsAbsolute interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    normalize: function (...args) {
      console.warn("URI.normalize interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return paramMock.paramObjectMock;
    },
    scheme: '[PC preview] unknow scheme',
    userInfo: '[PC preview] unknow userInfo',
    host: '[PC preview] unknow host',
    port: '[PC preview] unknow port',
    path: '[PC preview] unknow path',
    query: '[PC preview] unknow query',
    fragment: '[PC preview] unknow fragment',
    authority: '[PC preview] unknow authority',
    ssp: '[PC preview] unknow ssp'
  }
  return uri;
}
