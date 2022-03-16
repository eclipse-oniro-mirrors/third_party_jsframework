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

import regeneratorRuntime from 'babel-runtime/regenerator'

import {
  mockAbilityFeatureAbility,
  mockAbilityParticleAbility,
  mockAbilityFormManager,
  mockAbilityContinuationRegisterManager,
  mockAbilityDataUriUtils,
  mockAbilityAbilityAgent,
  mockAbilityFormBindingData
} from './ability'
import { mockAppAbilityManager } from './ohos/app'

import { mockBattery } from './battery'
import { mockBrightness } from './brightness'
import { mockBluetooth } from './bluetooth'
import { mockOhosBluetooth } from './ohos/bluetooth'
import { mockCall, mockData, mockRadio, mockSim, mockSMS, mockObserver } from './telephony'
import { mockBundleState } from './ohos/bundleState'
import { mockCipher } from './cipher'
import { mockDataStorage } from './data'
import { mockDeviceInfo } from './deviceInfo'
import { mockDistributedSchedule } from './distributedSchedule'
import { mockDocument } from './document'
import { mockFetch } from './fetch'
import { mockFeatureAbility } from './featureAbility'
import { mockFile } from './file'
import { mockGeolocation } from './geolocation'
import { mockInputMethod } from './inputMethod'
import { mockInputMethodEngine } from './inputMethodEngine'
import {
  mockMultimediaImage,
  mockMultimediaMedia,
  mockMultimediaMedialibrary,
  mockMultimediaAudio
} from './multimedia'
import { mockNetwork } from './network'
import { mockOhosNfc } from './ohos/nfc'
import { mockNotification } from './notification'
import { mockCommonEvent } from './ohos/commonEvent'
import { mockWantAgent } from './ohos/wantAgent'
import { mockOhosBatteryinfo } from './batteryinfo'
import { mockOhosRequest } from './ohos/request'

import { mockPasteBoard } from './ohos/pasteboard'
import { mockSystemTime } from './ohos/systemTime'
import { mockSystemTimer } from './ohos/systemTimer'
import { mockWallpaper } from './ohos/wallpaper'
import { mockReminderAgent } from './ohos/reminderAgent'
import { mockRequest } from './request'

import { mockResourceManager } from './resourceManager'

import { mockSensor } from './sensor'
import { mockStorage } from './storage'
import { mockStorageInfoManager } from './ohos/storageInfoManager'
import { mockSystemPackage } from './systemPackage'

import { mockUserauth } from './userIAM'
import { mockVibrator } from './vibrator'

import { mockWebSocket, mockHttp, mockMdns, mockSocket, mockHotspot, mockStatistics, mockConnection } from './net'
import { mockWindow } from './window'

import { mockRequireNapiFun } from './napi'
import { mockAccessibility } from './accessibility'
import { mockAI } from './ai'
import { mockDisplay } from './display'
import { mockDeviceManager } from './deviceManager'
import { mockScreenshot } from './screenshot'
import { mockContact } from './contact'
import { mockScreenLock } from "./screenLock"
import { mockAppAccount } from './ohos/appAccount'
import { mockOsAccount } from './ohos/osAccount'
import { mockOhosGeolocation } from './ohos/geolocation'
import { mockInputMonitor } from './ohos/inputMonitor'
import { mockUserIAMUserAuth } from './ohos/userIAMuserAuth.js'
import { mockBundleManager } from './ohos/bundleManager'
import { mockPackageManager } from './ohos/packageManager'
import { mockZlib } from './napi/zlib'
import { mockCalendar } from "./calendar"
import { mockHuks } from "./huks"

export function mockSystemPlugin() {
  global.regeneratorRuntime = regeneratorRuntime

  global.systemplugin = {}
  global.ohosplugin = {}

  mockNotification()
  mockCommonEvent()
  mockWantAgent()
  mockFetch()
  mockRequest()
  mockStorage()
  mockFile()
  mockVibrator()
  mockSensor()
  mockGeolocation()
  mockNetwork()
  mockBrightness()
  mockBattery()
  mockSystemPackage()
  mockFeatureAbility()
  mockBluetooth()
  mockOhosBluetooth()
  mockCipher()
  mockOhosBatteryinfo()
  mockUserauth()
  mockDistributedSchedule()
  mockDocument()
  mockPasteBoard()
  mockSystemTime()
  mockSystemTimer()
  mockWallpaper()
  mockInputMethod()
  mockInputMethodEngine()
  mockOhosRequest()
  mockMultimediaImage()
  mockMultimediaMedia()
  mockMultimediaMedialibrary()
  mockMultimediaAudio()
  mockCall()
  mockData()
  mockRadio()
  mockSim()
  mockSMS()
  mockObserver()
  mockWebSocket()
  mockHttp()
  mockMdns()
  mockSocket()
  mockHotspot()
  mockStatistics()
  mockConnection()
  mockDeviceInfo()
  mockResourceManager()
  mockOhosNfc()
  mockDataStorage()
  mockWindow()
  mockAbilityFeatureAbility()
  mockAbilityContinuationRegisterManager()
  mockReminderAgent()
  mockRequireNapiFun()
  mockAbilityDataUriUtils()
  mockAccessibility()
  mockAbilityParticleAbility()
  mockAbilityFormManager()
  mockAbilityAbilityAgent()
  mockAbilityFormBindingData()
  mockAI()
  mockDisplay()
  mockDeviceManager()
  mockScreenshot()
  mockStorageInfoManager()
  mockContact()
  mockScreenLock()
  mockAppAbilityManager()
  mockAppAccount()
  mockOsAccount()
  mockBundleState()
  mockOhosGeolocation()
  mockUserIAMUserAuth()
  mockInputMonitor()
  mockBundleManager()
  mockPackageManager()
  mockZlib()
  mockCalendar()
  mockHuks()
}
