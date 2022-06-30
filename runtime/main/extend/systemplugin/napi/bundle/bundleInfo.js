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

export const BundleInfoMock = {
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
            name: "[PC preview] unknown name",
            type: '[[PC Preview] unknow type]',
            appId: '[[PC Preview] unknow appId]',
            label: "[PC preview] unknown label",
            description: "[PC preview] unknown description",
            uid: '[[PC Preview] unknow uid]',
            installTime: '[[PC Preview] unknow installTime]',
            updateTime: '[[PC Preview] unknow updateTime]',
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
};

export const BundlePackInfo = {
    packages: [{
        deviceType: ["[PC preview] unknown deviceType"],
        name: "[PC preview] unknown name",
        moduleType: "[PC preview] unknown moduleType",
        deliveryWithInstall: "[PC preview] unknown deliveryWithInstall",
    }],
    summary: {
        app: {
            bundleName: "[PC preview] unknown bundleName",
            version: {
                minCompatibleVersionCode: "[PC preview] unknown minCompatibleVersionCode",
                name: "[PC preview] unknown name",
                code: "[PC preview] unknown code",
            },
        },
        modules: [
            {
                apiVersion: {
                    releaseType: "[PC preview] unknown releaseType",
                    compatible: "[PC preview] unknown compatible",
                    target: "[PC preview] unknown target",
                },
                deviceType: ["[PC preview] unknown deviceType"],
                distro: {
                    mainAbility: "[PC preview] unknown mainAbility",
                    deliveryWithInstall: "[PC preview] unknown deliveryWithInstall",
                    installationFree: "[PC preview] unknown installationFree",
                    moduleName: "[PC preview] unknown moduleName",
                    moduleType: "[PC preview] unknown moduleType",
                },
                abilities: [
                    {
                        name: "[PC preview] unknown name",
                        label: "[PC preview] unknown label",
                        visible: "[PC preview] unknown visible",
                        forms: [
                            {
                                name: "[PC preview] unknown name",
                                type: "[PC preview] unknown type",
                                updateEnabled: "[PC preview] unknown updateEnabled",
                                scheduledUpdateTime: "[PC preview] unknown scheduledUpdateTime",
                                updateDuration: "[PC preview] unknown updateDuration",
                                supportDimensions: ["[PC preview] unknown supportDimensions"],
                                defaultDimension: "[PC preview] unknown defaultDimension",
                            }
                        ],

                    }
                ],
                extensionAbilities: [
                    {
                        name: "[PC preview] unknown name",
                        forms: [
                            {
                                name: "[PC preview] unknown name",
                                type: "[PC preview] unknown type",
                                updateEnabled: "[PC preview] unknown updateEnabled",
                                scheduledUpdateTime: "[PC preview] unknown scheduledUpdateTime",
                                updateDuration: "[PC preview] unknown updateDuration",
                                supportDimensions: ["[PC preview] unknown supportDimensions"],
                                defaultDimension: "[PC preview] unknown defaultDimension",
                            }
                        ],
                    }
                ]
            }
        ]
    }
};

export const DispatchInfoMock = {
    verison: "[PC preview] unknown verison",
    dispatchAPI: "[PC preview] unknown dispatchAPI",
}