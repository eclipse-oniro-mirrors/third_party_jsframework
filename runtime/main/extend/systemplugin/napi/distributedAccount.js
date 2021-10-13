import {paramMock} from "../utils"

export function mockDistributedAccount() {
    const distributedInfoMock = {
        name: "[PC Preview] unknown name",
        id: "[PC Preview] unknown id",
        event: "[PC Preview] unknown event",
        scalableData: "[PC Preview] unknown scalableData"
    }
    const distributedAccountAbilityMock = {
        queryOsAccountDistributedInfo: function (...args) {
            console.warn("DistributedAccountAbility.queryOsAccountDistributedInfo interface mocked in the Previewer." +
                " How this interface works on the Previewer may be different from that on a real device.")
            const len = args.length
            if (len > 0 && typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, distributedInfoMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(distributedInfoMock);
                })
            }
        },
        updateOsAccountDistributedInfo: function (...args) {
            console.warn("DistributedAccountAbility.updateOsAccountDistributedInfo interface mocked in the Previewer." +
                " How this interface works on the Previewer may be different from that on a real device.")
            const len = args.length
            if (len > 0 && typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve();
                })
            }
        }
    };
    const distributedAccount = {
        getDistributedAccountAbility : function (...args) {
            console.warn("distributedAccount.getDistributedAccountAbility interface mocked in the Previewer." +
                " How this interface works on the Previewer may be different from that on a real device.")
            return distributedAccountAbilityMock;
        }
    }
    return distributedAccount;
}