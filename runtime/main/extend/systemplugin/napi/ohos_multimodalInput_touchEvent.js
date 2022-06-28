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

export const Action = {
    CANCEL: 0,
    DOWN: 1,
    MOVE: 2,
    UP: 3,
}

export const ToolType = {
   FINGER: 0,
   PEN: 1,
   RUBBER: 2,
   BRUSH: 3,
   PENCIL: 4,
   AIRBRUSH: 5,
   MOUSE: 6,
   LENS: 7,
}

export const SourceType = {
    TOUCH_SCREEN: 0,
    PEN: 1,
    TOUCH_PAD: 2,
 }

export function mockTouchEvent() {
    const touchEvent = {
        Action,
        ToolType,
        SourceType,
    }
    return touchEvent;
}