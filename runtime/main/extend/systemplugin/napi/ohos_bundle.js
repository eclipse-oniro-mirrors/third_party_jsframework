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
import {resolve} from 'path/posix'
import {BundleInfoMock} from './bundle/bundleInfo'
import {ApplicationInfoMock} from './bundle/applicationInfo'
import {AbilityInfoMock} from './bundle/abilityInfo'
import {WantMock} from './bundle/applicationInfo'
import {ShortcutInfoMock} from './bundle/applicationInfo'
import {ModuleUsageRecordMock} from './bundle/applicationInfo'

export function mockBundle() {

    const bundle = {
        getBundleInfo: function(...args) {
            console.warn("bundle.getBundleInfo interface mocked in the Previewer. How this interface works on the" +
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
        getBundleInstaller: function(...args) {
            console.warn("bundle.getBundleInstaller interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve) => {
                    resolve(paramMock.paramNumberMock);
                })
            }
        },
        getApplicationInfo: function(...args) {
            console.warn("bundle.getApplicationInfo interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, ApplicationInfoMock);
            } else {
                return new Promise((resolve) => {
                    resolve(ApplicationInfoMock);
                })
            }
        },
        checkPermission: function(...args) {
            console.warn("bundle.checkPermission interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
            } else {
                return new Promise((resolve) => {
                    resolve(paramMock.paramNumberMock);
                })
            }
        },
        queryAbilityByWant: function(...args) {
            console.warn("bundle.queryAbilityByWant interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, Array(BundleInfoMock));
            } else {
                return new Promise((resolve) => {
                    resolve(Array(BundleInfoMock));
                })
            }
        },
        getAllApplicationInfo: function(...args){
            console.warn("bundle.getAllApplicationInfo interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, Array(BundleInfoMock));
            } else {
                return new Promise((resolve) => {
                    resolve(Array(BundleInfoMock));
                })
            }
        },
        getAllBundleInfo: function(...args) {
            console.warn("bundle.getAllBundleInfo interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, Array(ApplicationInfoMock));
            } else {
                return new Promise((resolve) => {
                    resolve(Array(ApplicationInfoMock));
                })
            }
        },
        getBundleArchiveInfo:  function(...args) {
            console.warn("bundle.getBundleArchiveInfo interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, Array(BundleInfoMock));
            } else {
                return new Promise((resolve) => {
                    resolve(Array(BundleInfoMock));
                })
            }
        },
        getLaunchWantForBundle: function(...args) {
            console.warn("bundle.getBundleArchiveInfo interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, Array(WantMock));
            } else {
                return new Promise((resolve) => {
                    resolve(Array(WantMock));
                })
            }
        },
        getAllShortcutInfo: function(...args) {
            console.warn("bundle.getAllShortcutInfo interface mocked in the Previewer. How this interface works on the" +
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
        getModuleUsageRecords: function(...args) {
            console.warn("bundle.getAllShortcutInfo interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, Array(ModuleUsageRecordMock));
            } else {
                return new Promise((resolve) => {
                    resolve(Array(ModuleUsageRecordMock));
                })
            }
        },
        cleanBundleCacheFiles: function(...args) {
            console.warn("bundle.cleanBundleCacheFiles interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve) => {
                    resolve(paramMock.paramNumberMock);
                })
            }
        },
        setApplicationEnabled: function(...args) {
            console.warn("bundle.setApplicationEnabled interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve) => {
                    resolve(paramMock.paramNumberMock);
                })
            }
        },
        setAbilityEnabled: function(...args) {
            console.warn("bundle.setApplicationEnabled interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve) => {
                    resolve(paramMock.paramNumberMock);
                })
            }
        }
    };
    return bundle;
}