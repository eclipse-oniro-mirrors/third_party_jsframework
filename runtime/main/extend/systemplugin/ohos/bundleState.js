/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

import { paramMock } from "../utils"

export function mockBundleState() {
  const bundleStateInfomMock = [{
    abilityInFgTotalTime: '[PC preview] unknown abilityInFgTotalTime',
    abilityPrevAccessTime: '[PC preview] unknown abilityPrevAccessTime',
    abilityPrevSeenTime: '[PC preview] unknown abilityPrevSeenTime',
    abilitySeenTotalTime: '[PC preview] unknown abilitySeenTotalTime',
    bundleName: "[PC preview] unknown bundle name",
    fgAbilityAccessTotalTime: '[PC preview] unknown fgAbilityAccessTotalTime',
    fgAbilityPrevAccessTime: '[PC preview] unknown fgAbilityPrevAccessTime',
    id: '[PC preview] unknown id',
    infosBeginTime: '[PC preview] unknown infosBeginTime',
    infosEndTime: '[PC preview] unknown infosEndTime',

    merge: function (...args) {
      console.warn("bundleState.merge interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.");
    },
  }]
  const bundleActiveStateMock = [{
    appUsagePriorityGroup: '[PC preview] unknown appUsagePriorityGroup',
    bundleName: '[PC preview] unknown bundleName',
    indexOfLink: '[PC preview] unknown indexOfLink',
    nameOfClass: '[PC preview] unknown nameOfClass',
    stateOccurredTime: '[PC preview] unknown stateOccurredTime',
    stateType: '[PC preview] unknown stateType',
  }]
  const bundleActiveInfoResponseMock = {
    "key": bundleStateInfomMock
  }
  const intervalTypeMock = {
    BY_OPTIMIZED: 0,
    BY_DAILY: 1,
    BY_WEEKLY: 2,
    BY_MONTHLY: 3,
    BY_ANNUALLY: 4
  }
  global.ohosplugin.bundleState = {
    isIdleState: function (...args) {
      console.warn("bundleState.isIdleState interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.");
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock);
      } else {
        return new Promise((resolve) => {
          resolve(paramMock.paramBooleanMock)
        });
      }
    },
    queryAppUsagePriorityGroup: function (...args) {
      console.warn("bundleState.queryAppUsagePriorityGroup interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.");
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
      } else {
        return new Promise((resolve) => {
          resolve(paramMock.paramNumberMock)
        });
      }
    },
    queryBundleStateInfos: function (...args) {
      console.warn("bundleState.queryBundleStateInfos interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.");
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, bundleActiveInfoResponseMock);
      } else {
        return new Promise((resolve) => {
          resolve(bundleActiveInfoResponseMock)
        });
      }
    },
    queryBundleStateInfoByInterval: function (...args) {
      console.warn("bundleState.queryBundleStateInfoByInterval interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.");
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, bundleStateInfomMock);
      } else {
        return new Promise((resolve) => {
          resolve(bundleStateInfomMock)
        });
      }
    },
    queryBundleActiveStates: function (...args) {
      console.warn("bundleState.queryBundleActiveStates interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.");
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, bundleActiveStateMock);
      } else {
        return new Promise((resolve) => {
          resolve(bundleActiveStateMock)
        });
      }
    },
    queryCurrentBundleActiveStates: function (...args) {
      console.warn("bundleState.queryCurrentBundleActiveStates interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.");
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, bundleActiveStateMock);
      } else {
        return new Promise((resolve) => {
          resolve(bundleActiveStateMock)
        });
      }
    }
  }
}