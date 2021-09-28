import { paramMock } from "../utils"

export function mockBytrace() {
  const bytrace = {
    startTrace: function (...args) {
      console.warn("bytrace.startTrace interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    finishTrace: function (...args) {
      console.warn("bytrace.finishTrace interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    traceByValue: function (...args) {
      console.warn("bytrace.traceByValue interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    }
  }
  return bytrace
}
