import {paramMock} from "../utils"

export function mockHilog() {
  const hilog = {
    LogLevel: {
      DEBUG: 3,
      INFO: 4,
      WARN: 5,
      ERROR: 6,
      FATAL: 7
    },
    debug: function (...args) {
      console.warn("hilog.debug interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    info: function (...args) {
      console.warn("hilog.info interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    warn: function (...args) {
      console.warn("hilog.warn interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    error: function (...args) {
      console.warn("hilog.error interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    fatal: function (...args) {
      console.warn("hilog.fatal interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    isLoggable: function (...args) {
      console.warn("hilog.isLoggable interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    }
  }
  return hilog;
}
