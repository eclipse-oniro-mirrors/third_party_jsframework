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

import { paramMock } from '../utils';

export function mockAccessibility() {
  const AbilityTypeMock = '[PC Preview] unknown AbilityType';

  const CapabilityMock = '[PC Preview] unknown Capability';

  const EventTypeMock = '[PC Preview] unknown EventType';

  const AccessibilityAbilityInfoMock = {
    id: paramMock.paramStringMock,
    name: paramMock.paramStringMock,
    bundleName: paramMock.paramStringMock,
    TargetBundleName: [paramMock.paramStringMock],
    abilityTypes: [AbilityTypeMock],
    capabilities: [CapabilityMock],
    description: paramMock.paramStringMock,
    eventTypes: [EventTypeMock]
  };

  const CaptionsFontEdgeTypeMock = '[PC Preview] unknown CaptionsFontEdgeType';

  const CaptionsFontFamilyMock = '[PC Preview] unknown CaptionsFontFamily';

  const CaptionStyleMock = {
    fontFamily: CaptionsFontFamilyMock,
    fontScale: paramMock.paramNumberMock,
    fontColor: '[PC Preview] unknown fontColor',
    fontEdgeType: CaptionsFontEdgeTypeMock,
    backgroundColor: '[PC Preview] unknown backgroundColor',
    windowColor: '[PC Preview] unknown windowColor'
  };

  const CaptionsManagerMock = {
    enabled: paramMock.paramBooleanMock,
    style: CaptionStyleMock,
    on: function (...args) {
      console.warn('CaptionsManager.on interface mocked in the Previewer.' +
        ' How this interface works on the Previewer may be different from that on a real device.');
      const len = args.length;
      if (len > 1 && typeof args[len - 1] === 'function') {
        if (args[0] === 'enableChange') {
          args[len - 1].call(this, paramMock.paramBooleanMock);
        } else if (args[0] === 'styleChange') {
          args[len - 1].call(this, CaptionStyleMock);
        }
      }
    },
    off: function (...args) {
      console.warn('CaptionsManager.off interface mocked in the Previewer.' +
        ' How this interface works on the Previewer may be different from that on a real device.');
      const len = args.length;
      if (len > 1 && typeof args[len - 1] === 'function') {
        if (args[0] === 'enableChange') {
          args[len - 1].call(this, paramMock.paramBooleanMock);
        } else if (args[0] === 'styleChange') {
          args[len - 1].call(this, CaptionStyleMock);
        }
      }
    },
  };

  const WindowUpdateTypeMock = '[PC Preview] unknown WindowUpdateType';

  const ActionMock = '[PC Preview] unknown Action';

  const TextMoveUnitMock = '[PC Preview] unknown TextMoveUnit';

  const EventInfoClass = class EventInfo {
    constructor(jsonObject) {
      console.warn('accessibility.EventInfoClass.constructor interface mocked in the Previewer.' +
        ' How this interface works on the Previewer may be different from that on a real device.');
      this.type = EventTypeMock;
      this.windowUpdateType = WindowUpdateTypeMock;
      this.bundleName = paramMock.paramStringMock;
      this.componentType = paramMock.paramStringMock;
      this.pageId = paramMock.paramNumberMock;
      this.description = paramMock.paramStringMock;
      this.triggerAction = ActionMock;
      this.textMoveUnit = TextMoveUnitMock;
      this.contents = [paramMock.paramStringMock];
      this.lastContent = paramMock.paramStringMock;
      this.beginIndex = paramMock.paramNumberMock;
      this.currentIndex = paramMock.paramNumberMock;
      this.endIndex = paramMock.paramNumberMock;
      this.itemCount = paramMock.paramNumberMock;
    }
  };

  const accessibility = {
    EventInfo: EventInfoClass,
    isOpenAccessibility: function (...args) {
      console.warn('accessibility.isOpenAccessibility interface mocked in the Previewer.' +
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
    isOpenTouchGuide: function (...args) {
      console.warn('accessibility.isOpenTouchGuide interface mocked in the Previewer.' +
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
      console.warn('accessibility.on interface mocked in the Previewer.' +
        ' How this interface works on the Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        if (args[0] == 'accessibilityStateChange') {
          args[len - 1].call(this, this, paramMock.paramBooleanMock);
        } else if (args[0] == 'touchGuideStateChange') {
          args[len - 1].call(this, paramMock.paramBooleanMock);
        } else {
          args[len - 1].call(this, this, paramMock.paramBooleanMock);
        }
      }
    },
    off: function (...args) {
      console.warn('accessibility.off interface mocked in the Previewer.' +
        ' How this interface works on the Previewer may be different from that on a real device.');
      const len = args.length;
      if (len > 1 && typeof args[len - 1] === 'function') {
        if (args[0] === 'accessibilityStateChange') {
          args[len - 1].call(this, paramMock.paramBooleanMock);
        } else if (args[0] === 'touchGuideStateChange') {
          args[len - 1].call(this, paramMock.paramBooleanMock);
        }
      }
    },
    getAbilityLists: function (...args) {
      console.warn('accessibility.getAbilityLists interface mocked in the Previewer.' +
        ' How this interface works on the Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, [AccessibilityAbilityInfoMock]);
      } else {
        return new Promise((resolve, reject) => {
          resolve([AccessibilityAbilityInfoMock]);
        });
      }
    },
    sendEvent: function (...args) {
      console.warn('accessibility.sendEvent interface mocked in the Previewer.' +
        ' How this interface works on the Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        });
      }
    },
    getCaptionsManager: function () {
      console.warn('accessibility.getCaptionsManager interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      return CaptionsManagerMock;
    }
  };

  return accessibility;
}