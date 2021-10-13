import { paramMock } from "./utils"

export function mockAccessibility() {
  const AbilitySubTypeMock = {
    UNSPECIFIED: 0,
    CA: 1,
  }

  const DisplayOrientationMock = {
    UNSPECIFIED: 1,
    LANDSCAPE: 2,
    PORTRAIT: 3,
    FOLLOWRECENT: 4,
  }
  const LaunchModeMock = {
    SINGLETON: 0,
    STANDARD: 1,
  }

  const ApplicationInfoMock = {
    name: "[PC Preview] unknow name",
    description: "[PC Preview] unknow description",
    descriptionId: "[PC Preview] unknow descriptionId",
    systemApp: "[PC Preview] unknow systemApp",
    enabled: "[PC Preview] unknow enabled",
    label: "[PC Preview] unknow label",
    labelId: "[PC Preview] unknow labelId",
    icon: "[PC Preview] unknow icon",
    iconId: "[PC Preview] unknow iconId",
    process: "[PC Preview] unknow process",
    supportedModes: "[PC Preview] unknow supportedModes",
    moduleSourceDirs: "[PC Preview] unknow moduleSourceDirs",
    permissions: "[PC Preview] unknow permissions",
    permissions: "[PC Preview] unknow permissions",
    flags: "[PC Preview] unknow flags",
    entryDir: "[PC Preview] unknow entryDir",
  }

  const AbilityInfoMock = {
    bundleName: "[PC Preview] unknow bundleName",
    name: "[PC Preview] unknow name",
    label: "[PC Preview] unknow label",
    description: "[PC Preview] unknow description",
    icon: "[PC Preview] unknow icon",
    labelId: "[PC Preview] unknow labelId",
    descriptionId: "[PC Preview] unknow descriptionId",
    moduleName: "[PC Preview] unknow moduleName",
    iconId: "[PC Preview] unknow iconId",
    process: "[PC Preview] unknow process",
    targetAbility: "[PC Preview] unknow targetAbility",
    backgroundModes: "[PC Preview] unknow backgroundModes",
    isVisible: "[PC Preview] unknow isVisible",
    formEnabled: "[PC Preview] unknow formEnabled",
    type: AbilityTypeMock,
    subType: AbilitySubTypeMock,
    orientation: DisplayOrientationMock,
    launchMode: LaunchModeMock,
    permissions: "[PC Preview] unknow permissions",
    deviceTypes: "[PC Preview] unknow deviceTypes",
    deviceCapabilities: "[PC Preview] unknow deviceCapabilities",
    readPermission: "[PC Preview] unknow readPermission",
    writePermission: "[PC Preview] unknow writePermission",
    applicationInfo: ApplicationInfoMock,
    formEntity: "[PC Preview] unknow formEntity",
    minFormHeight: "[PC Preview] unknow minFormHeight",
    defaultFormHeight: "[PC Preview] unknow defaultFormHeight",
    minFormWidth: "[PC Preview] unknow minFormWidth",
    defaultFormWidth: "[PC Preview] unknow defaultFormWidth",
    uri: "[PC Preview] unknow uri",
  }

  const AbilityTypeMock = {
    audible: 'audible',
    generic: 'generic',
    haptic: 'haptic',
    spoken: 'spoken',
    visual: 'visual',
  }

  const CapabilityMock = {
    retrieve: 'retrieve',
    touchGuide: 'touchGuide',
    keyEventObserver: 'keyEventObserver',
    zoom: 'zoom',
    gesture: 'gesture',
  }

  const EventTypeMock = {
    accessibilityFocus: 'accessibilityFocus',
    accessibilityFocusClear: 'accessibilityFocusClear',
    click: 'click',
    longClick: 'longClick',
    focus: 'focus',
    select: 'select',
    hoverEnter: 'hoverEnter',
    hoverExit: 'hoverExit',
    textUpdate: 'textUpdate',
    textSelectionUpdate: 'textSelectionUpdate',
    scroll: 'scroll',
  }

  const AccessibilityAbilityInfoMock = {
    id: "[PC Preview] unknow id",
    name: "[PC Preview] unknow name",
    bundleName: "[PC Preview] unknow bundleName",
    abilityInfo: AbilityInfoMock,
    abilityTypes: [AbilityTypeMock],
    capabilities: [CapabilityMock],
    description: "[PC Preview] unknow description",
    eventTypes: [EventTypeMock],
  }

  const WindowUpdateTypeMock = {
    add: 'add',
    remove: 'remove',
    title: 'title',
    bounds: 'bounds',
    layer: 'layer',
    active: 'active',
    focus: 'focus',
    accessibilityFocus: 'accessibilityFocus',
    parent: 'parent',
    children: 'children',
    pip: 'pip',
  }

  const ActionMock = {
    accessibilityFocus: 'accessibilityFocus',
    clearAccessibilityFocus: 'clearAccessibilityFocus',
    focus: 'focus',
    clearFocus: 'clearFocus',
    clearSelection: 'clearSelection',
    click: 'click',
    longClick: 'longClick',
    cut: 'cut',
    copy: 'copy',
    paste: 'paste',
    select: 'select',
    setText: 'setText',
    delete: 'delete',
    scrollForward: 'scrollForward',
    scrollBackward: 'scrollBackward',
    setSelection: 'setSelection',
  }

  const TextMoveUnitMock = {
    char: 'char',
    word: 'word',
    line: 'line',
    page: 'page',
    paragraph: 'paragraph'
  }

  const EventInfoMock = {
    type: EventTypeMock,
    windowUpdateType: WindowUpdateTypeMock,
    bundleName: "[PC Preview] unknow bundleName",
    componentType: "[PC Preview] unknow componentType",
    pageId: "[PC Preview] unknow pageId",
    description: "[PC Preview] unknow description",
    triggerAction: ActionMock,
    textMoveUnit: TextMoveUnitMock,
    contents: "[PC Preview] unknow contents",
    lastContent: "[PC Preview] unknow lastContent",
    beginIndex: "[PC Preview] unknow beginIndex",
    currentIndex: "[PC Preview] unknow currentIndex",
    endIndex: "[PC Preview] unknow endIndex",
    itemCount: "[PC Preview] unknow itemCount",
  }

  global.systemplugin.accessibility = {
    isOpenAccessibility: function (...args) {
      console.warn("accessibility.isOpenAccessibility interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramBooleanMock);
        })
      }
    },
    isOpenTouchGuide: function (...args) {
      console.warn("accessibility.isOpenTouchGuide interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock)
      } else {
        return new Promise((resolve) => {
          resolve(paramMock.paramBooleanMock);
        })
      }
    },
    on: function (...args) {
      console.warn("accessibility.on interface mocked in the Previewer. How this interface works on the Previewer may be" +
        " different from that on a real device.")
      const len = args.length
      args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock)
    },
    off: function (...args) {
      console.warn("accessibility.off interface mocked in the Previewer. How this interface works on the Previewer may be" +
        " different from that on a real device.")
      const len = args.length
      if (len === 0) {
        return
      }
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock)
      } else {
        return
      }
    },
    getAbilityLists: function (...args) {
      console.warn("accessibility.getAbilityLists interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, [AccessibilityAbilityInfoMock])
      } else {
        return new Promise((resolve, reject) => {
          resolve([AccessibilityAbilityInfoMock]);
        })
      }
    },
    sendEvent: function (...args) {
      console.warn("accessibility.sendEvent interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (len === 1 && args[0].className === 'EventInfo') {
        return
      } else if (len === 2 && args[0].className === 'EventInfo' && typeof args[1] === 'function') {
        args[1].call(this, paramMock.businessErrorMock, EventInfoMock)
      } else if (len === 2 && typeof args[0] === 'string' && typeof args[1] === 'function') {
        args[1].call(this, paramMock.businessErrorMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
  }
}
