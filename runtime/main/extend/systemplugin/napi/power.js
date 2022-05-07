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

export function mockPower() {
  const power = {
    shutdownDevice: function (...args) {
      console.warn("power.shutdownDevice interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    rebootDevice: function (...args) {
      console.warn("power.rebootDevice interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    isScreenOn: function (...args) {
      console.warn("power.isScreenOn interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramBooleanMock);
        })
      }
    },
    wakeupDevice: function (...args) {
      console.warn("power.wakeupDevice interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    suspendDevice: function (...args) {
      console.warn("power.suspendDevice interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    }
  }
  return power
}
