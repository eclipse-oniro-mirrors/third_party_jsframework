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
export const ColorMode = {
    COLOR_MODE_NOT_SET: -1,
    COLOR_MODE_DARK: 0,
    COLOR_MODE_LIGHT: 1,
}
export const Direction = {
    DIRECTION_NOT_SET: -1,
    DIRECTION_VERTICAL: 0,
    DIRECTION_HORIZONTAL: 1,
}
export const ScreenDensity = {
    SCREEN_DENSITY_NOT_SET: 0,
    SCREEN_DENSITY_SDPI: 120,
    SCREEN_DENSITY_MDPI: 160,
    SCREEN_DENSITY_LDPI: 240,
    SCREEN_DENSITY_XLDPI: 320,
    SCREEN_DENSITY_XXLDPI: 480,
    SCREEN_DENSITY_XXXLDPI: 640,
}
export function mockConfigurationConstant() {
    const ConfigurationConstant = {
        ColorMode,
        Direction,
        ScreenDensity
    }
    return ConfigurationConstant;
}