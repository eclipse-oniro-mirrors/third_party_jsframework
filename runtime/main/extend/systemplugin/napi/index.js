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

import { mockSystemParameter } from './ohos_systemparameter'
import { mockAbility } from './ohos_application_Ability'
import { mockFormExtension } from './ohos_application_FormExtension'
import { mockServiceExtensionAbility } from './ohos_application_ServiceExtensionAbility'
import { mockAbilityStage } from './ohos_application_AbilityStage'
import { mockFormBindingData } from './ohos_application_formBindingData'
import { mockAbilityManager } from './ohos_application_abilityManager'
import { mockAppManager } from './ohos_application_appManager'
import { mockDataShareExtensionAbility } from './ohos_application_DataShareExtensionAbility'
import { mockMissionManager } from "./ohos_application_missionManager"
import { mockServiceExtAbility } from "./ohos_application_ServiceExtAbility"
import { mockUriPermissionManager } from "./ohos_application_uriPermissionManager"
import { mockCommonEvent } from './ohos_commonEvent'
import { mockNotification } from './ohos_notification'
import { mockFileio } from './ohos_fileio'
import { mockWorker } from './ohos_worker'
import { mockUtil } from './ohos_util'
import { mockPower } from './ohos_power'
import { mockRunninglock } from './ohos_runninglock'
import { mockThermal } from './ohos_thermal'
import { mockBatteryStatistics } from './ohos_batteryStatistics'
import { mockIntl } from './ohos_intl'
import { mockI18N } from './ohos_i18n'
import { mockRpc } from './ohos_rpc'
import { mockwebgl } from './webgl'
import { mockwebgl2 } from './webgl2'
import { mockProcess } from './ohos_process'
import { mockUrl } from './ohos_url'
import { mockHiAppEvent } from './ohos_hiAppEvent'
import { mockHilog } from './ohos_hilog'
import { mockHiSysEvent } from './ohos_hiSysEvent'
import { mockTv } from './tv'
import { mockDtv } from './dtv'
import { mockDistributedAccount } from './ohos_account_distributedAccount'
import { mockEmitter } from './ohos_events_emitter'
import { mockDistributedData } from './ohos_data_distributedData'
import { mockDistributedObject } from './ohos_data_distributedDataObject'
import { mockDataAbility } from './ohos_data_dataAbility'
import { mockStorage } from './system_storage'
import { mockRdb } from './ohos_data_rdb'
import { mockPreferences } from './ohos_data_preferences'
import { mockDataShare } from './ohos_data_dataShare'
import { DataSharePredicates } from './ohos_data_dataSharePredicates'
import { DataShareResultSet } from './ohos_data_DataShareResultSet'
import { mockInputDevice } from './ohos_multimodalInput_inputDevice'
import { mockVibrator } from './ohos_vibrator'
import { mockSensor } from './ohos_sensor'
import { mockWifi } from './ohos_wifi'
import { mockUsb } from './ohos_usb'
import { mockBundle } from './ohos_bundle'
import { mockInnerBundle } from './ohos_bundle_innerBundleManager'
import { mockUri } from './ohos_uri'
import { mockXml } from './ohos_xml'
import { mockConvertXml } from './ohos_convertxml'
import { mockStatfs } from './ohos_statfs'
import { mockFileManager } from "./ohos_fileManager"
import { mockEnvironment } from "./ohos_environment"
import { mockStorageStatistics } from "./ohos_storageStatistics"
import { mockVolumeManager } from "./ohos_volumeManager"
import { mockSettings } from './ohos_settings'
import { mockAbilityAccessCtrl } from './ohos_abilityAccessCtrl'
import { mockConfigPolicy } from './ohos_configPolicy'
import { mockUpdate } from './ohos_update'
import { mockBackgroundTaskManager } from './ohos_backgroundTaskManager'
import { mockSecurityLabel } from './ohos_securitylabel'
import { mockWorkScheduler } from './ohos_workScheduler'
import { mockWorkSchedulerExtensionAbility } from './ohos_WorkSchedulerExtensionAbility'
import { mockUserAuth } from './ohos_userIAM_userAuth'
import { mockArrayList } from './ohos_util_Arraylist'
import { mockDeque } from './ohos_util_Deque'
import { mockHashMap } from './ohos_util_HashMap'
import { mockHashSet } from './ohos_util_HashSet'
import { mockLightWeightMap } from './ohos_util_LightWeightMap'
import { mockLightWeightSet } from './ohos_util_LightWeightSet'
import { mockLinkedList } from './ohos_util_LinkedList'
import { mockList } from './ohos_util_List'
import { mockPlainArray } from './ohos_util_PlainArray'
import { mockQueue } from './ohos_util_Queue'
import { mockStack } from './ohos_util_Stack'
import { mockTreeMap } from './ohos_util_TreeMap'
import { mockTreeSet } from './ohos_util_TreeSet'
import { mockVector } from './ohos_util_Vector'
import { mockMultimediaCamera } from './ohos_multimedia_camera'
import { mockMultimediaAudio } from './ohos_multimedia_audio'
import { mockMultimediaImage } from './ohos_multimedia_image'
import { mockMultimediaMedia } from './ohos_multimedia_media'
import { mockMultimediaMediaLibrary } from './ohos_multimedia_mediaLibrary'
import { mockOhosBatteryinfo } from './ohos_batteryInfo'
import { mockBluetooth } from './ohos_bluetooth'
import { mockBrightness } from './ohos_brightness'
import { mockBytrace } from './ohos_bytrace'
import { mockCipher } from './system_cipher'
import { mockContact } from './ohos_contact'
import { mockDataStorage } from './ohos_data_Storage'
import { mockDeviceInfo } from './ohos_deviceInfo'
import { mockDeviceManager } from './ohos_distributedHardware_deviceManager'
import { mockDisplay } from './ohos_display'
import { mockHuks } from './ohos_security_huks'
import { mockInputMethod } from './ohos_inputmethod'
import { mockInputMethodEngine } from './ohos_inputmethodengine'
import { mockConnection } from './ohos_net_connection'
import { mockHttp } from './ohos_net_http'
import { mockSocket } from './ohos_net_socket'
import { mockWebSocket } from './ohos_net_webSocket'
import { mockNetwork } from './ohos_network'
import { mockNfcCardEmulation } from './ohos_nfc_cardEmulation'
import { mockController } from './ohos_nfc_controller'
import { mockTag } from './ohos_nfc_tag'
import { mockPasteBoard } from './ohos_pasteboard'
import { mockRequest } from './ohos_request'
import { mockScreenLock } from './ohos_screenLock'
import { mockCall } from './ohos_telephony_call'
import { mockData } from './ohos_telephony_data'
import { mockObserver } from './ohos_telephony_observer'
import { mockRadio } from './ohos_telephony_radio'
import { mockSim } from './ohos_telephony_sim'
import { mockSMS } from './ohos_telephony_sms'
import { mockWindow } from './ohos_window'
import { mockAppAccount } from './ohos_account_appAccount'
import { mockOhosGeolocation } from './ohos_geolocation'
import { mockInputMonitor } from './ohos_multimodalInput_inputMonitor'
import { mockOsAccount } from './ohos_account_osAccount'
import { mockReminderAgent } from './ohos_reminderAgent'
import { mockSystemTime } from './ohos_systemTime'
import { mockSystemTimer } from './ohos_systemTimer'
import { mockWallpaper } from './ohos_wallpaper'
import { mockWantAgent } from './ohos_wantAgent'
import { mockScreenshot } from './ohos_screenshot'
import { mockZlib } from './ohos_zlib'
import { mockPrivacyManager } from './ohos_privacyManager'
import { mockFormProvider } from './ohos_application_formProvider'
import { mockScreen } from './ohos_screen'
import { mockDistributedBundle } from './@ohos_distributedBundle'

export function mockRequireNapiFun() {
  global.requireNapi = function (...args) {
    switch (args[0]) {
      case "screen":
        return mockScreen();
      case "zlib":
        return mockZlib();
      case "screenshot":
        return mockScreenshot();
      case "WantAgent":
        return mockWantAgent();
      case "wallpaper":
        return mockWallpaper();
      case "systemTimer":
        return mockSystemTimer();
      case "systemTime":
        return mockSystemTime();
      case "reminderAgent":
        return mockReminderAgent();
      case "account.osAccount":
        return mockOsAccount();
      case "multimodalInput.inputMonitor":
        return mockInputMonitor();
      case "geolocation":
        return mockOhosGeolocation();
      case "account.appAccount":
        return mockAppAccount();
      case "window":
        return mockWindow();
      case "telephony.call":
        return mockCall();
      case "telephony.data":
        return mockData();
      case "telephony.observer":
        return mockObserver();
      case "telephony.radio":
        return mockRadio();
      case "telephony.sim":
        return mockSim();
      case "telephony.sms":
        return mockSMS();
      case "pasteboard":
        return mockPasteBoard();
      case "request":
        return mockRequest();
      case "screenLock":
        return mockScreenLock();
      case "nfc.cardEmulation":
        return mockNfcCardEmulation();
      case "nfc.controller":
        return mockController();
      case "nfc.tag":
        return mockTag();
      case "network":
        return mockNetwork();
      case "net.connection":
        return mockConnection();
      case "net.http":
        return mockHttp();
      case "net.socket":
        return mockSocket();
      case "net.webSocket":
        return mockWebSocket();
      case "inputmethodengine":
        return mockInputMethodEngine();
      case "inputmethod":
        return mockInputMethod();
      case "security.huks":
        return mockHuks();
      case "display":
        return mockDisplay();
      case "distributedHardware.deviceManager":
        return mockDeviceManager();
      case "deviceInfo":
        return mockDeviceInfo();
      case "data.storage":
        return mockDataStorage();
      case "contact":
        return mockContact();
      case "cipher":
        return mockCipher();
      case "bytrace":
        return mockBytrace();
      case "brightness":
        return mockBrightness();
      case "bluetooth":
        return mockBluetooth();
      case "batteryInfo":
        return mockOhosBatteryinfo();
      case "systemParameter":
        return mockSystemParameter();
      case "11.Ability":
        return mockAbility();
      case "application.FormExtension":
        return mockFormExtension();
      case "application.ServiceExtensionAbility":
        return mockServiceExtensionAbility();
      case "application.AbilityStage":
        return mockAbilityStage();
      case "application.formBindingData":
        return mockFormBindingData();
      case "application.abilityManager":
        return mockAbilityManager();
      case "application.appManager":
        return mockAppManager();
      case "application.DataShareExtensionAbility":
        return mockDataShareExtensionAbility();
      case "application.missionManager":
        return mockMissionManager();
      case "application.ServiceExtAbility":
        return mockServiceExtAbility();
      case "application.UriPermissionManager":
        return mockUriPermissionManager();
      case "commonEvent":
        return mockCommonEvent();
      case "notification":
        return mockNotification();
      case "fileio":
        return mockFileio();
      case "worker":
        return mockWorker();
      case "util":
        return mockUtil();
      case "intl":
        return mockIntl();
      case "i18n":
        return mockI18N();
      case "power":
        return mockPower();
      case "runninglock":
        return mockRunninglock();
      case "thermal":
        return mockThermal();
      case "batteryStatistics":
        return mockBatteryStatistics();
      case "rpc":
        return mockRpc();
      case "webgl":
        return mockwebgl();
      case "webgl2":
        return mockwebgl2();
      case "process":
        return mockProcess();
      case "url":
        return mockUrl();
      case "hiAppEvent":
        return mockHiAppEvent();
      case "hilog":
        return mockHilog();
      case "hiSysEvent":
        return mockHiSysEvent();
      case "tv":
        return mockTv();
      case "dtv":
        return mockDtv();
      case "account.distributedAccount":
        return mockDistributedAccount();
      case "events.emitter":
        return mockEmitter();
      case "data.distributedData":
        return mockDistributedData();
      case "data.distributedDataObject":
        return mockDistributedObject();
      case "data.rdb":
        return mockRdb();
      case "data.storage":
        return mockStorage();
      case "data.preferences":
        return mockPreferences();
      case "data.dataShare":
        return mockDataShare();
      case "data.DataSharePredicates":
        return DataSharePredicates();
      case "data.DataShareResultSet":
        return DataShareResultSet();
      case "data.dataAbility":
        return mockDataAbility();
      case "multimodalInput.inputDevice":
        return mockInputDevice();
      case "vibrator":
        return mockVibrator();
      case "sensor":
        return mockSensor();
      case "wifi":
        return mockWifi();
      case "usb":
        return mockUsb();
      case "bundle":
        return mockBundle();
      case "distributedBundle":
        return mockDistributedBundle();
      case "bundle.innerBundleManager":
        return mockInnerBundle();
      case "uri":
        return mockUri();
      case "xml":
        return mockXml();
      case "convertxml":
        return mockConvertXml();
      case "statfs":
        return mockStatfs();
      case "filemanager":
        return mockFileManager();
      case "environment":
        return mockEnvironment();
      case "storagestatistics":
        return mockStorageStatistics();
      case "volumemanager":
        return mockVolumeManager();
      case "settings":
        return mockSettings();
      case "abilityAccessCtrl":
        return mockAbilityAccessCtrl();
      case "configPolicy":
        return mockConfigPolicy();
      case "update":
        return mockUpdate();
      case "backgroundTaskManager":
        return mockBackgroundTaskManager();
      case "securitylabel":
        return mockSecurityLabel();
      case "workScheduler":
        return mockWorkScheduler();
      case "WorkSchedulerExtensionAbility":
        return mockWorkSchedulerExtensionAbility();
      case "userIAM.userAuth":
        return mockUserAuth();
      case "util.ArrayList":
        return mockArrayList();
      case "util.Deque":
        return mockDeque();
      case "util.HashMap":
        return mockHashMap();
      case "util.HashSet":
        return mockHashSet();
      case "util.LightWeightMap":
        return mockLightWeightMap();
      case "util.LightWeightSet":
        return mockLightWeightSet();
      case "util.LinkedList":
        return mockLinkedList();
      case "util.List":
        return mockList();
      case "util.PlainArray":
        return mockPlainArray();
      case "util.Queue":
        return mockQueue();
      case "util.Stack":
        return mockStack();
      case "util.TreeMap":
        return mockTreeMap();
      case "util.TreeSet":
        return mockTreeSet();
      case "util.Vector":
        return mockVector();
      case "multimedia.mediaLibrary":
        return mockMultimediaMediaLibrary();
      case "multimedia.media":
        return mockMultimediaMedia();
      case "multimedia.image":
        return mockMultimediaImage();
      case "multimedia.camera":
        return mockMultimediaCamera();
      case "multimedia.audio":
        return mockMultimediaAudio();
      case "privacyManager":
        return mockPrivacyManager();
      case "application.formProvider":
        return mockFormProvider();
      default:
        return global.requireNapiPreview(...args);
    }
  }
}
