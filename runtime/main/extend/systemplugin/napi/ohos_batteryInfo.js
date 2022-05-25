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

export function mockOhosBatteryinfo() {
  const BatteryPluggedType = {
    NONE: '[PC preview] unknow NONE',
    AC: '[PC preview] unknow AC',
    USB: '[PC preview] unknow USB',
    WIRELESS: '[PC preview] unknow WIRELESS'
  }
  const BatteryChargeState = {
    NONE: '[PC preview] unknow NONE',
    ENABLE: '[PC preview] unknow ENABLE',
    DISABLE: '[PC preview] unknow DISABLE',
    FULL: '[PC preview] unknow FULL'
  }
  const BatteryHealthState = {
    UNKNOWN: '[PC preview] unknow UNKNOWN',
    GOOD: '[PC preview] unknow GOOD',
    OVERHEAT: '[PC preview] unknow OVERHEAT',
    OVERVOLTAGE: '[PC preview] unknow OVERVOLTAGE',
    COLD: '[PC preview] unknow COLD',
    DEAD: '[PC preview] unknow DEAD'
  }
  const batteryInfo = {
    BatteryPluggedType,
    BatteryChargeState,
    BatteryHealthState,
    batterySOC: "[PC Preview] unknow batterySOC",
    chargingStatus: "[PC Preview] unknow chargingStatus",
    healthStatus: "[PC Preview] unknow healthStatus",
    pluggedType: "[PC Preview] unknow pluggedType",
    voltage: "[PC Preview] unknow voltage",
    technology: "[PC Preview] unknow technology",
    batteryTemperature: "[PC Preview] unknow batteryTemperature",
    isBatteryPresent: "[PC Preview] unknow isBatteryPresent"
  }
  return batteryInfo
}
