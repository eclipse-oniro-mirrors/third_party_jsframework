import {paramMock} from "./utils"

export function mockCalendar() {
    const arr = ["accId", "availableStatus", "syncId", "description", "duration",
    "endTimezone", "eventColour", "eventColourIndex", "eventEndTime", "eventPosition", "eventStartTime", "eventStatus",
    "initialId", "recurDate", "recurRule", "startTimezone", "title", "hasAlarm", "hasAttendeeInfo", "isWholeDay"]
    const infoMock = {
        isDeleted: "[PC preview] unknown  isDeleted",
        isUpdated: "[PC preview] unknown  isUpdated",
        isInsert: "[PC preview] unknown  isInsert",
        number: "[PC preview] unknown  number",
    }
    const event1 = {
        accId: "[PC preview] unknown  accId",
        availableStatus: "[PC preview] unknown  availableStatus",
        syncId: "[PC preview] unknown  syncId",
        description: "[PC preview] unknown  description",
        duration: "[PC preview] unknown  duration",
        endTimezone: "[PC preview] unknown  endTimezone",
        eventColour: "[PC preview] unknown  eventColour",
        eventColourIndex: "[PC preview] unknown  eventColourIndex",
        eventEndTime: "[PC preview] unknown  eventEndTime",
        eventPosition: "[PC preview] unknown  eventPosition",
        eventStartTime: "[PC preview] unknown  eventStartTime",
        eventStatus: "[PC preview] unknown  eventStatus",
        initialId: "[PC preview] unknown  initialId",
        recurDate: "[PC preview] unknown  recurDate",
        recurRule: "[PC preview] unknown  recurRule",
        startTimezone: "[PC preview] unknown  startTimezone",
        title: "[PC preview] unknown  title",
        hasAlarm: "[PC preview] unknown  hasAlarm",
        hasAttendeeInfo: "[PC preview] unknown  hasAttendeeInfo",
        isWholeDay: "[PC preview] unknown  isWholeDay",
    }

    const helper = {
        queryEntityName: "[PC preview] unknown  queryEntityName",
    }

    const CalendarCollectionMock = {
        handler: "[PC preview] unknown  handler",
        count: function (...args) {
            console.warn("calendar.CalendarCollection.count interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            return paramMock.paramNumberMock;
        },
        next: function (...args) {
            console.warn("calendar.CalendarCollection.next interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            return infoMock.event1;
        },
        close: function (...args) {
            console.warn("calendar.CalendarCollection.close interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
        },
        hasNext: function (...args) {
            console.warn("calendar.CalendarCollection.hasNext interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        }
    }

    global.systemplugin.calendar = {
        addPhoneCalendar: function (...args) {
            console.warn("calendar.addPhoneCalendar interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock)
            } else {
                return new Promise((resolve) => {
                    resolve()
                });
            }
        },
        addPhoneRepeatCalendar: function (...args) {
            console.warn("calendar.addPhoneRepeatCalendar interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock)
            } else {
                return new Promise((resolve) => {
                    resolve()
                });
            }
        },
        CalendarDataHelper: {
            name: '[PC preview] unknown  queryEntityName',
            creator: function (...args) {
                console.warn("calendar.CalendarDataHelper.creator interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
                return global.systemplugin.calendar.CalendarDataHelper;
            },
            query: function (...args) {
                console.warn("calendar.CalendarDataHelper.query interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
                const len = args.length
                if (typeof args[len - 1] === 'function') {
                    args[len - 1].call(this, paramMock.businessErrorMock, CalendarCollectionMock)
                } else {
                    return new Promise((resolve) => {
                        resolve(CalendarCollectionMock)
                    });
                }
            },
            delete: function (...args) {
                console.warn("calendar.CalendarDataHelper.delete interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
                const len = args.length;
                if (!Array.prototype.subsetTo) {
                    Array.prototype.subsetTo = function (arr) {
                        return this.every(v => arr.includes(v));
                    }
                }
                if (typeof args[len - 1] === 'function') {
                    if (typeof args[len - 2] === 'number') {
                        args[len - 1].call(this, paramMock.businessErrorMock);
                    } else if (Object.getOwnPropertyNames(args[len - 2]).subsetTo(arr)) {
                        args[len - 1].call(this, paramMock.businessErrorMock);
                    } else {
                        args[len - 1].call(this, paramMock.businessErrorMock, infoMock.number);
                    }
                } else {
                    if (typeof args(len - 1) === 'number') {
                        return new Promise((resolve) => {
                            resolve()
                        });
                    } else if (Object.getOwnPropertyNames(args[len - 1]).subsetTo(arr)) {
                        return new Promise((resolve) => {
                            resolve()
                        });
                    } else {
                        return new Promise((resolve) => {
                            resolve(infoMock.number)
                        });
                    }
                }
            },
            update: function (...args) {
                console.warn("calendar.CalendarDataHelper.update interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
                const len = args.length
                if (typeof args[len - 1] === 'function') {
                    args[len - 1].call(this, paramMock.businessErrorMock, infoMock.isUpdated)
                } else {
                    return new Promise((resolve) => {
                        resolve(infoMock.isUpdated)
                    });
                }
            },
            insert: function (...args) {
                console.warn("calendar.CalendarDataHelper.insert interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
                const len = args.length
                if (typeof args[len - 1] === 'function') {
                    args[len - 1].call(this, paramMock.businessErrorMock, infoMock.isInsert)
                } else {
                    return new Promise((resolve) => {
                        resolve(infoMock.isInsert)
                    });
                }
            },
        }
    }
}