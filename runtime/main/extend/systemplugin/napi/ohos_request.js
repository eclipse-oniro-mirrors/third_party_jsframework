/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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

import { hasComplete } from "../utils"

export function mockRequest() {
  const uploadResponseMock = {
    code: "[PC Preview]: unknow code",
    data: "[PC Preview]: unknow data",
    headers: "[PC Preview]: unknow headers"
  }
  const downloadResponse = {
    token: "[PC Preview]: unknow token"
  }
  const onDownloadCompleteMock = {
    uri: "[PC Preview]: unknow uri"
  }
  const request = {
    upload: function (...args) {
      console.warn("system.request.upload interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      args[0].success(uploadResponseMock)
      hasComplete(args[0].complete)
    },
    download: function (...args) {
      console.warn("system.request.download interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      args[0].success(downloadResponse)
      hasComplete(args[0].complete)
    },
    onDownloadComplete: function (...args) {
      console.warn("system.request.onDownloadComplete interface mocked in the Previewer. How this interface works on" +
        " the Previewer may be different from that on a real device.")
      args[0].success(onDownloadCompleteMock)
      hasComplete(args[0].complete)
    }
  }
  return request
}