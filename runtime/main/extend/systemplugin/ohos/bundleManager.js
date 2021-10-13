import { paramMock } from "../utils"

export function mockBundleManager() {
    const BundleInstallerMock= {}
const BundleInfoMock = {
    name: "[PC preview] unknown name",
    type: "[PC preview] unknown type",
    appId: "[PC preview] unknown app id",
    uid: "[PC preview] unknown uid",
    installTime: "[PC preview] unknown install time",
    updateTime: "[PC preview] unknown up date time",
    appInfo: {
        packageName: "[PC preview] unknown package name",
        className: "[PC preview] unknown class name",
        name: "[PC preview] unknown name",
        labelId: "[PC preview] unknown label id",
        iconId: "[PC preview] unknown icon id",
        sourceDir: "[PC preview] unknown source dir",
        flags: "[PC preview] unknown flags",
        customizeData: {
            key: "[PC preview] unknown key",
            value: {
                CustomizeData: {
                    name: "[PC preview] unknown name",
                    value: "[PC preview] unknown value",
                }
            }
        }
    },
    abilityInfo: [
        {
            bundleName: "[PC preview] unknown bundle name",
            name: "[PC preview] unknown name",
            label: "[PC preview] unknown label",
            description: "[PC preview] unknown description",
            icon: "[PC preview] unknown icon",
            labelId: "[PC preview] unknown label id",
            descriptionId: "[PC preview] unknown description id",
            iconId: "[PC preview] unknown icon id",
            moduleName: "[PC preview] unknown module name",
            process: "[PC preview] unknown process",
            targetAbility: "[PC preview] unknown target ability",
            backgroundModes: "[PC preview] unknown background modes",
            isVisible: "[PC preview] unknown is visible",
            formEnabled: "[PC preview] unknown form enabled",
            type: "[PC preview] unknown type",
            subType: "[PC preview] unknown sub type",
            orientation: "[PC preview] unknown orientation",
            launchMode: "[PC preview] unknown launch mode",
            permissions: ["[PC preview] unknown permission"],
            deviceTypes: ["[PC preview] unknown device type"],
            deviceCapabilities: ["[PC preview] unknown device capability"],
            readPermission: "[PC preview] unknown read permission",
            writePermission: "[PC preview] unknown write permission",
            applicationInfo: {
                packageName: "[PC preview] unknown package name",
                className: "[PC preview] unknown class name",
                name: "[PC preview] unknown name",
                labelId: "[PC preview] unknown label id",
                iconId: "[PC preview] unknown icon id",
                sourceDir: "[PC preview] unknown source dir",
                flags: "[PC preview] unknown flags",
                customizeData: {
                    key: "[PC preview] unknown key",
                    value: {
                        CustomizeData: {
                            name: "[PC preview] unknown name",
                            value: "[PC preview] unknown value",
                        }
                    }
                }
            },
            formEntity: "[PC preview] unknown form entity",
            minFormHeight: "[PC preview] unknown min form height",
            defaultFormHeight: "[PC preview] unknown default form height",
            minFormWidth: "[PC preview] unknown min form width",
            defaultFormWidth: "[PC preview] unknown default form width",
            uri: "[PC preview] unknown uri",
            customizeData: {
                key: "[PC preview] unknown key",
                value: [
                    {
                        CustomizeData: {
                            name: "[PC preview] unknown name",
                            value: "[PC preview] unknown value",
                        },
                    },
                    {
                        CustomizeData: {
                            name: "[PC preview] unknown name",
                            value: "[PC preview] unknown value",
                        },
                    }
                ]
            },
        }
    ],
    reqPermissions: ["[PC preview] unknown repermission"],
    reqPermissionDetails: [
        {
            name: "[PC preview] unknown name",
            reason: "[PC preview] unknown reason",
            usedScene: {
                abilities: ["[PC preview] unknown ability"],
                when: "[PC preview] unknown when",
            }
        }
    ],
    vendor: "[PC preview] unknown vendor",
    versionCode: "[PC preview] unknown versionCode",
    versionName: "[PC preview] unknown versionName",
    compatibleVersion: "[PC preview] unknown compatibleVersion",
    targetVersion: "[PC preview] unknown targetVersion",
    isCompressNativeLibs: "[PC preview] unknown isCompressNativeLibs",
    hapModuleInfo: [
        {
            name: "string",
            description: "string",
            descriptionId: 1,
            icon: "string",
            label: "string",
            labelId: 2,
            iconId: 3,
            backgroundImg: "string",
            supportedModes: 4,
            reqCapabilities: ["1", "2"],
            deviceTypes: ["1", "2"],
            abilityInfo: [
                {
                    bundleName: "string",
                    name: "string",
                    label: "string",
                    description: "string",
                    icon: "string",
                    labelId: 1,
                    descriptionId: 2,
                    iconId: 3,
                    moduleName: "string",
                    process: "string",
                    targetAbility: "string",
                    backgroundModes: 4,
                    isVisible: true,
                    formEnabled: true,
                    type: "bundle.AbilityType",
                    subType: "bundle.AbilitySubType",
                    orientation: "bundle.DisplayOrientation",
                    launchMode: "bundle.LaunchMode",
                    permissions: ["1"],
                    deviceTypes: ["2"],
                    deviceCapabilities: ["3"],
                    readPermission: "string",
                    writePermission: "string",
                    applicationInfo: {
                        packageName: "[PC preview] unknown package name",
                        className: "[PC preview] unknown class name",
                        name: "[PC preview] unknown name",
                        labelId: 2,
                        iconId: 3,
                        sourceDir: "[PC preview] unknown source dir",
                        flags: 1,
                        customizeData: {
                            key: "[PC preview] unknown key",
                            value: {
                                CustomizeData: {
                                    name: "[PC preview] unknown name",
                                    value: "[PC preview] unknown value",
                                }
                            }
                        }
                    },
                    formEntity: 5,
                    minFormHeight: 6,
                    defaultFormHeight: 7,
                    minFormWidth: 8,
                    defaultFormWidth: 9,
                    uri: "string",
                    customizeData: {
                        key: "[PC preview] unknown key",
                        value: [
                            {
                                CustomizeData: {
                                    name: "[PC preview] unknown name",
                                    value: "[PC preview] unknown value",
                                },
                            },
                            {
                                CustomizeData: {
                                    name: "[PC preview] unknown name",
                                    value: "[PC preview] unknown value",
                                },
                            }
                        ]
                    },
                }
            ],
            moduleName: "string",
            mainAbilityName: "string",
            installationFree: true,
        }
    ],
    entryModuleName: "string",
    cpuAbi: "string",
    isSilentInstallation: "string",
    minCompatibleVersionCode: 7,
    entryInstallationFree: true,
}
const PermissionDefsMock = [
    {
        name:1,
        permissionFlags:2,
        grantMode:3,
        availableScope:4,
        labelRes:5,
        descriptionRes:6,
        group:"string",
        usageInfo:7,
        reminderDesc:"string",
        reminderDesc:8
    }
]
const BundlePackInfoMock = {
    packages: [
        {
            deviceType: ["1", "2", "3"],
            name: "1",
            moduleType: "2",
            deliveryWithInstall: true,
        }
    ],
    summary: {
        app: {
            bundleName: "1",
            version: {
                minCompatibleVersionCode: 1,
                name: "1",
                code: 1,
            }
        },
        modules: [
            {
                apiVersion: {
                    releaseType: "1",
                    compatible: 1,
                    target: 1,
                },
                deviceType: ["1", "2"],
                distro: {
                    deliveryWithInstall: true,
                    installationFree: true,
                    moduleName: "1",
                    moduleType: "2",
                    mainAbility: "3",
                },
                abilities: [
                    {
                        name: "1",
                        label: "2",
                        visible: true,
                        forms: [
                            {
                                name: "1",
                                type: "2",
                                updateEnabled: true,
                                scheduledUpateTime: "3",
                                updateDuration: 4,
                                supportDimensions: [1, 2, 3],
                                defaultDimension: 1,
                            }
                        ]
                    }
                ]
            }

        ]
    },
}
const ApplicationInfosMock = [
    {
        packageName: "[PC preview] unknown package name",
        className: "[PC preview] unknown class name",
        name: "[PC preview] unknown name",
        labelId: 1,
        iconId: 2,
        sourceDir: "[PC preview] unknown source dir",
        flags: 3,
        customizeData: {
            key: "[PC preview] unknown key",
            value: {
                CustomizeData: {
                    name: "[PC preview] unknown name",
                    value: "[PC preview] unknown value",
                }
            }
        }
    },
]

const AbilityInfosMock = [
    {
        bundleName: "string",
        name: "string",
        label: "string",
        description: "string",
        icon: "string",
        labelId: 1,
        descriptionId: 2,
        iconId: 3,
        moduleName: "string",
        process: "string",
        targetAbility: "string",
        backgroundModes: 4,
        isVisible: true,
        formEnabled: true,
        type: "bundle.AbilityType",
        subType: "bundle.AbilitySubType",
        orientation: "bundle.DisplayOrientation",
        launchMode: "bundle.LaunchMode",
        permissions: ["1"],
        deviceTypes: ["2"],
        deviceCapabilities: ["3"],
        readPermission: "string",
        writePermission: "string",
        applicationInfo: {
            packageName: "[PC preview] unknown package name",
            className: "[PC preview] unknown class name",
            name: "[PC preview] unknown name",
            labelId: "[PC preview] unknown label id",
            iconId: "[PC preview] unknown icon id",
            sourceDir: "[PC preview] unknown source dir",
            flags: "[PC preview] unknown flags",
            customizeData: {
                key: "[PC preview] unknown key",
                value: {
                    CustomizeData: {
                        name: "[PC preview] unknown name",
                        value: "[PC preview] unknown value",
                    }
                }
            }
        },
        formEntity: 5,
        minFormHeight: 6,
        defaultFormHeight: 7,
        minFormWidth: 8,
        defaultFormWidth: 9,
        uri: "string",
        customizeData: {
            key: "[PC preview] unknown key",
            value: [
                {
                    CustomizeData: {
                        name: "[PC preview] unknown name",
                        value: "[PC preview] unknown value",
                    },
                },
                {
                    CustomizeData: {
                        name: "[PC preview] unknown name",
                        value: "[PC preview] unknown value",
                    },
                }
            ]
        },
    }
]
const AbilityInfoMock = {
    bundleName: "string",
    name: "string",
    label: "string",
    description: "string",
    icon: "string",
    labelId: 1,
    descriptionId: 2,
    iconId: 3,
    moduleName: "string",
    process: "string",
    targetAbility: "string",
    backgroundModes: 4,
    isVisible: true,
    formEnabled: true,
    type: "bundle.AbilityType",
    subType: "bundle.AbilitySubType",
    orientation: "bundle.DisplayOrientation",
    launchMode: "bundle.LaunchMode",
    permissions: ["1"],
    deviceTypes: ["2"],
    deviceCapabilities: ["3"],
    readPermission: "string",
    writePermission: "string",
    applicationInfo: {
        packageName: "[PC preview] unknown package name",
        className: "[PC preview] unknown class name",
        name: "[PC preview] unknown name",
        labelId: 1,
        iconId: 2,
        sourceDir: "[PC preview] unknown source dir",
        flags: 3,
        customizeData: {
            key: "[PC preview] unknown key",
            value: {
                CustomizeData: {
                    name: "[PC preview] unknown name",
                    value: "[PC preview] unknown value",
                }
            }
        }
    },
    formEntity: 5,
    minFormHeight: 6,
    defaultFormHeight: 7,
    minFormWidth: 8,
    defaultFormWidth: 9,
    uri: "string",
    customizeData: {
        key: "[PC preview] unknown key",
        value: [
            {
                CustomizeData: {
                    name: "[PC preview] unknown name",
                    value: "[PC preview] unknown value",
                },
            },
            {
                CustomizeData: {
                    name: "[PC preview] unknown name",
                    value: "[PC preview] unknown value",
                },
            }
        ]
    },
}
const ApplicationInfoMock = {
    packageName: "[PC preview] unknown package name",
    className: "[PC preview] unknown class name",
    name: "[PC preview] unknown name",
    labelId: 1,
    iconId: 2,
    sourceDir: "[PC preview] unknown source dir",
    flags: 3,
    customizeData: {
        key: "[PC preview] unknown key",
        value: {
            CustomizeData: {
                name: "[PC preview] unknown name",
                value: "[PC preview] unknown value",
            }
        }
    }
}

const BundleInfosMock = [
    {
        name: "string",
        type: "string",
        appId: "string",
        uid: 1,
        installTime: 2,
        updateTime: 3,
        appInfo: {
            packageName: "[PC preview] unknown package name",
            className: "[PC preview] unknown class name",
            name: "[PC preview] unknown name",
            labelId: "[PC preview] unknown label id",
            iconId: "[PC preview] unknown icon id",
            sourceDir: "[PC preview] unknown source dir",
            flags: "[PC preview] unknown flags",
            customizeData: {
                key: "[PC preview] unknown key",
                value: {
                    CustomizeData: {
                        name: "[PC preview] unknown name",
                        value: "[PC preview] unknown value",
                    }
                }
            }
        },
        abilityInfo: [
            {
                bundleName: "string",
                name: "string",
                label: "string",
                description: "string",
                icon: "string",
                labelId: 1,
                descriptionId: 2,
                iconId: 3,
                moduleName: "string",
                process: "string",
                targetAbility: "string",
                backgroundModes: 4,
                isVisible: true,
                formEnabled: true,
                type: "bundle.AbilityType",
                subType: "bundle.AbilitySubType",
                orientation: "bundle.DisplayOrientation",
                launchMode: "bundle.LaunchMode",
                permissions: ["1"],
                deviceTypes: ["2"],
                deviceCapabilities: ["3"],
                readPermission: "string",
                writePermission: "string",
                applicationInfo: {
                    packageName: "[PC preview] unknown package name",
                    className: "[PC preview] unknown class name",
                    name: "[PC preview] unknown name",
                    labelId: "[PC preview] unknown label id",
                    iconId: "[PC preview] unknown icon id",
                    sourceDir: "[PC preview] unknown source dir",
                    flags: "[PC preview] unknown flags",
                    customizeData: {
                        key: "[PC preview] unknown key",
                        value: {
                            CustomizeData: {
                                name: "[PC preview] unknown name",
                                value: "[PC preview] unknown value",
                            }
                        }
                    }
                },
                formEntity: 5,
                minFormHeight: 6,
                defaultFormHeight: 7,
                minFormWidth: 8,
                defaultFormWidth: 9,
                uri: "string",
                customizeData: {
                    key: "[PC preview] unknown key",
                    value: [
                        {
                            CustomizeData: {
                                name: "[PC preview] unknown name",
                                value: "[PC preview] unknown value",
                            },
                        },
                        {
                            CustomizeData: {
                                name: "[PC preview] unknown name",
                                value: "[PC preview] unknown value",
                            },
                        }
                    ],
                },
            }
        ],
        reqPermissions: ["1", "2", "3"],
        reqPermissionDetails: [
            {
                name: "string",
                reason: "string",
                usedScene: {
                    abilities: ["1,", "2"],
                    when: "string",
                }
            }
        ],
        vendor: "string",
        versionCode: 1,
        versionName: "string",
        compatibleVersion: 2,
        targetVersion: 3,
        isCompressNativeLibs: true,
        hapModuleInfo: [
            {
                name: "string",
                description: "string",
                descriptionId: 1,
                icon: "string",
                label: "string",
                labelId: 2,
                iconId: 3,
                backgroundImg: "string",
                supportedModes: 4,
                reqCapabilities: ["1", "2"],
                deviceTypes: ["1", "2"],
                abilityInfo: [
                    {
                        bundleName: "string",
                        name: "string",
                        label: "string",
                        description: "string",
                        icon: "string",
                        labelId: 1,
                        descriptionId: 2,
                        iconId: 3,
                        moduleName: "string",
                        process: "string",
                        targetAbility: "string",
                        backgroundModes: 4,
                        isVisible: true,
                        formEnabled: true,
                        type: "bundle.AbilityType",
                        subType: "bundle.AbilitySubType",
                        orientation: "bundle.DisplayOrientation",
                        launchMode: "bundle.LaunchMode",
                        permissions: ["1"],
                        deviceTypes: ["2"],
                        deviceCapabilities: ["3"],
                        readPermission: "string",
                        writePermission: "string",
                        applicationInfo: {
                            packageName: "[PC preview] unknown package name",
                            className: "[PC preview] unknown class name",
                            name: "[PC preview] unknown name",
                            labelId: "[PC preview] unknown label id",
                            iconId: "[PC preview] unknown icon id",
                            sourceDir: "[PC preview] unknown source dir",
                            flags: "[PC preview] unknown flags",
                            customizeData: {
                                key: "[PC preview] unknown key",
                                value: {
                                    CustomizeData: {
                                        name: "[PC preview] unknown name",
                                        value: "[PC preview] unknown value",
                                    }
                                }
                            }
                        },
                        formEntity: 5,
                        minFormHeight: 6,
                        defaultFormHeight: 7,
                        minFormWidth: 8,
                        defaultFormWidth: 9,
                        uri: "string",
                        customizeData: {
                            key: "[PC preview] unknown key",
                            value: [
                                {
                                    CustomizeData: {
                                        name: "[PC preview] unknown name",
                                        value: "[PC preview] unknown value",
                                    },
                                },
                                {
                                    CustomizeData: {
                                        name: "[PC preview] unknown name",
                                        value: "[PC preview] unknown value",
                                    },
                                }
                            ]
                        },
                    }
                ],
                moduleName: "string",
                mainAbilityName: "string",
                installationFree: true,
            }
        ],
        entryModuleName: "string",
        cpuAbi: "string",
        isSilentInstallation: "string",
        minCompatibleVersionCode: 7,
        entryInstallationFree: true,
    }

]



const BundleOptionsMock = {
    userId: 1,
    networkId: "[PC preview] unknown network id",
}
const PermissionDefMock = {
    name:"string",
    permissionFlags : "string",
    grantMode:1,
    availableScope:2,
    labelRes:3,
    descriptionRes:4,
    group:"string",
    usageInfo:5,
    reminderDesc:"string",
    reminderIcon:6
}

    const BundleFlagMock = {
        GET_BUNDLE_DEFAULT: 0x00000000,
        GET_BUNDLE_WITH_ABILITIES: 0x00000001,
        GET_ABILITY_INFO_WITH_PERMISSION: 0x00000002,
        GET_ABILITY_INFO_WITH_APPLICATION: 0x00000004,
        GET_APPLICATION_INFO_WITH_PERMISSION: 0x00000008,
        GET_BUNDLE_WITH_REQUESTED_PERMISSION: 0x00000010,
        GET_ALL_APPLICATION_INFO: 0xFFFF0000,
    }
    const ColorModeMock = {
        AUTO_MODE: -1,
        DARK_MODE: 0,
        LIGHT_MODE: 1,
    }
    const GrantStatusMock = {
        PERMISSION_DENIED: -1,
        PERMISSION_GRANTED: 0,
    }
    const AbilityTypeMock = {
        UNKNOWN: 0,
        PAGE: 1,
        SERVICE: 2,
        DATA: 3
    }
    const AbilitySubTypeMock = {
        UNSPECIFIED: 0,
        CA: 1,
    }
    const DisplayOrientationMock = {
        UNSPECIFIED:0,
        LANDSCAPE:1,
        PORTRAIT:2,
        FOLLOW_RECENT:3
    }
    const LaunchModeMock = {
        SINGLETON: 0,
        STANDARD: 1,
    }
    const InstallErrorCodeMock = {
        SUCCESS: 0,
        STATUS_INSTALL_FAILURE: 1,
        STATUS_INSTALL_FAILURE_ABORTED: 2,
        STATUS_INSTALL_FAILURE_INVALID: 3,
        STATUS_INSTALL_FAILURE_CONFLICT: 4,
        STATUS_INSTALL_FAILURE_STORAGE: 5,
        STATUS_INSTALL_FAILURE_INCOMPATIBLE: 6,
        STATUS_UNINSTALL_FAILURE: 7,
        STATUS_UNINSTALL_FAILURE_BLOCKE: 8,
        STATUS_UNINSTALL_FAILURE_ABORTED: 9,
        STATUS_UNINSTALL_FAILURE_CONFLICT: 10,
        STATUS_INSTALL_FAILURE_DOWNLOAD_TIMEOUT: 0x0B,
        STATUS_INSTALL_FAILURE_DOWNLOAD_FAILED: 0x0C,
        STATUS_ABILITY_NOT_FOUND: 0x40,
        STATUS_BMS_SERVICE_ERROR: 0x41
    }
    const BundleErrorMock = {
        REMOTE_EXCEPTION:0,
        SECURITY_EXCEPTION:1
    }

    global.ohosplugin.bundle = {
        getBundleInfo: function (...args) {
            console.warn("BundleManger.getBundleInfo interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, BundleInfoMock)
            } else {
                return new Promise((resolve) => {
                    resolve(BundleInfoMock)
                });
            }
        },
        getBundleInstaller: function (...args) {
            console.warn("BundleManger.getBundleInstaller interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, BundleInstallerMock)
            } else {
                return new Promise((resolve) => {
                    resolve(BundleInstallerMock)
                });
            }
        },
        getApplicationInfo: function (...args) {
            console.warn("BundleManger.getApplicationInfo interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, ApplicationInfoMock)
            } else {
                return new Promise((resolve) => {
                    resolve(ApplicationInfoMock)
                });
            }
        },
        queryAbilityByWant: function (...args) {
            console.warn("BundleManger.queryAbilityByWant interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, AbilityInfosMock)
            } else {
                return new Promise((resolve) => {
                    resolve(AbilityInfosMock)
                });
            }
        },
        getAllBundleInfo: function (...args) {
            console.warn("BundleManger.getAllBundleInfo interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, BundleInfosMock)
            } else {
                return new Promise((resolve) => {
                    resolve(BundleInfosMock)
                });
            }
        },
        getAllApplicationInfo: function (...args) {
            console.warn("BundleManger.getAllApplicationInfo interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, ApplicationInfosMock)
            } else {
                return new Promise((resolve) => {
                    resolve(ApplicationInfosMock)
                });
            }
        },
        getBundleArchiveInfo: function (...args) {
            console.warn("BundleManger.getBundleArchiveInfo interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, BundleInfoMock)
            } else {
                return new Promise((resolve) => {
                    resolve(BundleInfoMock)
                });
            }
        },
        getBundlePackInfo: function (...args) {
            console.warn("BundleManger.getBundlePackInfo interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, BundlePackInfoMock)
            } else {
                return new Promise((resolve) => {
                    resolve(BundlePackInfoMock)
                });
            }
        },
        getAbilityInfo: function (...args) {
            console.warn("BundleManger.getAbilityInfo interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, AbilityInfoMock)
            } else {
                return new Promise((resolve) => {
                    resolve(AbilityInfoMock)
                });
            }
        },
        getPermissionDefByGroup: function (...args) {
            console.warn("BundleManger.getPermissionDefByGroup interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, PermissionDefsMock)
            } else {
                return new Promise((resolve) => {
                    resolve(PermissionDefsMock)
                });
            }
        },
    }
}
