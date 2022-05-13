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

const NetworkState = {
  longOperatorName: "[PC Preview] unknow longOperatorName",
  shortOperatorName: "[PC Preview] unknow shortOperatorName",
  plmnNumeric: "[PC Preview] unknow plmnNumeric",
  isRoaming: "[PC Preview] unknow isRoaming",
  regState: "[PC Preview] unknow regState",
  nsaState: "[PC Preview] unknow nsaState",
  isCaActive: "[PC Preview] unknow isCaActive",
  isEmergency: "[PC Preview] unknow isEmergency",
}
const SignalInformation = {
  signalType: "[PC Preview] unknow signalType",
  signalLevel: "[PC Preview] unknow signalLevel"
}
const DataFlowType = "[PC Preview] unknow DataFlowType"
const DataConnectState = "[PC Preview] unknow DataConnectState"
const CellInformation = {
  networkType: "[PC Preview] unknow networkType",
  isCamped: "[PC Preview] unknow isCamped",
  timeStamp: "[PC Preview] unknow timeStamp",
  signalInformation: "[PC Preview] unknow signalInformation",
  data: "[PC Preview] unknow unkown data"
}
export function mockRadio() {
  const NetworkSearchResult = {
    isNetworkSearchSuccess: "[PC Preview] unknow isNetworkSearchSuccess",
    networkSearchResult: [{
      operatorName: "[PC Preview] unknow operatorName",
      operatorNumeric: "[PC Preview] unknow operatorNumeric",
      state: "[PC Preview] unknow state",
      radioTech: "[PC Preview] unknow radioTech"
    }]
  }
  const PreferredNetworkMode = "[PC Preview] unknow PreferredNetworkMode"
  const NrOptionMode = "[PC Preview] unknow NrOptionMode"
  const NetworkSelectionMode = "[PC Preview] unknow unkown NetworkSelectionMode"
  const radio = {
    getRadioTech: function (...args) {
      console.warn("telephony.radio.getRadioTech interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, {
          psRadioTech: "[PC Preview] unknow psRadioTech",
          csRadioTech: "[PC Preview] unknow csRadioTech"
        });
      } else {
        return new Promise((resolve, reject) => {
          resolve({
            psRadioTech: "[PC Preview] unknow psRadioTech",
            csRadioTech: "[PC Preview] unknow csRadioTech"
          });
        })
      }
    },
    getNetworkState: function (...args) {
      console.warn("telephony.radio.getNetworkState interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, NetworkState);
      } else {
        return new Promise((resolve, reject) => {
          resolve(NetworkState);
        })
      }
    },
    sendUpdateCellLocationRequest: function (...args) {
      console.warn("telephony.radio.sendUpdateCellLocationRequest interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    getCellInformation: function (...args) {
      console.warn("telephony.radio.getCellInformation interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, [CellInformation]);
      } else {
        return new Promise((resolve, reject) => {
          resolve([CellInformation]);
        })
      }
    },
    getNetworkSelectionMode: function (...args) {
      console.warn("telephony.radio.getNetworkSelectionMode interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, NetworkSelectionMode);
      } else {
        return new Promise((resolve, reject) => {
          resolve(NetworkSelectionMode);
        })
      }
    },
    setNetworkSelectionMode: function (...args) {
      console.warn("telephony.radio.setNetworkSelectionMode interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    getNetworkSearchInformation: function (...args) {
      console.warn("telephony.radio.getNetworkSearchInformation interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, NetworkSearchResult);
      } else {
        return new Promise((resolve, reject) => {
          resolve(NetworkSearchResult);
        })
      }
    },
    getISOCountryCodeForNetwork: function (...args) {
      console.warn("telephony.radio.getISOCountryCodeForNetwork interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramStringMock);
        })
      }
    },
    getNrOptionMode: function (...args) {
      console.warn("telephony.radio.getNrOptionMode interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, NrOptionMode);
      } else {
        return new Promise((resolve, reject) => {
          resolve(NrOptionMode);
        })
      }
    },
    getIMEI: function (...args) {
      console.warn("telephony.radio.getIMEI interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramStringMock);
        })
      }
    },
    getMEID: function (...args) {
      console.warn("telephony.radio.getMEID interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramStringMock);
        })
      }
    },
    getUniqueDeviceId: function (...args) {
      console.warn("telephony.radio.getUniqueDeviceId interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramStringMock);
        })
      }
    },
    getPrimarySlotId: function (...args) {
      console.warn("telephony.radio.getPrimarySlotId interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramNumberMock);
        })
      }
    },
    getSignalInformation: function (...args) {
      console.warn("telephony.radio.getSignalInformation interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, [SignalInformation]);
      } else {
        return new Promise((resolve, reject) => {
          resolve([SignalInformation]);
        })
      }
    },
    isNrSupported: function () {
      console.warn("telephony.radio.isNrSupported interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    isRadioOn: function (...args) {
      console.warn("telephony.radio.isRadioOn interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramBooleanMock);
        })
      }
    },
    turnOnRadio: function (...args) {
      console.warn("telephony.radio.turnOnRadio interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    turnOffRadio: function (...args) {
      console.warn("telephony.radio.turnOffRadio interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    getOperatorName: function (...args) {
      console.warn("telephony.radio.getOperatorName interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramStringMock);
        })
      }
    },
    setPreferredNetwork: function (...args) {
      console.warn("telephony.radio.setPreferredNetwork interface mocked in the Previewer. How this interface works on the Previewer may" +
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
    getPreferredNetwork: function (...args) {
      console.warn("telephony.radio.getPreferredNetwork interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, PreferredNetworkMode);
      } else {
        return new Promise((resolve, reject) => {
          resolve(PreferredNetworkMode);
        })
      }
    },
    getIMEISV: function (...args) {
      console.warn("telephony.radio.getIMEISV interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramStringMock);
        })
      }
    }
  }
  return radio
}