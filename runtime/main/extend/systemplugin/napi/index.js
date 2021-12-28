import { mockSystemParameter } from './systemParameter'
import { mockAbility } from './applicationAbility'
import { mockFormExtension } from './applicationFormExtension'
import { mockServiceExtension } from './applicationServiceExtension'
import { mockAbilityStage } from './applicationAbilityStage'
import { mockFormBindingData } from './applicationFormBindingData'
import { mockNotification } from './notification'
import { mockFileio } from './fileio'
import { mockWorker } from './worker'
import { mockUtil } from './util'
import { mockPower } from './power'
import { mockIntl } from './intl'
import { mockI18N } from './i18n'
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
import { mockWifi } from './wifi'
import { mockUsb } from './usb'
import { mockBundle } from './bundle'
import { mockInnerBundle } from './innerBundleManager'

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
      case "application.formBindingData":
        return mockFormBindingData();
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
      case "wifi":
        return mockWifi();
      case "usb":
        return mockUsb();
      case "bundle":
        return mockBundle();
      case "bundle.innerBundleManager":
        return mockInnerBundle();
      default:
        return global.requireNapiPreview(...args);
    }
  }
}
