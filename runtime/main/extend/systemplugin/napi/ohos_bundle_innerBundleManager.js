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
import { resolve } from 'path/posix'
import { BundleInfoMock } from './bundle/bundleInfo'
import {ApplicationInfoMock} from './bundle/applicationInfo'
import {AbilityInfoMock} from './bundle/abilityInfo'
import {WantMock} from './bundle/applicationInfo'
import {ShortcutInfoMock} from './bundle/applicationInfo'
import {ModuleUsageRecordMock} from './bundle/applicationInfo'
import {LauncherAbilityInfoMock} from './bundle/launcherAbilityInfo'

export function mockInnerBundle() {
    const innerBundleManager = {
        getLauncherAbilityInfos: function(...args){
            console.warn("innerBundle.getLauncherAbilityInfos interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, LauncherAbilityInfoMock);
            } else {
                return new Promise((resolve) => {
                    resolve(LauncherAbilityInfoMock);
                })
            }
        },
        on: function(...args) {
            console.warn("innerBundle.on interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
        },
        off: function(...args) {
            console.warn("innerBundle.off interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
        },
        getAllLauncherAbilityInfos: function(...args){
            console.warn("innerBundle.getAllLauncherAbilityInfos interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, Array(LauncherAbilityInfoMock));
            } else {
                return new Promise((resolve) => {
                    resolve(Array(LauncherAbilityInfoMock));
                })
            }
        },
        getShortcutInfos: function(...args){
            console.warn("innerBundle.getShortcutInfos interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, Array(ShortcutInfoMock));
            } else {
                return new Promise((resolve) => {
                    resolve(Array(ShortcutInfoMock));
                })
            }
        },
    };
    return innerBundleManager;
}