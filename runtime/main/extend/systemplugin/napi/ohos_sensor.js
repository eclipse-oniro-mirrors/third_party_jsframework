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

export function mockSensor() {
    const AccelerometerResponse = {
        x: '[PC preview] unknown x',
        y: '[PC preview] unknown y',
        z: '[PC preview] unknown z'
    }
    const LinearAccelerometerResponse = {
        x: '[PC preview] unknown x',
        y: '[PC preview] unknown y',
        z: '[PC preview] unknown z'
    }
    const AccelerometerUncalibratedResponse = {
        x: '[PC preview] unknown x',
        y: '[PC preview] unknown y',
        z: '[PC preview] unknown z',
        biasX: '[PC preview] unknown biasX',
        biasY: '[PC preview] unknown biasY',
        biasZ: '[PC preview] unknown biasZ'
    }
    const GravityResponse = {
        x: '[PC preview] unknown x',
        y: '[PC preview] unknown y',
        z: '[PC preview] unknown z'
    }
    const OrientationResponse = {
        alpha: '[PC preview] unknown alpha',
        beta: '[PC preview] unknown beta',
        gamma: '[PC preview] unknown gamma'
    }
    const RotationVectorResponse = {
        x: '[PC preview] unknown x',
        y: '[PC preview] unknown y',
        z: '[PC preview] unknown z'
    }
    const GyroscopeResponse = {
        x: '[PC preview] unknown x',
        y: '[PC preview] unknown y',
        z: '[PC preview] unknown z'
    }
    const GyroscopeUncalibratedResponse = {
        x: '[PC preview] unknown x',
        y: '[PC preview] unknown y',
        z: '[PC preview] unknown z',
        biasX: '[PC preview] unknown biasX',
        biasY: '[PC preview] unknown biasY',
        biasZ: '[PC preview] unknown biasZ'
    }
    const SignificantMotionResponse = {
        scalar: '[PC preview] unknown scalar'
    }
    const ProximityResponse = {
        distance: '[PC preview] unknown distance'
    }
    const LightResponse = {
        intensity: '[PC preview] unknown intensity'
    }
    const HallResponse = {
        status: '[PC preview] unknown status'
    }
    const MagneticFieldResponse = {
        x: '[PC preview] unknown x',
        y: '[PC preview] unknown y',
        z: '[PC preview] unknown z'
    }
    const MagneticFieldUncalibratedResponse = {
        x: '[PC preview] unknown x',
        y: '[PC preview] unknown y',
        z: '[PC preview] unknown z',
        biasX: '[PC preview] unknown biasX',
        biasY: '[PC preview] unknown biasY',
        biasZ: '[PC preview] unknown biasZ'
    }
    const PedometerResponse = {
        steps: '[PC preview] unknown steps'
    }
    const HumidityResponse = {
        humidity: '[PC preview] unknown humidity'
    }
    const PedometerDetectResponse = {
        scalar: '[PC preview] unknown scalar'
    }
    const AmbientTemperatureResponse = {
        temperature: '[PC preview] unknown temperature'
    }
    const BarometerResponse = {
        pressure: '[PC preview] unknown pressure'
    }
    const HeartRateResponse = {
        heartRate: '[PC preview] unknown heartRate'
    }
    const WearDetectionResponse = {
        value: '[PC preview] unknown value'
    }
    const Options = {
        interval: '[PC preview] unknown value'
    }
    const GeomagneticResponse = {
        x: '[PC preview] unknown x',
        y: '[PC preview] unknown y',
        z: '[PC preview] unknown z',
        biasX: '[PC preview] unknown biasX',
        biasY: '[PC preview] unknown biasY',
        biasZ: '[PC preview] unknown biasZ'
    }
    const LocationOptions = {
        latitude: '[PC preview] unknown latitude',
        longitude: '[PC preview] unknown longitude',
        altitude: '[PC preview] unknown altitude',
    }
    const CoordinatesOptions = {
        x: '[PC preview] unknown x',
        y: '[PC preview] unknown y'
    }
    const Sensor = {
        sensorName: '[PC preview] unknown sensorName',
        venderName: '[PC preview] unknown venderName',
        firmwareVersion: '[PC preview] unknown firmwareVersion',
        hardwareVersion: '[PC preview] unknown hardwareVersion',
        sensorTypeId: '[PC preview] unknown sensorTypeId',
        maxRange: '[PC preview] unknown maxRange',
        precision: '[PC preview] unknown precision',
        power: '[PC preview] unknown power'
    }
    const SensorType = {
        SENSOR_TYPE_ID_ACCELEROMETER: 1,
        SENSOR_TYPE_ID_GYROSCOPE: 2,
        SENSOR_TYPE_ID_AMBIENT_LIGHT: 5,
        SENSOR_TYPE_ID_MAGNETIC_FIELD: 6,
        SENSOR_TYPE_ID_BAROMETER: 8,
        SENSOR_TYPE_ID_HALL: 10,
        SENSOR_TYPE_ID_PROXIMITY: 12,
        SENSOR_TYPE_ID_HUMIDITY: 13,
        SENSOR_TYPE_ID_ORIENTATION: 256,
        SENSOR_TYPE_ID_GRAVITY: 257,
        SENSOR_TYPE_ID_LINEAR_ACCELERATION: 258,
        SENSOR_TYPE_ID_ROTATION_VECTOR: 259,
        SENSOR_TYPE_ID_AMBIENT_TEMPERATURE: 260,
        SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED: 261,
        SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED: 263,
        SENSOR_TYPE_ID_SIGNIFICANT_MOTION: 264,
        SENSOR_TYPE_ID_PEDOMETER_DETECTION: 265,
        SENSOR_TYPE_ID_PEDOMETER: 266,
        SENSOR_TYPE_ID_HEART_RATE: 278,
        SENSOR_TYPE_ID_WEAR_DETECTION: 280,
        SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED: 281
    }
    const sensor = {
      Sensor,
        on: function (...args) {
            console.warn('sensor.on interface mocked in the Previewer. How this interface works on the'
                + 'Previewer may be different from that on a real device.')
                const len = args.length;
                const callback = typeof args[len - 1] == 'function' ? args[len - 1] : args[len - 2];
                if (args[0] == 1) {
                  callback.call(this, paramMock.businessErrorMock, AccelerometerResponse);
                } else if (args[0] == 2) {
                  callback.call(this, paramMock.businessErrorMock, GyroscopeResponse);
                } else if (args[0] == 5) {
                  callback.call(this, paramMock.businessErrorMock, LightResponse);
                } else if (args[0] == 6) {
                  callback.call(this, paramMock.businessErrorMock, MagneticFieldResponse);
                } else if (args[0] == 8) {
                  callback.call(this, paramMock.businessErrorMock, BarometerResponse);
                } else if (args[0] == 10) {
                  callback.call(this, paramMock.businessErrorMock, HallResponse);
                } else if (args[0] == 12) {
                  callback.call(this, paramMock.businessErrorMock, ProximityResponse);
                } else if (args[0] == 13) {
                  callback.call(this, paramMock.businessErrorMock, HumidityResponse);
                } else if (args[0] == 256) {
                  callback.call(this, paramMock.businessErrorMock, OrientationResponse);
                } else if (args[0] == 257) {
                  callback.call(this, paramMock.businessErrorMock, GravityResponse);
                } else if (args[0] == 258) {
                  callback.call(this, paramMock.businessErrorMock, LinearAccelerometerResponse);
                } else if (args[0] == 259) {
                  callback.call(this, paramMock.businessErrorMock, RotationVectorResponse);
                } else if (args[0] == 260) {
                  callback.call(this, paramMock.businessErrorMock, AmbientTemperatureResponse);
                } else if (args[0] == 261) {
                  callback.call(this, paramMock.businessErrorMock, MagneticFieldUncalibratedResponse);
                } else if (args[0] == 263) {
                  callback.call(this, paramMock.businessErrorMock, GyroscopeUncalibratedResponse);
                } else if (args[0] == 264) {
                  callback.call(this, paramMock.businessErrorMock, SignificantMotionResponse);
                } else if (args[0] == 265) {
                  callback.call(this, paramMock.businessErrorMock, PedometerDetectResponse);
                } else if (args[0] == 266) {
                  callback.call(this, paramMock.businessErrorMock, PedometerResponse);
                } else if (args[0] == 278) {
                  callback.call(this, paramMock.businessErrorMock, HeartRateResponse);
                } else if (args[0] == 280) {
                  callback.call(this, paramMock.businessErrorMock, WearDetectionResponse);
                } else if (args[0] == 281) {
                  callback.call(this, paramMock.businessErrorMock, AccelerometerUncalibratedResponse);
                }
        },
        once: function (...args) {
            console.warn('sensor.once interface mocked in the Previewer. How this interface works on the'
                + 'Previewer may be different from that on a real device.')
                const len = args.length
                if (args[0] == 1) {
                  args[len - 1].call(this, paramMock.businessErrorMock, AccelerometerResponse);
                } else if (args[0] == 2) {
                  args[len - 1].call(this, paramMock.businessErrorMock, GyroscopeResponse);
                } else if (args[0] == 5) {
                  args[len - 1].call(this, paramMock.businessErrorMock, LightResponse);
                } else if (args[0] == 6) {
                  args[len - 1].call(this, paramMock.businessErrorMock, MagneticFieldResponse);
                } else if (args[0] == 8) {
                  args[len - 1].call(this, paramMock.businessErrorMock, BarometerResponse);
                } else if (args[0] == 10) {
                  args[len - 1].call(this, paramMock.businessErrorMock, HallResponse);
                } else if (args[0] == 12) {
                  args[len - 1].call(this, paramMock.businessErrorMock, ProximityResponse);
                } else if (args[0] == 13) {
                  args[len - 1].call(this, paramMock.businessErrorMock, HumidityResponse);
                } else if (args[0] == 256) {
                  args[len - 1].call(this, paramMock.businessErrorMock, OrientationResponse);
                } else if (args[0] == 257) {
                  args[len - 1].call(this, paramMock.businessErrorMock, GravityResponse);
                } else if (args[0] == 258) {
                  args[len - 1].call(this, paramMock.businessErrorMock, LinearAccelerometerResponse);
                } else if (args[0] == 259) {
                  args[len - 1].call(this, paramMock.businessErrorMock, RotationVectorResponse);
                } else if (args[0] == 260) {
                  args[len - 1].call(this, paramMock.businessErrorMock, AmbientTemperatureResponse);
                } else if (args[0] == 261) {
                  args[len - 1].call(this, paramMock.businessErrorMock, MagneticFieldUncalibratedResponse);
                } else if (args[0] == 263) {
                  args[len - 1].call(this, paramMock.businessErrorMock, GyroscopeUncalibratedResponse);
                } else if (args[0] == 264) {
                  args[len - 1].call(this, paramMock.businessErrorMock, SignificantMotionResponse);
                } else if (args[0] == 265) {
                  args[len - 1].call(this, paramMock.businessErrorMock, PedometerDetectResponse);
                } else if (args[0] == 266) {
                  args[len - 1].call(this, paramMock.businessErrorMock, PedometerResponse);
                } else if (args[0] == 278) {
                  args[len - 1].call(this, paramMock.businessErrorMock, HeartRateResponse);
                } else if (args[0] == 280) {
                  args[len - 1].call(this, paramMock.businessErrorMock, WearDetectionResponse);
                } else if (args[0] == 281) {
                  args[len - 1].call(this, paramMock.businessErrorMock, AccelerometerUncalibratedResponse);
                }
        },
        off: function (...args) {
            console.warn('sensor.off interface mocked in the Previewer. How this interface works on the'
                + 'Previewer may be different from that on a real device.')
            const len = args.length
            args[len - 1].call(this, paramMock.businessErrorMock);
        },
        getGeomagneticField: function (...args) {
            console.warn('sensor.getGeomagneticField interface mocked in the Previewer. How this interface works on the'
                + 'Previewer may be different from that on a real device.')
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, GeomagneticResponse);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(GeomagneticResponse);
                });
            }
        },
        getAltitude: function (...args) {
            console.warn('sensor.getAltitude interface mocked in the Previewer. How this interface works on the'
                + 'Previewer may be different from that on a real device.')
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(paramMock.paramNumberMock);
                });
            }
        },
        getGeomagneticDip: function (...args) {
            console.warn('sensor.getGeomagneticDip interface mocked in the Previewer. How this interface works on the'
                + 'Previewer may be different from that on a real device.')
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(paramMock.paramNumberMock);
                });
            }
        },
        getAngleModifiy: function (...args) {
            console.warn('sensor.getAngleModifiy interface mocked in the Previewer. How this interface works on the'
              + 'Previewer may be different from that on a real device.')
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(paramMock.paramNumberMock);
                });
            }
        },
        createRotationMatrix: function (...args) {
            console.warn('sensor.createRotationMatrix interface mocked in the Previewer. How this interface works on the'
                + 'Previewer may be different from that on a real device.')
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(paramMock.paramNumberMock);
                });
            }
        },
        transformCoordinateSystem: function (...args) {
            console.warn('sensor.transformCoordinateSystem interface mocked in the Previewer. How this interface works on the'
                + 'Previewer may be different from that on a real device.')
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(paramMock.paramNumberMock);
                });
            }
        },
        createQuaternion: function (...args) {
          console.warn('sensor.createQuaternion interface mocked in the Previewer. How this interface works on the'
                + 'Previewer may be different from that on a real device.')
          const len = args.length
          if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
          } else {
                return new Promise((resolve, reject) => {
                    resolve(paramMock.paramNumberMock);
                });
            }
        },
        getDirection: function (...args) {
            console.warn('sensor.getDirection interface mocked in the Previewer. How this interface works on the'
                + 'Previewer may be different from that on a real device.')
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(paramMock.paramNumberMock);
                });
            }
        },
        getSingleSensor: function (...args) {
            console.warn('sensor.getSingleSensor interface mocked in the Previewer. How this interface works on the'
                + 'Previewer may be different from that on a real device.')
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, Sensor);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(Sensor);
                });
            }
        },
        getSensorLists: function (...args) {
            console.warn('sensor.getSensorLists interface mocked in the Previewer. How this interface works on the'
                + 'Previewer may be different from that on a real device.')
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, Array(Sensor));
            } else {
                return new Promise((resolve, reject) => {
                    resolve(Array(Sensor));
                });
            }
        }
    };
    return sensor
}