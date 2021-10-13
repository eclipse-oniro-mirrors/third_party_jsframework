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
import { paramMock } from "./utils"

export function mockI18n() {
    function TimeZone(timeZoneId, module) {
        var i18nModuleGroup = module;
        var zone = timeZoneId;

        this.getID = getID;
        function getID() {
            console.warn("I18n.TimeZone.getID interface mocked in the Previewer. " +
            "How this interface works on the Previewer may be different from that on a real device.");
            return paramMock.paramStringMock;
        }

        this.getDisplayName = getDisplayName;
        function getDisplayName(...args) {
            console.warn("I18n.TimeZone.getDisplayName interface mocked in the Previewer. " +
            "How this interface works on the Previewer may be different from that on a real device.");
            return paramMock.paramStringMock;
        }

        this.getRawOffset = getRawOffset;
        function getRawOffset() {
            console.warn("I18n.TimeZone.getRawOffset interface mocked in the Previewer. " +
            "How this interface works on the Previewer may be different from that on a real device.");
            return paramMock.paramNumberMock;
        }

        this.getOffset = getOffset;
        function getOffset(...args) {
            console.warn("I18n.TimeZone.getOffset interface mocked in the Previewer. " +
            "How this interface works on the Previewer may be different from that on a real device.");
            return paramMock.paramNumberMock;
        }
    }

    var i18n = {
        i18nModuleGroup: null,

        getDisplayLanguage: function getDisplayLanguage(...args) {
            console.warn("I18n.getDisplayLanguage interface mocked in the Previewer. " +
            "How this interface works on the Previewer may be different from that on a real device.");
            return paramMock.paramStringMock;
        },

        getDisplayCountry: function getDisplayCountry(...args) {
            console.warn("I18n.getDisplayCountry interface mocked in the Previewer. " +
            "How this interface works on the Previewer may be different from that on a real device.");
            return paramMock.paramStringMock;
        },

        isRTL: function isRTL(locale) {
            console.warn("I18n.isRTL interface mocked in the Previewer. " +
            "How this interface works on the Previewer may be different from that on a real device.");
            return paramMock.paramBooleanMock;
        },

        isSuggested: function isSuggested(...args) {
            console.warn("I18n.isSuggested interface mocked in the Previewer. " +
            "How this interface works on the Previewer may be different from that on a real device.");
            return paramMock.paramBooleanMock;
        },

        is24HourClock: function is24HourClock() {
            console.warn("I18n.is24HourClock interface mocked in the Previewer. " +
            "How this interface works on the Previewer may be different from that on a real device.");
            return paramMock.paramBooleanMock;
        },

        set24HourClock: function set24HourClock(is24Hour) {
            console.warn("I18n.set24HourClock interface mocked in the Previewer. " +
            "How this interface works on the Previewer may be different from that on a real device.");
        },

        getSystemLanguages: function getSystemLanguages() {
            console.warn("I18n.getSystemLanguages interface mocked in the Previewer. " +
            "How this interface works on the Previewer may be different from that on a real device.");
            return paramMock.paramArrayMock;
        },

        getSystemCountries: function getSystemCountries(locale) {
            console.warn("I18n.getSystemCountries interface mocked in the Previewer. " +
            "How this interface works on the Previewer may be different from that on a real device.");
            return paramMock.paramArrayMock;
        },

        getTimeZone: function getTimeZone() {
            console.warn("I18n.getTimeZone interface mocked in the Previewer. " +
            "How this interface works on the Previewer may be different from that on a real device.");
            let data = new TimeZone("mockTimeZoneID", null);
            return data;
        },

        getTimeZone: function getTimeZone(zoneId) {
            console.warn("I18n.getTimeZone interface mocked in the Previewer. " +
            "How this interface works on the Previewer may be different from that on a real device.");
            let data = new TimeZone(zoneId, null);
            return data;
        },

        getSystemLanguage: function getSystemLanguage() {
            console.warn("I18n.getSystemLanguage interface mocked in the Previewer. " +
            "How this interface works on the Previewer may be different from that on a real device.");
            return paramMock.paramStringMock;
        },

        getSystemRegion: function getSystemRegion() {
            console.warn("I18n.getSystemRegion interface mocked in the Previewer. " +
            "How this interface works on the Previewer may be different from that on a real device.");
            return paramMock.paramStringMock;
        },

        getSystemLocale: function getSystemLocale() {
            console.warn("I18n.getSystemLocale interface mocked in the Previewer. " +
            "How this interface works on the Previewer may be different from that on a real device.");
            return paramMock.paramStringMock;
        },

        setSystemLanguage: function setSystemLanguage(language) {
            console.warn("I18n.setSystemLanguage interface mocked in the Previewer. " +
            "How this interface works on the Previewer may be different from that on a real device.");
            return paramMock.paramBooleanMock;
        },

        setSystemRegion: function setSystemRegion(region) {
            console.warn("I18n.setSystemRegion interface mocked in the Previewer. " +
            "How this interface works on the Previewer may be different from that on a real device.");
            return paramMock.paramBooleanMock;
        },

        setSystemLocale: function setSystemLocale(locale) {
            console.warn("I18n.setSystemLocale interface mocked in the Previewer. " +
            "How this interface works on the Previewer may be different from that on a real device.");
            return paramMock.paramBooleanMock;
        },
    };

    global.systemplugin.i18n = {
        getDisplayLanguage: i18n.getDisplayLanguage,
        getDisplayCountry: i18n.getDisplayCountry,
        getSystemLanguages: i18n.getSystemLanguages,
        getSystemCountries: i18n.getSystemCountries,
        is24HourClock: i18n.is24HourClock,
        set24HourClock: i18n.set24HourClock,
        isSuggested: i18n.isSuggested,
        isRTL: i18n.isRTL,
        getTimeZone: i18n.getTimeZone,
        getSystemLanguage: i18n.getSystemLanguage,
        getSystemRegion: i18n.getSystemRegion,
        getSystemLocale: i18n.getSystemLocale,
        setSystemLanguage: i18n.setSystemLanguage,
        setSystemRegion: i18n.setSystemRegion,
        setSystemLocale: i18n.setSystemLocale,
    };
};
