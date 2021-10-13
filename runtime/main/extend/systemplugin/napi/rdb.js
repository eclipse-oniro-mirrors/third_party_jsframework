import { paramMock } from "../utils"

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
        },
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
        },
    };
    const rdbPredicates = {
        equalTo: function (...args) {
            console.warn("RdbPredicates.equalTo interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        notEqualTo: function (...args) {
            console.warn("RdbPredicates.notEqualTo interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        beginWrap: function (...args) {
            console.warn("RdbPredicates.beginWrap interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        endWrap: function (...args) {
            console.warn("RdbPredicates.endWrap interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        or: function (...args) {
            console.warn("RdbPredicates.or interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        and: function (...args) {
            console.warn("RdbPredicates.and interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        contains: function (...args) {
            console.warn("RdbPredicates.contains interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        beginsWith: function (...args) {
            console.warn("RdbPredicates.beginsWith interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        endsWith: function (...args) {
            console.warn("RdbPredicates.endsWith interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        isNull: function (...args) {
            console.warn("RdbPredicates.isNull interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        isNotNull: function (...args) {
            console.warn("RdbPredicates.isNotNull interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        like: function (...args) {
            console.warn("RdbPredicates.like interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        glob: function (...args) {
            console.warn("RdbPredicates.glob interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        between: function (...args) {
            console.warn("RdbPredicates.between interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        notBetween: function (...args) {
            console.warn("RdbPredicates.notBetween interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        greaterThan: function (...args) {
            console.warn("RdbPredicates.greaterThan interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        lessThan: function (...args) {
            console.warn("RdbPredicates.lessThan interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        greaterThanOrEqualTo: function (...args) {
            console.warn("RdbPredicates.greaterThanOrEqualTo interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        lessThanOrEqualTo: function (...args) {
            console.warn("RdbPredicates.lessThanOrEqualTo interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        orderByAsc: function (...args) {
            console.warn("RdbPredicates.orderByAsc interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        orderByDesc: function (...args) {
            console.warn("RdbPredicates.orderByDesc interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        distinct: function (...args) {
            console.warn("RdbPredicates.distinct interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        limitAs: function (...args) {
            console.warn("RdbPredicates.limitAs interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        offsetAs: function (...args) {
            console.warn("RdbPredicates.offsetAs interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        groupBy: function (...args) {
            console.warn("RdbPredicates.groupBy interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        indexedBy: function (...args) {
            console.warn("RdbPredicates.indexedBy interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        in: function (...args) {
            console.warn("RdbPredicates.in interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        notIn: function (...args) {
            console.warn("RdbPredicates.notIn interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
    };
    return rdbMock;
}