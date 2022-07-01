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

import { paramMock } from "../utils"
import {BundleInfoMock, BundlePackInfo, DispatchInfoMock} from './bundle/bundleInfo'
import {ApplicationInfoMock} from './bundle/applicationInfo'
import {WantMock} from './bundle/applicationInfo'

export function mockBundle() {
    const extensionAbilityType = {
        FORM: 0,
        WORK_SCHEDULER: 1,
        INPUT_METHOD: 2,
        SERVICE: 3,
        ACCESSIBILITY: 4,
        DATA_SHARE: 5,
        FILE_SHARE: 6,
        STATIC_SUBSCRIBER: 7,
        WALLPAPER: 8,
        BACKUP: 9,
        WINDOW: 10,
        UNSPECIFIED: 20,
    }

    const ExtensionAbilityInfoMock = [
        {
          bundleName: "[PC preview] unknown bundle name",
          moduleName: "[PC preview] unknown module name",
          name: "[PC preview] unknown name",
          labelId: "[PC preview] unknown label id",
          descriptionId: "[PC preview] unknown description id",
          iconId: "[PC preview] unknown icon id",
          isVisible: "[PC preview] unknown is visible",
          extensionAbilityType: extensionAbilityType,
          permissions: ["[PC preview] unknown permissions"],
          applicationInfo: {
            name: "[PC preview] unknown is name",
            description: "[PC preview] unknown is description",
            descriptionId: "[PC preview] unknown is descriptionId",
            systemApp: "[PC preview] unknown is systemApp",
            enabled: "[PC preview] unknown is enabled",
            labelId: "[PC preview] unknown is labelId",
            icon: "[PC preview] unknown is icon",
            iconId: "[PC preview] unknown is iconId",
            process: "[PC preview] unknown is process",
            supportedModes: "[PC preview] unknown is supportedModes",
            moduleSourceDirs: "[PC preview] unknown is moduleSourceDirs",
            permissions: ["[PC preview] unknown is permissions"],
            moduleInfos: ["[PC preview] unknown is moduleSourceDirs"],
            entryDir: "[PC preview] unknown is entryDir",
            metaData: [{
                name: "[PC preview] unknown name",
                value: "[PC preview] unknown value",
                resource: "[PC preview] unknown resource",
            }],
            metadata: [{
                name: "[PC preview] unknown name",
                value: "[PC preview] unknown value",
                resource: "[PC preview] unknown resource",
            }],
            removable: "[PC preview] unknown is removable",
            accessTokenId: "[PC preview] unknown is accessTokenId",
            uid: "[PC preview] unknown is uid",
            entityType: "[PC preview] unknown is entityType",
            fingerprint: "[PC preview] unknown is fingerprint",
          },
          metadata: [{
            name: "[PC preview] unknown name",
            value: "[PC preview] unknown value",
            resource: "[PC preview] unknown resource",
          }],
          enabled: "[PC preview] unknown enabled",
          readPermission: "[PC preview] unknown read permission",
          writePermission: "[PC preview] unknown write permission",
        }
      ]
      
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
            console.warn("bundle.setAbilityEnabled interface mocked in the Previewer. How this interface works on the" +
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
        setModuleUpgradeFlag: function (...args) {
            console.warn("bundle.setModuleUpgradeFlag interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock)
            } else {
                return new Promise((resolve) => {
                    resolve()
                });
            }
        },
        isModuleRemovable: function (...args) {
            console.warn("bundle.isModuleRemovable interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock)
            } else {
                return new Promise((resolve) => {
                    resolve(paramMock.paramBooleanMock)
                });
            }
        },
        getProfileByAbility: function (...args) {
            console.warn("bundle.getProfileByAbility interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, new Array(paramMock.paramStringMock))
            } else {
                return new Promise((resolve) => {
                    resolve(new Array(paramMock.paramStringMock))
                });
            }
        },
        getProfileByExtensionAbility: function (...args) {
            console.warn("bundle.getProfileByExtensionAbility interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, new Array(paramMock.paramStringMock))
            } else {
                return new Promise((resolve) => {
                    resolve(new Array(paramMock.paramStringMock))
                });
            }
        },
        queryExtensionAbilityInfos: function (...args) {
            console.warn("bundle.queryExtensionAbilityInfos interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this,paramMock.businessErrorMock, Array(ExtensionAbilityInfoMock))
            } else {
                return new Promise((resolve) => {
                    resolve(Array(ExtensionAbilityInfoMock))
                });
            }
        },
        getBundlePackInfo: function(...args) {
            console.warn("bundle.getBundlePackInfo interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, BundlePackInfo);
            } else {
                return new Promise((resolve) => {
                    resolve(BundlePackInfo);
                })
            }
        },
        getDispatcherVersion: function(...args) {
            console.warn("bundle.getDispatcherVersion interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, DispatchInfoMock);
            } else {
                return new Promise((resolve) => {
                    resolve(DispatchInfoMock);
                })
            }
        },
        setDisposedStatus: function (...args) {
            console.warn("bundle.setDisposedStatus interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock)
            } else {
                return new Promise((resolve) => {
                    resolve()
                });
            }
        },
        getDisposedStatus: function (...args) {
            console.warn("bundle.getDisposedStatus interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock)
            } else {
                return new Promise((resolve) => {
                    resolve(paramMock.paramNumberMock)
                });
            }
        },
    };
    return bundle;
}