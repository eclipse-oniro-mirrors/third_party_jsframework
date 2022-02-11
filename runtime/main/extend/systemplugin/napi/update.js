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

import {paramMock} from "../utils"

export function mockUpdate() {
    const updater = {
        checkNewVersion: function (...args) {
            console.warn("Updater.checkNewVersion interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length
            if (len > 0 && typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, NewVersionInfo);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(NewVersionInfo);
                })
            }
        },
        download: function (...args) {
            console.warn("Updater.download interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
        },
        upgrade: function (...args) {
            console.warn("Updater.upgrade interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
        },
        getNewVersionInfo: function (...args) {
            console.warn("Updater.getNewVersionInfo interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length
            if (len > 0 && typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, NewVersionInfo);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(NewVersionInfo);
                })
            }
        },
        getUpdatePolicy: function (...args) {
            console.warn("Updater.getUpdatePolicy interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length
            if (len > 0 && typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, UpdatePolicy);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(UpdatePolicy);
                })
            }
        },
        setUpdatePolicy: function (...args) {
            console.warn("Updater.setUpdatePolicy interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length
            if (len > 0 && typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(paramMock.paramNumberMock);
                })
            }
        },
        applyNewVersion: function (...args) {
            console.warn("Updater.applyNewVersion interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length
            if (len > 0 && typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(paramMock.paramNumberMock);
                })
            }
        },
        rebootAndCleanCache: function (...args) {
            console.warn("Updater.rebootAndCleanCache interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length
            if (len > 0 && typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(paramMock.paramNumberMock);
                })
            }
        },
        verifyUpdatePackage: function (...args) {
            console.warn("Updater.verifyUpdatePackage interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
        },
        on: function (...args) {
            console.warn("Updater.on interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length
            if (len > 0 && typeof args[len - 1] === 'function') {
                args[len - 1].call(this, Progress);
            }
        },
        off: function (...args) {
            console.warn("Updater.off interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length
            if (len > 0 && typeof args[len - 1] === 'function') {
                args[len - 1].call(this, Progress);
            }
        },
        cancel: function (...args) {
            console.warn("Updater.cancel interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
        },
    }
    const update = {
        PackageTypes,
        NewVersionStatus,
        UpdateState,
        InstallMode,
        getUpdater: function (...args) {
            console.warn("update.getUpdater interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            return updater;
        },
        getUpdaterForOther: function (...args) {
            console.warn("update.getUpdaterForOther interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            return updater;
        },
        getUpdaterFromOther: function (...args) {
            console.warn("update.getUpdaterFromOther interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            return updater;
        }
    }
    return update;
}

const PackageTypes = {
    PACKAGE_TYPE_NORMAL: 1,
    PACKAGE_TYPE_BASE: 2,
    PACKAGE_TYPE_CUST: 3,
    PACKAGE_TYPE_PRELOAD: 4,
    PACKAGE_TYPE_COTA: 5,
    PACKAGE_TYPE_VERSION: 6,
    PACKAGE_TYPE_PATCH: 7,
}

const CheckResult = {
    versionName: "[PC Preview] unknow versionName",
    versionCode: "[PC Preview] unknow versionCode",
    size: "[PC Preview] unknow size",
    verifyInfo: "[PC Preview] unknow verifyInfo",
    packageType: PackageTypes.PACKAGE_TYPE_NORMAL,
    descriptionId: "[PC Preview] unknow descriptionId",
}

const DescriptionInfo = {
    descriptionId: "[PC Preview] unknow descriptionId",
    content: "[PC Preview] unknow content",
}

const NewVersionStatus = {
    VERSION_STATUS_ERR: -1,
    VERSION_STATUS_NEW: 0,
    VERSION_STATUS_NONE: 1,
    VERSION_STATUS_BUSY: 2,
}

const NewVersionInfo = {
    status: NewVersionStatus.VERSION_STATUS_NEW,
    errMsg: "[PC Preview] unknow errMsg",
    checkResults: [CheckResult],
    descriptionInfo: [DescriptionInfo]
}

const UpdateState = {
    UPDATE_STATE_INIT: 0,
    UPDATE_STATE_CHECK_VERSION_ON: 10,
    UPDATE_STATE_CHECK_VERSION_FAIL: 11,
    UPDATE_STATE_CHECK_VERSION_SUCCESS: 12,
    UPDATE_STATE_DOWNLOAD_ON: 20,
    UPDATE_STATE_DOWNLOAD_PAUSE: 21,
    UPDATE_STATE_DOWNLOAD_CANCEL: 22,
    UPDATE_STATE_DOWNLOAD_FAIL: 23,
    UPDATE_STATE_DOWNLOAD_SUCCESS: 24,
    UPDATE_STATE_VERIFY_ON: 30,
    UPDATE_STATE_VERIFY_FAIL: 31,
    UPDATE_STATE_VERIFY_SUCCESS: 32,
    UPDATE_STATE_PACKAGE_TRANS_ON: 70,
    UPDATE_STATE_PACKAGE_TRANS_FAIL: 71,
    UPDATE_STATE_PACKAGE_TRANS_SUCCESS: 72,
    UPDATE_STATE_INSTALL_ON: 80,
    UPDATE_STATE_INSTALL_FAIL: 81,
    UPDATE_STATE_INSTALL_SUCCESS: 82,
    UPDATE_STATE_UPDATE_ON: 90,
    UPDATE_STATE_UPDATE_FAIL: 91,
    UPDATE_STATE_UPDATE_SUCCESS: 92
}

const Progress = {
    percent: "[PC Preview] unknow percent",
    status: UpdateState.UPDATE_STATE_INIT,
    endReason: "[PC Preview] unknow endReason"
}

const InstallMode = {
    INSTALL_MODE_NORMAL: "[PC Preview] unknow INSTALL_MODE_NORMAL",
    INSTALL_MODE_NIGHT: "[PC Preview] unknow INSTALL_MODE_NIGHT",
    INSTALL_MODE_AUTO: "[PC Preview] unknow INSTALL_MODE_AUTO"
}

const UpdatePolicy = {
    autoDownload: "[PC Preview] unknow autoDownload",
    installMode: InstallMode.INSTALL_MODE_NORMAL,
    autoUpgradeInterval: [0]
}