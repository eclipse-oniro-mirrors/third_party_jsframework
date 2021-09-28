import { paramMock } from "./utils"

export function mockContact () {
    const contactMock = {
        contactAttributes:"[PC Preview] unknow contactAttributes",
        id:"[PC Preview] unknow id",
        key:"[PC Preview] unknow key",
        emails:"[PC Preview] unknow emails",
        events:"[PC Preview] unknow events",
        groups:"[PC Preview] unknow groups",
        imAddresses:"[PC Preview] unknow imAddresses",
        phoneNumbers:"[PC Preview] unknow phoneNumbers",
        portrait:"[PC Preview] unknow portrait",
        postalAddresses:"[PC Preview] unknow postalAddresses",
        relations:"[PC Preview] unknow relations",
        sipAddresses:"[PC Preview] unknow sipAddresses",
        websites:"[PC Preview] unknow websites",
        name:"[PC Preview] unknow name",
        nickName:"[PC Preview] unknow nickName",
        note:"[PC Preview] unknow note",
        organization:"[PC Preview] unknow organization",
    }
    const holderMock = {
        holderId:"[PC Preview] unknow holderId",
        bundleName:"[PC Preview] unknow bundleName",
        displayName:"[PC Preview] unknow displayName",
    }
    const groupMock = {
        groupId:"[PC Preview] unknow groupId",
        title:"[PC Preview] unknow title"
    }
    global.systemplugin.contact = {
        addContact: function (...args) {
            console.warn("contact.addContact interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock)
            } else {
                return new Promise((resolve) => {
                    resolve(paramMock.paramNumberMock)
                });
            }
        },
        selectContact: function (...args) {
            console.warn("contact.selectContact interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            var array = new Array();
            array.push(contactMock);
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, array)
            } else {
                return new Promise((resolve) => {
                    resolve(array)
                });
            }
        },
        deleteContact: function (...args) {
            console.warn("contact.deleteContact interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock)
            } else {
                return new Promise((resolve) => {
                    resolve()
                });
            }
        },
        queryContact: function (...args) {
            console.warn("contact.queryContact interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, contactMock)
            } else {
                return new Promise((resolve) => {
                    resolve(contactMock)
                });
            }
        },
        queryContacts: function (...args) {
            console.warn("contact.queryContacts interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            var array = new Array();
            array.push(contactMock);
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, array)
            } else {
                return new Promise((resolve) => {
                    resolve(array)
                });
            }
        },
        queryContactsByEmail: function (...args) {
            console.warn("contact.queryContactsByEmail interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            var array = new Array();
            array.push(contactMock);
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, array)
            } else {
                return new Promise((resolve) => {
                    resolve(array)
                });
            }
        },
        queryContactsByPhoneNumber: function (...args) {
            console.warn("contact.queryContactsByPhoneNumber interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            var array = new Array();
            array.push(contactMock);
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, array)
            } else {
                return new Promise((resolve) => {
                    resolve(array)
                });
            }
        },
        queryGroups: function (...args) {
            console.warn("contact.queryGroups interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            var array = new Array();
            array.push(groupMock);
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, array)
            } else {
                return new Promise((resolve) => {
                    resolve(array)
                });
            }
        },
        queryHolders: function (...args) {
            console.warn("contact.queryHolders interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            var array = new Array();
            array.push(holderMock);
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, array)
            } else {
                return new Promise((resolve) => {
                    resolve(array)
                });
            }
        },
        queryKey: function (...args) {
            console.warn("contact.queryKey interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock)
            } else {
                return new Promise((resolve) => {
                    resolve(paramMock.paramStringMock)
                });
            }
        },
        queryMyCard: function (...args) {
            console.warn("contact.queryMyCard interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            var array = new Array();
            array.push(contactMock);
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, array)
            } else {
                return new Promise((resolve) => {
                    resolve(array)
                });
            }
        },
        updateContact: function (...args) {
            console.warn("contact.updateContact interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock)
            } else {
                return new Promise((resolve) => {
                    resolve()
                });
            }
        },
        isLocalContact: function (...args) {
            console.warn("contact.isLocalContact interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock)
            } else {
                return new Promise((resolve) => {
                    resolve(paramMock.paramBooleanMock)
                });
            }
        },
        isMyCard: function (...args) {
            console.warn("contact.isMyCard interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock)
            } else {
                return new Promise((resolve) => {
                    resolve(paramMock.paramBooleanMock)
                });
            }
        }
    }
}