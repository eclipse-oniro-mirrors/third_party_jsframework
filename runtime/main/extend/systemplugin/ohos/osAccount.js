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

export function mockOsAccount() {
  const osAccountInfoMock = {
    localId: "[PC Preview] unknown id",
    localName: "[PC Preview] unknown name",
    type: "[PC Preview] unknown type",
    constraints: "[PC Preview] unknown constraints",
    distributedInfo: "[PC Preview] unknown distributedInfo"
  };
  const osAccountTypeMock = "[PC Preview] unknown type";
  const accountManagerMock = {
    activateOsAccount: function (...args) {
      console.warn("AccountManager.activateOsAccount interface mocked in the Previewer. " +
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
    isMultiOsAccountEnable: function (...args) {
      console.warn("AccountManager.isMultiOsAccountEnable interface mocked in the Previewer. " +
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
    isOsAccountActived: function (...args) {
      console.warn("AccountManager.isOsAccountActived interface mocked in the Previewer. " +
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
    isOsAccountConstraintEnable: function (...args) {
      console.warn("AccountManager.isOsAccountConstraintEnable interface mocked in the Previewer. " +
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
    isTestOsAccount: function (...args) {
      console.warn("AccountManager.isTestOsAccount interface mocked in the Previewer. " +
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
    isOsAccountVerified: function (...args) {
      console.warn("AccountManager.isOsAccountVerified interface mocked in the Previewer. " +
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
    removeOsAccount: function (...args) {
      console.warn("AccountManager.removeOsAccount interface mocked in the Previewer. " +
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
    setOsAccountConstraints: function (...args) {
      console.warn("AccountManager.setOsAccountConstraints interface mocked in the Previewer. " +
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
    setOsAccountName: function (...args) {
      console.warn("AccountManager.setOsAccountName interface mocked in the Previewer. " +
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
    getCreatedOsAccountsCount: function (...args) {
      console.warn("AccountManager.getCreatedOsAccountsCount interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramNumberMock);
        })
      }
    },
    getOsAccountLocalIdFromProcess: function (...args) {
      console.warn("AccountManager.getOsAccountLocalIdFromProcess interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramNumberMock);
        })
      }
    },
    getOsAccountLocalIdFromUid: function (...args) {
      console.warn("AccountManager.getOsAccountLocalIdFromUid interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramNumberMock);
        })
      }
    },
    getOsAccountLocalIdFromDomain: function (...args) {
      console.warn("AccountManager.getOsAccountLocalIdFromDomain interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramNumberMock);
        })
      }
    },
    queryMaxOsAccountNumber: function (...args) {
      console.warn("AccountManager.queryMaxOsAccountNumber interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramNumberMock);
        })
      }
    },
    getOsAccountAllConstraints: function (...args) {
      console.warn("AccountManager.getOsAccountAllConstraints interface mocked in the Previewer. " +
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
    queryAllCreatedOsAccounts: function (...args) {
      console.warn("AccountManager.queryAllCreatedOsAccounts interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      var osAccountInfoArrayMock = new Array();
      osAccountInfoArrayMock.push(osAccountInfoMock);
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, osAccountInfoArrayMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(osAccountInfoArrayMock);
        })
      }
    },
    createOsAccount: function (...args) {
      console.warn("AccountManager.createOsAccount interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, osAccountInfoMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(osAccountInfoMock);
        })
      }
    },
    createOsAccountForDomain: function (...args) {
      console.warn("AccountManager.createOsAccountForDomain interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, osAccountInfoMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(osAccountInfoMock);
        })
      }
    },
    queryCurrentOsAccount: function (...args) {
      console.warn("AccountManager.queryCurrentOsAccount interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, osAccountInfoMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(osAccountInfoMock);
        })
      }
    },
    queryOsAccountById: function (...args) {
      console.warn("AccountManager.queryOsAccountById interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, osAccountInfoMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(osAccountInfoMock);
        })
      }
    },
    getOsAccountTypeFromProcess: function (...args) {
      console.warn("AccountManager.getOsAccountTypeFromProcess interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, osAccountTypeMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(osAccountTypeMock);
        })
      }
    },
    getDistributedVirtualDeviceId: function (...args) {
      console.warn("AccountManager.getDistributedVirtualDeviceId interface mocked in the Previewer. " +
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
    getOsAccountProfilePhoto: function (...args) {
      console.warn("AccountManager.getOsAccountProfilePhoto interface mocked in the Previewer. " +
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
    setOsAccountProfilePhoto: function (...args) {
      console.warn("AccountManager.setOsAccountProfilePhoto interface mocked in the Previewer. " +
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
    getOsAccountLocalIdBySerialNumber: function (...args) {
      console.warn("AccountManager.getOsAccountLocalIdBySerialNumber interface mocked in the Previewer. " +
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
    getSerialNumberByOsAccountLocalId: function (...args) {
      console.warn("AccountManager.getSerialNumberByOsAccountLocalId interface mocked in the Previewer. " +
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
    on: function (...args) {
      console.warn("AccountManager.on interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.paramNumberMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramNumberMock);
        })
      }
    },
    off: function (...args) {
      console.warn("AccountManager.off interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.paramNumberMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramNumberMock);
        })
      }
    }
  };
  global.ohosplugin.account = global.ohosplugin.account || {};
  global.ohosplugin.account.osAccount = {
    getAccountManager: function (...args) {
      console.warn("osAccount.getAccountManager interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      return accountManagerMock;
    },
    OsAccountType: {
      ADMIN: "[PC Preview] unknown ADMIN",
      NORMAL: "[PC Preview] unknown NORMAL",
      GUEST: "[PC Preview] unknown GUEST"
    }
  };
}