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

export const AbilityInfoMock = {
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