import { paramMock } from "../utils"

export function mockWorkScheduler () {
    const workInfoMock = {
        workId: '[PC preview] unknown workId',
        networkType: '[PC preview] unknown networkType',
        isDeepIdle: '[PC preview] unknown isDeepIdle',
        idleWaitTime: '[PC preview] unknown idleWaitTime',
        isCharging: '[PC preview] unknown isCharging',
        chargerType: '[PC preview] unknown chargerType',
        batteryLevel: '[PC preview] unknown batteryLevel',
        batteryStatus: '[PC preview] unknown batteryStatus',
        storageRequest: '[PC preview] unknown storageRequest',
        isRepeat: '[PC preview] unknown isRepeat',
        isPersisted: '[PC preview] unknown isPersisted',
        repeatCycleTime: '[PC preview] unknown repeatCycleTime',
        repeatCount: '[PC preview] unknown repeatCount',
        bundleName: '[PC preview] unknown bundleName',
        abilityName: '[PC preview] unknown abilityName',
    }
    const workInfoArrayMock = [workInfoMock]
    const NetworkTypeMock = {
        NETWORK_TYPE_AN: 0,
        NETWORK_TYPE_MOBILE: 1,
        NETWORK_TYPE_WIFI: 2,
        NETWORK_TYPE_BLUETOOTH: 3,
        NETWORK_TYPE_WIFI_P2P: 4,
        NETWORK_TYPE_ETHERNET: 5,
    }
    const ChargingType = {
        CHARGING_PLUGGED_ANY: 0,
        CHARGING_PLUGGED_AC: 1,
        CHARGING_PLUGGED_USB: 2,
        CHARGING_PLUGGED_WIRELESS: 3,
    }
    const BatteryStatus = {
        BATTERY_STATUS_LOW: 0,
        BATTERY_STATUS_OKAY: 1,
        BATTERY_STATUS_LOW_OR_OKAY: 2,
    }
    const StorageRequest = {
        STORAGE_LEVEL_LOW: 0,
        STORAGE_LEVEL_OKAY: 1,
        STORAGE_LEVEL_LOW_OR_OKAY: 2
    }
    global.ohosplugin.workScheduler = {
        startWork: function (...args) {
            console.warn("workScheduler.startWork interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        stopWork: function (...args) {
            console.warn("workScheduler.stopWork interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        getWorkStatus: function (...args) {
            console.warn("workScheduler.getWorkStatus interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, workInfoMock)
            } else {
                return new Promise(resolve => {
                    resolve(workInfoMock);
                })
            }
        },
        obtainAllWorks: function (...args) {
            console.warn("workScheduler.obtainAllWorks interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, workInfoArrayMock)
            } else {
                return new Promise(resolve => {
                    resolve(workInfoArrayMock);
                })
            }
        },
        stopAndClearWorks: function (...args) {
            console.warn("workScheduler.stopAndClearWorks interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
        },
        isLastWorkTimeOut: function (...args) {
            console.warn("workScheduler.isLastWorkTimeOut interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock)
            } else {
                return new Promise(resolve => {
                    resolve(paramMock.paramBooleanMock);
                })
            }
        }
    }
}
