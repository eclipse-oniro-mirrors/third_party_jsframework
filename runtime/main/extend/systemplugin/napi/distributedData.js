import { paramMock } from "../utils"

export function mockDistributedData() {
    const userTypeMock = {
        SAME_USER_ID: "[PC Preview] unknown SAME_USER_ID"
    };
    const userInfoMock = {
        userId: "[PC Preview] unknown userId",
        userType: userTypeMock
    };
    const kvManagerConfigMock = {
        userInfo: userInfoMock,
        bundleName: "[PC Preview] unknown bundleName"
    };
    const constantsMock = {
        MAX_KEY_LENGTH: "[PC Preview] unknown MAX_KEY_LENGTH",
        MAX_VALUE_LENGTH: "[PC Preview] unknown MAX_VALUE_LENGTH",
        MAX_KEY_LENGTH_DEVICE: "[PC Preview] unknown MAX_KEY_LENGTH_DEVICE",
        MAX_STORE_ID_LENGTH: "[PC Preview] unknown MAX_STORE_ID_LENGTH",
        MAX_QUERY_LENGTH: "[PC Preview] unknown MAX_QUERY_LENGTH",
        MAX_BATCH_SIZE: "[PC Preview] unknown MAX_BATCH_SIZE"
    };
    const valueTypeMock = {
        STRING: "[PC Preview] unknown STRING",
        INTEGER: "[PC Preview] unknown INTEGER",
        FLOAT: "[PC Preview] unknown FLOAT",
        BYTE_ARRAY: "[PC Preview] unknown BYTE_ARRAY",
        BOOLEAN: "[PC Preview] unknown BOOLEAN",
        DOUBLE: "[PC Preview] unknown DOUBLE"
    };
    const valueMock = {
        type: valueTypeMock.STRING,
        value: "[PC Preview] unknown value"
    };
    const entryMock = {
        key: "[PC Preview] unknown key",
        value: valueMock
    };
    const changeNotificationMock = {
        insertEntries: new Array(entryMock),
        updateEntries: new Array(entryMock),
        deleteEntries: new Array(entryMock),
        deviceId: "[PC Preview] unknown deviceId"
    };
    const syncModeMock = {
        PULL_ONLY: "[PC Preview] unknown PULL_ONLY",
        PUSH_ONLY: "[PC Preview] unknown PUSH_ONLY",
        PUSH_PULL: "[PC Preview] unknown PUSH_PULL"
    };
    const subscribeTypeMock = {
        SUBSCRIBE_TYPE_LOCAL: "[PC Preview] unknown SUBSCRIBE_TYPE_LOCAL",
        SUBSCRIBE_TYPE_REMOTE: "[PC Preview] unknown SUBSCRIBE_TYPE_REMOTE",
        SUBSCRIBE_TYPE_ALL: "[PC Preview] unknown SUBSCRIBE_TYPE_ALL"
    };
    const kvStoreTypeMock = {
        DEVICE_COLLABORATION: "[PC Preview] unknown DEVICE_COLLABORATION",
        SINGLE_VERSION: "[PC Preview] unknown SINGLE_VERSION",
        MULTI_VERSION: "[PC Preview] unknown MULTI_VERSION"
    };
    const securityLevelMock = {
        NO_LEVEL: "[PC Preview] unknown NO_LEVEL",
        S0: "[PC Preview] unknown S0",
        S1: "[PC Preview] unknown S1",
        S2: "[PC Preview] unknown S2",
        S3: "[PC Preview] unknown S3",
        S4: "[PC Preview] unknown S4"
    };
    const optionsMock = {
        createIfMissing: "[PC Preview] unknown createIfMissing",
        encrypt: "[PC Preview] unknown encrypt",
        backup: "[PC Preview] unknown backup",
        autoSync: "[PC Preview] unknown autoSync",
        kvStoreType: kvStoreTypeMock,
        securityLevel: securityLevelMock
    };
    const singleKVStoreMock = {
        put: function (...args) {
            console.warn("kvStore.put interface mocked in the Previewer." +
                " How this interface works on the Previewer may be different from that on a real device.")
            const len = args.length
            if (len > 0 && typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve();
                })
            }
        },
        delete: function (...args) {
            console.warn("singleKVStore.delete interface mocked in the Previewer." +
                " How this interface works on the Previewer may be different from that on a real device.")
            const len = args.length
            if (len > 0 && typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve();
                })
            }
        },
        on: function (...args) {
            console.warn("singleKVStore.on interface mocked in the Previewer." +
                " How this interface works on the Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                if (args[0] === 'dataChange') {
                    args[len - 1].call(this, changeNotificationMock);
                } else if (args[0] === 'syncComplete') {
                    var array = new Array([paramMock.paramStringMock, paramMock.paramNumberMock]);
                    args[len - 1].call(this, array);
                }
            }
        },
        get: function (...args) {
            console.warn("singleKVStore.get interface mocked in the Previewer." +
                " How this interface works on the Previewer may be different from that on a real device.")
            const len = args.length
            if (len > 0 && typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(paramMock.paramStringMock);
                })
            }
        },
        sync: function (...args) {
            console.warn("singleKVStore.sync interface mocked in the Previewer." +
                " How this interface works on the Previewer may be different from that on a real device.")
        },
    };
    const kvManagerMock = {
        getKVStore: function (...args) {
            console.warn("kvManager.getKVStore interface mocked in the Previewer." +
                " How this interface works on the Previewer may be different from that on a real device.")
            const len = args.length
            if (len > 0 && typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, singleKVStoreMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(singleKVStoreMock);
                })
            }
        }
    };
    const distributedData = {
        createKVManager: function (...args) {
            console.warn("distributedData.createKVManager interface mocked in the Previewer." +
                " How this interface works on the Previewer may be different from that on a real device.")
            const len = args.length
            if (len > 0 && typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, kvManagerMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(kvManagerMock);
                })
            }
        }
    };
    return distributedData;
}