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
import { BundleInfo, BundlePackInfo, PixelMapFormat} from './bundle/bundleInfo'
import { DispatchInfo } from './bundle/dispatchInfo'
import { ApplicationInfo, Want } from './bundle/applicationInfo'
import { AbilityInfo } from './bundle/abilityInfo'
import { PermissionDef } from './bundle/permissionDef'
import { ExtensionAbilityInfo } from './bundle/extensionAbilityInfo'

export const InstallErrorCode = {
    SUCCESS: 0,
    STATUS_INSTALL_FAILURE: 1,
    STATUS_INSTALL_FAILURE_ABORTED: 2,
    STATUS_INSTALL_FAILURE_INVALID: 3,
    STATUS_INSTALL_FAILURE_CONFLICT: 4,
    STATUS_INSTALL_FAILURE_STORAGE: 5,
    STATUS_INSTALL_FAILURE_INCOMPATIBLE: 6,
    STATUS_UNINSTALL_FAILURE: 7,
    STATUS_UNINSTALL_FAILURE_BLOCKED: 8,
    STATUS_UNINSTALL_FAILURE_ABORTED: 9,
    STATUS_INSTALL_FAILURE_DOWNLOAD_TIMEOUT: 10,
    STATUS_INSTALL_FAILURE_DOWNLOAD_FAILED: 0x0B,
    STATUS_RECOVER_FAILURE_INVALID: 0x0C,
    STATUS_INSTALL_FAILURE_DOWNLOAD_FAILED: 0x0D,
    STATUS_ABILITY_NOT_FOUND: 0x40,
    STATUS_BMS_SERVICE_ERROR: 0x41,
    STATUS_FAILED_NO_SPACE_LEFT: 0x42,
    STATUS_GRANT_REQUEST_PERMISSIONS_FAILED: 0x43,
    STATUS_INSTALL_PERMISSION_DENIED: 0x44,
    STATUS_UNINSTALL_PERMISSION_DENIED: 0x45,
}

export function mockBundle() {
    const bundle = {
        getBundleInfo: function(...args) {
            console.warn("bundle.getBundleInfo interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, BundleInfo);
            } else {
                return new Promise((resolve) => {
                    resolve(BundleInfo);
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
                args[len - 1].call(this, paramMock.businessErrorMock, ApplicationInfo);
            } else {
                return new Promise((resolve) => {
                    resolve(ApplicationInfo);
                })
            }
        },
        queryAbilityByWant: function(...args) {
            console.warn("bundle.queryAbilityByWant interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, Array(BundleInfo));
            } else {
                return new Promise((resolve) => {
                    resolve(Array(BundleInfo));
                })
            }
        },
        getAllApplicationInfo: function(...args){
            console.warn("bundle.getAllApplicationInfo interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, Array(BundleInfo));
            } else {
                return new Promise((resolve) => {
                    resolve(Array(BundleInfo));
                })
            }
        },
        getAllBundleInfo: function(...args) {
            console.warn("bundle.getAllBundleInfo interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, Array(ApplicationInfo));
            } else {
                return new Promise((resolve) => {
                    resolve(Array(ApplicationInfo));
                })
            }
        },
        getBundleArchiveInfo:  function(...args) {
            console.warn("bundle.getBundleArchiveInfo interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, Array(BundleInfo));
            } else {
                return new Promise((resolve) => {
                    resolve(Array(BundleInfo));
                })
            }
        },
        getLaunchWantForBundle: function(...args) {
            console.warn("bundle.getBundleArchiveInfo interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, Array(Want));
            } else {
                return new Promise((resolve) => {
                    resolve(Array(Want));
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
                args[len - 1].call(this,paramMock.businessErrorMock, Array(ExtensionAbilityInfo))
            } else {
                return new Promise((resolve) => {
                    resolve(Array(ExtensionAbilityInfo))
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
                args[len - 1].call(this, paramMock.businessErrorMock, DispatchInfo);
            } else {
                return new Promise((resolve) => {
                    resolve(DispatchInfo);
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
        isAbilityEnabled: function(...args) {
            console.warn("bundle.isAbilityEnabled interface mocked in the Previewer. How this interface works on the" +
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
        isApplicationEnabled: function(...args) {
            console.warn("bundle.isApplicationEnabled interface mocked in the Previewer. How this interface works on the" +
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
        getAbilityIcon: function(...args) {
            console.warn("bundle.getAbilityIcon interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, PixelMapFormat);
            } else {
                return new Promise((resolve) => {
                    resolve(PixelMapFormat);
                })
            }
        },
        getAbilityLabel: function(...args) {
            console.warn("bundle.getAbilityLabel interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock);
            } else {
                return new Promise((resolve) => {
                    resolve(paramMock.paramStringMock);
                })
            }
        },
        getPermissionDef: function(...args) {
            console.warn("bundle.getPermissionDef interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, PermissionDef);
            } else {
                return new Promise((resolve) => {
                    resolve(PermissionDef);
                })
            }
        },
        getNameForUid: function(...args) {
            console.warn("bundle.getNameForUid interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock);
            } else {
                return new Promise((resolve) => {
                    resolve(paramMock.paramStringMock);
                })
            }
        },
        getAbilityInfo: function(...args) {
            console.warn("bundle.getAbilityInfo interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, AbilityInfo);
            } else {
                return new Promise((resolve) => {
                    resolve(AbilityInfo);
                })
            }
        },
    };
    return bundle;
}