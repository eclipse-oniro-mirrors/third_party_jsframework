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

export function mockI18N() {
    const result = {
        getDisplayCountry: function(...args) {
            console.warn("I18N.getDisplayCountry interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramStringMock;
        },
        getDisplayLanguage: function(...args) {
            console.warn("I18N.getDisplayLanguage interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramStringMock;
        },
        getSystemLanguages: function() {
            console.warn("I18N.getSystemLanguages interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramArrayMock;
        },
        getSystemCountries: function(...args) {
            console.warn("I18N.getSystemCountries interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramArrayMock;
        },
        isSuggested: function(...args) {
            console.warn("I18N.isSuggested interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        getSystemLanguage: function() {
            console.warn("I18N.getSystemLanguage interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramStringMock;
        },
        setSystemLanguage: function(...args) {
            console.warn("I18N.setSystemLanguage interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        getSystemRegion: function() {
            console.warn("I18N.getSystemRegion interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramStringMock;
        },
        setSystemRegion: function(...args) {
            console.warn("I18N.setSystemRegion interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        getSystemLocale: function() {
            console.warn("I18N.getSystemLocale interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramStringMock;
        },
        setSystemLocale: function(...args) {
            console.warn("I18N.setSystemLocale interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        PhoneNumberFormat: function(...args) {
            console.warn("I18N.PhoneNumberFormat interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return PhoneNumberFormatMock;
        },
        getCalendar: function(...args) {
            console.warn("I18N.getCalendar interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return CalendarMock;
        },
        isRTL: function(...args) {
            console.warn("I18N.isRTL interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        getLineInstance: function(...args) {
            console.warn("I18N.getLineInstance interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return BreakIteratorMock;
        },
        Util: {
            unitConvert: function(...args) {
                console.warn("I18N.Util.unitConvert interface mocked in the Previewer. How this interface works on the Previewer" +
                    " may be different from that on a real device.")
            }
        },
        IndexUtil: {
            getInstance: function() {
                console.warn("I18N.IndexUtil.getInstance interface mocked in the Previewer. How this interface works on the Previewer" +
                    " may be different from that on a real device.")
                return IndexUtilMock;
            }
        },
        Character: {
            isDigit: function(...args) {
                console.warn("I18N.Character.isDigit interface mocked in the Previewer. How this interface works on the Previewer" +
                    " may be different from that on a real device.")
                return paramMock.paramBooleanMock;
            },
            isSpaceChar: function(...args) {
                console.warn("I18N.Character.isSpaceChar interface mocked in the Previewer. How this interface works on the Previewer" +
                    " may be different from that on a real device.")
                return paramMock.paramBooleanMock;
            },
            isWhitespace: function(...args) {
                console.warn("I18N.Character.isWhitespace interface mocked in the Previewer. How this interface works on the Previewer" +
                    " may be different from that on a real device.")
                return paramMock.paramBooleanMock;
            },
            isRTL: function(...args) {
                console.warn("I18N.Character.isRTL interface mocked in the Previewer. How this interface works on the Previewer" +
                    " may be different from that on a real device.")
                return paramMock.paramBooleanMock;
            },
            isIdeograph: function(...args) {
                console.warn("I18N.Character.isIdeograph interface mocked in the Previewer. How this interface works on the Previewer" +
                    " may be different from that on a real device.")
                return paramMock.paramBooleanMock;
            },
            isLetter: function(...args) {
                console.warn("I18N.Character.isLetter interface mocked in the Previewer. How this interface works on the Previewer" +
                    " may be different from that on a real device.")
                return paramMock.paramBooleanMock;
            },
            isLowerCase: function(...args) {
                console.warn("I18N.Character.isLowerCase interface mocked in the Previewer. How this interface works on the Previewer" +
                    " may be different from that on a real device.")
                return paramMock.paramBooleanMock;
            },
            isUpperCase: function(...args) {
                console.warn("I18N.Character.isUpperCase interface mocked in the Previewer. How this interface works on the Previewer" +
                    " may be different from that on a real device.")
                return paramMock.paramBooleanMock;
            },
            getType: function(...args) {
                console.warn("I18N.Character.getType interface mocked in the Previewer. How this interface works on the Previewer" +
                    " may be different from that on a real device.")
                return paramMock.paramStringMock;
            },
        },
        is24HourClock: function() {
            console.warn("I18N.is24HourClock interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        set24HourClock: function(...args) {
            console.warn("I18N.set24HourClock interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        addPreferredLanguage: function(...args) {
            console.warn("I18N.addPreferredLanguage interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        removePreferredLanguage: function(...args) {
            console.warn("I18N.removePreferredLanguage interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        getPreferredLanguageList: function() {
            console.warn("I18N.getPreferredLanguageList interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramArrayMock;
        },
        getFirstPreferredLanguage: function() {
            console.warn("I18N.getFirstPreferredLanguage interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramStringMock;
        }
    }
    const PhoneNumberFormatMock = {
        isValidNumber: function(...args) {
            console.warn("I18N.PhoneNumberFormat.isValidNumber interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        format: function(...args) {
            console.warn("I18N.PhoneNumberFormat.format interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramStringMock;
        },
    }
    const CalendarMock = {
        setTime: function(...args) {
            console.warn("I18N.Calendar.setTime interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
        },
        set: function(...args) {
            console.warn("I18N.Calendar.set interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
        },
        setTimeZone: function(...args) {
            console.warn("I18N.Calendar.setTimeZone interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
        },
        getTimeZone: function() {
            console.warn("I18N.Calendar.getTimeZone interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramStringMock;
        },
        getFirstDayOfWeek: function() {
            console.warn("I18N.Calendar.getFirstDayOfWeek interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramNumberMock;
        },
        setFirstDayOfWeek: function(...args) {
            console.warn("I18N.Calendar.setFirstDayOfWeek interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
        },
        getMinimalDaysInFirstWeek: function() {
            console.warn("I18N.Calendar.getMinimalDaysInFirstWeek interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramNumberMock;
        },
        setMinimalDaysInFirstWeek: function(...args) {
            console.warn("I18N.Calendar.setMinimalDaysInFirstWeek interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
        },
        get: function(...args) {
            console.warn("I18N.Calendar.get interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramNumberMock;
        },
        getDisplayName: function(...args) {
            console.warn("I18N.Calendar.getDisplayName interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramStringMock;
        },
        isWeekend: function(...args) {
            console.warn("I18N.Calendar.isWeekend interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
    }
    const BreakIteratorMock = {
        current: function() {
            console.warn("I18N.BreakIterator.current interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramNumberMock;
        },
        first: function() {
            console.warn("I18N.BreakIterator.first interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramNumberMock;
        },
        last: function() {
            console.warn("I18N.BreakIterator.last interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramNumberMock;
        },
        next: function(...args) {
            console.warn("I18N.BreakIterator.next interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramNumberMock;
        },
        previous: function() {
            console.warn("I18N.BreakIterator.previous interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramNumberMock;
        },
        setLineBreakText: function() {
            console.warn("I18N.BreakIterator.setLineBreakText interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
        },
        following: function() {
            console.warn("I18N.BreakIterator.following interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramNumberMock;
        },
        getLineBreakText: function() {
            console.warn("I18N.BreakIterator.getLineBreakText interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramStringMock;
        },
        isBoundary: function(...args) {
            console.warn("I18N.BreakIterator.isBoundary interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
    }
    const IndexUtilMock = {
        getIndexList: function() {
            console.warn("I18N.IndexUtil.getIndexList interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramArrayMock;
        },
        addLocale: function(...args) {
            console.warn("I18N.IndexUtil.addLocale interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
        },
        getIndex: function(...args) {
            console.warn("I18N.IndexUtil.getIndex interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramStringMock;
        }
    }
    return result;
}