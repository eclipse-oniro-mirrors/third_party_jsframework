/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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
  const NetSpecifierMock = {
    netCapabilities: NetCapabilitiesMock,
    bearerPrivateIdentifier: '[PC preview] unknow bearerPrivateIdentifier'
  }

  const NetCapabilitiesMock = {
    linkUpBandwidthKbps: '[PC preview] unknow linkUpBandwidthKbps',
    linkDownBandwidthKbps: '[PC preview] unknow linkDownBandwidthKbps',
    networkCap:[netCapMock],
    bearerTypes:[netBearTypeMock]
  }

  const netCapMock = '[PC preview] unknow NetCap'

  const netBearTypeMock = '[PC preview] unknow NetBearType' 

  const ConnectionPropertiesMock = {
    interfaceName: '[PC preview] unknow interfaceName',
    domains: '[PC preview] unknow domains',
    linkAddresses: [LinkAddressMock],
    dnses: [NetAddressMock],
    routes: [RouteInfoMock],
    mtu: '[PC preview] unknow mtu'
  }

  const LinkAddressMock = {
    address: NetAddressMock,
    prefixLength: '[PC preview] unknow prefixLength'
  }

  const NetAddressMock = {
    address: '[PC preview] unknow address',
    family: '[PC preview] unknow family',
    port: '[PC preview] unknow port'
  }

  const RouteInfoMock = {
    interface: '[PC preview] unknow interface',
    destination: LinkAddressMock,
    gateway: NetAddressMock,
    hasGateway: '[PC preview] unknow hasGateway',
    isDefaultRoute: '[PC preview] unknow isDefaultRoute'
  }

  const netConnection = {
    on: function (...args) {
      console.warn("netConnection.on interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        if (args[0] === 'netAvailable') {
          args[len - 1].call(this, netHandle);
        } else if (args[0] === 'netBlockStatusChange') {
          var array = new Array(netHandle, paramMock.paramBooleanMock);
          args[len - 1].call(this, array);
        } else if (args[0] === 'netCapabilitiesChange') {
          var array = new Array(netHandle, NetCapabilitiesMock);
          args[len - 1].call(this, array);
        } else if (args[0] === 'netConnectionPropertiesChange') {
          var array = new Array(netHandle, ConnectionPropertiesMock);
          args[len - 1].call(this, array);
        } else if (args[0] === 'netLost') {
          args[len - 1].call(this, netHandle);
        } else if (args[0] === 'netUnavailable') {
          args[len - 1].call(this);
        }
      }
    },

    register: function (...args) {
      console.warn("netConnection.register interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve()
        })
      }
    },

    unregister: function (...args) {
      console.warn("netConnection.unregister interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve()
        })
      }
    }
  }

  const netHandle = {
    netId: '[PC preview] unknow netId',

    bindSocket: function (...args) {
      console.warn("netHandle.bindSocket interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve()
        })
      }
    },

    getAddressesByName: function (...args) {
      console.warn("netHandle.getAddressesByName interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, [NetAddressMock])
      } else {
        return new Promise((resolve, reject) => {
          resolve([NetAddressMock])
        })
      }
    },

    getAddressByName: function (...args) {
      console.warn("netHandle.getAddressByName interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, NetAddressMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(NetAddressMock)
        })
      }
    }
  }

  const connection = {
    createNetConnection: function () {
      console.warn("connection.createNetConnection interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return netConnection;
    },

    getDefaultNet: function (...args) {
      console.warn("connection.getDefaultNet interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, netHandle)
      } else {
        return new Promise((resolve) => {
          resolve(netHandle)
        })
      }
    },

    getAllNets: function (...args) {
      console.warn("connection.getAllNets interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, [netHandle])
      } else {
        return new Promise((resolve) => {
          resolve([netHandle])
        })
      }
    },

    getConnectionProperties: function (...args) {
      console.warn("connection.getConnectionProperties interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, ConnectionPropertiesMock)
      } else {
        return new Promise((resolve) => {
          resolve(ConnectionPropertiesMock)
        })
      }
    },

    getNetCapabilities: function (...args) {
      console.warn("connection.getNetCapabilities interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, NetCapabilitiesMock)
      } else {
        return new Promise((resolve) => {
          resolve(NetCapabilitiesMock)
        })
      }
    },

    hasDefaultNet: function (...args) {
      console.warn("connection.hasDefaultNet interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock)
      } else {
        return new Promise((resolve) => {
          resolve(paramMock.paramBooleanMock)
        })
      }
    },

    enableAirplaneMode: function (...args) {
      console.warn("connection.enableAirplaneMode interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock)
      } else {
        return new Promise((resolve) => {
          resolve()
        })
      }
    },

    disableAirplaneMode: function (...args) {
      console.warn("connection.disableAirplaneMode interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock)
      } else {
        return new Promise((resolve) => {
          resolve()
        })
      }
    },

    reportNetConnected: function (...args) {
      console.warn("connection.reportNetConnected interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock)
      } else {
        return new Promise((resolve) => {
          resolve()
        })
      }
    },

    reportNetDisconnected: function (...args) {
      console.warn("connection.reportNetDisconnected interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock)
      } else {
        return new Promise((resolve) => {
          resolve()
        })
      }
    },

    getAddressesByName: function (...args) {
      console.warn("connection.getAddressesByName interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, [NetAddressMock])
      } else {
        return new Promise((resolve) => {
          resolve([NetAddressMock])
        })
      }
    },

    getAddressByName: function (...args) {
      console.warn("connection.getAddressByName interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, NetAddressMock)
      } else {
        return new Promise((resolve) => {
          resolve(NetAddressMock)
        })
      }
    },

    getAppNet: function (...args) {
      console.warn("connection.getAppNet interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, netHandle)
      } else {
        return new Promise((resolve) => {
          resolve(netHandle)
        })
      }
    },

    setAppNet: function (...args) {
      console.warn("connection.setAppNet interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock)
      } else {
        return new Promise((resolve) => {
          resolve()
        })
      }
    },

    registerReportNetConnectCallback: function (...args) {
      console.warn("connection.registerReportNetConnectCallback interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock)
      } else {
        return new Promise((resolve) => {
          resolve()
        })
      }
    },

    unregisterReportNetConnectCallback: function (...args) {
      console.warn("connection.unregisterReportNetConnectCallback interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock)
      } else {
        return new Promise((resolve) => {
          resolve()
        })
      }
    },

    getSpecificNet: function (...args) {
      console.warn("connection.getSpecificNet interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, Array(paramMock.paramNumberMock))
      } else {
        return new Promise((resolve) => {
          resolve(Array(paramMock.paramNumberMock))
        })
      }
    },

    restoreFactoryData: function (...args) {
      console.warn("connection.restoreFactoryData interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock)
      } else {
        return new Promise((resolve) => {
          resolve()
        })
      }
    },


  };

  return connection;
}