import {paramMock} from './utils';

export function mockAccessibility() {
  const AbilitySubTypeMock = {
    UNSPECIFIED: 0,
    CA: 1
  };

  const DisplayOrientationMock = {
    UNSPECIFIED: 1,
    LANDSCAPE: 2,
    PORTRAIT: 3,
    FOLLOWRECENT: 4
  };
  const LaunchModeMock = {
    SINGLETON: 0,
    STANDARD: 1
  };

  const ApplicationInfoMock = {
    name: '[PC Preview] unknow name',
    description: '[PC Preview] unknow description',
    descriptionId: '[PC Preview] unknow descriptionId',
    systemApp: '[PC Preview] unknow systemApp',
    enabled: '[PC Preview] unknow enabled',
    label: '[PC Preview] unknow label',
    labelId: '[PC Preview] unknow labelId',
    icon: '[PC Preview] unknow icon',
    iconId: '[PC Preview] unknow iconId',
    process: '[PC Preview] unknow process',
    supportedModes: '[PC Preview] unknow supportedModes',
    moduleSourceDirs: '[PC Preview] unknow moduleSourceDirs',
    permissions: '[PC Preview] unknow permissions',
    permissions: '[PC Preview] unknow permissions',
    flags: '[PC Preview] unknow flags',
    entryDir: '[PC Preview] unknow entryDir'
  };

  const AbilityInfoMock = {
    bundleName: '[PC Preview] unknow bundleName',
    name: '[PC Preview] unknow name',
    label: '[PC Preview] unknow label',
    description: '[PC Preview] unknow description',
    icon: '[PC Preview] unknow icon',
    labelId: '[PC Preview] unknow labelId',
    descriptionId: '[PC Preview] unknow descriptionId',
    moduleName: '[PC Preview] unknow moduleName',
    iconId: '[PC Preview] unknow iconId',
    process: '[PC Preview] unknow process',
    targetAbility: '[PC Preview] unknow targetAbility',
    backgroundModes: '[PC Preview] unknow backgroundModes',
    isVisible: '[PC Preview] unknow isVisible',
    formEnabled: '[PC Preview] unknow formEnabled',
    type: AbilityTypeMock,
    subType: AbilitySubTypeMock,
    orientation: DisplayOrientationMock,
    launchMode: LaunchModeMock,
    permissions: '[PC Preview] unknow permissions',
    deviceTypes: '[PC Preview] unknow deviceTypes',
    deviceCapabilities: '[PC Preview] unknow deviceCapabilities',
    readPermission: '[PC Preview] unknow readPermission',
    writePermission: '[PC Preview] unknow writePermission',
    applicationInfo: ApplicationInfoMock,
    formEntity: '[PC Preview] unknow formEntity',
    minFormHeight: '[PC Preview] unknow minFormHeight',
    defaultFormHeight: '[PC Preview] unknow defaultFormHeight',
    minFormWidth: '[PC Preview] unknow minFormWidth',
    defaultFormWidth: '[PC Preview] unknow defaultFormWidth',
    uri: '[PC Preview] unknow uri'
  };

  const AbilityTypeMock = {
    audible: 'audible',
    generic: 'generic',
    haptic: 'haptic',
    spoken: 'spoken',
    visual: 'visual'
  };

  const CapabilityMock = {
    retrieve: 'retrieve',
    touchGuide: 'touchGuide',
    keyEventObserver: 'keyEventObserver',
    zoom: 'zoom',
    gesture: 'gesture'
  };

  const EventTypeMock = '[PC Preview] unknow EventType';

  const AccessibilityAbilityInfoMock = {
    id: '[PC Preview] unknow id',
    name: '[PC Preview] unknow name',
    bundleName: '[PC Preview] unknow bundleName',
    abilityInfo: AbilityInfoMock,
    abilityTypes: [AbilityTypeMock],
    capabilities: [CapabilityMock],
    description: '[PC Preview] unknow description',
    eventTypes: [EventTypeMock]
  };

  const WindowUpdateTypeMock = '[PC Preview] unknow WindowUpdateType';

  const ActionMock = '[PC Preview] unknow Action';

  const TextMoveUnitMock = '[PC Preview] unknow TextMoveUnit';
  const EventInfoClass = class EventInfo {
    constructor(jsonObject) {
      console.warn('accessibility.EventInfoClass.constructor interface mocked in the Previewer. How this interface works on' +
        ' the Previewer may be different from that on a real device.');
      this.type = EventTypeMock;
      this.windowUpdateType = WindowUpdateTypeMock;
      this.bundleName = '[PC Preview] unknow bundleName';
      this.componentType = '[PC Preview] unknow componentType';
      this.pageId = '[PC Preview] unknow pageId';
      this.description = '[PC Preview] unknow description';
      this.triggerAction = ActionMock;
      this.textMoveUnit = TextMoveUnitMock;
      this.contents = '[PC Preview] unknow contents';
      this.lastContent = '[PC Preview] unknow lastContent';
      this.beginIndex = '[PC Preview] unknow beginIndex';
      this.currentIndex = '[PC Preview] unknow currentIndex';
      this.endIndex = '[PC Preview] unknow endIndex';
      this.itemCount = '[PC Preview] unknow itemCount';
    }
  };
  const StateEventMock = {
    eventType: '[PC Preview] unknow eventType',
    state: '[PC Preview] unknow state',
    description: '[PC Preview] unknow description'
  };

  global.systemplugin.accessibility = {
    EventInfo: EventInfoClass,
    isOpenAccessibility: function(...args) {
      console.warn('accessibility.isOpenAccessibility interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramBooleanMock);
        });
      }
    },
    isOpenTouchGuide: function(...args) {
      console.warn('accessibility.isOpenTouchGuide interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock);
      } else {
        return new Promise((resolve) => {
          resolve(paramMock.paramBooleanMock);
        });
      }
    },
    on: function(...args) {
      console.warn('accessibility.on interface mocked in the Previewer. How this interface works on the Previewer may be' +
        ' different from that on a real device.');
      const len = args.length;
      args[len - 1].call(this, paramMock.businessErrorMock, StateEventMock);
    },
    off: function(...args) {
      console.warn('accessibility.off interface mocked in the Previewer. How this interface works on the Previewer may be' +
        ' different from that on a real device.');
      const len = args.length;
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, StateEventMock);
      } else {
        return;
      }
    },
    getAbilityLists: function(...args) {
      console.warn('accessibility.getAbilityLists interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, [AccessibilityAbilityInfoMock]);
      } else {
        return new Promise((resolve, reject) => {
          resolve([AccessibilityAbilityInfoMock]);
        });
      }
    },
    sendEvent: function(...args) {
      console.warn('accessibility.sendEvent interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        });
      }
    }
  };
}
