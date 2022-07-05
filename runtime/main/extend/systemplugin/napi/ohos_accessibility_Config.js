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

import { paramMock } from '../utils';

export function mockAccessibilityConfig() {
  const DaltonizationColorFilterMock = '[PC Preview] unknown DaltonizationColorFilter';

  const CaptionsFontFamilyMock = '[PC Preview] unknown CaptionsFontFamily';

  const CaptionsFontEdgeTypeMock = '[PC Preview] unknown CaptionsFontEdgeType';

  const CaptionStyleMock = {
    fontFamily: CaptionsFontFamilyMock,
    fontScale: '[PC Preview] unknown fontScale',
    fontColor: '[PC Preview] unknown fontColor',
    fontEdgeType: CaptionsFontEdgeTypeMock,
    backgroundColor: '[PC Preview] unknown backgroundColor',
    windowColor: '[PC Preview] unknown windowColor'
  };

  const configBoolMock = {
    set: function (...args) {
      console.warn('accessibilityConfig configBoolMock.set interface mocked in the Previewer.' +
        ' How this interface works on the Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(null);
        });
      }
    },
    get: function (...args) {
      console.warn('accessibilityConfig configBoolMock.get interface mocked in the Previewer.' +
        ' How this interface works on the Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramBooleanMock);
        });
      }
    },
    on: function (...args) {
      console.warn('accessibilityConfig configBoolMock.on interface mocked in the Previewer.' +
        ' How this interface works on the Previewer may be different from that on a real device.');
      const len = args.length;
      if (len > 1 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.paramBooleanMock);
      }
    },
    off: function (...args) {
      console.warn('accessibilityConfig configBoolMock.off interface mocked in the Previewer.' +
        ' How this interface works on the Previewer may be different from that on a real device.');
      const len = args.length;
      if (len > 1 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.paramBooleanMock);
      }
    },
  };

  const daltonizationColorFilterMock = {
    set: function (...args) {
      console.warn('accessibilityConfig daltonizationColorFilterMock.set interface mocked in the Previewer.' +
        ' How this interface works on the Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.businessErrorMock);
        });
      }
    },
    get: function (...args) {
      console.warn('accessibilityConfig daltonizationColorFilterMock.get interface mocked in the Previewer.' +
        ' How this interface works on the Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, DaltonizationColorFilterMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(DaltonizationColorFilterMock);
        });
      }
    },
    on: function (...args) {
      console.warn('accessibilityConfig highContrastText.on interface mocked in the Previewer.' +
        ' How this interface works on the Previewer may be different from that on a real device.');
      const len = args.length;
      if (len > 1 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, DaltonizationColorFilterMock);
      }
    },
    off: function (...args) {
      console.warn('accessibilityConfig highContrastText.off interface mocked in the Previewer.' +
        ' How this interface works on the Previewer may be different from that on a real device.');
      const len = args.length;
      if (len > 1 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, DaltonizationColorFilterMock);
      }
    },
  };

  const configNumberBlock = {
    set: function (...args) {
      console.warn('accessibilityConfig configNumberBlock.set interface mocked in the Previewer.' +
        ' How this interface works on the Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.businessErrorMock);
        });
      }
    },
    get: function (...args) {
      console.warn('accessibilityConfig configNumberBlock.get interface mocked in the Previewer.' +
        ' How this interface works on the Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramNumberMock);
        });
      }
    },
    on: function (...args) {
      console.warn('accessibilityConfig configNumberBlock.on interface mocked in the Previewer.' +
        ' How this interface works on the Previewer may be different from that on a real device.');
      const len = args.length;
      if (len > 1 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.paramNumberMock);
      }
    },
    off: function (...args) {
      console.warn('accessibilityConfig configNumberBlock.off interface mocked in the Previewer.' +
        ' How this interface works on the Previewer may be different from that on a real device.');
      const len = args.length;
      if (len > 1 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.paramNumberMock);
      }
    },
  };

  const configShortkeyTargetBlock = {
    set: function (...args) {
      console.warn('accessibilityConfig configShortkeyTargetBlock.set interface mocked in the Previewer.' +
        ' How this interface works on the Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.businessErrorMock);
        });
      }
    },
    get: function (...args) {
      console.warn('accessibilityConfig configShortkeyTargetBlock.get interface mocked in the Previewer.' +
        ' How this interface works on the Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramStringMock);
        });
      }
    },
    on: function (...args) {
      console.warn('accessibilityConfig configShortkeyTargetBlock.on interface mocked in the Previewer.' +
        ' How this interface works on the Previewer may be different from that on a real device.');
      const len = args.length;
      if (len > 1 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.paramStringMock);
      }
    },
    off: function (...args) {
      console.warn('accessibilityConfig configShortkeyTargetBlock.off interface mocked in the Previewer.' +
        ' How this interface works on the Previewer may be different from that on a real device.');
      const len = args.length;
      if (len > 1 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.paramStringMock);
      }
    },
  };

  const captionStyleMock = {
    set: function (...args) {
      console.warn('accessibilityConfig captionStyleMock.set interface mocked in the Previewer.' +
        ' How this interface works on the Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.businessErrorMock);
        });
      }
    },
    get: function (...args) {
      console.warn('accessibilityConfig captionStyleMock.get interface mocked in the Previewer.' +
        ' How this interface works on the Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, CaptionStyleMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(CaptionStyleMock);
        });
      }
    },
    on: function (...args) {
      console.warn('accessibilityConfig captionStyleMock.on interface mocked in the Previewer.' +
        ' How this interface works on the Previewer may be different from that on a real device.');
      const len = args.length;
      if (len > 1 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, CaptionStyleMock);
      }
    },
    off: function (...args) {
      console.warn('accessibilityConfig captionStyleMock.off interface mocked in the Previewer.' +
        ' How this interface works on the Previewer may be different from that on a real device.');
      const len = args.length;
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, CaptionStyleMock);
      }
    },
  };

  const config = {
    enableAbility: function (...args) {
      console.warn('accessibilityConfig config.enableAbility interface mocked in the Previewer.' +
        ' How this interface works on the Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramBooleanMock);
        });
      }
    },
    disableAbility: function (...args) {
      console.warn('accessibilityConfig config.disableAbility interface mocked in the Previewer.' +
        ' How this interface works on the Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock);
      } else {
        return new Promise((resolve) => {
          resolve(paramMock.paramBooleanMock);
        });
      }
    },
    on: function (...args) {
      console.warn('accessibilityConfig config.on interface mocked in the Previewer.' +
        ' How this interface works on the Previewer may be different from that on a real device.');
      const len = args.length;
      if (len > 1 && typeof args[len - 1] === 'function') {
        if (args[0] === 'enableAbilityListsStateChanged') {
          args[len - 1].call(this);
        }
      }
    },
    off: function (...args) {
      console.warn('accessibilityConfig config.off interface mocked in the Previewer.' +
        ' How this interface works on the Previewer may be different from that on a real device.');
        const len = args.length;
        if (len > 1 && typeof args[len - 1] === 'function') {
          if (args[0] === 'enableAbilityListsStateChanged') {
            args[len - 1].call(this);
          }
        }
    },
    highContrastText: configBoolMock,
    invertColor: configBoolMock,
    daltonizationColorFilter: daltonizationColorFilterMock,
    contentTimeout: configNumberBlock,
    animationOff: configBoolMock,
    brightnessDiscount: configNumberBlock,
    screenMagnifier: configBoolMock,
    audioMono: configBoolMock,
    audioBalance: configBoolMock,
    mouseKey: configNumberBlock,
    mouseAutoClick: configNumberBlock,
    shortkey: configBoolMock,
    shortkey_target: configShortkeyTargetBlock,
    caption: configBoolMock,
    captionStyle: captionStyleMock,
  };
  return config;
}