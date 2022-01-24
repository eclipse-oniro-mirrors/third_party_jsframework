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

export const RdbPredicatesClass = class RdbPredicates {
  constructor(...args) {
    console.warn('data.rdb.RdbPredicates.constructor interface mocked in the Previewer. How this interface works on the' +
      ' Previewer may be different from that on a real device.');
    this.equalTo = function (...args) {
      console.warn("RdbPredicates.equalTo interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return new RdbPredicatesClass();
    };
    this.notEqualTo = function (...args) {
      console.warn("RdbPredicates.notEqualTo interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return new RdbPredicatesClass();
    };
    this.beginWrap = function (...args) {
      console.warn("RdbPredicates.beginWrap interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return new RdbPredicatesClass();
    };
    this.endWrap = function (...args) {
      console.warn("RdbPredicates.endWrap interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return new RdbPredicatesClass();
    };
    this.or = function (...args) {
      console.warn("RdbPredicates.or interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return new RdbPredicatesClass();
    };
    this.and = function (...args) {
      console.warn("RdbPredicates.and interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return new RdbPredicatesClass();
    };
    this.contains = function (...args) {
      console.warn("RdbPredicates.contains interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return new RdbPredicatesClass();
    };
    this.beginsWith = function (...args) {
      console.warn("RdbPredicates.beginsWith interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return new RdbPredicatesClass();
    };
    this.endsWith = function (...args) {
      console.warn("RdbPredicates.endsWith interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return new RdbPredicatesClass();
    };
    this.isNull = function (...args) {
      console.warn("RdbPredicates.isNull interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return new RdbPredicatesClass();
    };
    this.isNotNull = function (...args) {
      console.warn("RdbPredicates.isNotNull interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return new RdbPredicatesClass();
    };
    this.like = function (...args) {
      console.warn("RdbPredicates.like interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return new RdbPredicatesClass();
    };
    this.glob = function (...args) {
      console.warn("RdbPredicates.glob interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return new RdbPredicatesClass();
    };
    this.between = function (...args) {
      console.warn("RdbPredicates.between interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return new RdbPredicatesClass();
    };
    this.notBetween = function (...args) {
      console.warn("RdbPredicates.notBetween interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return new RdbPredicatesClass();
    };
    this.greaterThan = function (...args) {
      console.warn("RdbPredicates.greaterThan interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return new RdbPredicatesClass();
    };
    this.lessThan = function (...args) {
      console.warn("RdbPredicates.lessThan interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return new RdbPredicatesClass();
    };
    this.greaterThanOrEqualTo = function (...args) {
      console.warn("RdbPredicates.greaterThanOrEqualTo interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return new RdbPredicatesClass();
    };
    this.lessThanOrEqualTo = function (...args) {
      console.warn("RdbPredicates.lessThanOrEqualTo interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return new RdbPredicatesClass();
    };
    this.orderByAsc = function (...args) {
      console.warn("RdbPredicates.orderByAsc interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return new RdbPredicatesClass();
    };
    this.orderByDesc = function (...args) {
      console.warn("RdbPredicates.orderByDesc interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return new RdbPredicatesClass();
    };
    this.distinct = function (...args) {
      console.warn("RdbPredicates.distinct interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return new RdbPredicatesClass();
    };
    this.limitAs = function (...args) {
      console.warn("RdbPredicates.limitAs interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return new RdbPredicatesClass();
    };
    this.offsetAs = function (...args) {
      console.warn("RdbPredicates.offsetAs interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return new RdbPredicatesClass();
    };
    this.groupBy = function (...args) {
      console.warn("RdbPredicates.groupBy interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return new RdbPredicatesClass();
    };
    this.indexedBy = function (...args) {
      console.warn("RdbPredicates.indexedBy interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return new RdbPredicatesClass();
    };
    this.in = function (...args) {
      console.warn("RdbPredicates.in interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return new RdbPredicatesClass();
    };
    this.notIn = function (...args) {
      console.warn("RdbPredicates.notIn interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return new RdbPredicatesClass();
    };
  }
};

export function mockRdb() {
  const rdbMock = {
    getRdbStore: function (...args) {
      console.warn("Rdb.getRdbStore interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, rdbStore);
      } else {
        return new Promise((resolve, reject) => {
          resolve(rdbStore);
        })
      }
    },
    deleteRdbStore: function (...args) {
      console.warn("Rdb.deleteRdbStore interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    RdbPredicates: RdbPredicatesClass
  };
  const resultSetMock = {
    columnNames: "[[PC Preview] unknow columnNames]",
    columnCount: "[PC Preview] unknow columnCount",
    rowCount: "[PC Preview] unknow rowCount",
    rowIndex: "[PC Preview] unknow rowIndex",
    isAtFirstRow: "[PC Preview] unknow isAtFirstRow",
    isAtLastRow: "[PC Preview] unknow isAtLastRow",
    isEnded: "[PC Preview] unknow isEnded",
    isStarted: "[PC Preview] unknow isStarted",
    isClosed: "[PC Preview] unknow isClosed",
    getColumnIndex: function (...args) {
      console.warn("ResultSet.getColumnIndex interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramNumberMock;
    },
    getColumnName: function (...args) {
      console.warn("ResultSet.getColumnName interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramStringMock;
    },
    goTo: function (...args) {
      console.warn("ResultSet.goTo interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    goToRow: function (...args) {
      console.warn("ResultSet.goToRow interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    goToFirstRow: function (...args) {
      console.warn("ResultSet.goToFirstRow interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    goToLastRow: function (...args) {
      console.warn("ResultSet.goToLastRow interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    goToNextRow: function (...args) {
      console.warn("ResultSet.goToNextRow interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    goToPreviousRow: function (...args) {
      console.warn("ResultSet.goToPreviousRow interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    getBlob: function (...args) {
      console.warn("ResultSet.getBlob interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramObjectMock;
    },
    getString: function (...args) {
      console.warn("ResultSet.getString interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramStringMock;
    },
    getLong: function (...args) {
      console.warn("ResultSet.getLong interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramNumberMock;
    },
    getDouble: function (...args) {
      console.warn("ResultSet.getDouble interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramNumberMock;
    },
    isColumnNull: function (...args) {
      console.warn("ResultSet.isColumnNull interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    close: function (...args) {
      console.warn("ResultSet.close interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    }
  }
  const storeConfig = {
    name: "[PC Preview] unknown name"
  }
  const rdbStore = {
    insert: function (...args) {
      console.warn("RdbStore.insert interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramNumberMock);
        })
      }
    },
    update: function (...args) {
      console.warn("RdbStore.update interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramNumberMock);
        })
      }
    },
    delete: function (...args) {
      console.warn("RdbStore.delete interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramNumberMock);
        })
      }
    },
    query: function (...args) {
      console.warn("RdbStore.query interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, resultSetMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(resultSetMock);
        })
      }
    },
    querySql: function (...args) {
      console.warn("RdbStore.querySql interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, resultSetMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(resultSetMock);
        })
      }
    },
    executeSql: function (...args) {
      console.warn("RdbStore.executeSql interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    }
  };

  return rdbMock;
}
