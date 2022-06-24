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
import { BundleInfoMock } from './bundle/bundleInfo'

export function mockDefaultAppManager() {
    const defaultAppManager = {
        isDefaultApplication: function(...args){
            console.warn("defaultAppManager.isDefaultApplication interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock);
            } else {
                return new Promise((resolve) => {
                    resolve(paramMock.paramBooleanMock);
                })
            }
        },
        getDefaultApplication: function(...args){
            console.warn("defaultAppManager.getDefaultApplication interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, BundleInfoMock);
            } else {
                return new Promise((resolve) => {
                    resolve(BundleInfoMock);
                })
            }
        },
        setDefaultApplication: function(...args){
            console.warn("defaultAppManager.setDefaultApplication interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve) => {
                    resolve(paramMock.businessErrorMock);
                })
            }
        },
        resetDefaultApplication: function(...args){
            console.warn("defaultAppManager.resetDefaultApplication interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve) => {
                    resolve(paramMock.businessErrorMock);
                })
            }
        }
    };
    return defaultAppManager;
}