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

export function mockRadio() {
  const NetworkState = {
    longOperatorName: "[PC Preview] unknow longOperatorName",
    shortOperatorName: "[PC Preview] unknow shortOperatorName",
    plmnNumeric: "[PC Preview] unknow plmnNumeric",
    isRoaming: "[PC Preview] unknow isRoaming",
    regState: "[PC Preview] unknow regState",
    nsaState: "[PC Preview] unknow nsaState",
    isCaActive: "[PC Preview] unknow isCaActive",
    isEmergency: "[PC Preview] unknow isEmergency",
    cfgTech: RadioTechnology,
  }
  const SignalInformation = {
    signalType: "[PC Preview] unknow signalType",
    signalLevel: "[PC Preview] unknow signalLevel"
  }
  const DataFlowType = "[PC Preview] unknow DataFlowType";
  const DataConnectState = "[PC Preview] unknow DataConnectState";
  const RadioTechnology = "[PC Preview] unknow RadioTechnology";
  const NetworkType = "[PC Preview] unknow NetworkType";
  const RegState = "[PC Preview] unknow RegState";
  const NsaState = "[PC Preview] unknow NsaState";
  const CellInformation = {
    networkType: "[PC Preview] unknow networkType",
    isCamped: "[PC Preview] unknow isCamped",
    timeStamp: "[PC Preview] unknow timeStamp",
    signalInformation: "[PC Preview] unknow signalInformation",
    data: "[PC Preview] unknow data"
  }
  const CdmaCellInformation = {
    baseId: "[PC Preview] unknow baseId",
    latitude: "[PC Preview] unknow latitude",
    longitude: "[PC Preview] unknow longitude",
    nid: "[PC Preview] unknow nid",
    sid: "[PC Preview] unknow sid"
  }
  const GsmCellInformation = {
    lac: "[PC Preview] unknow lac",
    cellId: "[PC Preview] unknow cellId",
    arfcn: "[PC Preview] unknow arfcn",
    bsic: "[PC Preview] unknow bsic",
    mcc: "[PC Preview] unknow mcc",
    mnc: "[PC Preview] unknow mnc",
  }
  const LteCellInformation = {
    cgi: "[PC Preview] unknow cgi",
    pci: "[PC Preview] unknow pci",
    tac: "[PC Preview] unknow tac",
    earfcn: "[PC Preview] unknow earfcn",
    bandwidth: "[PC Preview] unknow bandwidth",
    mcc: "[PC Preview] unknow mcc",
    mnc: "[PC Preview] unknow mnc",
    isSupportEndc: "[PC Preview] unknow isSupportEndc",
  }
  const NrCellInformation = {
    nrArfcn: "[PC Preview] unknow nrArfcn",
    pci: "[PC Preview] unknow pci",
    tac: "[PC Preview] unknow tac",
    nci: "[PC Preview] unknow nci",
    mcc: "[PC Preview] unknow mcc",
    mnc: "[PC Preview] unknow mnc",
  }
  const TdscdmaCellInformation = {
    lac: "[PC Preview] unknow lac",
    cellId: "[PC Preview] unknow cellId",
    cpid: "[PC Preview] unknow cpid",
    uarfcn: "[PC Preview] unknow uarfcn",
    mcc: "[PC Preview] unknow mcc",
    mnc: "[PC Preview] unknow mnc",
  }
  const WcdmaCellInformation = {
    lac: "[PC Preview] unknow lac",
    cellId: "[PC Preview] unknow cellId",
    psc: "[PC Preview] unknow psc",
    uarfcn: "[PC Preview] unknow uarfcn",
    mcc: "[PC Preview] unknow mcc",
    mnc: "[PC Preview] unknow mnc",
  }
  const NetworkSelectionModeOptions = {
    slotId: "[PC Preview] unknow slotId",
    selectMode: NetworkSelectionMode,
    networkInformation: NetworkInformation,
    resumeSelection: "[PC Preview] unknow resumeSelection",
  }
  const NetworkInformation = {
    operatorName: "[PC Preview] unknow operatorName",
    operatorNumeric: "[PC Preview] unknow operatorNumeric",
    state: NetworkInformationState,
    radioTech: "[PC Preview] unknow radioTech",
  }
  const NetworkSearchResult = {
    isNetworkSearchSuccess: "[PC Preview] unknow isNetworkSearchSuccess",
    networkSearchResult: [{
      operatorName: "[PC Preview] unknow operatorName",
      operatorNumeric: "[PC Preview] unknow operatorNumeric",
      state: "[PC Preview] unknow state",
      radioTech: "[PC Preview] unknow radioTech"
    }]
  }
  const PreferredNetworkMode = "[PC Preview] unknow PreferredNetworkMode";
  const NetworkInformationState = "[PC Preview] unknow NetworkInformationState";
  const NrOptionMode = "[PC Preview] unknow NrOptionMode";
  const NetworkSelectionMode = "[PC Preview] unknow unkown NetworkSelectionMode";
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
        args[len - 1].call(this, NetworkState);
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
    setPrimarySlotId: function (...args) {
      console.warn("telephony.radio.setPrimarySlotId interface mocked in the Previewer. How this interface works on the Previewer may" +
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
        args[len - 1].call(this, [CellInformation]);
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
        args[len - 1].call(this, NetworkSelectionMode);
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
        args[len - 1].call(this, NetworkSearchResult);
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
        args[len - 1].call(this, paramMock.paramStringMock);
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
        args[len - 1].call(this, PreferredNetworkMode);
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
        args[len - 1].call(this, paramMock.paramStringMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramStringMock);
        })
      }
    }
  }
  return radio
}