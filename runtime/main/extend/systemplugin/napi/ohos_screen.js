/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

import {paramMock} from '../utils';

export const OrientationMock = {
  UNSPECIFIED: 0,
  VERTICAL: 1,
  HORIZONTAL: 2,
  REVERSE_VERTICAL: 3,
  REVERSE_HORIZONTAL: 4,
  SENSOR: 5,
  SENSOR_VERTICAL: 6,
  SENSOR_HORIZONTAL: 7
};

export const screenMock = {
  id: 'PC preview] unknown  id',
  parent: '[PC preview] unknown parent',
  supportedModeInfo: supportedModeInfoMock,
  activeModeIndex: '[PC preview] unknown activeModeIndex',
  orientation: OrientationMock,
  setOrientation: function(...args) {
    console.warn('Screen.setOrientation interface mocked in the Previewer. How this interface works on the' +
      ' Previewer may be different from that on a real device.');
    const len = args.length;
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock);
    } else {
      return new Promise((resolve) => {
        resolve();
      });
    }
  },
  setScreenActiveMode: function(...args) {
    console.warn('Screen.setScreenActiveMode interface mocked in the Previewer. How this interface works on the' +
      ' Previewer may be different from that on a real device.');
    const len = args.length;
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock);
    } else {
      return new Promise((resolve) => {
        resolve();
      });
    }
  },
  setDensityDpi: function(...args) {
    console.warn('Screen.setDensityDpi interface mocked in the Previewer. How this interface works on the' +
      ' Previewer may be different from that on a real device.');
    const len = args.length;
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock);
    } else {
      return new Promise((resolve) => {
        resolve();
      });
    }
  }
};

export const allScreenMock = [
  screenMock
];

export const ExpandOptionMock = {
  screenId: '[PC preview] unknown screenId',
  startX: '[PC preview] unknown  startX',
  startY: '[PC preview] unknown startY'
};

export const VirtualScreenOptionMock = {
  name: '[PC preview] unknown name',
  width: '[PC preview] unknown width',
  height: '[PC preview] unknown height',
  density: '[PC preview] unknown density',
  surfaceId: '[PC preview] unknown surfaceId'
};

export const screenModeInfoMock = {
  id: '[PC preview] unknown id',
  width: '[PC preview] unknown width',
  height: '[PC preview] unknown height',
  refreshRate: '[PC preview] unknown refreshRate'
};

export const supportedModeInfoMock = [
  screenModeInfoMock
]

export function mockScreen() {
  const screen = {
    ExpandOption: ExpandOptionMock,
    VirtualScreenOption: VirtualScreenOptionMock,
    Orientation: OrientationMock,
    ScreenModeInfo: screenModeInfoMock,
    getAllScreens: function(...args) {
      console.warn('Screen.getAllScreens interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, allScreenMock);
      } else {
        return new Promise((resolve) => {
          resolve(allScreenMock);
        });
      }
    },
    on: function(...args) {
      console.warn('Screen.on interface mocked in the Previewer. How this interface works on the Previewer may be' +
        ' different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
      } else {
        return new Promise((resolve) => {
          resolve(paramMock.paramNumberMock);
        });
      }
    },
    off: function(...args) {
      console.warn('Screen.off interface mocked in the Previewer. How this interface works on the Previewer may be' +
        ' different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
      } else {
        return new Promise((resolve) => {
          resolve(paramMock.paramNumberMock);
        });
      }
    },
    makeExpand: function(...args) {
      console.warn('Screen.makeExpand interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
      } else {
        return new Promise((resolve) => {
          resolve(paramMock.paramNumberMock);
        });
      }
    },
    makeMirror: function(...args) {
      console.warn('Screen.makeMirror interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
      } else {
        return new Promise((resolve) => {
          resolve(paramMock.paramNumberMock);
        });
      }
    },
    createVirtualScreen: function(...args) {
      console.warn('Screen.createVirtualScreen interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, screenMock);
      } else {
        return new Promise((resolve) => {
          resolve(screenMock);
        });
      }
    },
    destroyVirtualScreen: function(...args) {
      console.warn('Screen.destroyVirtualScreen interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve) => {
          resolve();
        });
      }
    },
    setVirtualScreenSurface: function(...args) {
      console.warn('Screen.setVirtualScreenSurface interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve) => {
          resolve();
        });
      }
    }
  }
  return screen
}

