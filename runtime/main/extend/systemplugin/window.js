import { paramMock } from "./utils"

export function mockWindow() {
  const windowPropertiesMock = {
    brightness: '[PC preview] unknow brightness',
    isFullScreen: '[PC preview] unknow isFullScreen',
    isKeepScreenOn: '[PC preview] unknow isKeepScreenOn'
  }
  const windowMock = {
    setBrightness: function (...args) {
      console.warn("Window.setBrightness interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock)
      } else {
        return new Promise((resolve) => {
          resolve()
        })
      }
    },
    setBackgroundColor: function (...args) {
      console.warn("Window.setBackgroundColor interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock)
      } else {
        return new Promise((resolve) => {
          resolve()
        })
      }
    },
    setFullScreen: function (...args) {
      console.warn("Window.setFullScreen interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock)
      } else {
        return new Promise((resolve) => {
          resolve()
        })
      }
    },
    setKeepScreenOn: function (...args) {
      console.warn("Window.setKeepScreenOn interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock)
      } else {
        return new Promise((resolve) => {
          resolve()
        })
      }
    },
    setSystemBarProperties: function (...args) {
      console.warn("Window.setSystemBarProperties interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock)
      } else {
        return new Promise((resolve) => {
          resolve()
        })
      }
    },
    getProperties: function (...args) {
      console.warn("Window.getProperties interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, windowPropertiesMock)
      } else {
        return new Promise((resolve) => {
          resolve(windowPropertiesMock)
        })
      }
    },
    on: function (...args) {
      console.warn("Window.on interface mocked in the Previewer. How this interface works on the Previewer may be" +
        " different from that on a real device.")
      const len = args.length
      args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock)
    },
    off: function (...args) {
      console.warn("Window.off interface mocked in the Previewer. How this interface works on the Previewer may be" +
        " different from that on a real device.")
      const len = args.length
      args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock)
    }
  }
  global.systemplugin.window = {
    getTopWindow: function (...args) {
      console.warn("window.getTopWindow interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, windowMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(windowMock)
        })
      }
    }
  }
}