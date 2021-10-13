import { mockSystemParameter } from './systemParameter'
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
import { mockMediaQuery } from './mediaquery'
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

export function mockRequireNapiFun() {
  global.requireNapi = function (...args) {
    switch (args[0]) {
      case "systemParameter":
        return mockSystemParameter();
      case "fileio":
        return mockFileio();
      case "worker" :
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
      case "mediaquery":
        return mockMediaQuery();
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
    }
  }
}
