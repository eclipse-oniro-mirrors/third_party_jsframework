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

export function mockMediaQuery() {
  const mediaquery = {
    matchMediaSync: function (...args) {
      console.warn("mediaquery.matchMediaSync interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      var listener = {
        on: function (...args) {
          console.warn("listener.on interface mocked in the Previewer." +
            " How this interface works on the Previewer may be different from that on a real device.")
        },
        off: function (...args) {
          console.warn("listener.off interface mocked in the Previewer." +
            " How this interface works on the Previewer may be different from that on a real device.")
        },
        matches: false,
        media: String
      };
      if (args.length === 1 && typeof args[0] === 'string') {
        listener.media = args[0];
      }
      return listener;
    }
  }
  return mediaquery
}