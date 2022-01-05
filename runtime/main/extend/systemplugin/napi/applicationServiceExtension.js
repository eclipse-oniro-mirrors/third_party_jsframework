import { paramMock } from "../utils"
import { ExtensionContextClass } from "./application/abilityContext"

export function mockServiceExtension() {
  const IRemoteBrokerMock = {
    asObject: function () {
      console.warn("IRemoteBroker.asObject interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return IRemoteObjectMock;
    },
  }
  const IRemoteObjectMock = {
    queryLocalInterface: function () {
      console.warn("IRemoteObject.queryLocalInterface interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return IRemoteBrokerMock;
    },
    sendRequest: function (...args) {
      console.warn("IRemoteObject.sendRequest interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      return new Promise((resolve, reject) => {
        resolve();
      })
    },
    addDeathRecipient: function () {
      console.warn("IRemoteObject.addDeathRecipient interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    removeDeathRecipient: function () {
      console.warn("IRemoteObject.removeDeathRecipient interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    getInterfaceDescriptor: function () {
      console.warn("IRemoteObject.getInterfaceDescriptor interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return paramMock.paramStringMock;
    },
    isObjectDead: function () {
      console.warn("IRemoteObject.isObjectDead interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    }
  }
  const RemoteObjectClass = class RemoteObject {
    constructor() {
      console.warn('RemoteObject.constructor interface mocked in the Previewer. How this interface works on' +
        ' the Previewer may be different from that on a real device.');
      this.queryLocalInterface = function () {
        console.warn("RemoteObject.queryLocalInterface interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
        return IRemoteBrokerMock;
      };
      this.sendRequest = function (...args) {
        console.warn("RemoteObject.sendRequest interface mocked in the Previewer." +
          " How this interface works on the Previewer may be different from that on a real device.")
        return new Promise((resolve, reject) => {
          resolve();
        })
      };
      this.addDeathRecipient = function () {
        console.warn("RemoteObject.addDeathRecipient interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
        return paramMock.paramBooleanMock;
      };
      this.removeDeathRecipient = function () {
        console.warn("RemoteObject.removeDeathRecipient interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
        return paramMock.paramBooleanMock;
      };
      this.getInterfaceDescriptor = function () {
        console.warn("RemoteObject.getInterfaceDescriptor interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
        return paramMock.paramStringMock;
      };
      this.isObjectDead = function () {
        console.warn("RemoteObject.isObjectDead interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
        return paramMock.paramBooleanMock;
      };
      this.queryLocalInterface = function (...args) {
        console.warn("RemoteObject.queryLocalInterface interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
        return IRemoteObjectMock
      };
      this.getInterfaceDescriptor = function () {
        console.warn("RemoteObject.getInterfaceDescriptor interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
        return paramMock.paramStringMock
      };
      this.onRemoteRequest = function (...args) {
        console.warn("RemoteObject.onRemoteRequest interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
        return paramMock.paramBooleanMock
      };
      this.sendRequest = function (...args) {
        console.warn("RemoteObject.sendRequest interface mocked in the Previewer." +
          " How this interface works on the Previewer may be different from that on a real device.")
        return new Promise((resolve, reject) => {
          resolve();
        })
      };
      this.getCallingPid = function () {
        console.warn("RemoteObject.getCallingPid interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
        return paramMock.paramNumberMock
      };
      this.getCallingUid = function () {
        console.warn("RemoteObject.getCallingUid interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
        return paramMock.paramNumberMock
      };
      this.attachLocalInterface = function (...args) {
        console.warn("RemoteObject.attachLocalInterface interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
      };
    }
  }
  const serviceExtensionContextClass = class serviceExtensionContext extends ExtensionContextClass {
    constructor() {
      super();
      console.warn('ServiceExtension.serviceExtensionContext.constructor interface mocked in the Previewer. How this interface works on' +
        ' the Previewer may be different from that on a real device.');
      this.startAbility = function (...args) {
        console.warn("ServiceExtension.serviceExtensionContext.startAbility interface mocked in the Previewer." +
          " How this interface works on the Previewer may be different from that on a real device.")
        const len = args.length
        if (len > 0 && typeof args[len - 1] === 'function') {
          args[len - 1].call(this, paramMock.businessErrorMock);
        } else {
          return new Promise((resolve, reject) => {
            resolve();
          })
        }
      };
      this.terminateSelf = function (...args) {
        console.warn("ServiceExtension.serviceExtensionContext.terminateSelf interface mocked in the Previewer." +
          " How this interface works on the Previewer may be different from that on a real device.")
        const len = args.length
        if (len > 0 && typeof args[len - 1] === 'function') {
          args[len - 1].call(this, paramMock.businessErrorMock);
        } else {
          return new Promise((resolve, reject) => {
            resolve();
          })
        }
      };
      this.connectAbility = function (...args) {
        console.warn("ServiceExtension.serviceExtensionContext.connectAbility interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
        return paramMock.paramNumberMock
      };
      this.disconnectAbility = function (...args) {
        console.warn("ServiceExtension.serviceExtensionContext.disconnectAbility interface mocked in the Previewer." +
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
    }
  }
  const ServiceExtensionClass = class ServiceExtension {
    constructor() {
      console.warn('application.ServiceExtension.constructor interface mocked in the Previewer. How this interface works on' +
        ' the Previewer may be different from that on a real device.');
      this.context = new serviceExtensionContextClass();
      this.onCreate = function (...args) {
        console.warn("application.ServiceExtension.onCreate interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
      };
      this.onDestroy = function () {
        console.warn("application.ServiceExtension.onDestroy interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
      };
      this.onRequest = function (...args) {
        console.warn("application.ServiceExtension.onRequest interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
      };
      this.onConnect = function (...args) {
        console.warn("application.ServiceExtension.onConnect interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
        return new RemoteObjectClass();
      };
      this.onDisconnect = function (...args) {
        console.warn("application.ServiceExtension.onDisconnect interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
      };
      this.onReconnect = function (...args) {
        console.warn("application.ServiceExtension.onReconnect interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
      };
    }
  }
  return new ServiceExtensionClass();
}