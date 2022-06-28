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
    MOVE: 1,
    BUTTON_DOWN: 2,
    BUTTON_UP: 3,
    AXIS_BEGIN: 4,
    AXIS_UPDATE: 5,
    AXIS_END: 6,
}

export const Button = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2,
    SIDE: 3,
    EXTRA: 4,
    FORWARD: 5,
    BACK: 6,
    TASK: 7,
}

export const Axis = {
    SCROLL_VERTICAL: 0,
    SCROLL_HORIZONTAL: 1,
    PINCH: 2,
}

export function mockMouseEvent() {
    const mouseEvent = {
        Action,
        Button,
        Axis,
    }
    return mouseEvent;
}