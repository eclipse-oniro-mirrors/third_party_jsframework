import { paramMock } from "../utils"

export function mockOhosNfc() {
  global.ohosplugin.nfc = {}
  const TagInfoMock = {
    supportedProfiles: "[PC preview] unknown supportedProfiles",
  }
  const NfcATagMock = {
    getTagInfo: function (...args) {
      console.warn("NfcATag.getTagInfo interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      return TagInfoMock;
    },
    connectTag: function (...args) {
      console.warn("NfcATag.connectTag interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    reset: function (...args) {
      console.warn("NfcATag.reset interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
    },
    isTagConnected: function (...args) {
      console.warn("NfcATag.isTagConnected interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    setSendDataTimeout: function (...args) {
      console.warn("NfcATag.setSendDataTimeout interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    getSendDataTimeout: function (...args) {
      console.warn("NfcATag.getSendDataTimeout interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      return paramMock.paramNumberMock;
    },
    sendData: function (...args) {
      console.warn("NfcATag.sendData interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
        const len = args.length
        if (typeof args[len - 1] === 'function') {
          args[len - 1].call(this, paramMock.businessErrorMock, [paramMock.paramNumberMock]);
        } else {
          return new Promise((resolve, reject) => {
            resolve([paramMock.paramNumberMock]);
          })
        }
    },
    getMaxSendLength: function (...args) {
      console.warn("NfcATag.getMaxSendLength interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      return paramMock.paramNumberMock;
    },
    getSak: function (...args) {
      console.warn("NfcATag.getSak interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      return paramMock.paramNumberMock;
    },
    getAtqa: function () {
      console.warn("NfcATag.getAtqa interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      return [paramMock.paramNumberMock];
    },
  }
  const NfcBTagMock = {
    getTagInfo: function (...args) {
      console.warn("NfcBTag.getTagInfo interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      return TagInfoMock;
    },
    connectTag: function (...args) {
      console.warn("NfcBTag.connectTag interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    reset: function (...args) {
      console.warn("NfcBTag.reset interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
    },
    isTagConnected: function (...args) {
      console.warn("NfcBTag.isTagConnected interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    setSendDataTimeout: function (...args) {
      console.warn("NfcBTag.setSendDataTimeout interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    getSendDataTimeout: function (...args) {
      console.warn("NfcBTag.getSendDataTimeout interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      return paramMock.paramNumberMock;
    },
    sendData: function (...args) {
      console.warn("NfcBTag.sendData interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
        const len = args.length
        if (typeof args[len - 1] === 'function') {
          args[len - 1].call(this, paramMock.businessErrorMock, [paramMock.paramNumberMock]);
        } else {
          return new Promise((resolve, reject) => {
            resolve([paramMock.paramNumberMock]);
          })
        }
    },
    getMaxSendLength: function (...args) {
      console.warn("NfcBTag.getMaxSendLength interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      return paramMock.paramNumberMock;
    },
    getRespAppData: function (...args) {
      console.warn("NfcBTag.getRespAppData interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      return [paramMock.paramNumberMock];
    },
    getRespProtocol: function () {
      console.warn("NfcBTag.getRespProtocol interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      return [paramMock.paramNumberMock];
    },
  }
  const NfcFTagMock = {
    getTagInfo: function (...args) {
      console.warn("NfcFTag.getTagInfo interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      return TagInfoMock;
    },
    connectTag: function (...args) {
      console.warn("NfcFTag.connectTag interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    reset: function (...args) {
      console.warn("NfcFTag.reset interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
    },
    isTagConnected: function (...args) {
      console.warn("NfcFTag.isTagConnected interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    setSendDataTimeout: function (...args) {
      console.warn("NfcFTag.setSendDataTimeout interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    getSendDataTimeout: function (...args) {
      console.warn("NfcFTag.getSendDataTimeout interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      return paramMock.paramNumberMock;
    },
    sendData: function (...args) {
      console.warn("NfcFTag.sendData interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
        const len = args.length
        if (typeof args[len - 1] === 'function') {
          args[len - 1].call(this, paramMock.businessErrorMock, [paramMock.paramNumberMock]);
        } else {
          return new Promise((resolve, reject) => {
            resolve([paramMock.paramNumberMock]);
          })
        }
    },
    getMaxSendLength: function (...args) {
      console.warn("NfcFTag.getMaxSendLength interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      return paramMock.paramNumberMock;
    },
    getSystemCode: function (...args) {
      console.warn("NfcFTag.getSystemCode interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      return [paramMock.paramNumberMock];
    },
    getPmm: function () {
      console.warn("NfcFTag.getPmm interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      return [paramMock.paramNumberMock];
    },
  }
  const NfcVTagMock = {
    getTagInfo: function (...args) {
      console.warn("NfcVTag.getTagInfo interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      return TagInfoMock;
    },
    connectTag: function (...args) {
      console.warn("NfcVTag.connectTag interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    reset: function (...args) {
      console.warn("NfcVTag.reset interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
    },
    isTagConnected: function (...args) {
      console.warn("NfcVTag.isTagConnected interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    setSendDataTimeout: function (...args) {
      console.warn("NfcVTag.setSendDataTimeout interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    getSendDataTimeout: function (...args) {
      console.warn("NfcVTag.getSendDataTimeout interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      return paramMock.paramNumberMock;
    },
    sendData: function (...args) {
      console.warn("NfcVTag.sendData interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
        const len = args.length
        if (typeof args[len - 1] === 'function') {
          args[len - 1].call(this, paramMock.businessErrorMock, [paramMock.paramNumberMock]);
        } else {
          return new Promise((resolve, reject) => {
            resolve([paramMock.paramNumberMock]);
          })
        }
    },
    getMaxSendLength: function (...args) {
      console.warn("NfcVTag.getMaxSendLength interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      return paramMock.paramNumberMock;
    },
    getResponseFlags: function (...args) {
      console.warn("NfcVTag.getResponseFlags interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      return paramMock.paramNumberMock
    },
    getDsfId: function () {
      console.warn("NfcVTag.getDsfId interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      return paramMock.paramNumberMock
    },
  }
  global.ohosplugin.nfc.cardEmulation = {
    isSupported: function (...args) {
      console.warn("nfc.cardEmulation.isSupported interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    }
  }
  global.ohosplugin.nfc.controller = {
    isNfcAvailable: function (...args) {
      console.warn("nfc.controller.isNfcAvailable interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
       return paramMock.paramBooleanMock;
    },
    isNfcOpen: function (...args) {
      console.warn("nfc.controller.isNfcOpen interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    on: function (...args) {
      console.warn("nfc.controller.on interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      return;
    },
    off: function (...args) {
      console.warn("nfc.controller.off interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      return;
    },
    getNfcState: function (...args) {
      console.warn("nfc.controller.getNfcState interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      return paramMock.paramNumberMock;
    },
  }
  global.ohosplugin.nfc.tag = {
    getNfcATag: function (...args) {
      console.warn("nfc.tag.getNfcATag interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return NfcATagMock;
    },
    getNfcBTag: function (...args) {
      console.warn("nfc.tag.getNfcBTag interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return NfcBTagMock;
    },
    getNfcFTag: function (...args) {
      console.warn("nfc.tag.getNfcFTag interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return NfcFTagMock;
    },
    getNfcVTag: function (...args) {
      console.warn("nfc.tag.getNfcVTag interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return NfcVTagMock;
    },
  }
}
