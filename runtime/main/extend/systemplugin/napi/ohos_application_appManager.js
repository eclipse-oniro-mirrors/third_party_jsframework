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

import { paramMock } from "../utils"

export function mockAppManager() {
  const AppStateDataMock = {
    bundleName: '[PC preview] unknow bundleName',
    uid: '[PC preview] unknow uid',
    state: '[PC preview] unknow state'
  }
  const ProcessRunningInfoMock = {
    pid: '[PC preview] unknow pid',
    uid: '[PC preview] unknow uid',
    processName: '[PC preview] unknow processName',
    bundleNames: [paramMock.paramStringMock]
  }
  const appManager = {
    registerApplicationStateObserver: function (...args) {
      console.warn('appManager.registerApplicationStateObserver interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      return paramMock.paramNumberMock;
    },
    unregisterApplicationStateObserver: function (...args) {
      console.warn('appManager.unregisterApplicationStateObserver interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve) => {
          resolve();
        });
      }
    },
    getForegroundApplications: function (...args) {
      console.warn('appManager.getForegroundApplications interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, [AppStateDataMock]);
      } else {
        return new Promise((resolve) => {
          resolve([AppStateDataMock]);
        });
      }
    },
    killProcessWithAccount: function (...args) {
      console.warn('appManager.killProcessWithAccount interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve) => {
          resolve();
        });
      }
    },
    isRunningInStabilityTest: function (...args) {
      console.warn('appManager.isRunningInStabilityTest interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock);
      } else {
        return new Promise((resolve) => {
          resolve(paramMock.paramBooleanMock);
        });
      }
    },
    getProcessRunningInfos: function (...args) {
      console.warn('appManager.getProcessRunningInfos interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, [ProcessRunningInfoMock]);
      } else {
        return new Promise((resolve) => {
          resolve([ProcessRunningInfoMock]);
        });
      }
    },
    killProcessesByBundleName: function (...args) {
      console.warn('appManager.killProcessesByBundleName interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve) => {
          resolve();
        });
      }
    },
    clearUpApplicationData: function (...args) {
      console.warn('appManager.clearUpApplicationData interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve) => {
          resolve();
        });
      }
    }
  }
  return appManager
}