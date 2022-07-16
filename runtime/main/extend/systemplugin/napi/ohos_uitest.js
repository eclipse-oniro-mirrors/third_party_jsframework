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

import {paramMock} from '../utils'

const warnMessage =
    ' interface mocked in the Previewer. How this interface works on the' +
    ' Previewer may be different from that on a real device.'

const MatchPatternMock = {
  EQUALS: 0,
  CONTAINS: 1,
  STARTS_WITH: 2,
  ENDS_WITH: 3
}

const ByMockClass = class ByMock {
  constructor() {
    console.warn('uitest.By.constructor' + warnMessage);
    this.id = function(...args) {
      console.warn('uitest.By.id' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.text = function(...args) {
      console.warn('uitest.By.text' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.key = function(...args) {
      console.warn('uitest.By.key' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.type = function(...args) {
      console.warn('uitest.By.type' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.enabled = function(...args) {
      console.warn('uitest.By.enabled' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.focused = function(...args) {
      console.warn('uitest.By.focused' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.selected = function(...args) {
      console.warn('uitest.By.selected' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.clickable = function(...args) {
      console.warn('uitest.By.clickable' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.enabled = function(...args) {
      console.warn('uitest.By.enabled' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.longClickable = function(...args) {
      console.warn('uitest.By.longClickable' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.scrollable = function(...args) {
      console.warn('uitest.By.scrollable' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.checkable = function(...args) {
      console.warn('uitest.By.checkable' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.checked = function(...args) {
      console.warn('uitest.By.checked' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.isBefore = function(...args) {
      console.warn('uitest.By.isBefore' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.isAfter = function(...args) {
      console.warn('uitest.By.isAfter' + warnMessage)
      return paramMock.paramObjectMock
    };
  }
}

const BYMock = new ByMockClass()

const UiDriverMockClass = class UiDriverMock {
  constructor() {
    console.warn('uitest.UiDriver.constructor' + warnMessage);
    this.create = function(...args) {
      console.warn('uitest.UiDriver.create' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.delayMs = function(...args) {
      console.warn('uitest.UiDriver.delayMs' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.findComponent = function(...args) {
      console.warn('uitest.UiDriver.findComponent' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.findWindow = function(...args) {
      console.warn('uitest.UiDriver.findWindow' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.findComponents = function(...args) {
      console.warn('uitest.UiDriver.findComponents' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.waitForComponent = function(...args) {
      console.warn('uitest.UiDriver.waitForComponent' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.screenCap = function(...args) {
      console.warn('uitest.UiDriver.screenCap' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.assertComponentExist = function(...args) {
      console.warn('uitest.UiDriver.assertComponentExist' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.pressBack = function(...args) {
      console.warn('uitest.UiDriver.pressBack' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.triggerKey = function(...args) {
      console.warn('uitest.UiDriver.triggerKey' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.triggerCombineKeys = function(...args) {
      console.warn('uitest.UiDriver.triggerCombineKeys' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.click = function(...args) {
      console.warn('uitest.UiDriver.click' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.longClick = function(...args) {
      console.warn('uitest.UiDriver.longClick' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.doubleClick = function(...args) {
      console.warn('uitest.UiDriver.doubleClick' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.swipe = function(...args) {
      console.warn('uitest.UiDriver.swipe' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.drag = function(...args) {
      console.warn('uitest.UiDriver.drag' + warnMessage)
      return paramMock.paramObjectMock
    };
  }
}

const UIDriverMock = new UiDriverMockClass()

const UiComponentMockClass = class UiComponentMock {
  constructor() {
    console.warn('uitest.UiComponent.constructor' + warnMessage);
    this.getId = function(...args) {
      console.warn('uitest.UiComponent.getId.warn' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.getText = function(...args) {
      console.warn('uitest.UiComponent.getText.warn' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.getKey = function(...args) {
      console.warn('uitest.UiComponent.getKey.warn' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.getType = function(...args) {
      console.warn('uitest.UiComponent.getType.warn' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.isEnabled = function(...args) {
      console.warn('uitest.UiComponent.isEnabled.warn' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.isFocused = function(...args) {
      console.warn('uitest.UiComponent.isFocused.warn' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.isSelected = function(...args) {
      console.warn('uitest.UiComponent.isSelected.warn' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.isClickable = function(...args) {
      console.warn('uitest.UiComponent.isClickable.warn' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.isLongClickable = function(...args) {
      console.warn('uitest.UiComponent.isLongClickable.warn' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.isScrollable = function(...args) {
      console.warn('uitest.UiComponent.isScrollable.warn' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.isCheckable = function(...args) {
      console.warn('uitest.UiComponent.isCheckable.warn' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.isChecked = function(...args) {
      console.warn('uitest.UiComponent.isChecked.warn' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.getBounds = function(...args) {
      console.warn('uitest.UiComponent.getBounds.warn' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.getBoundsCenter = function(...args) {
      console.warn('uitest.UiComponent.getBoundsCenter.warn' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.click = function(...args) {
      console.warn('uitest.UiComponent.click.warn' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.longClick = function(...args) {
      console.warn('uitest.UiComponent.longClick.warn' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.doubleClick = function(...args) {
      console.warn('uitest.UiComponent.doubleClick.warn' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.scrollToTop = function(...args) {
      console.warn('uitest.UiComponent.scrollToTop.warn' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.scrollToBottom = function(...args) {
      console.warn('uitest.UiComponent.scrollToBottom.warn' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.inputText = function(...args) {
      console.warn('uitest.UiComponent.inputText.warn' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.clearText = function(...args) {
      console.warn('uitest.UiComponent.clearText.warn' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.scrollSearch = function(...args) {
      console.warn('uitest.UiComponent.scrollSearch.warn' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.dragTo = function(...args) {
      console.warn('uitest.UiComponent.dragTo.warn' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.pinchOut = function(...args) {
      console.warn('uitest.UiComponent.pinchOut.warn' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.pinchIn = function(...args) {
      console.warn('uitest.UiComponent.pinchIn.warn' + warnMessage)
      return paramMock.paramObjectMock
    };
  }
}

const UIComponentMock = new UiComponentMockClass()

const UiWindowMockClass = class UiWindowMock {
  constructor() {
    console.warn('uitest.UiWindowMock.constructor' + warnMessage);
    this.getBundleName = function(...args) {
      console.warn('uitest.UiWindowMock.getBundleName.warn' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.getBounds = function(...args) {
      console.warn('uitest.UiWindowMock.getBounds.warn' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.getTitle = function(...args) {
      console.warn('uitest.UiWindowMock.getTitle.warn' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.getWindowMode = function(...args) {
      console.warn('uitest.UiWindowMock.getWindowMode.warn' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.isFocused = function(...args) {
      console.warn('uitest.UiWindowMock.isFocused.warn' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.isActived = function(...args) {
      console.warn('uitest.UiWindowMock.isActived.warn' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.focuse = function(...args) {
      console.warn('uitest.UiWindowMock.focuse.warn' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.moveTo = function(...args) {
      console.warn('uitest.UiWindowMock.moveTo.warn' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.resize = function(...args) {
      console.warn('uitest.UiWindowMock.resize.warn' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.split = function(...args) {
      console.warn('uitest.UiWindowMock.split.warn' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.maximize = function(...args) {
      console.warn('uitest.UiWindowMock.maximize.warn' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.resume = function(...args) {
      console.warn('uitest.UiWindowMock.resume.warn' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.minimize = function(...args) {
      console.warn('uitest.UiWindowMock.minimize.warn' + warnMessage)
      return paramMock.paramObjectMock
    };
    this.close = function(...args) {
      console.warn('uitest.UiWindowMock.close.warn' + warnMessage)
      return paramMock.paramObjectMock
    };
  };
}

const UIWindowMock = new UiWindowMockClass()

export function mockUiTest() {
  const module = {
    MatchPattern: MatchPatternMock,
    BY: BYMock,
    UiDriver: UIDriverMock,
    UiComponent: UIComponentMock,
    UiWindow: UIWindowMock
  };
  return module
}