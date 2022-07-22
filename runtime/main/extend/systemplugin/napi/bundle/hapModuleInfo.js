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
import { AbilityInfo } from './abilityInfo';
import { ExtensionAbilityInfo } from './extensionAbilityInfo';
import { Metadata } from './metadata';


export const HapModuleInfo = {
    name: "[PC preview] unknown name",
    description: "[PC preview] unknown description",
    descriptionId: "[PC preview] unknown descriptionId",
    icon: "[PC preview] unknown icon",
    label: "[PC preview] unknown label",
    labelId: "[PC preview] unknown labelId",
    iconId: "[PC preview] unknown iconId",
    backgroundImg: "[PC preview] unknown backgroundImg",
    supportedModes: "[PC preview] unknown supportedModes",
    reqCapabilities: [paramMock.paramStringMock],
    deviceTypes: [paramMock.paramStringMock],
    abilityInfo: [AbilityInfo],
    moduleName: "[PC preview] unknown moduleName",
    mainAbilityName: "[PC preview] unknown mainAbilityName",
    installationFree: "[PC preview] unknown installationFree",
    mainElementName: "[PC preview] unknown mainElementName",
    extensionAbilityInfo: [ExtensionAbilityInfo],
    metadata: [Metadata],
    hashValue: "[PC preview] unknown mainElementName",
}