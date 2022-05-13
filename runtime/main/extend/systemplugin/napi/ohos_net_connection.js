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

export function mockConnection() {
  const NetAddress = "[PC Preview] unknow NetAddress"
  const NetHandle = {
    netId: "[PC Preview] unknow netId",
    bindSocket: function () {
      console.warn("NetHandle.bindSocket interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    openConnection: function () {
      console.warn("NetHandle.openConnection interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, HttpRequest);
      } else {
        return new Promise((resolve, reject) => {
          resolve(HttpRequest);
        })
      }
    },
    getAddressesByName: function () {
      console.warn("NetHandle.getAddressesByName interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, NetAddress);
      } else {
        return new Promise((resolve, reject) => {
          resolve(NetAddress);
        })
      }
    },
    getAddressByName: function () {
      console.warn("NetHandle.getAddressByName interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, NetAddress);
      } else {
        return new Promise((resolve, reject) => {
          resolve(NetAddress);
        })
      }
    },
  }
  const NetBearType = "[PC Preview] unknow NetBearType"
  const NetCapabilities = {
    bearerTypes: function () {
      console.warn("NetCapabilities.bearerTypes interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      var netBearTypeArray = new Array();
      netBearTypeArray.push(NetBearType);
      return netBearTypeArray;
    }
  }
  const NetCap = "[PC Preview] unknow NetCap"
  const ConnectionProperties = {
    interfaceName: "[PC Preview] unknow interfaceName",
    isUsePrivateDns: "[PC Preview] unknow isUsePrivateDns",
    privateDnsServerName: "[PC Preview] unknow privateDnsServerName",
    domains: "[PC Preview] unknow domains",
    httpProxy: "[PC Preview] unknow httpProxy",
    linkAddresses: function () {
      console.warn("ConnectionProperties.linkAddresses interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      var LinkAddress = new Array();
      LinkAddress.push(NetBearType);
      return LinkAddress;
    },
    dnses: function () {
      console.warn("ConnectionProperties.dnses interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      var NetAddress = new Array();
      NetAddress.push(NetBearType);
      return NetAddress;
    },
    routes: function () {
      console.warn("ConnectionProperties.routes interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      var RouteInfo = new Array();
      RouteInfo.push(NetBearType);
      return RouteInfo;
    },
    mtu: "[PC Preview] unknow mtu"
  }
  const HttpProxy = {
    host: "[PC Preview] unknow host",
    port: "[PC Preview] unknow port",
    parsedExclusionList: "[PC Preview] unknow parsedExclusionList"
  }
  const blocked = "[PC Preview] unknow blocked"
  const BackgroundPolicy = "[PC Preview] unknow BackgroundPolicy"
  const connection = {
    on: function (...args) {
      console.warn("net.connection.on interface mocked in the Previewer. How this interface works on the Previewer may " +
        "be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        if (args[0] === 'netAvailable') {
          args[len - 1].call(this, paramMock.businessErrorMock, NetHandle);
        } else if (args[0] === 'netBlockStatusChange') {
          args[len - 1].call(this, paramMock.businessErrorMock, { NetHandle, blocked });
        } else if (args[0] === 'netCapabilitiesChange') {
          args[len - 1].call(this, { NetHandle, NetCap });
        } else if (args[0] === 'netConnectionPropertiesChange') {
          args[len - 1].call(this, { NetHandle, ConnectionProperties });
        } else if (args[0] === 'netLosing') {
          args[len - 1].call(this, {
            NetHandle,
            maxMsToLive: "[PC Preview] unknow maxMsToLive"
          });
        } else if (args[0] === 'netLost') {
          args[len - 1].call(this, paramMock.businessErrorMock, NetHandle);
        } else if (args[0] === 'netUnavailable') {
          args[len - 1].call(this, paramMock.businessErrorMock);
        }
      }
    },
    off: function (...args) {
      console.warn("net.connection.off interface mocked in the Previewer. How this interface works on the Previewer may " +
        "be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        if (args[0] === 'netAvailable') {
          args[len - 1].call(this, paramMock.businessErrorMock, NetHandle);
        } else if (args[0] === 'netBlockStatusChange') {
          args[len - 1].call(this, { NetHandle, blocked });
        } else if (args[0] === 'netCapabilitiesChange') {
          args[len - 1].call(this, { NetHandle, NetCap });
        } else if (args[0] === 'netConnectionPropertiesChange') {
          args[len - 1].call(this, { NetHandle, ConnectionProperties });
        } else if (args[0] === 'netLosing') {
          args[len - 1].call(this, {
            NetHandle,
            maxMsToLive: "[PC Preview] unknow maxMsToLive"
          });
        } else if (args[0] === 'netLost') {
          args[len - 1].call(this, paramMock.businessErrorMock, NetHandle);
        } else if (args[0] === 'netUnavailable') {
          args[len - 1].call(this, paramMock.businessErrorMock);
        }
      }
    },
    addNetStatusCallback: function (...args) {
      console.warn("net.connection.addNetStatusCallback interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    removeNetStatusCallback: function (...args) {
      console.warn("net.connection.removeNetStatusCallback interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    getAppNet: function (...args) {
      console.warn("net.connection.getAppNet interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, NetHandle);
      } else {
        return new Promise((resolve, reject) => {
          resolve(NetHandle);
        })
      }
    },
    setAppNet: function (...args) {
      console.warn("net.connection.setAppNet interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    getDefaultNet: function (...args) {
      console.warn("net.connection.getDefaultNet interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, NetHandle);
      } else {
        return new Promise((resolve, reject) => {
          resolve(NetHandle);
        })
      }
    },
    getAllNets: function (...args) {
      console.warn("net.connection.getAllNets interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, NetHandle);
      } else {
        return new Promise((resolve, reject) => {
          resolve(NetHandle);
        })
      }
    },
    getDefaultHttpProxy: function (...args) {
      console.warn("net.connection.getDefaultHttpProxy interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, HttpProxy);
      } else {
        return new Promise((resolve, reject) => {
          resolve(HttpProxy);
        })
      }
    },
    getConnectionProperties: function (...args) {
      console.warn("net.connection.getConnectionProperties interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, ConnectionProperties);
      } else {
        return new Promise((resolve, reject) => {
          resolve(ConnectionProperties);
        })
      }
    },
    getNetCapabilities: function (...args) {
      console.warn("net.connection.getNetCapabilities interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, NetCapabilities);
      } else {
        return new Promise((resolve, reject) => {
          resolve(NetCapabilities);
        })
      }
    },
    getBackgroundPolicy: function (...args) {
      console.warn("net.connection.getBackgroundPolicy interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, BackgroundPolicy);
      } else {
        return new Promise((resolve, reject) => {
          resolve(BackgroundPolicy);
        })
      }
    },
    isDefaultNetMetered: function (...args) {
      console.warn("net.connection.isDefaultNetMetered interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramBooleanMock);
        })
      }
    },
    hasDefaultNet: function (...args) {
      console.warn("net.connection.hasDefaultNet interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramBooleanMock);
        })
      }
    },
    enableAirplaneMode: function (...args) {
      console.warn("net.connection.enableAirplaneMode interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    disableAirplaneMode: function (...args) {
      console.warn("net.connection.disableAirplaneMode interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    enableDistributedCellularData: function (...args) {
      console.warn("net.connection.enableDistributedCellularData interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    disableDistributedCellularData: function (...args) {
      console.warn("net.connection.disableDistributedCellularData interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    reportNetConnected: function (...args) {
      console.warn("net.connection.reportNetConnected interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    reportNetDisconnected: function (...args) {
      console.warn("net.connection.reportNetDisconnected interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
  }
  return connection
}
