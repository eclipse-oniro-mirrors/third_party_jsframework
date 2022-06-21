/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {paramMock} from "../utils"

export const windowPropertiesMock = {
  windowRect: '[PC preview] unknow windowRect',
  type: '[PC preview] unknow type',
  brightness: '[PC preview] unknow brightness',
  isTransparent: '[PC preview] unknow isTransparent',
  isFullScreen: '[PC preview] unknow isFullScreen',
  isKeepScreenOn: '[PC preview] unknow isKeepScreenOn',
  dimBehindValue: '[PC preview] unknow dimBehindValue',
  isLayoutFullScreen: '[PC preview] unknow isLayoutFullScreen',
  focusable: '[PC preview] unknow focusable',
  touchable: '[PC preview] unknow touchable',
  isPrivacyMode: '[PC preview] unknow isPrivacyMode',
  isRoundCorner: '[PC preview] unknow isRoundCorner'
}
export const RectMock = {
  left: '[PC preview] unknow Rect.left',
  top: '[PC preview] unknow  Rect.top',
  width: '[PC preview] unknow Rect.width',
  height: '[PC preview] unknow Rect.height'
}
export const AvoidAreaMock = {
  leftRect: RectMock,
  topRect: RectMock,
  rightRect: RectMock,
  bottomRect: RectMock
}
export const WindowTypeMock = {
  TYPE_APP: 0,
  TYPE_SYSTEM_ALERT: 1,
  TYPE_INPUT_METHOD: 2,
  TYPE_STATUS_BAR: 3,
  TYPE_PANEL: 4,
  TYPE_KEYGUARD: 5,
  TYPE_VOLUME_OVERLAY: 6,
  TYPE_NAVIGATION_BAR: 7
}
export const SystemBarRegionTintMock={
  type: WindowTypeMock,
  isEnable: '[PC preview] unknow isEnable',
  region: RectMock,
  backgroundColor: '[PC preview] unknow backgroundColor',
  contentColor: '[PC preview] unknow contentColor'
}
export const SystemBarTintStateMock= {
  displayId: '[PC preview] unknow brightness',
  regionTint:[SystemBarRegionTintMock]
}
export const SizeMock = {
  width: '[PC preview] unknow width',
  height: '[PC preview] unknow height'
}
export const WindowStageEventTypeMock = {
  FOREGROUND: 1,
  ACTIVE: 2,
  INACTIVE: 3,
  BACKGROUND: 4
}

export const WindowStageMock= {
  getMainWindow: function (...args) {
    console.warn("windowStage.getMainWindow interface mocked in the Previewer. How this interface works on the Previewer" +
      " may be different from that on a real device.")
    const len = args.length
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock,windowMock)
    } else {
      return new Promise((resolve, reject) => {
        resolve(windowMock)
      })
    }
  },
  createSubWindow: function (...args) {
    console.warn("windowStage.createSubWindow interface mocked in the Previewer. How this interface works on the Previewer" +
      " may be different from that on a real device.")
    const len = args.length
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock,windowMock)
    } else {
      return new Promise((resolve, reject) => {
        resolve(windowMock)
      })
    }
  },
  getSubWindow: function (...args) {
    console.warn("windowStage.getSubWindow interface mocked in the Previewer. How this interface works on the Previewer" +
      " may be different from that on a real device.")
    const len = args.length
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock,[windowMock])
    } else {
      return new Promise((resolve, reject) => {
        resolve([windowMock])
      })
    }
  },
  loadContent: function (...args) {
    console.warn("windowStage.loadContent interface mocked in the Previewer. How this interface works on the Previewer" +
      " may be different from that on a real device.")
    const len = args.length
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock)
    } else {
      return new Promise((resolve, reject) => {
        resolve()
      })
    }
  },
  on: function (...args) {
    console.warn("windowStage.on interface mocked in the Previewer. How this interface works on the Previewer" +
      " may be different from that on a real device.")
    const len = args.length
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock,WindowStageEventTypeMock)
    } else {
      return new Promise((resolve, reject) => {
        resolve(WindowStageEventTypeMock)
      })
    }
  },
  off: function (...args) {
    console.warn("windowStage.off interface mocked in the Previewer. How this interface works on the Previewer" +
      " may be different from that on a real device.")
    const len = args.length
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock,WindowStageEventTypeMock)
    } else {
      return new Promise((resolve, reject) => {
        resolve(WindowStageEventTypeMock)
      })
    }
  },
  disableWindowDecor: function (){
    console.warn("windowStage.disableWindowDecor interface mocked in the Previewer. How this interface works on the Previewer" +
    " may be different from that on a real device.")
  },
  setShowOnLockScreen: function (){
    console.warn("windowStage.setShowOnLockScreen interface mocked in the Previewer. How this interface works on the Previewer" +
    " may be different from that on a real device.")
  }
}

export const windowMock = {
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
  setTransparent: function (...args) {
    console.warn("Window.setTransparent interface mocked in the Previewer. How this interface works on the" +
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
  setDimBehind: function (...args) {
    console.warn("Window.setDimBehind interface mocked in the Previewer. How this interface works on the" +
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
  setLayoutFullScreen: function (...args) {
    console.warn("Window.setLayoutFullScreen interface mocked in the Previewer. How this interface works on the" +
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
  setFocusable: function (...args) {
    console.warn("Window.setFocusable interface mocked in the Previewer. How this interface works on the" +
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
  setTouchable: function (...args) {
    console.warn("Window.setTouchable interface mocked in the Previewer. How this interface works on the" +
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
  setPrivacyMode: function (...args) {
    console.warn("Window.setPrivacyMode interface mocked in the Previewer. How this interface works on the" +
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
  setSystemBarEnable: function (...args) {
    console.warn("Window.setSystemBarEnable interface mocked in the Previewer. How this interface works on the" +
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
  setForbidSplitMove: function (...args) {
    console.warn("Window.setForbidSplitMove interface mocked in the Previewer. How this interface works on the" +
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
  getAvoidArea: function (...args) {
    console.warn("Window.getAvoidArea interface mocked in the Previewer. How this interface works on the" +
      " Previewer may be different from that on a real device.")
    const len = args.length
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock, AvoidAreaMock)
    } else {
      return new Promise((resolve) => {
        resolve(AvoidAreaMock)
      })
    }
  },
  moveTo: function (...args) {
    console.warn("Window.moveTo interface mocked in the Previewer. How this interface works on the" +
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
  resetSize: function (...args) {
    console.warn("Window.resetSize interface mocked in the Previewer. How this interface works on the" +
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
  setWindowType: function (...args) {
    console.warn("Window.setWindowType interface mocked in the Previewer. How this interface works on the" +
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
  loadContent: function (...args) {
    console.warn("Window.loadContent interface mocked in the Previewer. How this interface works on the" +
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
  hide: function (...args) {
    console.warn("Window.hide interface mocked in the Previewer. How this interface works on the" +
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
  show: function (...args) {
    console.warn("Window.show interface mocked in the Previewer. How this interface works on the" +
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
  isShowing: function (...args) {
    console.warn("Window.isShowing interface mocked in the Previewer. How this interface works on the" +
      " Previewer may be different from that on a real device.")
    const len = args.length
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock)
    } else {
      return new Promise((resolve) => {
        resolve(paramMock.paramBooleanMock)
      })
    }
  },
  destroy: function (...args) {
    console.warn("Window.destroy interface mocked in the Previewer. How this interface works on the" +
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
  setOutsideTouchable: function (...args) {
    console.warn("Window.setOutsideTouchable interface mocked in the Previewer. How this interface works on the" +
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
  on: function (...args) {
    console.warn("Window.on interface mocked in the Previewer. How this interface works on the Previewer may be" +
      " different from that on a real device.")
    const len = args.length;
    if (typeof args[len - 1] === 'function') {
      if (args[0]==='keyboardHeightChange'){
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock)
      }else if (args[0]==='systemAvoidAreaChange'){
        args[len - 1].call(this, paramMock.businessErrorMock, AvoidAreaMock)
      }else if (args[0]==='windowSizeChange'){
        args[len - 1].call(this, paramMock.businessErrorMock, SizeMock)
      }else if (args[0]==='touchOutside'){
        args[len - 1].call(this, paramMock.businessErrorMock)
      }else {
        console.warn("on：please check param!")
      }
    }
  },
  off: function (...args) {
    console.warn("Window.off interface mocked in the Previewer. How this interface works on the Previewer may be" +
      " different from that on a real device.")
    const len = args.length;
    if (typeof args[len - 1] === 'function') {
      if (args[0]==='keyboardHeightChange'){
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock)
      }else if (args[0]==='systemAvoidAreaChange'){
        args[len - 1].call(this, paramMock.businessErrorMock, AvoidAreaMock)
      }else if (args[0]==='windowSizeChange'){
        args[len - 1].call(this, paramMock.businessErrorMock, SizeMock)
      }else if (args[0]==='touchOutside'){
        args[len - 1].call(this, paramMock.businessErrorMock)
      }else {
        console.warn("handleOnOff(error param)：please check param!")
      }
    }
  },
  setColorSpace: function (...args) {
    console.warn("Window.setColorSpace interface mocked in the Previewer. How this interface works on the Previewer" +
      " may be different from that on a real device.")
    const len = args.length
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock)
    } else {
      return new Promise((resolve) => {
        resolve()
      })
    }
  },
  getColorSpace: function (...args) {
    console.warn("Window.getColorSpace interface mocked in the Previewer. How this interface works on the Previewer" +
      " may be different from that on a real device.")
    const len = args.length
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock)
    } else {
      return new Promise((resolve) => {
        resolve(paramMock.paramNumberMock)
      })
    }
  },
  isSupportWideGamut: function (...args) {
    console.warn("Window.isSupportWideGamut interface mocked in the Previewer. How this interface works on the" +
      " Previewer may be different from that on a real device.")
    const len = args.length
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock)
    } else {
      return new Promise((resolve) => {
        resolve(paramMock.paramBooleanMock)
      })
    }
  },
}

export function mockWindow() {
  const SizeMock = {
    width: '[PC preview] unknow width',
    height: '[PC preview] unknow height'
  }
  const getSplitScreenBoundsMock = {
    splitMode: '[PC preview] unknow splitMode',
    primaryBounds: RectMock,
    secondaryBounds: RectMock,
  }
  const window = {
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
    },
    create: function (...args) {
      console.warn("Window.create interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, windowMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(windowMock)
        })
      }
    },
    find: function (...args) {
      console.warn("Window.find interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, windowMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(windowMock)
        })
      }
    },
    getAbilityWindowMode: function (...args) {
      console.warn("Window.getAbilityWindowMode interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramNumberMock)
        })
      }
    },
    getSplitScreenBounds: function (...args) {
      console.warn("window.getSplitScreenBounds interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, getSplitScreenBoundsMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(getSplitScreenBoundsMock)
        })
      }
    },
    isFloatingAbilityWindowVisible: function (...args) {
      console.warn("window.isFloatingAbilityWindowVisible interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramBooleanMock)
        })
      }
    },
    setSplitBarVisibility: function (...args) {
      console.warn("window.setSplitBarVisibility interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve()
        })
      }
    },
    minimizeAll: function (...args) {
      console.warn("window.minimizeAll interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve()
        })
      }
    },
    toggleShownStateForAllAppWindows: function (...args) {
      console.warn("window.toggleShownStateForAllAppWindows interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve()
        })
      }
    },
    setWindowLayoutMode: function (...args) {
      console.warn("window.setWindowLayoutMode interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve()
        })
      }
    },
    on: function (...args) {
      console.warn("window.on interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, SystemBarTintStateMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(SystemBarTintStateMock)
        })
      }
    },
    off: function (...args) {
      console.warn("window.off interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock,SystemBarTintStateMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(SystemBarTintStateMock)
        })
      }
    },
    WindowType: WindowTypeMock,
    AvoidAreaType: {
      TYPE_SYSTEM: 0,
      TYPE_CUTOUT: 1,
      TYPE_SYSTEM_GESTURE: 2
    },
    WindowMode: {
      UNDEFINED: 1,
      FULLSCREEN: 2,
      PRIMARY: 3,
      SECONDARY: 4,
      FLOATING: 5
    },
    WindowLayoutMode: {
      WINDOW_LAYOUT_MODE_CASCADE: 0,
      WINDOW_LAYOUT_MODE_TILE: 1
    },
    SystemBarProperties: {
      statusBarColor: '[PC preview] unknow statusBarColor',
      isStatusBarLightIcon: '[PC preview] unknow isStatusBarLightIcon',
      statusBarContentColor: '[PC preview] unknow statusBarContentColor',
      navigationBarColor: '[PC preview] unknow navigationBarColor',
      isNavigationBarLightIcon: '[PC preview] unknow isNavigationBarLightIcon',
      navigationBarContentColor: '[PC preview] unknow navigationBarContentColor'
    },
    SystemBarRegionTint: SystemBarRegionTintMock,
    SystemBarTintState: SystemBarTintStateMock,
    Rect: {
      left: '[PC preview] unknow left',
      top: '[PC preview] unknow top',
      width: '[PC preview] unknow width',
      height: '[PC preview] unknow height'
    },
    AvoidArea:AvoidAreaMock,
    Size: SizeMock,
    WindowProperties: {
      windowRect: RectMock,
      type: WindowTypeMock,
      isFullScreen: '[PC preview] unknow isFullScreen',
      isLayoutFullScreen: '[PC preview] unknow isLayoutFullScreen',
      focusable: '[PC preview] unknow focusable',
      touchable: '[PC preview] unknow touchable',
      brightness: '[PC preview] unknow brightness',
      dimBehindValue: '[PC preview] unknow dimBehindValue',
      isKeepScreenOn: '[PC preview] unknow isKeepScreenOn',
      isPrivacyMode: '[PC preview] unknow isPrivacyMode',
      isRoundCorner: '[PC preview] unknow isRoundCorner',
      isTransparent: '[PC preview] unknow isTransparent'
    },
    ColorSpace: {
      DEFAULT: 0,
      WIDE_GAMUT: 1
    },
    WindowStageEventType: WindowStageEventTypeMock,
    WindowStage: WindowStageMock
  }
  return window
}
