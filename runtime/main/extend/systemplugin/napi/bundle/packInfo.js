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

import { paramMock } from "../../utils"

export const BundlePackInfo = {
    packages: [{
        deviceType: [paramMock.paramStringMock],
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
                deviceType: [paramMock.paramStringMock],
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
                                supportDimensions: [paramMock.paramNumberMock],
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
                                supportDimensions: [paramMock.paramNumberMock],
                                defaultDimension: "[PC preview] unknown defaultDimension",
                            }
                        ],
                    }
                ]
            }
        ]
    }
}

export const PackageConfig = {
    deviceType: [paramMock.paramStringMock],
    name: "[PC preview] unknown name",
    moduleType: "[PC preview] unknown moduleType",
    deliveryWithInstall: "[PC preview] unknown deliveryWithInstall",
}

export const PackageSummary = {
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
            deviceType: [paramMock.paramStringMock],
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
                            supportDimensions: [paramMock.paramNumberMock],
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
                            supportDimensions: [paramMock.paramNumberMock],
                            defaultDimension: "[PC preview] unknown defaultDimension",
                        }
                    ],
                }
            ]
        }
    ]
}