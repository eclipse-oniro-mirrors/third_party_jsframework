import { paramMock } from "../utils"

export const IRemoteObject = {
  queryLocalInterface: function (...args) {
    console.warn("rpc.queryLocalInterface interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    return IRemoteBroker
  },
  sendRequest: function (...args) {
    console.warn("rpc.sendRequest interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    return paramMock.paramBooleanMock
  },
  addDeathRecipient: function (...args) {
    console.warn("rpc.addDeathRecipient interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    return paramMock.paramBooleanMock
  },
  removeDeathRecipient: function (...args) {
    console.warn("rpc.removeDeathRecipient interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    return paramMock.paramBooleanMock
  },
  getInterfaceDescriptor: function () {
    console.warn("rpc.getInterfaceDescriptor interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    return paramMock.paramStringMock
  },
  isObjectDead: function () {
    console.warn("rpc.isObjectDead interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    return paramMock.paramBooleanMock
  }
}
export function mockRpc() {
  const MessageParcel = {
    reclaim: function () {
      console.warn("rpc.reclaim interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
    },
    writeRemoteObject: function (...args) {
      console.warn("rpc.writeRemoteObject interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    readRemoteObject: function () {
      console.warn("rpc.readRemoteObject interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return IRemoteObject
    },
    writeInterfaceToken: function (...args) {
      console.warn("rpc.writeInterfaceToken interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    readInterfaceToken: function () {
      console.warn("rpc.readInterfaceToken interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramStringMock
    },
    getSize: function () {
      console.warn("rpc.getSize interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramNumberMock
    },
    getCapacity: function () {
      console.warn("rpc.getCapacity interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramNumberMock
    },
    setSize: function (...args) {
      console.warn("rpc.setSize interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    setCapacity: function (...args) {
      console.warn("rpc.setCapacity interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    getWritableBytes: function () {
      console.warn("rpc.getWritableBytes interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramNumberMock
    },
    getReadableBytes: function () {
      console.warn("rpc.getReadableBytes interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramNumberMock
    },
    getReadPosition: function () {
      console.warn("rpc.getReadPosition interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramNumberMock
    },
    getWritePosition: function () {
      console.warn("rpc.getWritePosition interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramNumberMock
    },
    rewindRead: function (...args) {
      console.warn("rpc.rewindRead interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    rewindWrite: function (...args) {
      console.warn("rpc.rewindWrite interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    writeByte: function (...args) {
      console.warn("rpc.writeByte interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    writeShort: function (...args) {
      console.warn("rpc.writeShort interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    writeInt: function (...args) {
      console.warn("rpc.writeInt interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    writeLong: function (...args) {
      console.warn("rpc.writeLong interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    writeFloat: function (...args) {
      console.warn("rpc.writeFloat interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    writeDouble: function (...args) {
      console.warn("rpc.writeDouble interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    writeBoolean: function (...args) {
      console.warn("rpc.writeBoolean interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    writeChar: function (...args) {
      console.warn("rpc.writeChar interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    writeString: function (...args) {
      console.warn("rpc.writeString interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    writeSequenceable: function (...args) {
      console.warn("rpc.writeSequenceable interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    writeByteArray: function (...args) {
      console.warn("rpc.writeByteArray interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    writeShortArray: function (...args) {
      console.warn("rpc.writeShortArray interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    writeIntArray: function (...args) {
      console.warn("rpc.writeIntArray interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    writeLongArray: function (...args) {
      console.warn("rpc.writeLongArray interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    writeFloatArray: function (...args) {
      console.warn("rpc.writeFloatArray interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    writeDoubleArray: function (...args) {
      console.warn("rpc.writeDoubleArray interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    writeBooleanArray: function (...args) {
      console.warn("rpc.writeBooleanArray interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    writeCharArray: function (...args) {
      console.warn("rpc.writeCharArray interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    writeStringArray: function (...args) {
      console.warn("rpc.writeStringArray interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    writeSequenceableArray: function (...args) {
      console.warn("rpc.writeSequenceableArray interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    readByte: function () {
      console.warn("rpc.readByte interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramNumberMock
    },
    readShort: function () {
      console.warn("rpc.readShort interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramNumberMock
    },
    readInt: function () {
      console.warn("rpc.readInt interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramNumberMock
    },
    readLong: function () {
      console.warn("rpc.readLong interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramNumberMock
    },
    readFloat: function () {
      console.warn("rpc.readFloat interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramNumberMock
    },
    readDouble: function () {
      console.warn("rpc.readDouble interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramNumberMock
    },
    readBoolean: function () {
      console.warn("rpc.readBoolean interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    readChar: function () {
      console.warn("rpc.readChar interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramNumberMock
    },
    readString: function () {
      console.warn("rpc.readString interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramStringMock
    },
    readSequenceable: function (...args) {
      console.warn("rpc.readSequenceable interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    readByteArray: function () {
      console.warn("rpc.readByteArray interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramArrayMock;
    },
    readShortArray: function () {
      console.warn("rpc.readShortArray interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramArrayMock;
    },
    readIntArray: function () {
      console.warn("rpc.readIntArray interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramArrayMock;
    },
    readLongArray: function () {
      console.warn("rpc.readLongArray interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramArrayMock;
    },
    readFloatArray: function () {
      console.warn("rpc.readFloatArray interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramArrayMock;
    },
    readDoubleArray: function () {
      console.warn("rpc.readDoubleArray interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramArrayMock;
    },
    readBooleanArray: function () {
      console.warn("rpc.readBooleanArray interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramArrayMock;
    },
    readCharArray: function () {
      console.warn("rpc.readCharArray interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramArrayMock;
    },
    readStringArray: function () {
      console.warn("rpc.readStringArray interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramArrayMock;
    }
  };
  const IRemoteBroker = {
    asObject: function () {
      console.warn("rpc.asObject interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return IRemoteObject
    }
  };
  const RemoteProxy = {
    queryLocalInterface: function (...args) {
      console.warn("rpc.queryLocalInterface interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return IRemoteObject
    },
    addDeathRecipient: function (...args) {
      console.warn("rpc.addDeathRecipient interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    removeDeathRecipient: function (...args) {
      console.warn("rpc.removeDeathRecipient interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    getInterfaceDescriptor: function () {
      console.warn("rpc.getInterfaceDescriptor interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramStringMock
    },
    sendRequest: function (...args) {
      console.warn("rpc.sendRequest interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    isObjectDead: function () {
      console.warn("rpc.isObjectDead interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock
    }
  };
  const rpc = {
    MessageParcel: {
      create: function () {
        console.warn("rpc.create interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
        return MessageParcel
      }
    },
    MessageOption: {
      flags: '[PC preview] unknow flags',
      waitTime: '[PC preview] unknow waitTime'
    },
    RemoteProxy: RemoteProxy,
    IPCSkeleton: {
      getContextObject: function () {
        console.warn("rpc.getContextObject interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
        return IRemoteObject
      },
      getCallingPid: function () {
        console.warn("rpc.getCallingPid interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
        return paramMock.paramNumberMock
      },
      getCallingUid: function () {
        console.warn("rpc.getCallingUid interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
        return paramMock.paramNumberMock
      },
      getCallingDeviceID: function () {
        console.warn("rpc.getCallingDeviceID interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
        return paramMock.paramStringMock
      },
      getLocalDeviceID: function () {
        console.warn("rpc.getLocalDeviceID interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
        return paramMock.paramStringMock
      },
      getLocalAbility: function () {
        console.warn("rpc.getLocalAbility interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
        return RemoteProxy
      },
      isLocalCalling: function () {
        console.warn("rpc.isLocalCalling interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
        return paramMock.paramBooleanMock
      },
      flushCommands: function (...args) {
        console.warn("rpc.flushCommands interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
        return paramMock.paramNumberMock
      },
      resetCallingIdentity: function () {
        console.warn("rpc.resetCallingIdentity interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
        return paramMock.paramStringMock
      },
      setCallingIdentity: function (...args) {
        console.warn("rpc.setCallingIdentity interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
        return paramMock.paramBooleanMock
      }
    },
    RemoteObject: {
      onRemoteRequest: function (...args) {
        console.warn("rpc.onRemoteRequest interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
        return paramMock.paramBooleanMock
      },
      attachLocalInterface: function (...args) {
        console.warn("rpc.attachLocalInterface interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
      }
    }
  }
  return rpc
}