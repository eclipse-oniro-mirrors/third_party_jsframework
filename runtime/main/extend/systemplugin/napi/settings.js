import { paramMock } from "../utils"

export function mockSettings() {
  const settingsMock = {
    getUri: function (...args) {
      console.warn("settings.getUri interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.");
      return paramMock.paramStringMock;
    },
    getValue: function (...args) {
      console.warn("settings.getValue interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.");
      return paramMock.paramStringMock;
    },
    setValue: function (...args) {
      console.warn("settings.setValue interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.");
      return paramMock.paramBooleanMock;
    },
  };
  return settingsMock;
}
