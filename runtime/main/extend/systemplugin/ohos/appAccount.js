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

import { paramMock } from "../utils"

export function mockAppAccount() {
  const appAccountInfoMock = {
    owner: "[PC Preview] unknown owner",
    name: "[PC Preview] unknown name"
  };
  const appAccountManagerMock = {
    addAccount: function (...args) {
      console.warn("AppAccountManager.addAccount interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    deleteAccount: function (...args) {
      console.warn("AppAccountManager.deleteAccount interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    disableAppAccess: function (...args) {
      console.warn("AppAccountManager.disableAppAccess interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    enableAppAccess: function (...args) {
      console.warn("AppAccountManager.enableAppAccess interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    checkAppAccountSyncEnable: function (...args) {
      console.warn("AppAccountManager.checkAppAccountSyncEnable interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramBooleanMock);
        })
      }
    },
    setAccountCredential: function (...args) {
      console.warn("AppAccountManager.setAccountCredential interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    setAccountExtraInfo: function (...args) {
      console.warn("AppAccountManager.setAccountExtraInfo interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    setAppAccountSyncEnable: function (...args) {
      console.warn("AppAccountManager.setAppAccountSyncEnable interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    setAssociatedData: function (...args) {
      console.warn("AppAccountManager.setAssociatedData interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    getAllAccessibleAccounts: function (...args) {
      console.warn("AppAccountManager.getAllAccessibleAccounts interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      var appAccountInfoArrayMock = new Array();
      appAccountInfoArrayMock.push(appAccountInfoMock);
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, appAccountInfoArrayMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(appAccountInfoArrayMock);
        })
      }
    },
    getAllAccounts: function (...args) {
      console.warn("AppAccountManager.getAllAccounts interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      var appAccountInfoArrayMock = new Array();
      appAccountInfoArrayMock.push(appAccountInfoMock);
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, appAccountInfoArrayMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(appAccountInfoArrayMock);
        })
      }
    },
    getAccountCredential: function (...args) {
      console.warn("AppAccountManager.getAccountCredential interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramStringMock);
        })
      }
    },
    getAccountExtraInfo: function (...args) {
      console.warn("AppAccountManager.getAccountExtraInfo interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramStringMock);
        })
      }
    },
    getAssociatedData: function (...args) {
      console.warn("AppAccountManager.getAssociatedData interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramStringMock);
        })
      }
    },
    on: function (...args) {
      console.warn("AppAccountManager.on interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      var appAccountInfoArrayMock = new Array();
      appAccountInfoArrayMock.push(appAccountInfoMock);
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, appAccountInfoArrayMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(appAccountInfoArrayMock);
        })
      }
    },
    off: function (...args) {
      console.warn("AppAccountManager.off interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      var appAccountInfoArrayMock = new Array();
      appAccountInfoArrayMock.push(appAccountInfoMock);
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, appAccountInfoArrayMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(appAccountInfoArrayMock);
        })
      }
    }
  }
  global.ohosplugin.account = global.ohosplugin.account || {};
  global.ohosplugin.account.appAccount = {
    createAppAccountManager: function (...args) {
      console.warn("appAccount.createAppAccountManager interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      return appAccountManagerMock;
    }
  }
}