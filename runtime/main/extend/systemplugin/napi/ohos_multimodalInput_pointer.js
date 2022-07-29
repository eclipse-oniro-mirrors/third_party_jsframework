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

export function mockPointer() {
  const pointer = {
    setPointerVisible: function (...args) {
      console.warn("multimodalInput.pointer.setPointerVisible interface mocked in the Previewer." +
        "How this interface works on the" + " Previewer may be different from that on a real device.");
      const len = args.length;
      if (len < 1 || len > 2) {
        console.warn("parameter number error");
        return;
      }
      if (typeof args[0] !== 'boolean') {
        console.warn("the first parameter error");
        return;
      }
      if (len == 1) {
        return new Promise((resolve, reject) => {
          resolve();
        })
      } else {
        if (typeof args[1] !== 'function') {
          console.warn("the second parameter type must be function");
          return;
        }
        args[1].call(this, paramMock.businessErrorMoc);
      }
    },
    isPointerVisible: function (...args) {
      console.warn("multimodalInput.pointer.isPointerVisible interface mocked in the Previewer." +
        "How this interface works on the" + " Previewer may be different from that on a real device.");
      const len = args.length
      if (len > 1) {
        console.warn("parameter number error");
        return;
      }
      if (len == 0) {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramArrayMock);
        })
      } else {
        if (typeof args[0] !== 'function') {
          console.warn("the first parameter type must be function");
          return;
        }
        args[0].call(this, paramMock.businessErrorMoc, paramMock.paramBooleanMock);
      }
    },
  };
  return pointer
}