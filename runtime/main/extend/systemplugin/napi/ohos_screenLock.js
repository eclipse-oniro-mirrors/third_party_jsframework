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

export function mockScreenLock() {
  const screenLock = {
    isScreenLocked: function (...args) {
      console.warn("screenLock.isScreenLocked interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock)
      } else {
        return new Promise((resolve) => {
          resolve(paramMock.paramBooleanMock);
        })
      }
    },
    isSecureMode: function (...args) {
      console.warn("screenLock.isSecureMode interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock)
      } else {
        return new Promise((resolve) => {
          resolve(paramMock.paramBooleanMock);
        })
      }
    },
    unlockScreen: function (...args) {
      console.warn("screenLock.unlockScreen interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock)
      } else {
        return new Promise((resolve) => {
          resolve();
        })
      }
    },
    on: function (...args) {
      console.warn("screenLock.on interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        if (args[0] == 'beginWakeUp' || args[0] == 'endWakeUp' || args[0] == 'beginScreenOn' || args[0] == 'endScreenOn'
           || args[0] == 'beginScreenOff' || args[0] == 'endScreenOff' || args[0] == 'unlockScreen' || args[0] == 'beginExitAnimation') {
          args[len - 1].call(this);
        } else if (args[0] == 'beginSleep' || args[0] == 'endSleep' || args[0] == 'changeUser') {
          args[len - 1].call(this, paramMock.paramNumberMock);
        } else if (args[0] == 'screenlockEnabled') {
          args[len - 1].call(this, paramMock.paramBooleanMock);
        }
      }
    },
    off: function (...args) {
      console.warn("screenLock.off interface mocked in the Previewer. How this interface works on the" +
      " Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        if (args[0] == 'beginWakeUp' || args[0] == 'endWakeUp' || args[0] == 'beginScreenOn' || args[0] == 'endScreenOn'
         || args[0] == 'beginScreenOff' || args[0] == 'endScreenOff' || args[0] == 'unlockScreen' || args[0] == 'beginExitAnimation'
         || args[0] == 'screenlockEnabled' || args[0] == 'beginSleep' || args[0] == 'endSleep' || args[0] == 'changeUser') {
          args[len - 1].call(this);
        }
      }
    },
    sendScreenLockEvent: function (...args) {
      console.warn("screenLock.sendScreenLockEvent interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock);
      } else {
        return new Promise((resolve) => {
          resolve(paramMock.paramBooleanMock);
        })
      }
    }
  }
  return screenLock
}