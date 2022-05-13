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
  const OAuthTokenInfoMock = {
    authType: "[PC preview] unknown authType",
    token: "[PC preview] unknown token"
  };
  const AuthenticatorInfoMock = {
    owner: "[PC preview] unknown owner",
    iconId: "[PC preview] unknown iconId",
    labelId: "[PC preview] unknown labelId",
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
    addAccountImplicitly: function (...args) {
      console.warn("AppAccountManager.addAccountImplicitly interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, AuthenticatorCallbackMock);
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
    },
    authenticate: function (...args) {
      console.warn("AppAccountManager.authenticate interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, AuthenticatorCallbackMock);
      }
    },
    getOAuthToken: function (...args) {
      console.warn("AppAccountManager.getOAuthToken interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramStringMock)
        })
      }
    },
    setOAuthToken: function (...args) {
      console.warn("AppAccountManager.setOAuthToken interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve()
        })
      }
    },
    deleteOAuthToken: function (...args) {
      console.warn("AppAccountManager.deleteOAuthToken interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve()
        })
      }
    },
    setOAuthTokenVisibility: function (...args) {
      console.warn("AppAccountManager.setOAuthTokenVisibility interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve()
        })
      }
    },
    checkOAuthTokenVisibility: function (...args) {
      console.warn("AppAccountManager.checkOAuthTokenVisibility interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve()
        })
      }
    },
    getAllOAuthTokens: function (...args) {
      console.warn("AppAccountManager.getAllOAuthTokens interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, new Array(OAuthTokenInfoMock));
      } else {
        return new Promise((resolve, reject) => {
          resolve(new Array(OAuthTokenInfoMock))
        })
      }
    },
    getOAuthList: function (...args) {
      console.warn("AppAccountManager.getOAuthList interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, new Array(paramMock.paramStringMock));
      } else {
        return new Promise((resolve, reject) => {
          resolve(new Array(paramMock.paramStringMock))
        })
      }
    },
    getAuthenticatorCallback: function (...args) {
      console.warn("AppAccountManager.getAuthenticatorCallback interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, AuthenticatorCallbackMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(AuthenticatorCallbackMock)
        })
      }
    },
    getAuthenticatorInfo: function (...args) {
      console.warn("AppAccountManager.getAuthenticatorInfo interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, AuthenticatorInfoMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(AuthenticatorInfoMock)
        })
      }
    }
  };
  const AuthenticatorCallbackMock = {
    onResult: function (...args) {
      console.warn("AuthenticatorCallback.onResult interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
    },
    onRequestRedirected: function (...args) {
      console.warn("AuthenticatorCallback.onRequestRedirected interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
    }
  };
  const AuthenticatorClass = class Authenticator {
    constructor() {
      console.warn("appAccount.Authenticator constructor interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      this.addAccountImplicitly = function (...args) {
        console.warn("Authenticator.addAccountImplicitly interface mocked in the Previewer. " +
          "How this interface works on the Previewer may be different from that on a real device.")
        const len = args.length
        if (len > 0 && typeof args[len - 1] === 'function') {
          args[len - 1].call(this, paramMock.businessErrorMock, AuthenticatorCallbackMock);
        }
      };
      this.authenticate = function (...args) {
        console.warn("Authenticator.authenticate interface mocked in the Previewer. " +
          "How this interface works on the Previewer may be different from that on a real device.")
        const len = args.length
        if (len > 0 && typeof args[len - 1] === 'function') {
          args[len - 1].call(this, paramMock.businessErrorMock, AuthenticatorCallbackMock);
        }
      };
    }
  };
  const ConstantsMock = {
    ACTION_ADD_ACCOUNT_IMPLICITLY: '[PC preview] unknow string',
    ACTION_AUTHENTICATE: '[PC preview] unknow string',
    KEY_NAME: '[PC preview] unknow string',
    KEY_OWNER: '[PC preview] unknow string',
    KEY_TOKEN: '[PC preview] unknow string',
    KEY_ACTION: '[PC preview] unknow string',
    KEY_AUTH_TYPE: '[PC preview] unknow string',
    KEY_SESSION_ID: '[PC preview] unknow string',
    KEY_CALLER_PID: '[PC preview] unknow string',
    KEY_CALLER_UID: '[PC preview] unknow string',
    KEY_CALLER_BUNDLE_NAME: '[PC preview] unknow string'
  };
  const ResultCodeMock = {
    SUCCESS: '[PC preview] unknow resultCode',
    ERROR_ACCOUNT_NOT_EXIST: '[PC preview] unknow resultCode',
    ERROR_APP_ACCOUNT_SERVICE_EXCEPTION: '[PC preview] unknow resultCode',
    ERROR_INVALID_PASSWORD: '[PC preview] unknow resultCode',
    ERROR_INVALID_REQUEST: '[PC preview] unknow resultCode',
    ERROR_INVALID_RESPONSE: '[PC preview] unknow resultCode',
    ERROR_NETWORK_EXCEPTION: '[PC preview] unknow resultCode',
    ERROR_OAUTH_AUTHENTICATOR_NOT_EXIST: '[PC preview] unknow resultCode',
    ERROR_OAUTH_CANCELED: '[PC preview] unknow resultCode',
    ERROR_OAUTH_LIST_TOO_LARGE: '[PC preview] unknow resultCode',
    ERROR_OAUTH_SERVICE_BUSY: '[PC preview] unknow resultCode',
    ERROR_OAUTH_SERVICE_EXCEPTION: '[PC preview] unknow resultCode',
    ERROR_OAUTH_SESSION_NOT_EXIST: '[PC preview] unknow resultCode',
    ERROR_OAUTH_TIMEOUT: '[PC preview] unknow resultCode',
    ERROR_OAUTH_TOKEN_NOT_EXIST: '[PC preview] unknow resultCode',
    ERROR_OAUTH_TOKEN_TOO_MANY: '[PC preview] unknow resultCode',
    ERROR_OAUTH_UNSUPPORT_ACTION: '[PC preview] unknow resultCode',
    ERROR_OAUTH_UNSUPPORT_AUTH_TYPE: '[PC preview] unknow resultCode',
    ERROR_PERMISSION_DENIED: '[PC preview] unknow resultCode'
  };
  const appAccount = {
    createAppAccountManager: function (...args) {
      console.warn("appAccount.createAppAccountManager interface mocked in the Previewer. " +
        "How this interface works on the Previewer may be different from that on a real device.")
      return appAccountManagerMock;
    },
    AuthenticatorCallback: AuthenticatorCallbackMock,
    Authenticator: AuthenticatorClass,
    Constants: ConstantsMock,
    ResultCode: ResultCodeMock,
  }
  return appAccount
}