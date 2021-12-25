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

export function mockResourceManager() {
function Configuration(direction, locale) {
    this.direction = direction;
    this.locale = locale;
};

function DeviceCapability(screenDensity, deviceType) {
    this.screenDensity = screenDensity;
    this.deviceType = deviceType;
};

function ResourceManager(mgrId, module) {
    var resMgrId = mgrId;
    var resourcemgrModuleGroup = module;

    this.getString = getString;
    async function getString(resId, callback) {
        var data = "mock string";
        console.warn("ResourceManager.getString interface mocked in the Previewer. " +
            "How this interface works on the Previewer may be different from that on a real device.")
        if (typeof callback === 'function') {
            callback.call(this, null, data);
        } else {
            return new Promise((resolve) => {
                resolve(data);
            })
        }
    }

    this.getStringArray = getStringArray;
    async function getStringArray(resId, callback) {
        var data = [ "mock string1", "mock string2"];
        console.warn("ResourceManager.getStringArray interface mocked in the Previewer. " +
            "How this interface works on the Previewer may be different from that on a real device.")
        if (typeof callback === 'function') {
            callback.call(this, null, data);
        } else {
            return new Promise((resolve) => {
                resolve(data);
            })
        }
    }

    this.getJsonConfig = getJsonConfig;
    async function getJsonConfig(resId, callback) {
        var data = {"data" : { "name": "mock string1"} };
        console.warn("ResourceManager.getJsonConfig interface mocked in the Previewer." +
            " How this interface works on the Previewer may be different from that on a real device.")
        if (typeof callback === 'function') {
            callback.call(this, null, data);
        } else {
            return new Promise((resolve) => {
                resolve(data);
            })
        }
    }

    this.getMedia = getMedia;
    async function getMedia(resId, callback) {
        var data = "mock media data";
        console.warn("ResourceManager.getMedia interface mocked in the Previewer. " +
            "How this interface works on the Previewer may be different from that on a real device.")
        if (typeof callback === 'function') {
            callback.call(this, 1, data);
        } else {
            return new Promise((resolve, reject) => {
                reject(data);
            })
        }
    }

    this.getMediaBase64 = getMediaBase64;
    async function getMediaBase64(resId, callback) {
        var data = "mock media data";
        console.warn("ResourceManager.getMediaBase64 interface mocked in the Previewer. " +
            "How this interface works on the Previewer may be different from that on a real device.")
        if (typeof callback === 'function') {
            callback.call(this, 1, data);
        } else {
            return new Promise((resolve, reject) => {
                reject(data);
            })
        }
    }

    this.getPluralString = getPluralString;
    async function getPluralString(resId, num, callback) {
        var data = "mock plural string";
        console.warn("ResourceManager.getPluralString interface mocked in the Previewer. " +
            "How this interface works on the Previewer may be different from that on a real device.")
        if (typeof callback === 'function') {
            callback.call(this, null, data);
        } else {
            return new Promise((resolve) => {
                resolve(data);
            })
        }
    }

    this.getConfiguration = getConfiguration;
    async function getConfiguration(callback) {
        var data = {"direction" : 0, "locale" : "zh_CN"};
        console.warn("ResourceManager.getConfiguration interface mocked in the Previewer. " +
            "How this interface works on the Previewer may be different from that on a real device.")
        if (typeof callback === 'function') {
            callback.call(this, null, data);
        } else {
            return new Promise((resolve) => {
                resolve(data);
            })
        }
    }

    this.getDeviceCapability = getDeviceCapability;
    async function getDeviceCapability(callback) {
        var data = {"deviceType" : 0, "screenDensity" : 480 };
        console.warn("ResourceManager.getDeviceCapability interface mocked in the Previewer. " +
            "How this interface works on the Previewer may be different from that on a real device.")
        if (typeof callback === 'function') {
            callback.call(this, null, data);
        } else {
            return new Promise((resolve) => {
                resolve(data);
            })
        }
    }

    this.release = release;
    async function release(callback) {
        console.warn("ResourceManager.getJsonConfig interface mocked in the Previewer. " +
            "How this interface works on the Previewer may be different from that on a real device.")
    }

    this.getRawFile = getRawFile;
    async function getRawFile(path, callback) {
        var data = "mock raw file";
        console.warn("ResourceManager.getRawFile interface mocked in the Previewer. " +
            "How this interface works on the Previewer may be different from that on a real device.")
        if (typeof callback === 'function') {
            callback.call(this, null, data);
        } else {
            return new Promise((resolve) => {
                resolve(data);
            })
        }
    }
}

var resourceManager = {
    getResourceManager: async function getResourceManager(optBundleName, optCallback) {
        let bundleName = '';
        let callback;
        if (typeof optCallback == 'function') {
            bundleName = optBundleName ? optBundleName : '';
            callback = optCallback;
        } else if (typeof optBundleName == 'function') {
            callback = optBundleName;
        } else {
            bundleName = optBundleName ? optBundleName : '';
        }
        let data = new ResourceManager(1, null);
        console.warn("ResourceManager.getResourceManager interface mocked in the Previewer. " +
            "How this interface works on the Previewer may be different from that on a real device.")
        if (typeof callback === 'function') {
            callback.call(this, 1, data);
        } else {
            return new Promise((resolve) => {
                resolve(data);
            })
        }
    },
    getAResourceManager: async function getAResourceManager(optBundleName, optCallback) {
        let bundleName = '';
        let callback;
        if (typeof optCallback == 'function') {
            bundleName = optBundleName ? optBundleName : '';
            callback = optCallback;
        } else if (typeof optBundleName == 'function') {
            callback = optBundleName;
        } else {
            bundleName = optBundleName ? optBundleName : '';
        }

        let data = new ResourceManager(1, null);
        console.warn("ResourceManager.getAResourceManager interface mocked in the Previewer. " +
            "How this interface works on the Previewer may be different from that on a real device.")
        if (typeof callback === 'function') {
            callback.call(this, 1, data);
        } else {
            return new Promise((resolve) => {
                resolve(data);
            })
        }
    }
};

global.systemplugin.resourceManager = {
    getResourceManager: resourceManager.getResourceManager,
    getAResourceManager: resourceManager.getAResourceManager
};
};
