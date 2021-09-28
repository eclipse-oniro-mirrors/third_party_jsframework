import { paramMock } from "../utils"

export function mockStorageInfoManager () {
    const infoMock = {
        storageInfo: {
            appSize: 472897,
            cacheSize: 483,
            dataSize: 32543
        },
        totalSize: 12800000,
        freeSize: 23700000,
    }
    global.ohosplugin.storageInfoManager = {
        queryInfoByPackageName: function (...args) {
            console.warn("storageInfoManager.queryInfoByPackageName interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, infoMock.storageInfo);
            } else {
                return new Promise((resolve) => {
                    resolve(infoMock.storageInfo);
                })
            }
        },
        getTotalSize: function (...args) {
            console.warn("storageInfoManager.getTotalSize interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, infoMock.totalSize);
            } else {
                return new Promise((resolve) => {
                    resolve(infoMock.totalSize);
                })
            }
        },
        getFreeSize: function (...args) {
            console.warn("storageInfoManager.getFreeSize interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, infoMock.freeSize);
            } else {
                return new Promise((resolve) => {
                    resolve(infoMock.freeSize);
                })
            }
        },
        queryInfoByUid: function (...args) {
            console.warn("storageInfoManager.queryInfoByUid interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, infoMock.storageInfo);
            } else {
                return new Promise((resolve) => {
                    resolve(infoMock.storageInfo);
                })
            }
        },
    }
}