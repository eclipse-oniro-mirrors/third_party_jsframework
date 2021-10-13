import {paramMock} from "../utils"

export function mockEmitter() {
    const EventDataMock = {
        data: '[PC preview] unknow data',
    };
    const emitter = {
        on: function (...args) {
            console.warn("emitter.on interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, EventDataMock);
            }
        },
        once: function (...args) {
            console.warn("emitter.once interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, EventDataMock);
            }
        },
        off: function (...args) {
            console.warn("emitter.off interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.");
        },
        emit: function (...args) {
            console.warn("emitter.emit interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.");
        },
    }
    return emitter
}
