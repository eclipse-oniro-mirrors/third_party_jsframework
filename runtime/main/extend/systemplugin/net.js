import {paramMock} from "./utils"

export function mockWebSocket() {
  global.systemplugin.net = {}
  const WebSocketMock = {
      connect: function (...args) {
          console.warn("WebSocket.connect interface mocked in the Previewer. How this interface works on the Previewer" +
              " may be different from that on a real device.")
          const len = args.length
          if (typeof args[len - 1] === 'function') {
              args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock);
          } else {
              return new Promise((resolve, reject) => {
                  resolve(paramMock.paramBooleanMock);
              })
          }
      },
      send: function (...args) {
          console.warn("WebSocket.send interface mocked in the Previewer. How this interface works on the Previewer may" +
              " be different from that on a real device.")
          const len = args.length
          if (typeof args[len - 1] === 'function') {
              args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock);
          } else {
              return new Promise((resolve, reject) => {
                  resolve(paramMock.paramBooleanMock);
              })
          }
      },
      close: function (...args) {
          console.warn("WebSocket.close interface mocked in the Previewer. How this interface works on the Previewer " +
              "may be different from that on a real device.")
          const len = args.length
          if (typeof args[len - 1] === 'function') {
              args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock);
          } else {
              return new Promise((resolve, reject) => {
                  resolve(paramMock.paramBooleanMock);
              })
          }
      },
      on: function (...args) {
          console.warn("WebSocket.on interface mocked in the Previewer. How this interface works on the Previewer may " +
              "be different from that on a real device.")
          const len = args.length
          if (typeof args[len - 1] === 'function') {
              if (args[0] === 'open') {
                  args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramObjectMock);
              } else if (args[0] === 'message') {
                  args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock);
              } else if (args[0] === 'close') {
                  args[len - 1].call(this, paramMock.businessErrorMock, {
                      code: "[PC Preview] unknow code",
                      reason: "[PC Preview] unknow reason"
                  });
              } else if (args[0] === 'error') {
                  args[len - 1].call(this, paramMock.businessErrorMock);
              }
          }
      },
      off: function (...args) {
          console.warn("WebSocket.off interface mocked in the Previewer. How this interface works on the Previewer may" +
              " be different from that on a real device.")
          const len = args.length
          if (typeof args[len - 1] === 'function') {
              if (args[0] === 'open') {
                  args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramObjectMock);
              } else if (args[0] === 'message') {
                  args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock);
              } else if (args[0] === 'close') {
                  args[len - 1].call(this, paramMock.businessErrorMock,{
                      code: "[PC Preview] unknow code",
                      reason: "[PC Preview] unknow reason"
                  });
              } else if (args[0] === 'error') {
                  args[len - 1].call(this, paramMock.businessErrorMock);
              }
          }
      }
  }
  global.systemplugin.net.webSocket = {
      createWebSocket: function () {
          console.warn("net.webSocket.createWebSocket interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
          return WebSocketMock;
      }
  }
}

export function mockHttp() {
    const HttpResponseMock = {
        result: "[PC Preview] unknow result",
        responseCode: "[PC Preview] unknow responseCode",
        header: "[PC Preview] unknow header"
    }
    const HttpRequestMock = {
        request: function (...args) {
            console.warn("HttpRequest.request interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, HttpResponseMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(HttpResponseMock);
                })
            }
        },
        destroy: function () {
            console.warn("HttpRequest.destroy interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
        },
        on: function (...args) {
            console.warn("HttpRequest.on interface mocked in the Previewer. How this interface works on the Previewer may" +
                " be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramObjectMock);
            }
        },
        off: function (...args) {
            console.warn("HttpRequest.off interface mocked in the Previewer. How this interface works on the Previewer may" +
                " be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramObjectMock);
            }
        }
    }
    global.systemplugin.net.http = {
        createHttp: function () {
            console.warn("net.http.createHttp interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return HttpRequestMock;
        }
    }
}

export function mockMdns() {
    const localServiceInfoMock = {
        serviceType: "[PC Preview] unknow serviceType",
        serviceName: "[PC Preview] unknow serviceName",
        host: "[PC Preview] unknow host",
        port: "[PC Preview] unknow port"
    }
    global.systemplugin.net.mdns = {
        on: function (...args) {
            console.warn("net.mdns.on interface mocked in the Previewer. How this interface works on the Previewer may " +
                "be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                if (args[0] === 'serviceAdd') {
                    args[len - 1].call(this, {serviceInfo : localServiceInfoMock, errorCode: 0});
                } else if (args[0] === 'serviceRemove') {
                    args[len - 1].call(this, {serviceInfo : localServiceInfoMock, errorCode: 0});
                } else if (args[0] === 'serviceStart') {
                    args[len - 1].call(this, {serviceInfo : localServiceInfoMock, errorCode: 0});
                } else if (args[0] === 'serviceStop') {
                    args[len - 1].call(this, {serviceInfo : localServiceInfoMock, errorCode: 0});
                } else if (args[0] === 'serviceFound') {
                    args[len - 1].call(this, localServiceInfoMock);
                } else if (args[0] === 'serviceLost') {
                    args[len - 1].call(this, localServiceInfoMock);
                } else if (args[0] === 'serviceResolve') {
                    args[len - 1].call(this, {serviceInfo : localServiceInfoMock, errorCode: 0});
                } else if (args[0] === 'serviceLost') {
                    args[len - 1].call(this, {serviceInfo : localServiceInfoMock, errorCode: 0});
                } else if (args[0] === 'error') {
                  args[len - 1].call(this, {serviceInfo : localServiceInfoMock, errorCode: 0});
                } else {
                    args[len - 1].call(this);
                }
            }
        },
        off: function (...args) {
            console.warn("net.mdns.off interface mocked in the Previewer. How this interface works on the Previewer may " +
                "be different from that on a real device.")
            const len = args.length
            if (args[0] === 'serviceAdd') {
                args[len - 1].call(this, {serviceInfo : localServiceInfoMock, errorCode: 0});
            } else if (args[0] === 'serviceRemove') {
                args[len - 1].call(this, {serviceInfo : localServiceInfoMock, errorCode: 0});
            } else if (args[0] === 'serviceStart') {
                args[len - 1].call(this, {serviceInfo : localServiceInfoMock, errorCode: 0});
            } else if (args[0] === 'serviceStop') {
                args[len - 1].call(this, {serviceInfo : localServiceInfoMock, errorCode: 0});
            } else if (args[0] === 'serviceFound') {
                args[len - 1].call(this, localServiceInfoMock);
            } else if (args[0] === 'serviceLost') {
                args[len - 1].call(this, localServiceInfoMock);
            } else if (args[0] === 'serviceResolve') {
                args[len - 1].call(this, {serviceInfo : localServiceInfoMock, errorCode: 0});
            } else if (args[0] === 'serviceLost') {
                args[len - 1].call(this, {serviceInfo : localServiceInfoMock, errorCode: 0});
            } else if (args[0] === 'error') {
              args[len - 1].call(this, {serviceInfo : localServiceInfoMock, errorCode: 0});
            } else {
                args[len - 1].call(this);
          }
        },
        addLocalService: function (...args) {
            console.warn("net.mdns.addLocalService interface mocked in the Previewer. How this interface works on the Previewer may" +
                " be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve();
                })
            }
        },
        removeLocalService: function (...args) {
            console.warn("net.mdns.removeLocalService interface mocked in the Previewer. How this interface works on the Previewer may" +
                " be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve();
                })
            }
        },
        startSearchingMDNS: function (...args) {
            console.warn("net.mdns.startSearchingMDNS interface mocked in the Previewer. How this interface works on the Previewer may" +
                " be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve();
                })
            }
        },
        stopSearchingMDNS: function (...args) {
            console.warn("net.mdns.stopSearchingMDNS interface mocked in the Previewer. How this interface works on the Previewer may" +
                " be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve();
                })
            }
        }
    }
}

export function mockSocket(){
    const SocketStateBase = {
      isBound: "[PC Preview] unknow isBound",
      isClose: "[PC Preview] unknow isClose",
      isConnected: "[PC Preview] unknow isConnected"
    }
    const SocketRemoteInfo  = {
      address: "[PC Preview] unknow address",
      family: "[PC Preview] unknow family",
      port: "[PC Preview] unknow port",
      size: "[PC Preview] unknow size"
    }
    const NetAddress = {
      address: "[PC Preview] unknow saddressize",
      family: "[PC Preview] unknow family",
      port: "[PC Preview] unknow port "
    }
    const UDPSocket = {
      bind: function (...args){
        console.warn("UDPSocket.bind interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
          const len = args.length
          if( typeof args[len - 1] === 'function') {
            args[len -1].call(this, paramMock.businessErrorMock)
          } else {
            return new Promise((resolve, reject) => {
              resolve();
            })
          }
      },
      send: function (...args) {
        console.warn("UDPSocket.send interface mocked in the Previewer. How this interface works on the Previewer may" +
          " be different from that on a real device.")
          const len = args.length
          if( typeof args[len - 1] === 'function') {
            args[len -1].call(this, paramMock.businessErrorMock)
          } else {
            return new Promise((resolve, reject) => {
              resolve();
          })
        }
      },
      close: function (...args) {
        console.warn("UDPSocket.close interface mocked in the Previewer. How this interface works on the Previewer may" +
          " be different from that on a real device.")
          const len = args.length
          if( typeof args[len - 1] === 'function') {
            args[len -1].call(this, paramMock.businessErrorMock)
          } else {
            return new Promise((resolve, reject) => {
              resolve();
          })
        }
      },
      getState: function (...args) {
        console.warn("UDPSocket.getState interface mocked in the Previewer. How this interface works on the Previewer may" +
          " be different from that on a real device.")
          const len = args.length
          if( typeof args[len - 1] === 'function') {
            args[len -1].call(this, paramMock.businessErrorMock, SocketStateBase)
          } else {
            return new Promise((resolve, reject) => {
              resolve(SocketStateBase);
          })
        }
      },
      setExtraOptions: function (...args) {
        console.warn("UDPSocket.setExtraOptions interface mocked in the Previewer. How this interface works on the Previewer may" +
          " be different from that on a real device.")
          const len = args.length
          if( typeof args[len - 1] === 'function') {
            args[len -1].call(this, paramMock.businessErrorMock)
          } else {
            return new Promise((resolve, reject) => {
              resolve();
          })
        }
      },
      on: function (...args) {
        console.warn("UDPSocket.on interface mocked in the Previewer. How this interface works on the Previewer may " +
          "be different from that on a real device.")
        const len = args.length
        if (typeof args[len - 1] === 'function') {
          if (args[0] === 'message') {
            args[len - 1].call(this, {
              message: "[PC Preview] unknow message",
              remoteInfo: SocketRemoteInfo
            });
          }  else if (args[0] === 'listening') {
            args[len - 1].call(this, paramMock.businessErrorMock);
          } else if (args[0] === 'error') {
            args[len - 1].call(this, paramMock.businessErrorMock);
          }
        }
      },
      off: function (...args) {
        console.warn("UDPSocket.off interface mocked in the Previewer. How this interface works on the Previewer may" +
          " be different from that on a real device.")
        const len = args.length
        if (typeof args[len - 1] === 'function') {
          if (args[0] === 'message') {
            args[len - 1].call(this, {
              message: "[PC Preview] unknow message",
              remoteInfo: SocketRemoteInfo
            });
          }  else if (args[0] === 'listening') {
            args[len - 1].call(this, paramMock.businessErrorMock);
          } else if (args[0] === 'error') {
            args[len - 1].call(this, paramMock.businessErrorMock);
          }
        }
      }
    }

    const TCPSocket = {
      bind: function (...args){
        console.warn("TcpSocket.bind interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
          const len = args.length
          if( typeof args[len - 1] === 'function') {
            args[len -1].call(this, paramMock.businessErrorMock)
          } else {
            return new Promise((resolve, reject) => {
              resolve();
            })
          }
      },
      connect: function (...args) {
        console.warn("TcpSocket.connect interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
          const len = args.length
          if( typeof args[len - 1] === 'function') {
            args[len -1].call(this, paramMock.businessErrorMock)
          } else {
            return new Promise((resolve, reject) => {
              resolve();
            })
          }
      },
      send: function (...args) {
        console.warn("TcpSocket.send interface mocked in the Previewer. How this interface works on the Previewer may" +
          " be different from that on a real device.")
          const len = args.length
          if( typeof args[len - 1] === 'function') {
            args[len -1].call(this, paramMock.businessErrorMock)
          } else {
            return new Promise((resolve, reject) => {
              resolve();
          })
        }
      },
      close: function (...args) {
        console.warn("TcpSocket.close interface mocked in the Previewer. How this interface works on the Previewer may" +
          " be different from that on a real device.")
          const len = args.length
          if( typeof args[len - 1] === 'function') {
            args[len -1].call(this, paramMock.businessErrorMock)
          } else {
            return new Promise((resolve, reject) => {
              resolve();
          })
        }
      },
      getRemoteAddress: function (...args) {
          console.warn("TcpSocket.getRemoteAddress interface mocked in the Previewer. How this interface works on the Previewer may" +
          " be different from that on a real device.")
          const len = args.length
          if( typeof args[len - 1] === 'function') {
            args[len -1].call(this, paramMock.businessErrorMock, NetAddress)
          } else {
            return new Promise((resolve, reject) => {
              resolve(NetAddress);
          })
        }
      },
       getState: function (...args) {
        console.warn("TcpSocket.getState interface mocked in the Previewer. How this interface works on the Previewer may" +
          " be different from that on a real device.")
          const len = args.length
          if( typeof args[len - 1] === 'function') {
            args[len -1].call(this, paramMock.businessErrorMock, SocketStateBase)
          } else {
            return new Promise((resolve, reject) => {
              resolve(SocketStateBase);
          })
        }
      },
      setExtraOptions: function (...args) {
        console.warn("TcpSocket.setExtraOptions interface mocked in the Previewer. How this interface works on the Previewer may" +
          " be different from that on a real device.")
          const len = args.length
          if( typeof args[len - 1] === 'function') {
            args[len -1].call(this, paramMock.businessErrorMock)
          } else {
            return new Promise((resolve, reject) => {
              resolve();
          })
        }
      },
      on: function (...args) {
        console.warn("TcpSocket.on interface mocked in the Previewer. How this interface works on the Previewer may " +
          "be different from that on a real device.")
        const len = args.length
        if (typeof args[len - 1] === 'function') {
          if (args[0] === 'message') {
            args[len - 1].call(this, {
              message: "[PC Preview] unknow message",
              remoteInfo: SocketRemoteInfo
            });
          }  else if (args[0] === 'listening') {
            args[len - 1].call(this, paramMock.businessErrorMock);
          } else if (args[0] === 'error') {
            args[len - 1].call(this, paramMock.businessErrorMock);
          }
        }
      },
      off: function (...args) {
        console.warn("TcpSocket.off interface mocked in the Previewer. How this interface works on the Previewer may" +
          " be different from that on a real device.")
        const len = args.length
        if (typeof args[len - 1] === 'function') {
          if (args[0] === 'message') {
            args[len - 1].call(this, {
              message: "[PC Preview] unknow message",
              remoteInfo: SocketRemoteInfo
            });
          }  else if (args[0] === 'listening') {
            args[len - 1].call(this, paramMock.businessErrorMock);
          } else if (args[0] === 'error') {
            args[len - 1].call(this, paramMock.businessErrorMock);
          }
        }
      }
    }
    global.systemplugin.net.socket ={
        constructUDPSocketInstance : function () {
        console.warn("net.socket.constructUDPSocketInstance interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
        return UDPSocket;
      },
        constructTCPSocketInstance : function () {
        console.warn("net.socket.constructTCPSocketInstance interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
        return TCPSocket;
      }
    }
  }

