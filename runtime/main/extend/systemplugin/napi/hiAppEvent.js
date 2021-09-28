import { paramMock } from "../utils"

function buildMockInfo(interfaceName) {
    return interfaceName + " interface mocked in the Previewer. How this interface works on the Previewer" +
    " may be different from that on a real device."
}

export function mockHiAppEvent() {
    const EventTypeMock = {
        FAULT: paramMock.paramNumberMock,
        STATISTIC: paramMock.paramNumberMock,
        SECURITY: paramMock.paramNumberMock,
        BEHAVIOR: paramMock.paramNumberMock
    }
    const EventMock = {
        USER_LOGIN: paramMock.paramStringMock,
        USER_LOGOUT: paramMock.paramStringMock,
        DISTRIBUTED_SERVICE_START: paramMock.paramStringMock
    }
    const ParamMock = {
        USER_ID: paramMock.paramStringMock,
        DISTRIBUTED_SERVICE_NAME: paramMock.paramStringMock,
        DISTRIBUTED_SERVICE_INSTANCE_ID: paramMock.paramStringMock
    }

    const hiAppEvent = {
        EventType: EventTypeMock,
        Event: EventMock,
        Param: ParamMock,
        write: function (...args) {
            console.warn(buildMockInfo("hiAppEvent.write"))
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock)
            } else {
                return new Promise((resolve) => {
                    resolve()
                })
            }
        },
        configure: function (...args) {
            console.warn(buildMockInfo("hiAppEvent.configure"));
            return paramMock.paramBooleanMock
        }
    }
    return hiAppEvent
}