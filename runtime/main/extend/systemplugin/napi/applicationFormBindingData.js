import { paramMock } from "../utils"

export function mockFormBindingData(){
    const formBindingDatasMock = {
        data: paramMock.paramObjectMock
    }
    const formBindingDataMock = {
        createFormBindingData: function (...args) {
            console.warn("formBindingData.createFormBindingData interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return formBindingDatasMock;
        },
    }
    return formBindingDataMock;
}