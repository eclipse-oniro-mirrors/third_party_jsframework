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

import { paramMock } from "../utils"
import { PixelMapMock } from "../multimedia"

export function mockMissionManager() {
  const MissionInfoMock = {
    missionId: '[PC preview] unknown missionId',
    runningState: '[PC preview] unknown runningState',
    lockedState: '[PC preview] unknown lockedState',
    timestamp: '[PC preview] unknown timestamp',
    want: '[PC preview] unknown want', 
    label: '[PC preview] unknown label',
    iconPath: '[PC preview] unknown iconPath',
    continuable: '[PC preview] unknown continuable'
  }
  const ElementNameMock = {
    deviceId: '[PC preview] unknown deviceId',
    bundleName: '[PC preview] unknown bundleName',
    abilityName: '[PC preview] unknown abilityName',
    uri: '[PC preview] unknown uri',
    shortName: '[PC preview] unknown shortName'
  }
  const MissionSnapshotMock = {
    abality: ElementNameMock,
    snapshot: PixelMapMock,
  }
  const missionManager = {
    registerMissionListener: function (...args) {
      console.warn("missionManager.registerMissionListener interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return paramMock.paramNumberMock;
    },
    unregisterMissionListener: function (...args) {
      console.warn('missionManager.unregisterMissionListener interface mocked in the Previewer. How this interface works on the' +
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
    getMissionInfo: function (...args) {
      console.warn('missionManager.getMissionInfo interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, MissionInfoMock);
      } else {
        return new Promise((resolve) => {
          resolve(MissionInfoMock);
        });
      }
    },
    getMissionInfos: function (...args) {
      console.warn('missionManager.getMissionInfos interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, [MissionInfoMock]);
      } else {
        return new Promise((resolve) => {
          resolve([MissionInfoMock]);
        });
      }
    },
    getMissionSnapShot: function (...args) {
      console.warn('missionManager.getMissionSnapShot interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, MissionSnapshotMock);
      } else {
        return new Promise((resolve) => {
          resolve(MissionSnapshotMock);
        });
      }
    },
    lockMission: function (...args) {
      console.warn('missionManager.lockMission interface mocked in the Previewer. How this interface works on the' +
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
    unlockMission: function (...args) {
      console.warn('missionManager.unlockMission interface mocked in the Previewer. How this interface works on the' +
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
    clearMission: function (...args) {
      console.warn('missionManager.clearMission interface mocked in the Previewer. How this interface works on the' +
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
    clearAllMissions: function (...args) {
      console.warn('missionManager.clearAllMissions interface mocked in the Previewer. How this interface works on the' +
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
    moveMissionToFront: function (...args) {
      console.warn('missionManager.moveMissionToFront interface mocked in the Previewer. How this interface works on the' +
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
  return missionManager
}