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

import { mockSystemParameter } from './systemParameter'
import { mockAbility } from './applicationAbility'
import { mockFormExtension } from './applicationFormExtension'
import { mockServiceExtensionAbility } from './applicationServiceExtensionAbility'
import { mockAbilityStage } from './applicationAbilityStage'
import { mockFormBindingData } from './applicationFormBindingData'
import { mockAbilityManager } from './applicationAbilityManager'
import { mockAppManager } from './applicationAppManager'
import { mockDataShareExtensionAbility } from './applicationDataShareExtensionAbility'
import { mockMissionManager } from "./applicationMissionManager"
import { mockServiceExtAbility } from "./applicationServiceExtAbility"
import { mockUriPermissionManager } from "./applicationUriPermissionManager"
import { mockCommonEvent } from './commonEvent'
import { mockNotification } from './notification'
import { mockFileio } from './fileio'
import { mockWorker } from './worker'
import { mockUtil } from './util'
import { mockPower } from './power'
import { mockRunninglock } from './runninglock'
import { mockThermal } from './thermal'
import { mockBatteryStatistics } from './batteryStatistics'
import { mockIntl } from './intl'
import { mockI18N } from './i18n'
import { mockRpc } from './rpc'
import { mockBytrace } from './bytrace'
import { mockwebgl } from './webgl'
import { mockwebgl2 } from './webgl2'
import { mockProcess } from './process'
import { mockUrl } from './url'
import { mockHiAppEvent } from './hiAppEvent'
import { mockHilog } from './hilog'
import { mockTv } from './tv'
import { mockDtv } from './dtv'
import { mockDistributedAccount } from './distributedAccount'
import { mockEmitter } from './emitter'
import { mockDistributedData } from './distributedData'
import { mockDistributedObject } from './distributedDataObject'
import { mockDataAbility } from './dataAbility'
import { mockStorage } from './storage'
import { mockRdb } from './rdb'
import { mockDataShare } from './dataShare'
import { mockInputDevice } from './inputDevice'
import { mockVibrator } from './vibrator'
import { mockSensor } from './sensor'
import { mockWifi } from './wifi'
import { mockUsb } from './usb'
import { mockBundle } from './bundle'
import { mockInnerBundle } from './innerBundleManager'
import { mockUri } from './uri'
import { mockXml } from './xml'
import { mockConvertXml } from './convertxml'
import { mockStatfs } from './statfs'
import { mockFileManager } from "./filemanager"
import { mockEnvironment } from "./environment"
import { mockStorageStatistics } from "./storageStatistics"
import { mockVolumeManager } from "./volumeManager"
import { mockSettings } from './settings'
import { mockAbilityAccessCtrl } from './abilityAccessCtrl'
import { mockConfigPolicy } from './configPolicy'
import { mockUpdate } from './update'
import { mockBackgroundTaskManager } from './backgroundTaskManager'
import { mockSecurityLabel } from './securitylabel'
import { mockWorkScheduler } from './workScheduler'
import { mockWorkSchedulerExtensionAbility } from './WorkSchedulerExtensionAbility'
import { mockUserAuth } from './userAuth'
import { mockArrayList } from './arraylist'
import { mockDeque } from './deque'
import { mockHashMap } from './hashmap'
import { mockHashSet } from './hashset'
import { mockLightWeightMap } from './lightweightmap'
import { mockLightWeightSet } from './lightweightset'
import { mockLinkedList } from './linkedlist'
import { mockList } from './list'
import { mockPlainArray } from './plainarray'
import { mockQueue } from './queue'
import { mockStack } from './stack'
import { mockTreeMap } from './treemap'
import { mockTreeSet } from './treeset'
import { mockVector } from './vector'
import { mockMultimediaCamera } from './multimediaCamera'
import { mockMultimediaAudio } from './multimediaAudio'
import { mockMultimediaImage } from './multimediaImage'
import { mockMultimediaMedia } from './multimediaMedia'
import { mockMultimediaMediaLibrary } from './multimediaMediaLibrary'



export function mockRequireNapiFun() {
  global.requireNapi = function (...args) {
    switch (args[0]) {
      case "systemParameter":
        return mockSystemParameter();
      case "application.Ability":
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
      case "bytrace":
        return mockBytrace();
      case "url":
        return mockUrl();
      case "hiAppEvent":
        return mockHiAppEvent();
      case "hilog":
        return mockHilog();
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
      case "data.dataShare":
        return mockDataShare();
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
      default:
        return global.requireNapiPreview(...args);
    }
  }
}
