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

export function mockHttp() {
  const HttpResponseCacheOptions = {
    filePath: "[PC Preview] unknow filePath",
    fileChildPath: "[PC Preview] unknow fileChildPath",
    cacheSize: "[PC Preview] unknow cacheSize"
  }
  const HttpResponseCache = {
    close: function (...args) {
      console.warn("net.HttpResponseCache.close interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    delete: function (...args) {
      console.warn("net.HttpResponseCache.delete interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    flush: function (...args) {
      console.warn("net.HttpResponseCache.flush interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    }
  }
  const HttpResponseMock = {
    result: "[PC Preview] unknow result",
    responseCode: responseCodeMock,
    header: "[PC Preview] unknow header",
    cookies: "[PC Preview] unknow cookies"
  }
  const httpRequest = {
    request: function (...args) {
      console.warn("HttpRequest.request interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, HttpResponseMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(HttpResponseMock);
        })
      }
    },
    destroy: function () {
      console.warn("HttpRequest.destroy interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
    },
    on: function (...args) {
      console.warn("HttpRequest.on interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        if (args[0] === 'headerReceive') {
          args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramObjectMock);
        } else if (args[0] === 'headersReceive') {
          args[len - 1].call(this, paramMock.paramObjectMock);
        }
      }
    },
    off: function (...args) {
      console.warn("HttpRequest.off interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        if (args[0] === 'headerReceive') {
          args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramObjectMock);
        } else if (args[0] === 'headersReceive') {
          args[len - 1].call(this, paramMock.paramObjectMock);
        }
      }
    },
    once: function (...args) {
      console.warn("HttpRequest.once interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.paramObjectMock);
      }
    }
  }
  const requestMethodMock = "[PC Preview] unknow RequestMethod"

  const HttpRequestOptionsMock = {
    method: requestMethodMock,
    extraData: "[PC Preview] unknow extraData",
    header: "[PC Preview] unknow header",
    readTimeout: "[PC Preview] unknow readTimeout",
    connectTimeout: "[PC Preview] unknow connectTimeout"
  }

  const responseCodeMock = "[PC Preview] unknow ResponseCode"

  const http = {
    createHttp: function () {
      console.warn("net.http.createHttp interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return httpRequest;
    },
    getInstalledHttpResponseCache: function (...args) {
      console.warn("net.http.getInstalledHttpResponseCache interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, HttpResponseCache);
      } else {
        return new Promise((resolve, reject) => {
          resolve(HttpResponseCache);
        })
      }
    },
    createHttpResponseCache: function (...args) {
      console.warn("net.http.createHttpResponseCache interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, HttpResponseCacheOptions);
      } else {
        return new Promise((resolve, reject) => {
          resolve(HttpResponseCache);
        })
      }
    }
  }
  return http
}