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
import {mockAppAbilityManager} from './ohos/app'

import { mockBackgroundTaskManager } from './ohos/backgroundTaskManager'
import { mockBattery } from './battery'
import { mockBrightness } from './brightness'
import { mockBluetooth } from './bluetooth'
import { mockCall, mockData, mockRadio, mockSim, mockSMS } from './telephony'
import { mockCipher } from './cipher'
import { mockDataStorage } from './data'
import { mockDeviceInfo } from './deviceInfo'
import { mockDistributedSchedule } from './distributedSchedule'
import { mockDocument } from './document'
import { mockFetch } from './fetch'
import { mockFeatureAbility } from './featureAbility'
import { mockFile } from './file'
import { mockGeolocation } from './geolocation'
import { mockInputmethod } from './inputmethod'

import {
  mockMultimediaImage,
  mockMultimediaMedia,
  mockMultimediaMedialibrary
} from './multimedia'
import { mockNetwork } from './network'
import { mockNfcCardEmulation } from './nfc'
import { mockNotification } from './notification'
import { mockOhosNotification } from './ohos/notification'
import { mockCommonEvent } from './ohos/commonEvent'
import { mockOhosBatteryinfo } from './batteryinfo'
import { mockOhosRequest } from './ohos/request'

import { mockPasteBoard } from './pasteboard'
import { mockReminderAgent } from './ohos/reminderAgent'
import { mockRequest } from './request'

import { mockResourceManager } from './resourceManager'

import { mockSensor } from './sensor'
import { mockStorage } from './storage'
import { mockStorageInfoManager} from './ohos/storageInfoManager'
import { mockSystemPackage } from './systemPackage'

import { mockUserauth } from './userIAM'
import { mockVibrator } from './vibrator'

import { mockWebSocket, mockHttp, mockMdns, mockSocket } from './net'
import { mockWifi } from './wifi'
import { mockWindow } from './window'

import { mockRequireNapiFun } from './napi'
import { mockAccessibility } from './accessibility'
import { mockAI } from './ai'
import { mockDisplay } from './display'
import { mockDeviceManager } from './deviceManager'
import { mockScreenshot } from './screenshot'
import {mockContact} from './contact'
import {mockScreenLock} from "./screenLock"
import {mockSettings} from "./settings"

export function mockSystemPlugin() {
  global.regeneratorRuntime = regeneratorRuntime

  global.systemplugin = {}
  global.ohosplugin = {}

  mockNotification()
  mockOhosNotification()
  mockCommonEvent()
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
  mockCipher()
  mockOhosBatteryinfo()
  mockUserauth()
  mockDistributedSchedule()
  mockDocument()
  mockPasteBoard()
  mockInputmethod()
  mockOhosRequest()
  mockMultimediaImage()
  mockMultimediaMedia()
  mockMultimediaMedialibrary()
  mockCall()
  mockData()
  mockRadio()
  mockSim()
  mockSMS()
  mockWebSocket()
  mockHttp()
  mockMdns()
  mockSocket()
  mockDeviceInfo()
  mockWifi()
  mockResourceManager()
  mockNfcCardEmulation()
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
  mockBackgroundTaskManager()
  mockStorageInfoManager()
  mockContact()
  mockScreenLock()
  mockSettings()
  mockAppAbilityManager()
}
