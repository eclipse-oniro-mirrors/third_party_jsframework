import { paramMock } from "../utils"

export function mockWifi() {
  const linkedInfoMock = {
    ssid: '[PC preview] unknow ssid',
    bssid: '[PC preview] unknow bssid',
    networkId: '[PC preview] unknow networkId',
    rssi: '[PC preview] unknow rssi',
    band: '[PC preview] unknow band',
    linkSpeed: '[PC preview] unknow linkSpeed',
    frequency: '[PC preview] unknow frequency',
    isHidden: '[PC preview] unknow isHidden',
    isRestricted: '[PC preview] unknow isRestricted',
    chload: '[PC preview] unknow chload',
    snr: '[PC preview] unknow snr',
    macAddress: '[PC preview] unknow macAddress',
    ipAddress: '[PC preview] unknow ipAddress',
    suppState: '[PC preview] unknow suppState',
    connState: '[PC preview] unknow connState'
  }

  const ipInfoMock = {
    ipAddress: '[PC preview] unknow ipAddress',
    gateway: '[PC preview] unknow gateway',
    netmask: '[PC preview] unknow netmask',
    primaryDns: '[PC preview] unknow primaryDns',
    secondDns: '[PC preview] unknow secondDns',
    serverIp: '[PC preview] unknow serverIp',
    leaseDuration: '[PC preview] unknow leaseDuration'
  }

  const wifiScanInfoMock = {
    ssid: '[PC preview] unknow ssid',
    bssid: '[PC preview] unknow bssid',
    capabilities: '[PC preview] unknow capabilities',
    securityType: '[PC preview] unknow securityType',
    rssi: '[PC preview] unknow rssi',
    band: '[PC preview] unknow band',
    frequency: '[PC preview] unknow frequency',
    channelWidth: '[PC preview] unknow channelWidth',
    timestamp: '[PC preview] unknow timestamp',
  }

  global.ohosplugin.wifi = {
    getLinkedInfo: function (...args) {
      console.warn("wifi.getLinkedInfo interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, linkedInfoMock)
      } else {
        return new Promise((resolve) => {
          resolve(linkedInfoMock)
        })
      }
    },

    isConnected: function (...args) {
      console.warn("wifi.isConnected interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
        return paramMock.paramBooleanMock;
    },

    isWifiActive: function (...args) {
      console.warn("wifi.isWifiActive interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
        return paramMock.paramBooleanMock;
    },

    getSignalLevel: function (...args) {
      console.warn("wifi.getSignalLevel interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
        return paramMock.paramNumberMock;
    },

    isFeatureSupported: function (...args) {
      console.warn("wifi.isFeatureSupported interface mocked in the Previewer." +
      " How this interface works on the Previewer may be different from that on a real device.")
        return paramMock.paramBooleanMock;
    },

    addUntrustedConfig: function (...args) {
      console.warn("wifi.addUntrustedConfig interface mocked in the Previewer." +
      " How this interface works on the Previewer may be different from that on a real device.")
        const len = args.length
        if (typeof args[len - 1] === 'function') {
          args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock)
        } else {
          return new Promise((resolve) => {
            resolve(paramMock.paramBooleanMock)
          })
        }
    },

    removeUntrustedConfig: function (...args) {
      console.warn("wifi.removeUntrustedConfig interface mocked in the Previewer." +
      " How this interface works on the Previewer may be different from that on a real device.")
        const len = args.length
        if (typeof args[len - 1] === 'function') {
          args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock)
        } else {
          return new Promise((resolve) => {
            resolve(paramMock.paramBooleanMock)
          })
        }
    },

    scan: function (...args) {
      console.warn("wifi.scan interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
        return paramMock.paramBooleanMock;
    },

    getIpInfo: function (...args) {
      console.warn("wifi.getIpInfo interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
        return ipInfoMock;
    },

    getScanInfos: function (...args) {
      console.warn("wifi.getScanInfos interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
        const len = args.length
        if (typeof args[len - 1] === 'function') {
          args[len - 1].call(this, paramMock.businessErrorMock, [wifiScanInfoMock])
        } else {
          return new Promise((resolve) => {
            resolve([wifiScanInfoMock])
          })
        }
    },

    getCountryCode: function (...args) {
      console.warn("wifi.getCountryCode interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
        return paramMock.paramStringMock;
    },

    on: function (...args) {
      console.warn("wifi.on interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
        return;
    },

    off: function (...args) {
      console.warn("wifi.off interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
        return;
    }
  }
}