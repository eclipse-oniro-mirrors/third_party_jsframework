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

export const ResizeDirectionMock = {
  LEFT: 0,
  RIGHT: 1,  
  UP: 2,
  DOWN: 3,
  LEFT_UP: 4,
  LEFT_DOWN: 5,
  RIGHT_UP: 6,
  RIGHT_DOWN: 7
}

export const MatchPatternMock = {
  EQUALS: 0,
  CONTAINS: 1,
  STARTS_WITH: 2,
  ENDS_WITH: 3
}

export const WindowModeMock = {
  FULLSCREEN: 0,
  PRIMARY: 1,
  SECONDARY: 2,
  FLOATING: 3
}

const PointMockClass = class PointMock {
  constructor() {
    X: '[PC Preview] unknown X';
    Y: '[PC Preview] unknown Y';
  }
}

const  RectMockClass = class RectMock {
  constructor() {
    leftX: '[PC Preview] unknown leftX';
    topY: '[PC Preview] unknown topY';
    rightX: '[PC Preview] unknown rightX';
    bottomY: '[PC Preview] unknown bottomY';
  }
}

const WindowFilterMockClass = class WindowFilterMock {
  constructor() {
    bundleName: '[PC Preview] unknown bundleName';
    title: '[PC Preview] unknown title';
    focused: '[PC Preview] unknown focused';
    actived: '[PC Preview] unknown actived';
  }
}

const ByMockClass = class ByMock {
  constructor() {
    console.warn('uitest.By.constructor' + warnMessage);
    this.id = function(...args) {
      console.warn('uitest.By.id' + warnMessage)
      return new BYMock()
    };
    this.text = function(...args) {
      console.warn('uitest.By.text' + warnMessage)
      return new BYMock()
    };
    this.key = function(...args) {
      console.warn('uitest.By.key' + warnMessage)
      return new BYMock()
    };
    this.type = function(...args) {
      console.warn('uitest.By.type' + warnMessage)
      return new BYMock()
    };
    this.enabled = function(...args) {
      console.warn('uitest.By.enabled' + warnMessage)
      return new BYMock()
    };
    this.focused = function(...args) {
      console.warn('uitest.By.focused' + warnMessage)
      return new BYMock()
    };
    this.selected = function(...args) {
      console.warn('uitest.By.selected' + warnMessage)
      return new BYMock()
    };
    this.clickable = function(...args) {
      console.warn('uitest.By.clickable' + warnMessage)
      return new BYMock()
    };
    this.enabled = function(...args) {
      console.warn('uitest.By.enabled' + warnMessage)
      return new BYMock()
    };
    this.longClickable = function(...args) {
      console.warn('uitest.By.longClickable' + warnMessage)
      return new BYMock()
    };
    this.scrollable = function(...args) {
      console.warn('uitest.By.scrollable' + warnMessage)
      return new BYMock()
    };
    this.checkable = function(...args) {
      console.warn('uitest.By.checkable' + warnMessage)
      return new BYMock()
    };
    this.checked = function(...args) {
      console.warn('uitest.By.checked' + warnMessage)
      return new BYMock()
    };
    this.isBefore = function(...args) {
      console.warn('uitest.By.isBefore' + warnMessage)
      return new BYMock()
    };
    this.isAfter = function(...args) {
      console.warn('uitest.By.isAfter' + warnMessage)
      return new BYMock()
    };
  }
}

const UiDriverClass = class UiDriverMock {
  constructor() {
    console.warn('uitest.UiDriver.constructor' + warnMessage);
    this.delayMs = function(...args) {
      console.warn('uitest.UiDriver.delayMs' + warnMessage)
      return new Promise((resolve) => {
        resolve()
      });
    };
    this.findComponent = function(...args) {
      console.warn('uitest.UiDriver.findComponent' + warnMessage)
      return new Promise((resolve) => {
        resolve(new UiComponentMock())
      });
    };
    this.findWindow = function(...args) {
      console.warn('uitest.UiDriver.findWindow' + warnMessage)
      return new Promise((resolve) => {
        resolve(new UiWindowMock())
      });
    };
    this.findComponents = function(...args) {
      console.warn('uitest.UiDriver.findComponents' + warnMessage)
      return new Promise((resolve) => {
        resolve(new UiComponentMock())
      });
    };
    this.waitForComponent = function(...args) {
      console.warn('uitest.UiDriver.waitForComponent' + warnMessage)
      return new Promise((resolve) => {
        resolve(new UiComponentMock())
      });
    };
    this.screenCap = function(...args) {
      console.warn('uitest.UiDriver.screenCap' + warnMessage)
      return new Promise((resolve) => {
        resolve(paramMock.paramBoolMock)
      });
    };
    this.assertComponentExist = function(...args) {
      console.warn('uitest.UiDriver.assertComponentExist' + warnMessage)
      return new Promise((resolve) => {
        resolve()
      });
    };
    this.pressBack = function(...args) {
      console.warn('uitest.UiDriver.pressBack' + warnMessage)
      return new Promise((resolve) => {
        resolve()
      });
    };
    this.triggerKey = function(...args) {
      console.warn('uitest.UiDriver.triggerKey' + warnMessage)
      return new Promise((resolve) => {
        resolve()
      });
    };
    this.triggerCombineKeys = function(...args) {
      console.warn('uitest.UiDriver.triggerCombineKeys' + warnMessage)
      return new Promise((resolve) => {
        resolve()
      });
    };
    this.click = function(...args) {
      console.warn('uitest.UiDriver.click' + warnMessage)
      return new Promise((resolve) => {
        resolve()
      });
    };
    this.longClick = function(...args) {
      console.warn('uitest.UiDriver.longClick' + warnMessage)
      return new Promise((resolve) => {
        resolve()
      });
    };
    this.doubleClick = function(...args) {
      console.warn('uitest.UiDriver.doubleClick' + warnMessage)
      return new Promise((resolve) => {
        resolve()
      });
    };
    this.swipe = function(...args) {
      console.warn('uitest.UiDriver.swipe' + warnMessage)
      return new Promise((resolve) => {
        resolve()
      });
    };
    this.drag = function(...args) {
      console.warn('uitest.UiDriver.drag' + warnMessage)
      return new Promise((resolve) => {
        resolve()
      });
    };
  }
}

UiDriverClass.create = function () {
  this.create = function(...args) {
    console.warn('uitest.UiDriver.create' + warnMessage)
    return new UiDriverMock()
  }
}

const UiComponentClass = class UiComponentMock {
  constructor() {
    console.warn('uitest.UiComponent.constructor' + warnMessage);
    this.getId = function(...args) {
      console.warn('uitest.UiComponent.getId.warn' + warnMessage)
      return new Promise((resolve) => {
        resolve(paramMock.paramNumberMock)
      });
    };
    this.getText = function(...args) {
      console.warn('uitest.UiComponent.getText.warn' + warnMessage)
      return new Promise((resolve) => {
        resolve(paramMock.paramStringMock)
      });
    };
    this.getKey = function(...args) {
      console.warn('uitest.UiComponent.getKey.warn' + warnMessage)
      return new Promise((resolve) => {
        resolve(paramMock.paramStringMock)
      });
    };
    this.getType = function(...args) {
      console.warn('uitest.UiComponent.getType.warn' + warnMessage)
      return new Promise((resolve) => {
        resolve(paramMock.paramStringMock)
      });
    };
    this.isEnabled = function(...args) {
      console.warn('uitest.UiComponent.isEnabled.warn' + warnMessage)
      return new Promise((resolve) => {
        resolve(paramMock.paramBoolMock)
      });
    };
    this.isFocused = function(...args) {
      console.warn('uitest.UiComponent.isFocused.warn' + warnMessage)
      return new Promise((resolve) => {
        resolve(paramMock.paramBoolMock)
      });
    };
    this.isSelected = function(...args) {
      console.warn('uitest.UiComponent.isSelected.warn' + warnMessage)
      return new Promise((resolve) => {
        resolve(paramMock.paramBoolMock)
      });
    };
    this.isClickable = function(...args) {
      console.warn('uitest.UiComponent.isClickable.warn' + warnMessage)
      return new Promise((resolve) => {
        resolve(paramMock.paramBoolMock)
      });
    };
    this.isLongClickable = function(...args) {
      console.warn('uitest.UiComponent.isLongClickable.warn' + warnMessage)
      return new Promise((resolve) => {
        resolve(paramMock.paramBoolMock)
      });
    };
    this.isScrollable = function(...args) {
      console.warn('uitest.UiComponent.isScrollable.warn' + warnMessage)
      return new Promise((resolve) => {
        resolve(paramMock.paramBoolMock)
      });
    };
    this.isCheckable = function(...args) {
      console.warn('uitest.UiComponent.isCheckable.warn' + warnMessage)
      return new Promise((resolve) => {
        resolve(paramMock.paramBoolMock)
      });
    };
    this.isChecked = function(...args) {
      console.warn('uitest.UiComponent.isChecked.warn' + warnMessage)
      return new Promise((resolve) => {
        resolve(paramMock.paramBoolMock)
      });
    };
    this.getBounds = function(...args) {
      console.warn('uitest.UiComponent.getBounds.warn' + warnMessage)
      return new Promise((resolve) => {
        resolve(RectMock)
      });
    };
    this.getBoundsCenter = function(...args) {
      console.warn('uitest.UiComponent.getBoundsCenter.warn' + warnMessage)
      return new Promise((resolve) => {
        resolve(PointMock)
      });
    };
    this.click = function(...args) {
      console.warn('uitest.UiComponent.click.warn' + warnMessage)
      return new Promise((resolve) => {
        resolve()
      });
    };
    this.longClick = function(...args) {
      console.warn('uitest.UiComponent.longClick.warn' + warnMessage)
      return new Promise((resolve) => {
        resolve()
      });
    };
    this.doubleClick = function(...args) {
      console.warn('uitest.UiComponent.doubleClick.warn' + warnMessage)
      return new Promise((resolve) => {
        resolve()
      });
    };
    this.scrollToTop = function(...args) {
      console.warn('uitest.UiComponent.scrollToTop.warn' + warnMessage)
      return new Promise((resolve) => {
        resolve()
      });
    };
    this.scrollToBottom = function(...args) {
      console.warn('uitest.UiComponent.scrollToBottom.warn' + warnMessage)
      return new Promise((resolve) => {
        resolve()
      });
    };
    this.inputText = function(...args) {
      console.warn('uitest.UiComponent.inputText.warn' + warnMessage)
      return new Promise((resolve) => {
        resolve()
      });
    };
    this.clearText = function(...args) {
      console.warn('uitest.UiComponent.clearText.warn' + warnMessage)
      return new Promise((resolve) => {
        resolve()
      });
    };
    this.scrollSearch = function(...args) {
      console.warn('uitest.UiComponent.scrollSearch.warn' + warnMessage)
      return new Promise((resolve) => {
        resolve(new UiComponentMock())
      });
    };
    this.dragTo = function(...args) {
      console.warn('uitest.UiComponent.dragTo.warn' + warnMessage)
      return new Promise((resolve) => {
        resolve()
      });
    };
    this.pinchOut = function(...args) {
      console.warn('uitest.UiComponent.pinchOut.warn' + warnMessage)
      return new Promise((resolve) => {
        resolve()
      });
    };
    this.pinchIn = function(...args) {
      console.warn('uitest.UiComponent.pinchIn.warn' + warnMessage)
      return new Promise((resolve) => {
        resolve()
      });
    };
  }
}

const UiWindowClass = class UiWindowMock {
  constructor() {
    console.warn('uitest.UiWindowMock.constructor' + warnMessage);
    this.getBundleName = function(...args) {
      console.warn('uitest.UiWindowMock.getBundleName.warn' + warnMessage)
      return new Promise((resolve) => {
        resolve(paramMock.paramStringMock)
      });
    };
    this.getBounds = function(...args) {
      console.warn('uitest.UiWindowMock.getBounds.warn' + warnMessage)
      return new Promise((resolve) => {
        resolve(RectMock)
      });
    };
    this.getTitle = function(...args) {
      console.warn('uitest.UiWindowMock.getTitle.warn' + warnMessage)
      return new Promise((resolve) => {
        resolve(paramMock.paramStringMock)
      });
    };
    this.getWindowMode = function(...args) {
      console.warn('uitest.UiWindowMock.getWindowMode.warn' + warnMessage)
      return new Promise((resolve) => {
        resolve(WindowModeMock)
      });
    };
    this.isFocused = function(...args) {
      console.warn('uitest.UiWindowMock.isFocused.warn' + warnMessage)
      return new Promise((resolve) => {
        resolve(paramMock.paramBoolMock)
      });
    };
    this.isActived = function(...args) {
      console.warn('uitest.UiWindowMock.isActived.warn' + warnMessage)
      return new Promise((resolve) => {
        resolve(paramMock.paramBoolMock)
      });
    };
    this.focuse = function(...args) {
      console.warn('uitest.UiWindowMock.focuse.warn' + warnMessage)
      return new Promise((resolve) => {
        resolve(paramMock.paramBoolMock)
      });
    };
    this.moveTo = function(...args) {
      console.warn('uitest.UiWindowMock.moveTo.warn' + warnMessage)
      return new Promise((resolve) => {
        resolve(paramMock.paramBoolMock)
      });
    };
    this.resize = function(...args) {
      console.warn('uitest.UiWindowMock.resize.warn' + warnMessage)
      return new Promise((resolve) => {
        resolve(paramMock.paramBoolMock)
      });
    };
    this.split = function(...args) {
      console.warn('uitest.UiWindowMock.split.warn' + warnMessage)
      return new Promise((resolve) => {
        resolve(paramMock.paramBoolMock)
      });
    };
    this.maximize = function(...args) {
      console.warn('uitest.UiWindowMock.maximize.warn' + warnMessage)
      return new Promise((resolve) => {
        resolve(paramMock.paramBoolMock)
      });
    };
    this.resume = function(...args) {
      console.warn('uitest.UiWindowMock.resume.warn' + warnMessage)
      return new Promise((resolve) => {
        resolve(paramMock.paramBoolMock)
      });
    };
    this.minimize = function(...args) {
      console.warn('uitest.UiWindowMock.minimize.warn' + warnMessage)
      return new Promise((resolve) => {
        resolve(paramMock.paramBoolMock)
      });
    };
    this.close = function(...args) {
      console.warn('uitest.UiWindowMock.close.warn' + warnMessage)
      return new Promise((resolve) => {
        resolve(paramMock.paramBoolMock)
      });
    };
  };
}

export function mockUiTest() {
  const module = {
    ResizeDirection: ResizeDirectionMock,
    MatchPattern: MatchPatternMock,
    WindowMode: WindowModeMock,
    Point: PointMockClass,
    Rect: RectMockClass,
    WindowFilter: WindowFilterMockClass,
    BY: ByMockClass,
    UiDriver: UiDriverClass,
    UiComponent: UiComponentClass,
    UiWindow: UiWindowClass
  };
  return module
}