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

export function mockOhosGeolocation() {
  const LocationMock = {
    latitude: '[PC preview] unknow latitude',
    longitude: '[PC preview] unknow longitude',
    altitude: '[PC preview] unknow altitude',
    accuracy: '[PC preview] unknow accuracy',
    speed: '[PC preview] unknow speed',
    timeStamp: '[PC preview] unknow timeStamp',
    direction: '[PC preview] unknow direction',
    timeSinceBoot: '[PC preview] unknow timeSinceBoot',
    additions: '[PC preview] unknow additions',
    additionSize: '[PC preview] unknow additionSize',
  }
  const GeoAddressMock = {
    latitude: '[PC preview] unknow latitude',
    longitude: '[PC preview] unknow longitude',
    locale: '[PC preview] unknow locale',
    placeName: '[PC preview] unknow placeName',
    countryCode: '[PC preview] unknow countryCode',
    countryName: '[PC preview] unknow countryName',
    administrativeArea: '[PC preview] unknow administrativeArea',
    subAdministrativeArea: '[PC preview] unknow subAdministrativeArea',
    locality: '[PC preview] unknow locality',
    subLocality: '[PC preview] unknow subLocality',
    roadName: '[PC preview] unknow roadName',
    subRoadName: '[PC preview] unknow subRoadName',
    premises: '[PC preview] unknow premises',
    postalCode: '[PC preview] unknow postalCode',
    phoneNumber: '[PC preview] unknow phoneNumber',
    addressUrl: '[PC preview] unknow addressUrl',
    descriptions: '[PC preview] unknow descriptions',
    descriptionsSize: '[PC preview] unknow descriptionsSize',
  }
  global.ohosplugin.geolocation = {
    on: function (...args) {
      console.warn("geolocation.on interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.");
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        if (args[0] == 'locationChange') {
          args[len - 1].call(this, LocationMock);
        } else if (args[0] == 'locationServiceState') {
          args[len - 1].call(this, paramMock.paramBooleanMock);
        }
      }
    },
    off: function (...args) {
      console.warn("geolocation.off interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.");
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        if (args[0] == 'locationChange') {
          args[len - 1].call(this, LocationMock);
        } else if (args[0] == 'locationServiceState') {
          args[len - 1].call(this, paramMock.paramBooleanMock);
        }
      }
    },
    getCurrentLocation: function (...args) {
      console.warn("geolocation.getCurrentLocation interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.");
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, LocationMock);
      } else {
        return new Promise((resolve) => {
          resolve(LocationMock);
        });
      }
    },
    getLastLocation: function (...args) {
      console.warn("geolocation.getLastLocation interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.");
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, LocationMock);
      } else {
        return new Promise((resolve) => {
          resolve(LocationMock);
        });
      }
    },
    isLocationEnabled: function (...args) {
      console.warn("geolocation.isLocationEnabled interface mocked in the Previewer. How this interface works on the" +
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
    requestEnableLocation: function (...args) {
      console.warn("geolocation.requestEnableLocation interface mocked in the Previewer. How this interface works on the" +
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
    enableLocation: function (...args) {
      console.warn("geolocation.enableLocation interface mocked in the Previewer. How this interface works on the" +
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
    disableLocation: function (...args) {
      console.warn("geolocation.disableLocation interface mocked in the Previewer. How this interface works on the" +
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
    getAddressesFromLocation: function (...args) {
      console.warn("geolocation.getAddressesFromLocation interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.");
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, [GeoAddressMock]);
      } else {
        return new Promise((resolve) => {
          resolve([GeoAddressMock]);
        });
      }
    },
    getAddressesFromLocationName: function (...args) {
      console.warn("geolocation.getAddressesFromLocationName interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.");
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, [GeoAddressMock]);
      } else {
        return new Promise((resolve) => {
          resolve([GeoAddressMock]);
        });
      }
    },
    isGeoServiceAvailable: function (...args) {
      console.warn("geolocation.isGeoServiceAvailable interface mocked in the Previewer. How this interface works on the" +
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
  }
}
