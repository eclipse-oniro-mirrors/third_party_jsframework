import {paramMock} from "../../utils"

const ModuleInfoMock = {
    moduleName: '[PC preview] unknow moduleName',
    moduleSourceDir: '[PC preview] unknow moduleSourceDir',
}
export const AbilityInfoMock = {
    bundleName: '[PC preview] unknow bundleName',
    name: '[PC preview] unknow name',
    label: '[PC preview] unknow label',
    description: '[PC preview] unknow description',
    icon: '[PC preview] unknow icon',
    labelId: '[PC preview] unknow labelId',
    descriptionId: '[PC preview] unknow descriptionId',
    iconId: '[PC preview] unknow iconId',
    moduleName: '[PC preview] unknow moduleName',
    process: '[PC preview] unknow process',
    targetAbility: '[PC preview] unknow targetAbility',
    backgroundModes: '[PC preview] unknow backgroundModes',
    isVisible: '[PC preview] unknow isVisible',
    abilityTypeMock: '[PC preview] unknow abilityTypeMock',
    AbilitySubTypeMock: '[PC preview] unknow AbilitySubTypeMock',
    DisplayOrientationMock: '[PC preview] unknow DisplayOrientationMock',
    launchModeMock: '[PC preview] unknow launchModeMock',
    formEnabled: '[PC preview] unknow formEnabled',
    permissions: [paramMock.paramStringMock],
    deviceTypes: [paramMock.paramStringMock],
    deviceCapabilities: [paramMock.paramStringMock],
    readPermission: '[PC preview] unknow readPermission',
    writePermission: '[PC preview] unknow writePermission',
    applicationInfo: applicationInfoMock,
    formEntity: '[PC preview] unknow formEntity',
    minFormHeight: '[PC preview] unknow minFormHeight',
    defaultFormHeight: '[PC preview] unknow defaultFormHeight',
    minFormWidth: '[PC preview] unknow minFormWidth',
    defaultFormWidth: '[PC preview] unknow defaultFormWidth',
    uri: '[PC preview] unknow uri',
    customizeData: new Map([["[PC Preview] unknow customizeDataKey", "[PC Preview] unknow customizeDataValue"]])
}
const applicationInfoMock = {
    name: '[PC preview] unknow name',
    description: '[PC preview] unknow description',
    descriptionId: '[PC preview] unknow descriptionId',
    systemApp: '[PC preview] unknow systemApp',
    enabled: '[PC preview] unknow enabled',
    label: '[PC preview] unknow label',
    labelId: '[PC preview] unknow labelId',
    icon: '[PC preview] unknow icon',
    iconId: '[PC preview] unknow iconId',
    process: '[PC preview] unknow process',
    supportedModes: '[PC preview] unknow supportedModes',
    moduleSourceDirs: [paramMock.paramStringMock],
    permissions: [paramMock.paramStringMock],
    moduleInfo: [ModuleInfoMock],
    entryDir: '[PC preview] unknow entryDir',
    codepath: '[PC preview] unknow codepath',
    removable: '[PC preview] unknow removable',
    customizeData: new Map([["[PC Preview] unknow customizeDataKey", "[PC Preview] unknow customizeDataValue"]])
}
const HapModuleInfoMock = {
    name: '[PC preview] unknow name',
    description: '[PC preview] unknow description',
    descriptionId: '[PC preview] unknow descriptionId',
    icon: '[PC preview] unknow icon',
    label: '[PC preview] unknow label',
    labelId: '[PC preview] unknow labelId',
    iconId: '[PC preview] unknow iconId',
    backgroundImg: '[PC preview] unknow backgroundImg',
    supportedModes: '[PC preview] unknow supportedModes',
    reqCapabilities: [paramMock.paramStringMock],
    deviceTypes: [paramMock.paramStringMock],
    abilityInfo: AbilityInfoMock,
    moduleName: '[PC preview] unknow moduleName',
    mainAbilityName: '[PC preview] unknow mainAbilityName',
    installationFree: '[PC preview] unknow installationFree',
}
const screenDensityMock = {
    SCREEN_SDPI: '[PC preview] unknow SCREEN_SDPI',
    SCREEN_MDPI: '[PC preview] unknow SCREEN_MDPI',
    SCREEN_LDPI: '[PC preview] unknow SCREEN_LDPI',
    SCREEN_XLDPI: '[PC preview] unknow SCREEN_XLDPI',
    SCREEN_XXLDPI: '[PC preview] unknow SCREEN_XXLDPI',
    SCREEN_XXXLDPI: '[PC preview] unknow SCREEN_XXXLDPI'
}
const deviceTypeMock = {
    DEVICE_TYPE_PHONE: '[PC preview] unknow DEVICE_TYPE_PHONE',
    DEVICE_TYPE_TABLET: '[PC preview] unknow DEVICE_TYPE_TABLET',
    DEVICE_TYPE_CAR: '[PC preview] unknow DEVICE_TYPE_CAR',
    DEVICE_TYPE_PC: '[PC preview] unknow DEVICE_TYPE_PC',
    DEVICE_TYPE_TV: '[PC preview] unknow DEVICE_TYPE_TV',
    DEVICE_TYPE_WEARABLE: '[PC preview] unknow DEVICE_TYPE_WEARABLE'
}
const DeviceCapabilityClass = class DeviceCapability {
    constructor() {
        console.warn('DeviceCapability.constructor interface mocked in the Previewer. How this interface works on' +
          ' the Previewer may be different from that on a real device.');
        screenDensity = screenDensityMock,
        deviceType = deviceTypeMock
    }
}
const configurationClass = class configuration{
    constructor() {
        console.warn('configuration.constructor interface mocked in the Previewer. How this interface works on' +
          ' the Previewer may be different from that on a real device.');
        directionMock = '[PC preview] unknow directionMock',
        locale = '[PC preview] unknow locale'
    }
}
const resourceManagerMock = {
    getString: function (...args) {
        console.warn("ResourceManager.getString interface mocked in the Previewer." +
            " How this interface works on the Previewer may be different from that on a real device.")
        const len = args.length
        if (len > 0 && typeof args[len - 1] === 'function') {
            args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock);
        } else {
            return new Promise((resolve, reject) => {
                resolve(paramMock.paramStringMock);
            })
        }
    },
    getStringArray: function (...args) {
        console.warn("ResourceManager.getStringArray interface mocked in the Previewer." +
            " How this interface works on the Previewer may be different from that on a real device.")
        const len = args.length
        if (len > 0 && typeof args[len - 1] === 'function') {
            args[len - 1].call(this, paramMock.businessErrorMock, [paramMock.paramStringMock]);
        } else {
            return new Promise((resolve, reject) => {
                resolve([paramMock.paramStringMock]);
            })
        }
    },
    getMedia: function (...args) {
        console.warn("ResourceManager.getMedia interface mocked in the Previewer." +
            " How this interface works on the Previewer may be different from that on a real device.")
        const len = args.length
        if (len > 0 && typeof args[len - 1] === 'function') {
            args[len - 1].call(this, paramMock.businessErrorMock, new Uint8Array());
        } else {
            return new Promise((resolve, reject) => {
                resolve(new Uint8Array());
            })
        }
    },
    getMediaBase64: function (...args) {
        console.warn("ResourceManager.getMediaBase64 interface mocked in the Previewer." +
            " How this interface works on the Previewer may be different from that on a real device.")
        const len = args.length
        if (len > 0 && typeof args[len - 1] === 'function') {
            args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock);
        } else {
            return new Promise((resolve, reject) => {
                resolve(paramMock.paramStringMock);
            })
        }
    },
    getDeviceCapability: function (...args) {
        console.warn("ResourceManager.getDeviceCapability interface mocked in the Previewer." +
            " How this interface works on the Previewer may be different from that on a real device.")
        const len = args.length
        if (len > 0 && typeof args[len - 1] === 'function') {
            args[len - 1].call(this, paramMock.businessErrorMock, new DeviceCapabilityClass());
        } else {
            return new Promise((resolve, reject) => {
                resolve(new DeviceCapabilityClass());
            })
        }
    },
    getConfiguration: function (...args) {
        console.warn("ResourceManager.getConfiguration interface mocked in the Previewer." +
            " How this interface works on the Previewer may be different from that on a real device.")
        const len = args.length
        if (len > 0 && typeof args[len - 1] === 'function') {
            args[len - 1].call(this, paramMock.businessErrorMock, new configurationClass());
        } else {
            return new Promise((resolve, reject) => {
                resolve(new configurationClass());
            })
        }
    },
    getPluralString: function (...args) {
        console.warn("ResourceManager.getPluralString interface mocked in the Previewer." +
            " How this interface works on the Previewer may be different from that on a real device.")
        const len = args.length
        if (len > 0 && typeof args[len - 1] === 'function') {
            args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock);
        } else {
            return new Promise((resolve, reject) => {
                resolve(paramMock.paramStringMock);
            })
        }
    },
    getRawFile: function (...args) {
        console.warn("ResourceManager.getRawFile interface mocked in the Previewer." +
            " How this interface works on the Previewer may be different from that on a real device.")
        const len = args.length
        if (len > 0 && typeof args[len - 1] === 'function') {
            args[len - 1].call(this, paramMock.businessErrorMock, new Uint8Array());
        } else {
            return new Promise((resolve, reject) => {
                resolve(new Uint8Array());
            })
        }
    },
}
export const contextClass = class context{
    constructor() {
        console.warn('context.constructor interface mocked in the Previewer. How this interface works on' +
          ' the Previewer may be different from that on a real device.');
        this.resourceManager = resourceManagerMock;
        this.applicationInfo = applicationInfoMock;
        this.HapModuleInfo = HapModuleInfoMock;
        this.cacheDir = '[PC preview] unknow cacheDir';
        this.tempDir = '[PC preview] unknow tempDir';
        this.filesDir = '[PC preview] unknow filesDir';
        this.databaseDir = '[PC preview] unknow databaseDir';
        this.storageDir = '[PC preview] unknow storageDir';
        this.bundleCodeDir = '[PC preview] unknow bundleCodeDir';
        this.distributedFilesDir = '[PC preview] unknow distributedFilesDir';
    }
};
export const abilityStageContextClass = class abilityStageContext extends contextClass{
    constructor() {
        super();
        console.warn('Context.abilityStageContext.constructor interface mocked in the Previewer. How this interface works on' +
          ' the Previewer may be different from that on a real device.');
        this.currentHapModuleInfo = HapModuleInfoMock;
    }
}
export const ExtensionContextClass = class ExtensionContext extends contextClass {
    constructor() {
        super();
        console.warn('Context.ExtensionContext.constructor interface mocked in the Previewer. How this interface works on' +
          ' the Previewer may be different from that on a real device.');
    }
};
export const AbilityResultMock = {
    resultCode: "[PC Preview] unknow resultCode",
}
export const AbilityContextClass = class AbilityContext extends contextClass {
    constructor() {
        super();
        console.warn('Ability.AbilityContext.constructor interface mocked in the Previewer. How this interface works on' +
          ' the Previewer may be different from that on a real device.');
        this.abilityInfo = AbilityInfoMock;
        this.currentHapModuleInfo = HapModuleInfoMock;
        this.startAbility = function (...args) {
            console.warn("Ability.AbilityContext.startAbility interface mocked in the Previewer." +
                " How this interface works on the Previewer may be different from that on a real device.")
            const len = args.length
            if (len > 0 && typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve();
                })
            }
        };
        this.startAbilityForResult = function (...args) {
            console.warn("Ability.AbilityContext.startAbilityForResult interface mocked in the Previewer." +
                " How this interface works on the Previewer may be different from that on a real device.")
            const len = args.length
            if (len > 0 && typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, AbilityResultMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(AbilityResultMock);
                })
            }
        };
        this.terminateSelf = function (...args) {
            console.warn("Ability.AbilityContext.terminateSelf interface mocked in the Previewer." +
                " How this interface works on the Previewer may be different from that on a real device.")
            const len = args.length
            if (len > 0 && typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve();
                })
            }
        };
        this.terminateSelfWithResult = function (...args) {
            console.warn("Ability.AbilityContext.terminateSelfWithResult interface mocked in the Previewer." +
                " How this interface works on the Previewer may be different from that on a real device.")
            const len = args.length
            if (len > 0 && typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve();
                })
            }
        };
        this.connectAbility = function (...args) {
            console.warn("Ability.AbilityContext.connectAbility interface mocked in the Previewer. How this interface works on the Previewer" +
            " may be different from that on a real device.")
            return paramMock.paramNumberMock
        };
        this.disconnectAbility = function (...args) {
            console.warn("Ability.AbilityContext.disconnectAbility interface mocked in the Previewer." +
                " How this interface works on the Previewer may be different from that on a real device.")
            const len = args.length
            if (len > 0 && typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve();
                })
            }
        };
    }
}
export function mockAbilityContext() {
    return new AbilityContextClass();
}
