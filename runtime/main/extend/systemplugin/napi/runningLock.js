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

export function mockRunningLock() {
  const RunningLockMock = {
    lock: function (...args) {
      console.warn("RunningLock.lock interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
    },
    isUsed: function () {
      console.warn("RunningLock.isUsed interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    unlock: function () {
      console.warn("RunningLock.unlock interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
    }
  };
  const RunningLockType = {
    BACKGROUND: '[PC Preview] unknow BACKGROUND',
    PROXIMITY_SCREEN_CONTROL: '[PC Preview] unknow PROXIMITY_SCREEN_CONTROL'
  };
  const runningLock = {
    RunningLockType,
    isRunningLockTypeSupported: function (...args) {
      console.warn("runningLock.isRunningLockTypeSupported interface mocked in the Previewer. How this interface works on the" +
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
    createRunningLock: function (...args) {
      console.warn("runningLock.createRunningLock interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, RunningLockMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(RunningLockMock);
        })
      }
    }
  }
  return runningLock
}
