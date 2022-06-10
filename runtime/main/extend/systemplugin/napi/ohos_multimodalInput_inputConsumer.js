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

export function mockInputConsumer() {
  const EventType = ['key']
  const inputConsumer = {   
    on: function (...args) {
        console.warn("inputConsumer.on interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.");
        const len = args.length;
        if (len !== 2) {
            console.warn("the number of parameter must be two");
            return;
        }
        if (EventType.indexOf(args[0]) === -1) {
            console.warn("the first parameter must be 'key'");
            return;
        }
        if (typeof args[1] != 'function') {
            console.warn("the second parameter type must be 'function'");
            return; 
        }
        args[1].call(this, paramMock.paramObjectMock);
    },
    off: function (...args) {
        console.warn("inputConsumer.off interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.");
        const len = args.length;
        if (len < 1 || len > 2) {
            console.warn("a maximum of two parameters");
            return;
        }
        if (EventType.indexOf(args[0]) === -1) {
            console.warn("first parameter must be 'key'")
            return;
        }
        if (len === 2) {
            if (typeof args[1] != 'function') {
                console.warn("second parameter type must be 'function'");
                return;
            }
        }
    }
  }
  return inputConsumer;
}