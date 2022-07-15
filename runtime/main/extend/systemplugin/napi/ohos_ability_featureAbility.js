/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { paramMock } from "../utils"
import { WantClass } from "./ohos_application_Want"
import { Context } from "./app/context"
import { AbilityResult } from "./ability/abilityResult"
import { windowMock } from "./ohos_window"

const DataAbilityResult = {
    uri: "[PC Preview] unknow uri",
    count: "[PC Preview] unknow count"
}
const DataAbilityResultArray = [
    DataAbilityResult
]
export const PacMapType = {
    PacMap: {key:{}}
}
export const ResultSet = {
    columnNames: [paramMock.paramStringMock],
    columnCount: "[PC Preview] unknow columnCount",
    rowCount: "[PC Preview] unknow rowCount",
    rowIndex: "[PC Preview] unknow rowIndex",
    isAtFirstRow: "[PC Preview] unknow isAtFirstRow",
    isAtLastRow: "[PC Preview] unknow isAtLastRow",
    isEnded: "[PC Preview] unknow isEnded",
    isStarted: "[PC Preview] unknow isStarted",
    isClose: "[PC Preview] unknow isClose",
    getColumnIndex: function (...args) {
      console.warn("ResultSet.getColumnIndex interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return paramMock.paramNumberMock;
    },
    getColumnName: function (...args) {
      console.warn("ResultSet.getColumnName interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return paramMock.paramStringMock;
    },
    goTo: function (...args) {
      console.warn("ResultSet.goTo interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    goToRow: function (...args) {
      console.warn("ResultSet.goToRow interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    goToLastRow: function (...args) {
      console.warn("ResultSet.goToLastRow interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    goToFirstRow: function (...args) {
      console.warn("ResultSet.goToFirstRow interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    goToNextRow: function (...args) {
      console.warn("ResultSet.goToNextRow interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    goToPreviousRow: function (...args) {
      console.warn("ResultSet.goToPreviousRow interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    getBlob: function (...args) {
      console.warn("ResultSet.getBlob interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return paramMock.paramArrayMock;
    },
    getString: function (...args) {
      console.warn("ResultSet.getString interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return paramMock.paramStringMock;
    },
    getLong: function (...args) {
      console.warn("ResultSet.getLong interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return paramMock.paramNumberMock;
    },
    getDouble: function (...args) {
      console.warn("ResultSet.getDouble interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return paramMock.paramNumberMock;
    },
    isColumnNull: function (...args) {
      console.warn("ResultSet.isColumnNull interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    close: function () {
      console.warn("ResultSet.isColumnNull interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
    }
}
const DataAbilityHelper = {
    openFile: function (...args) {
      console.warn("DataAbilityHelper.openFile interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock)
      } else {
        return new Promise((resolve) => {
          resolve(paramMock.paramNumberMock);
        })
      }
    },
    on: function (...args) {
      console.warn("DataAbilityHelper.on interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock)
      }
    },
    off: function (...args) {
      console.warn("DataAbilityHelper.off interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock)
      }
    },
    getType: function (...args) {
      console.warn("DataAbilityHelper.getType interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock)
      } else {
        return new Promise((resolve) => {
          resolve(paramMock.paramStringMock);
        })
      }
    },
    getFileTypes: function (...args) {
      console.warn("DataAbilityHelper.getFileTypes interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, [paramMock.paramStringMock])
      } else {
        return new Promise((resolve) => {
          resolve([paramMock.paramStringMock]);
        })
      }
    },
    normalizeUri: function (...args) {
      console.warn("DataAbilityHelper.normalizeUri interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock)
      } else {
        return new Promise((resolve) => {
          resolve(paramMock.paramStringMock);
        })
      }
    },
    denormalizeUri: function (...args) {
      console.warn("DataAbilityHelper.denormalizeUri interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock)
      } else {
        return new Promise((resolve) => {
          resolve(paramMock.paramStringMock);
        })
      }
    },
    notifyChange: function (...args) {
      console.warn("DataAbilityHelper.notifyChange interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock)
      } else {
        return new Promise((resolve) => {
          resolve();
        })
      }
    },
    insert: function (...args) {
      console.warn("DataAbilityHelper.insert interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock)
      } else {
        return new Promise((resolve) => {
          resolve(paramMock.paramNumberMock);
        })
      }
    },
    batchInsert: function (...args) {
      console.warn("DataAbilityHelper.batchInsert interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock)
      } else {
        return new Promise((resolve) => {
          resolve(paramMock.paramNumberMock);
        })
      }
    },
    delete: function (...args) {
      console.warn("DataAbilityHelper.delete interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock)
      } else {
        return new Promise((resolve) => {
          resolve(paramMock.paramNumberMock);
        })
      }
    },
    update: function (...args) {
      console.warn("DataAbilityHelper.update interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock)
      } else {
        return new Promise((resolve) => {
          resolve(paramMock.paramNumberMock);
        })
      }
    },
    query: function (...args) {
      console.warn("DataAbilityHelper.query interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, ResultSet)
      } else {
        return new Promise((resolve) => {
          resolve(ResultSet);
        })
      }
    },
    call: function (...args) {
        console.warn("DataAbilityHelper.call interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
        const len = args.length
        if (typeof args[len - 1] === 'function') {
          args[len - 1].call(this, paramMock.businessErrorMock, PacMapType)
        } else {
          return new Promise((resolve) => {
            resolve(PacMapType);
          })
        }
      },
    executeBatch: function (...args) {
      console.warn("DataAbilityHelper.executeBatch interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, DataAbilityResultArray)
      } else {
        return new Promise((resolve) => {
          resolve(DataAbilityResultArray);
        })
      }
    }
}
export function mockFeatureAbility() {
    const featureAbility = {
        getWant: function (...args) {
            console.warn("featureAbility.getWant interface mocked in the Previewer." +
                " How this interface works on the Previewer may be different from that on a real device.")
            const len = args.length
            if (len > 0 && typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, new WantClass());
            } else {
                return new Promise((resolve, reject) => {
                    resolve(new WantClass());
                })
            }
        },
        startAbility: function (...args) {
            console.warn("featureAbility.startAbility interface mocked in the Previewer." +
                " How this interface works on the Previewer may be different from that on a real device.")
            const len = args.length
            if (len > 0 && typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(paramMock.paramNumberMock);
                })
            }
        },
        getContext: function () {
            console.warn("featureAbility.getContext interface mocked in the Previewer." +
                " How this interface works on the Previewer may be different from that on a real device.")
            return Context;
        },
        startAbilityForResult: function (...args) {
            console.warn("featureAbility.startAbilityForResult interface mocked in the Previewer." +
                " How this interface works on the Previewer may be different from that on a real device.")
            const len = args.length
            if (len > 0 && typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, AbilityResult);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(AbilityResult);
                })
            }
        },
        terminateSelfWithResult: function (...args) {
            console.warn("featureAbility.terminateSelfWithResult interface mocked in the Previewer." +
                " How this interface works on the Previewer may be different from that on a real device.")
            const len = args.length
            if (len > 0 && typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve();
                })
            }
        },
        terminateSelf: function () {
            console.warn("featureAbility.terminateSelf interface mocked in the Previewer." +
                " How this interface works on the Previewer may be different from that on a real device.")
            const len = args.length
            if (len > 0 && typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve();
                })
            }
        },
        acquireDataAbilityHelper: function (...args) {
            console.warn("featureAbility.acquireDataAbilityHelper interface mocked in the Previewer." +
                " How this interface works on the Previewer may be different from that on a real device.")
            return DataAbilityHelper;
        },
        hasWindowFocus: function (...args) {
            console.warn("featureAbility.hasWindowFocus interface mocked in the Previewer." +
                " How this interface works on the Previewer may be different from that on a real device.")
            const len = args.length
            if (len > 0 && typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(paramMock.paramBooleanMock);
                })
            }
        },
        connectAbility: function (...args) {
            console.warn("featureAbility.connectAbility interface mocked in the Previewer." +
                " How this interface works on the Previewer may be different from that on a real device.")
            return paramMock.paramNumberMock;
        },
        disconnectAbility: function (...args) {
            console.warn("featureAbility.disconnectAbility interface mocked in the Previewer." +
                " How this interface works on the Previewer may be different from that on a real device.")
            const len = args.length
            if (len > 0 && typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve();
                })
            }
        },
        getWindow: function (...args) {
            console.warn("featureAbility.getWindow interface mocked in the Previewer." +
                " How this interface works on the Previewer may be different from that on a real device.")
            const len = args.length
            if (len > 0 && typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, windowMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(windowMock);
                })
            }
        },
    }
    return featureAbility;
}
export const AbilityWindowConfiguration = {
    WINDOW_MODE_UNDEFINED: 0,
    WINDOW_MODE_FULLSCREEN: 1,
    WINDOW_MODE_SPLIT_PRIMARY: 100,
    WINDOW_MODE_SPLIT_SECONDARY: 101,
    WINDOW_MODE_FLOATING: 102
}
export const AbilityStartSetting = {
    BOUNDS_KEY: "abilityBounds",
    WINDOW_MODE_KEY: "windowMode",
    DISPLAY_ID_KEY: "displayId"
}
export const ErrorCode = {
    NO_ERROR: 0,
    INVALID_PARAMETER: -1,
    ABILITY_NOT_FOUND: -2,
    PERMISSION_DENY: -3
}
export const DataAbilityOperationType = {
    TYPE_INSERT: 1,
    TYPE_UPDATE: 2,
    TYPE_DELETE: 3,
    TYPE_ASSERT: 4,
}