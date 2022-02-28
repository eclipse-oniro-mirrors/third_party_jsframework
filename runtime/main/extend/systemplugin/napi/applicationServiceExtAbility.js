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
import { RemoteObjectClass } from "./applicationServiceExtension"

const ApplicationInfoMock = {
  name: '[PC preview] unknow name',
  description: '[PC preview] unknow description',
  descriptionId: '[PC preview] unknow descriptionId',
  systemApp: '[PC preview] unknow systemApp',
  enabled: '[PC preview] unknow enabled',
  label: '[PC preview] unknow label',
  labelId: '[PC preview] unknow labelId',
  icon: '[PC preview] unknow icon',
  iconId: '[PC preview] unknow iconId',
  process: '[PC preview] unknow process',
  supportedModes: '[PC preview] unknow supportedModes',
  moduleSourceDirs: [paramMock.paramStringMock],
  permissions: [paramMock.paramStringMock],
  entryDir: '[PC preview] unknow entryDir',
  codePath: '[PC preview] unknow codePath',
  removable: '[PC preview] unknow removable',
  accessTokenId: '[PC preview] unknow accessTokenId',
  uid: '[PC preview] unknow uid',
  entityType: '[PC preview] unknow entityType'
}
const EventHubClass = class EventHub {
  constructor() {
    console.warn('EventHub.constructor interface mocked in the Previewer. How this interface works on' +
      ' the Previewer may be different from that on a real device.');
    this.on = function (...args) {
      console.warn("EventHub.on interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
    };
    this.off = function (...args) {
      console.warn("EventHub.off interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
    };
    this.emit = function (...args) {
      console.warn("EventHub.emit interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
    };
  }
}
const BaseContextClass = class BaseContext {
  constructor() {
    console.warn('BaseContext.constructor interface mocked in the Previewer. How this interface works on' +
      ' the Previewer may be different from that on a real device.');
    this.stageMode = "[PC Preview] unknow stageMode";
  }
}
export const ContextClass = class Context extends BaseContextClass {
  constructor() {
    super();
    console.warn('Context.constructor interface mocked in the Previewer. How this interface works on' +
      ' the Previewer may be different from that on a real device.');
    this.applicationInfo = ApplicationInfoMock;
    this.cacheDir = "[PC Preview] unknow cacheDir";
    this.tempDir = "[PC Preview] unknow tempDir";
    this.filesDir = "[PC Preview] unknow filesDir";
    this.databaseDir = "[PC Preview] unknow databaseDir";
    this.storageDir = "[PC Preview] unknow storageDir";
    this.bundleCodeDir = "[PC Preview] unknow bundleCodeDir";
    this.distributedFilesDir = "[PC Preview] unknow distributedFilesDir";
    this.eventHub = new EventHubClass();
    this.createBundleContext = function (...args) {
      console.warn("Context.createBundleContext interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return new ContextClass();
    };
    this.getApplicationContext = function () {
      console.warn("Context.getApplicationContext interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return new ContextClass();
    };
    this.switchArea = function (...args) {
      console.warn("Context.switchArea interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
    };
  }
}
export function mockServiceExtAbility() {
  const HapModuleInfoMock = {
    name: '[PC preview] unknow name',
    description: '[PC preview] unknow description',
    descriptionId: '[PC preview] unknow descriptionId',
    icon: '[PC preview] unknow icon',
    label: '[PC preview] unknow label',
    labelId: '[PC preview] unknow labelId',
    iconId: '[PC preview] unknow iconId',
    backgroundImg: '[PC preview] unknow backgroundImg',
    supportedModes: '[PC preview] unknow supportedModes',
    reqCapabilities: [paramMock.paramStringMock],
    deviceTypes: [paramMock.paramStringMock],
    moduleName: '[PC preview] unknow moduleName',
    mainAbilityName: '[PC preview] unknow mainAbilityName',
    installationFree: '[PC preview] unknow installationFree',
    mainElementName: '[PC preview] unknow mainElementName',
  }
  const ExtAbilityContextClass = class ExtAbilityContext extends ContextClass {
    constructor() {
      super();
      console.warn('ExtAbilityContext.constructor interface mocked in the Previewer. How this interface works on' +
        ' the Previewer may be different from that on a real device.');
      this.currentHapModuleInfo = HapModuleInfoMock;
    }
  }
  const ServiceExtAbilityContextClass = class ServiceExtAbilityContext extends ExtAbilityContextClass{
    constructor() {
      super();
      console.warn('ServiceExtAbilityContext.constructor interface mocked in the Previewer. How this interface works on' +
        ' the Previewer may be different from that on a real device.');
      this.startAbility = function (...args) {
        console.warn("ServiceExtAbilityContext.startAbility interface mocked in the Previewer." +
          " How this interface works on the Previewer may be different from that on a real device.")
        const len = args.length
        if (len > 0 && typeof args[len - 1] === 'function') {
          args[len - 1].call(this, paramMock.businessErrorMock);
        } else {
          return new Promise((resolve, reject) => {
            resolve();
          })
        }
      };
      this.startAbilityWithAccount = function (...args) {
        console.warn("ServiceExtAbilityContext.startAbilityWithAccount interface mocked in the Previewer." +
          " How this interface works on the Previewer may be different from that on a real device.")
        const len = args.length
        if (len > 0 && typeof args[len - 1] === 'function') {
          args[len - 1].call(this, paramMock.businessErrorMock);
        } else {
          return new Promise((resolve, reject) => {
            resolve();
          })
        }
      };
      this.terminateSelf = function (...args) {
        console.warn("ServiceExtAbilityContext.terminateSelf interface mocked in the Previewer." +
          " How this interface works on the Previewer may be different from that on a real device.")
        const len = args.length
        if (len > 0 && typeof args[len - 1] === 'function') {
          args[len - 1].call(this, paramMock.businessErrorMock);
        } else {
          return new Promise((resolve, reject) => {
            resolve();
          })
        }
      };
      this.connectAbility = function (...args) {
        console.warn("ServiceExtAbilityContext.connectAbility interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
        return paramMock.paramNumberMock;
      };
      this.connectAbilityWithAccount = function (...args) {
        console.warn("ServiceExtAbilityContext.connectAbilityWithAccount interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
        return paramMock.paramNumberMock;
      };
      this.disconnectAbility = function (...args) {
        console.warn("ServiceExtAbilityContext.disconnectAbility interface mocked in the Previewer." +
          " How this interface works on the Previewer may be different from that on a real device.")
        const len = args.length
        if (len > 0 && typeof args[len - 1] === 'function') {
          args[len - 1].call(this, paramMock.businessErrorMock);
        } else {
          return new Promise((resolve, reject) => {
            resolve();
          })
        }
      };
    }
  }
  const ServiceExtAbilityClass = class ServiceExtAbility {
    constructor() {
      console.warn('application.ServiceExtAbility.constructor interface mocked in the Previewer. How this interface works on' +
        ' the Previewer may be different from that on a real device.');
      this.context = new ServiceExtAbilityContextClass();
      this.onCreate = function (...args) {
        console.warn("ServiceExtAbility.onCreate interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
      };
      this.onDestroy = function () {
        console.warn("ServiceExtAbility.onDestroy interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
      };
      this.onRequest = function (...args) {
        console.warn("ServiceExtAbility.onRequest interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
      };
      this.onConnect = function (...args) {
        console.warn("ServiceExtAbility.onConnect interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
          return new RemoteObjectClass();
      };
      this.onDisconnect = function (...args) {
        console.warn("ServiceExtAbility.onDisconnect interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
      };
      this.onReconnect = function (...args) {
        console.warn("ServiceExtAbility.onReconnect interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
      };
    }
  }
  return new ServiceExtAbilityClass();
}
