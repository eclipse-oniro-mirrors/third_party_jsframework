/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

export const ResultSetMock = {
  columnNames: "[PC Preview] unknow columnNames",
  columnCount: "[PC Preview] unknow columnCount",
  rowCount: "[PC Preview] unknow rowCount",
  rowIndex: "[PC Preview] unknow rowIndex",
  goToFirstRow: "[PC Preview] unknow goToFirstRow",
  goToLastRow: "[PC Preview] unknow goToLastRow",
  goToNextRow: "[PC Preview] unknow goToNextRow",
  goToPreviousRow: "[PC Preview] unknow goToPreviousRow",
  isEnded: "[PC Preview] unknow isEnded",
  isStarted: "[PC Preview] unknow isStarted",
  isClosed: "[PC Preview] unknow isClosed",
  getColumnIndex: function (...args) {
    console.warn("ResultSet.getColumnIndex interface mocked in the Previewer. How this interface works on the Previewer" +
      " may be different from that on a real device.")
    return paramMock.paramNumberMock;
  },
  getColumnName: function (...args) {
    console.warn("ResultSet.getColumnName interface mocked in the Previewer. How this interface works on the Previewer" +
      " may be different from that on a real device.")
    return paramMock.paramStringMock;
  },
  goTo: function (...args) {
    console.warn("ResultSet.goTo interface mocked in the Previewer. How this interface works on the Previewer" +
      " may be different from that on a real device.")
    return paramMock.paramBooleanMock;
  },
  goToRow: function (...args) {
    console.warn("ResultSet.goToRow interface mocked in the Previewer. How this interface works on the Previewer" +
      " may be different from that on a real device.")
    return paramMock.paramBooleanMock;
  },
  goToLastRow: function (...args) {
    console.warn("ResultSet.goToLastRow interface mocked in the Previewer. How this interface works on the Previewer" +
      " may be different from that on a real device.")
    return paramMock.paramBooleanMock;
  },
  goToFirstRow: function (...args) {
    console.warn("ResultSet.goToFirstRow interface mocked in the Previewer. How this interface works on the Previewer" +
      " may be different from that on a real device.")
    return paramMock.paramBooleanMock;
  },
  goToNextRow: function (...args) {
    console.warn("ResultSet.goToNextRow interface mocked in the Previewer. How this interface works on the Previewer" +
      " may be different from that on a real device.")
    return paramMock.paramBooleanMock;
  },
  goToPreviousRow: function (...args) {
    console.warn("ResultSet.goToPreviousRow interface mocked in the Previewer. How this interface works on the Previewer" +
      " may be different from that on a real device.")
    return paramMock.paramBooleanMock;
  },
  getBlob: function (...args) {
    console.warn("ResultSet.getBlob interface mocked in the Previewer. How this interface works on the Previewer" +
      " may be different from that on a real device.")
    return paramMock.paramArrayMock;
  },
  getString: function (...args) {
    console.warn("ResultSet.getString interface mocked in the Previewer. How this interface works on the Previewer" +
      " may be different from that on a real device.")
    return paramMock.paramStringMock;
  },
  getLong: function (...args) {
    console.warn("ResultSet.getLong interface mocked in the Previewer. How this interface works on the Previewer" +
      " may be different from that on a real device.")
    return paramMock.paramNumberMock;
  },
  getDouble: function (...args) {
    console.warn("ResultSet.getDouble interface mocked in the Previewer. How this interface works on the Previewer" +
      " may be different from that on a real device.")
    return paramMock.paramNumberMock;
  },
  isColumnNull: function (...args) {
    console.warn("ResultSet.isColumnNull interface mocked in the Previewer. How this interface works on the Previewer" +
      " may be different from that on a real device.")
    return paramMock.paramBooleanMock;
  },
  getDataType: function (...args) {
    console.warn("ResultSet.getDataType interface mocked in the Previewer. How this interface works on the Previewer" +
      " may be different from that on a real device.")
    return paramMock.paramNumberMock;
  },
  close: function () {
    console.warn("ResultSet.isColumnNull interface mocked in the Previewer. How this interface works on the Previewer" +
      " may be different from that on a real device.")
  }
}
export function mockDataShare() {
  const getFileTypesArrayMock = [
    paramMock.paramStringMock
  ]
  const PacMapTypeMock = {
    PacMap: new Map([["[PC Preview] unknow PacMapKey", "[PC Preview] unknow PacMapValue"]])
  }
  const DataShareHelperMock = {
    on: function (...args) {
      console.warn("DataShareHelper.on interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock)
      }
    },
    off: function (...args) {
      console.warn("DataShareHelper.off interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock)
      }
    },
    getType: function (...args) {
      console.warn("DataShareHelper.getType interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramStringMock);
        })
      }
    },
    getFileTypes: function (...args) {
      console.warn("DataShareHelper.getFileTypes interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, getFileTypesArrayMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(getFileTypesArrayMock);
        })
      }
    },
    normalizeUri: function (...args) {
      console.warn("DataShareHelper.normalizeUri interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramStringMock);
        })
      }
    },
    denormalizeUri: function (...args) {
      console.warn("DataShareHelper.denormalizeUri interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramStringMock);
        })
      }
    },
    notifyChange: function (...args) {
      console.warn("DataShareHelper.notifyChange interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    insert: function (...args) {
      console.warn("DataShareHelper.insert interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramNumberMock);
        })
      }
    },
    batchInsert: function (...args) {
      console.warn("DataShareHelper.batchInsert interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramNumberMock);
        })
      }
    },
    delete: function (...args) {
      console.warn("DataShareHelper.delete interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramNumberMock);
        })
      }
    },
    update: function (...args) {
      console.warn("DataShareHelper.update interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramNumberMock);
        })
      }
    },
    query: function (...args) {
      console.warn("DataShareHelper.query interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, ResultSetMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(ResultSetMock);
        })
      }
    },
    openFile: function (...args) {
      console.warn("DataShareHelper.OpenFile interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramNumberMock);
        })
      }
    }
  }
  const dataShareMock = {
    createDataShareHelper: function (...args) {
      console.warn("data.dataShare.createDataShareHelper mocked in the Previewer. How this interface works on the Previewer may be" +
        " different from that on a real device.")
        const len = args.length
        if (typeof args[len - 1] === 'function') {
          args[len - 1].call(this, paramMock.businessErrorMock, DataShareHelperMock)
        } else {
          return new Promise((resolve, reject) => {
            resolve(DataShareHelperMock);
          })
        }
     }
  }
  return dataShareMock;
}