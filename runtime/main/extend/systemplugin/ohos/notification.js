import {paramMock} from "../utils"

export function mockOhosNotification() {
    const NotificationSlotMock = {
        type: '[PC preview] unknow type',
        level: '[PC preview] unknow level',
        desc: '[PC preview] unknow desc',
        badgeFlag: '[PC preview] unknow badgeFlag',
        bypassDnd: '[PC preview] unknow bypassDnd',
        lockscreenVisibility: '[PC preview] unknow lockscreenVisibility',
        vibrationEnabled: '[PC preview] unknow vibrationEnabled',
        sound: '[PC preview] unknow sound',
        lightEnabled: '[PC preview] unknow lightEnabled',
        lightColor: '[PC preview] unknow lightColor',
        vibrationValues: '[PC preview] unknow vibrationValues'
    }
    const DoNotDisturbDateMock = {
        type: '[PC preview] unknow type',
        begin: '[PC preview] unknow begin',
        end: '[PC preview] unknow end',
    }
    const NotificationRequestMock = {
        content: '[PC preview] unknow content',
        id: '[PC preview] unknow id',
        slotType: '[PC preview] unknow slotType',
        isOngoing: '[PC preview] unknow isOngoing',
        isUnremovable: '[PC preview] unknow isUnremovable',
        deliveryTime: '[PC preview] unknow deliveryTime',
        tapDismissed: '[PC preview] unknow tapDismissed',
        autoDeletedTime: '[PC preview] unknow autoDeletedTime',
        wantAgent: '[PC preview] unknow wantAgent',
        extraInfo: '[PC preview] unknow extraInfo',
        color: '[PC preview] unknow color',
        colorEnabled: '[PC preview] unknow colorEnabled',
        isAlertOnce: '[PC preview] unknow isAlertOnce',
        isStopwatch: '[PC preview] unknow isStopwatch',
        isCountDown: '[PC preview] unknow isCountDown',
        isFloatingIcon: '[PC preview] unknow isFloatingIcon',
        label: '[PC preview] unknow label',
        badgeIconStyle: '[PC preview] unknow badgeIconStyle',
        showDeliveryTime: '[PC preview] unknow showDeliveryTime',
        actionButtons: '[PC preview] unknow actionButtons',
        creatorBundleName: '[PC preview] unknow creatorBundleName',
        creatorUid: '[PC preview] unknow creatorUid',
        creatorPid: '[PC preview] unknow creatorPid',
        classification: '[PC preview] unknow classification',
        hashCode: '[PC preview] unknow hashCode',
        groupName: '[PC preview] unknow groupName',
        template: '[PC preview] unknow template',
    }
    global.ohosplugin.notification = {
        publish: function (...args) {
            console.warn("notification.publish interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve) => {
                    resolve();
                });
            }
        },
        cancel: function (...args) {
            console.warn("notification.cancel interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve) => {
                    resolve();
                });
            }
        },
        cancelAll: function (...args) {
            console.warn("notification.cancelAll interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve) => {
                    resolve();
                });
            }
        },
        addSlot: function (...args) {
            console.warn("notification.addSlot interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve) => {
                    resolve();
                });
            }
        },
        addSlots: function (...args) {
            console.warn("notification.addSlots interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve) => {
                    resolve();
                });
            }
        },
        getSlot: function (...args) {
            console.warn("notification.getSlot interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, NotificationSlotMock);
            } else {
                return new Promise((resolve) => {
                    resolve(NotificationSlotMock);
                });
            }
        },
        getSlots: function (...args) {
            console.warn("notification.getSlots interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, [NotificationSlotMock]);
            } else {
                return new Promise((resolve) => {
                    resolve([NotificationSlotMock]);
                });
            }
        },
        removeSlot: function (...args) {
            console.warn("notification.removeSlot interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve) => {
                    resolve();
                });
            }
        },
        removeAllSlots: function (...args) {
            console.warn("notification.removeAllSlots interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve) => {
                    resolve();
                });
            }
        },
        subscribe: function (...args) {
            console.warn("notification.subscribe interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve) => {
                    resolve();
                });
            }
        },
        unsubscribe: function (...args) {
            console.warn("notification.unsubscribe interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve) => {
                    resolve();
                });
            }
        },
        enableNotification: function (...args) {
            console.warn("notification.enableNotification interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve) => {
                    resolve();
                });
            }
        },
        isNotificationEnabled: function (...args) {
            console.warn("notification.isNotificationEnabled interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock);
            } else {
                return new Promise((resolve) => {
                    resolve(paramMock.paramBooleanMock);
                });
            }
        },
        displayBadge: function (...args) {
            console.warn("notification.displayBadge interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve) => {
                    resolve();
                });
            }
        },
        isBadgeDisplayed: function (...args) {
            console.warn("notification.isBadgeDisplayed interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock);
            } else {
                return new Promise((resolve) => {
                    resolve(paramMock.paramBooleanMock);
                });
            }
        },
        setSlotByBundle: function (...args) {
            console.warn("notification.setSlotByBundle interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve) => {
                    resolve();
                });
            }
        },
        getSlotsByBundle: function (...args) {
            console.warn("notification.getSlotsByBundle interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, [NotificationSlotMock]);
            } else {
                return new Promise((resolve) => {
                    resolve([NotificationSlotMock]);
                });
            }
        },
        getSlotNumByBundle: function (...args) {
            console.warn("notification.getSlotNumByBundle interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
            } else {
                return new Promise((resolve) => {
                    resolve(paramMock.paramNumberMock);
                });
            }
        },
        remove: function (...args) {
            console.warn("notification.remove interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve) => {
                    resolve();
                });
            }
        },
        removeAll: function (...args) {
            console.warn("notification.removeAll interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve) => {
                    resolve();
                });
            }
        },
        getAllActiveNotifications: function (...args) {
            console.warn("notification.getAllActiveNotifications interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, [NotificationRequestMock]);
            } else {
                return new Promise((resolve) => {
                    resolve([NotificationRequestMock]);
                });
            }
        },
        getActiveNotificationCount: function (...args) {
            console.warn("notification.getActiveNotificationCount interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
            } else {
                return new Promise((resolve) => {
                    resolve(paramMock.paramNumberMock);
                });
            }
        },
        getActiveNotifications: function (...args) {
            console.warn("notification.getActiveNotifications interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, [NotificationRequestMock]);
            } else {
                return new Promise((resolve) => {
                    resolve([NotificationRequestMock]);
                });
            }
        },
        isDistributedEnabled: function (...args) {
            console.warn("notification.isDistributedEnabled interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock);
            } else {
                return new Promise((resolve) => {
                    resolve(paramMock.paramBooleanMock);
                });
            }
        },
        enableDistributed: function (...args) {
            console.warn("notification.enableDistributed interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve) => {
                    resolve();
                });
            }
        },
        enableDistributedSelf: function (...args) {
            console.warn("notification.enableDistributedSelf interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve) => {
                    resolve();
                });
            }
        },
        enableDistributedByBundle: function (...args) {
            console.warn("notification.enableDistributedByBundle interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve) => {
                    resolve();
                });
            }
        },
        isDistributedEnabledByBundle: function (...args) {
            console.warn("notification.isDistributedEnabledByBundle interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock);
            } else {
                return new Promise((resolve) => {
                    resolve(paramMock.paramBooleanMock);
                });
            }
        },
        cancelGroup: function (...args) {
            console.warn("notification.cancelGroup interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve) => {
                    resolve();
                });
            }
        },
        removeGroupByBundle: function (...args) {
            console.warn("notification.removeGroupByBundle interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock);
            } else {
                return new Promise((resolve) => {
                    resolve(paramMock.paramBooleanMock);
                });
            }
        },
        isSupportDoNotDisturbMode: function (...args) {
            console.warn("notification.isSupportDoNotDisturbMode interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock);
            } else {
                return new Promise((resolve) => {
                    resolve(paramMock.paramBooleanMock);
                });
            }
        },
        setDoNotDisturbDate: function (...args) {
            console.warn("notification.setDoNotDisturbDate interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve) => {
                    resolve();
                });
            }
        },
        getDoNotDisturbDate: function (...args) {
            console.warn("notification.getDoNotDisturbDate interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, DoNotDisturbDateMock);
            } else {
                return new Promise((resolve) => {
                    resolve(DoNotDisturbDateMock);
                });
            }
        },
    }
}


