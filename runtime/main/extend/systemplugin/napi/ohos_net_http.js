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

export const RequestMethod = {
  OPTIONS: "[PC Preview] unknow OPTIONS",
  GET: "[PC Preview] unknow GET",
  HEAD: "[PC Preview] unknow HEAD",
  POST: "[PC Preview] unknow POST",
  PUT: "[PC Preview] unknow PUT",
  DELETE: "[PC Preview] unknow DELETE",
  TRACE: "[PC Preview] unknow TRACE",
  CONNECT: "[PC Preview] unknow CONNECT"
}

export const ResponseCode = {
  OK: "[PC Preview] unknow OK",
  CREATED: "[PC Preview] unknow CREATED",
  ACCEPTED: "[PC Preview] unknow ACCEPTED",
  NOT_AUTHORITATIVE: "[PC Preview] unknow NOT_AUTHORITATIVE",
  NO_CONTENT: "[PC Preview] unknow NO_CONTENT",
  RESET: "[PC Preview] unknow RESET",
  PARTIAL: "[PC Preview] unknow PARTIAL",
  MULT_CHOICE: "[PC Preview] unknow MULT_CHOICE",
  MOVED_PERM: "[PC Preview] unknow MOVED_PERM",
  MOVED_TEMP: "[PC Preview] unknow MOVED_TEMP",
  SEE_OTHER: "[PC Preview] unknow SEE_OTHER",
  NOT_MODIFIED: "[PC Preview] unknow NOT_MODIFIED",
  USE_PROXY: "[PC Preview] unknow USE_PROXY",
  BAD_REQUEST: "[PC Preview] unknow BAD_REQUEST",
  UNAUTHORIZED: "[PC Preview] unknow UNAUTHORIZED",
  PAYMENT_REQUIRED: "[PC Preview] unknow PAYMENT_REQUIRED",
  FORBIDDEN: "[PC Preview] unknow FORBIDDEN",
  NOT_FOUND: "[PC Preview] unknow NOT_FOUND",
  BAD_METHOD: "[PC Preview] unknow BAD_METHOD",
  NOT_ACCEPTABLE: "[PC Preview] unknow NOT_ACCEPTABLE",
  PROXY_AUTH: "[PC Preview] unknow PROXY_AUTH",
  CLIENT_TIMEOUT: "[PC Preview] unknow CLIENT_TIMEOUT",
  CONFLICT: "[PC Preview] unknow CONFLICT",
  GONE: "[PC Preview] unknow GONE",
  LENGTH_REQUIRED: "[PC Preview] unknow LENGTH_REQUIRED",
  PRECON_FAILED: "[PC Preview] unknow PRECON_FAILED",
  ENTITY_TOO_LARGE: "[PC Preview] unknow ENTITY_TOO_LARGE",
  REQ_TOO_LONG: "[PC Preview] unknow REQ_TOO_LONG",
  UNSUPPORTED_TYPE: "[PC Preview] unknow UNSUPPORTED_TYPE",
  INTERNAL_ERROR: "[PC Preview] unknow INTERNAL_ERROR",
  NOT_IMPLEMENTED: "[PC Preview] unknow NOT_IMPLEMENTED",
  BAD_GATEWAY: "[PC Preview] unknow BAD_GATEWAY",
  UNAVAILABLE: "[PC Preview] unknow UNAVAILABLE",
  GATEWAY_TIMEOUT: "[PC Preview] unknow GATEWAY_TIMEOUT",
  VERSION: "[PC Preview] unknow VERSION"
}

export function mockHttp() {
  const HttpResponse = {
    result: "[PC Preview] unknow result",
    responseCode: ResponseCode,
    header: "[PC Preview] unknow header",
    cookies: "[PC Preview] unknow cookies"
  }
  const HttpRequest = {
    request: function (...args) {
      console.warn("HttpRequest.request interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, HttpResponse);
      } else {
        return new Promise((resolve, reject) => {
          resolve(HttpResponse);
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

  const HttpRequestOptions = {
    method: RequestMethod,
    extraData: "[PC Preview] unknow extraData",
    header: "[PC Preview] unknow header",
    readTimeout: "[PC Preview] unknow readTimeout",
    connectTimeout: "[PC Preview] unknow connectTimeout"
  }

  const http = {
    RequestMethod,
    ResponseCode,
    createHttp: function () {
      console.warn("net.http.createHttp interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return HttpRequest;
    },
  }

  return http;
}