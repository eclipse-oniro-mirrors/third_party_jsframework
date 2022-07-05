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
import { mockAccessibilityExtensionContext } from './accessibilityExtensionContext';

export function mockAccessibilityExtensionAbility() {
  const accessibilityEventMock = {
    eventType: '[PC Preview] unknown eventType',
    target: '[PC Preview] unknown target',
    timeStamp: '[PC Preview] unknown timeStamp',
    notificationContent: '[PC Preview] unknown notificationContent'
  };

  const accessibilityExtensionAbilityClass = class accessibilityExtensionAbility {
    context = null;
    onConnect = null;
    onDisconnect = null;
    onAccessibilityEvent = null;
    onKeyEvent = null;
    constructor() {
      this.context = mockAccessibilityExtensionContext();
      this.onConnect = function (...args) {
        console.warn('accessibilityExtensionAbility.onConnect interface mocked in the Previewer.' +
          ' How this interface works on the Previewer may be different from that on a real device.');
        return;
      };
      this.onDisconnect = function (...args) {
        console.warn('accessibilityExtensionAbility.onDisconnect interface mocked in the Previewer.' +
          ' How this interface works on the Previewer may be different from that on a real device.');
        return;
      };
      this.onAccessibilityEvent = function (...args) {
        console.warn('accessibilityExtensionAbility.onAccessibilityEvent interface mocked in the Previewer.' +
          ' How this interface works on the Previewer may be different from that on a real device.');
        return;
      };
      this.onKeyEvent = function (...args) {
        console.warn('accessibilityExtensionAbility.onKeyEvent interface mocked in the Previewer.' +
          ' How this interface works on the Previewer may be different from that on a real device.');
        return;
      };
    }
  };

  return new accessibilityExtensionAbilityClass();
}