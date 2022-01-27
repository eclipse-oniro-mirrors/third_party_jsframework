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
import { mockSystemParameter } from './systemParameter'
import { mockAbility } from './applicationAbility'
import { mockFormExtension } from './applicationFormExtension'
import { mockServiceExtension } from './applicationServiceExtension'
import { mockAbilityStage } from './applicationAbilityStage'
import { mockNotification } from './notification'
import { mockFileio } from './fileio'
import { mockWorker } from './worker'
import { mockUtil } from './util'
import { mockPower } from './power'
import { mockIntl } from './intl'
import { mockRunningLock } from './runningLock'
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
import { mockDataAbility } from './dataAbility'
import { mockStorage } from './storage'
import { mockRdb } from './rdb'
import { mockInputDevice } from './inputDevice'
import { mockVibrator } from './vibrator'
import { mockSensor } from './sensor'
import { mockUsb } from './usb'
import { mockWifi } from './wifi'
import { mockSettings } from './settings'
import { mockUri } from './uri'
import { mockXml } from './xml'
import { mockConvertXml } from './convertxml'
import { mockStatfs } from './statfs'

export function mockRequireNapiFun() {
  global.requireNapi = function (...args) {
    switch (args[0]) {
      case "systemParameter":
        return mockSystemParameter();
      case "application.Ability":
        return mockAbility();
      case "application.FormExtension":
        return mockFormExtension();
      case "application.ServiceExtension":
        return mockServiceExtension();
      case "application.AbilityStage":
        return mockAbilityStage();
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
      case "power":
        return mockPower();
      case "runningLock":
        return mockRunningLock();
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
      case "data.rdb":
        return mockRdb();
      case "data.storage":
        return mockStorage();
      case "data.dataAbility":
        return mockDataAbility();
      case "multimodalInput.inputDevice":
        return mockInputDevice();
      case "vibrator":
        return mockVibrator();
      case "sensor":
        return mockSensor();
      case "usb":
        return mockUsb();
      case "wifi":
        return mockWifi();
      case "settings":
        return mockSettings();
      case "uri":
        return mockUri();
      case "xml":
        return mockXml();
      case "convertxml":
        return mockConvertXml();
      case "statfs":
        return mockStatfs();
      default:
        return global.requireNapiPreview(...args);
    }
  }
}
