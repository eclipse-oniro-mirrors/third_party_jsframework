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

export function mockMultimediaAudio() {
  const interruptActionMock = {
    actionType: "[PC Preview] unknow actionType",
    type: "[PC Preview] unknow type",
    hint: "[PC Preview] unknow hint",
    activated: "[PC Preview] unknow activated",
  }
  const DeviceRoleMock = "[PC Preview] unknow DeviceRole"
  const DeviceTypeMock = "[PC Preview] unknow DeviceType"
  const AudioDeviceDescriptorMock = {
    deviceRole: DeviceRoleMock,
    deviceType: DeviceTypeMock,
    id: "[PC Preview] unknow id",
    name: "[PC Preview] unknow name",
    address: "[PC Preview] unknow address",
    sampleRates: function () {
      console.warn("AudioDeviceDescriptorMock.sampleRates interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      var sampleRatesArray = new Array();
      return sampleRatesArray;
    },
    channelCounts: function () {
      console.warn("AudioDeviceDescriptorMock.channelCounts interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      var channelCountsArray = new Array();
      return channelCountsArray;
    },
    channelMasks: function () {
      console.warn("AudioDeviceDescriptorMock.channelMasks interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      var channelMasksArray = new Array();
      return channelMasksArray;
    },
  }
  const DeviceChangeActionMock = {
    type: "[PC Preview] unknow type",
    deviceDescriptors: AudioDeviceDescriptorMock,
  }
  const AudioRingModeMock = '[PC Preview] unknow AudioRingMode'
  const VolumeEventMock = {
    volumeType: "[PC Preview] unknow volumeType",
    volume: "[PC Preview] unknow volume",
    updateUi: "[PC Preview] unknow updateUi",
  }
  const AudioSceneMock = '[PC Preview] unknow AudioScene'
  const AudioStreamInfoMock = {
    samplingRate: "[PC Preview] unknow samplingRate",
    channels: "[PC Preview] unknow channels",
    sampleFormat: "[PC Preview] unknow sampleFormat",
    encodingType: "[PC Preview] unknow encodingType",
  }
  const AudioRendererInfoMock = {
    content: "[PC Preview] unknow content",
    usage: "[PC Preview] unknow usage",
    rendererFlags: "[PC Preview] unknow rendererFlags",
  }
  const AudioRendererOptionsMock = {
    streamInfo: AudioStreamInfoMock,
    rendererInfo: AudioRendererInfoMock,
  }
  const AudioCapturerInfoMock = {
    source: "[PC Preview] unknow source",
    capturerFlags: "[PC Preview] unknow capturerFlags",
  }
  const AudioCapturerOptionsMock = {
    streamInfo: AudioStreamInfoMock,
    capturerInfo: AudioCapturerInfoMock,
  }
  const AudioStateMock = '[PC Preview] unknow AudioState'
  const AudioRendererRateMock = '[PC Preview] unknow AudioRendererRate'
  const InterruptEventMock = '[PC Preview] unknow InterruptEvent'
  const AudioRendererChangeInfoMock = {
    streamId: "[PC Preview] unknow streamId",
    clientUid: "[PC Preview] unknow clientUid",
    rendererInfo: AudioRendererInfoMock,
    rendererState: AudioStateMock,
    deviceDescriptors: function () {
      console.warn("AudioRendererChangeInfoMock.deviceDescriptors interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      var audioDeviceDescriptors = new Array(AudioDeviceDescriptorMock);
      return audioDeviceDescriptors;
    },
  }
  const AudioCapturerChangeInfoMock = {
    streamId: "[PC Preview] unknow streamId",
    clientUid: "[PC Preview] unknow clientUid",
    capturerInfo: AudioRendererInfoMock,
    capturerState: AudioStateMock,
    deviceDescriptors: function () {
      console.warn("AudioCapturerChangeInfoMock.deviceDescriptors interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      var audioDeviceDescriptors = new Array(AudioDeviceDescriptorMock);
      return audioDeviceDescriptors;
    },
  }
  const AudioCapturerMock = {
    state: "[PC Preview] unknow state",
    getCapturerInfo: function (...args) {
      console.warn("AudioCapturer.getCapturerInfo interface mocked in the Previewer." +
      " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, AudioCapturerInfoMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(AudioCapturerInfoMock);
        })
      }
    },
    getStreamInfo: function (...args) {
      console.warn("AudioCapturer.getStreamInfo interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, AudioStreamInfoMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(AudioStreamInfoMock);
        })
      }
    },
    start: function (...args) {
      console.warn("AudioCapturer.start interface mocked in the Previewer." +
      " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    read: function (...args) {
      console.warn("AudioCapturer.read interface mocked in the Previewer." +
      " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramArrayMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramArrayMock);
        })
      }
    },
    getAudioTime: function (...args) {
      console.warn("AudioCapturer.getAudioTime interface mocked in the Previewer." +
      " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramNumberMock);
        })
      }
    },
    stop: function (...args) {
      console.warn("AudioCapturer.stop interface mocked in the Previewer." +
      " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    release: function (...args) {
      console.warn("AudioCapturer.release interface mocked in the Previewer." +
      " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    getBufferSize: function (...args) {
      console.warn("AudioCapturer.getBufferSize interface mocked in the Previewer." +
      " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramNumberMock);
        })
      }
    },
    on: function (...args) {
      console.warn("AudioCapturer.on interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
    },
    off: function (...args) {
      console.warn("AudioCapturer.off interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
    },
  }
  const AudioRendererMock ={
    state: "[PC Preview] unknow state",
    getRendererInfo: function (...args) {
      console.warn("AudioRenderer.getRendererInfo interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, AudioRendererInfoMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(AudioRendererInfoMock);
        })
      }
    },
    getStreamInfo: function (...args) {
      console.warn("AudioRenderer.getStreamInfo interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, AudioStreamInfoMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(AudioStreamInfoMock);
        })
      }
    },
    start: function (...args) {
      console.warn("AudioRenderer.start interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    write: function (...args) {
      console.warn("AudioRenderer.write interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramNumberMock);
        })
      }
    },
    getAudioTime: function (...args) {
      console.warn("AudioRenderer.getAudioTime interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramNumberMock);
        })
      }
    },
    drain: function (...args) {
      console.warn("AudioRenderer.drain interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    pause: function (...args) {
      console.warn("AudioRenderer.pause interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    stop: function (...args) {
      console.warn("AudioRenderer.stop interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    release: function (...args) {
      console.warn("AudioRenderer.release interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    getBufferSize: function (...args) {
      console.warn("AudioRenderer.getBufferSize interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramNumberMock);
        })
      }
    },
    setRenderRate: function (...args) {
      console.warn("AudioRenderer.setRenderRate interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    getRenderRate: function (...args) {
      console.warn("AudioRenderer.getRenderRate interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, AudioRendererRateMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(AudioRendererRateMock);
        })
      }
    },
    on: function (...args) {
      console.warn("AudioRenderer.on interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
    },
    off: function (...args) {
      console.warn("AudioRenderer.off interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
    },
    setInterruptMode: function (...args) {
      console.warn("AudioRenderer.setInterruptMode interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    }
  }
  const AudioManagerMock = {
    on: function (...args) {
      console.warn("AudioManager.on interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        if (args[0] == 'interrupt') {
          args[len - 1].call(this, interruptActionMock);
        } else if (args[0] == 'deviceChange') {
          args[len - 1].call(this, DeviceChangeActionMock);
        } else if (args[0] == 'volumeChange') {
          args[len - 1].call(this, VolumeEventMock);
        } else if (args[0] == 'ringerModeChange') {
          args[len - 1].call(this, AudioRingModeMock);
        }
      }
    },
    off: function (...args) {
      console.warn("AudioManager.off interface mocked in the Previewer." +
        " How this interface works on the Previewer  may be different from that on a real device.")
    },
    getDevices: function (...args) {
      console.warn("AudioManager.getDevices interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      var AudioDeviceDescriptors = new Array(AudioDeviceDescriptorMock)
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, AudioDeviceDescriptors);
      } else {
        return new Promise((resolve, reject) => {
          resolve(AudioDeviceDescriptors);
        })
      }
    },
    isDeviceActive: function (...args) {
      console.warn("AudioManager.isDeviceActive interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramBooleanMock);
        })
      }
    },
    setDeviceActive: function (...args) {
      console.warn("AudioManager.setDeviceActive interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    setRingerMode: function (...args) {
      console.warn("AudioManager.setRingerMode interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    setAudioParameter: function (...args) {
      console.warn("AudioManager.setAudioParameter interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    setVolume: function (...args) {
      console.warn("AudioManager.setVolume interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    getVolume: function (...args) {
      console.warn("AudioManager.getVolume interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramNumberMock);
        })
      }
    },
    getMinVolume: function (...args) {
      console.warn("AudioManager.getMinVolume interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramNumberMock);
        })
      }
    },
    getMaxVolume: function (...args) {
      console.warn("AudioManager.getMaxVolume interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramNumberMock);
        })
      }
    },
    isMute: function (...args) {
      console.warn("AudioManager.isMute interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramBooleanMock);
        })
      }
    },
    mute: function (...args) {
      console.warn("AudioManager.mute interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    isActive: function (...args) {
      console.warn("AudioManager.isActive interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramBooleanMock);
        })
      }
    },
    isMicrophoneMute: function (...args) {
      console.warn("AudioManager.isMicrophoneMute interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramBooleanMock);
        })
      }
    },
    setMicrophoneMute: function (...args) {
      console.warn("AudioManager.setMicrophoneMute interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    getAudioParameter: function (...args) {
      console.warn("AudioManager.getAudioParameter interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramStringMock);
        })
      }
    },
    getRingerMode: function (...args) {
      console.warn("AudioManager.getRingerMode interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, AudioRingModeMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(AudioRingModeMock);
        })
      }
    },
    setAudioScene: function (...args) {
      console.warn("AudioManager.setAudioScene interface mocked in the Previewer." +
      " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    getAudioScene: function (...args) {
      console.warn("AudioManager.getAudioScene interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, AudioSceneMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(AudioSceneMock);
        })
      }
    },
    requestIndependentInterrupt: function (...args) {
      console.warn("AudioManager.requestIndependentInterrupt interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
        const len = args.length
        if (typeof args[len - 1] === 'function') {
          args[len - 1].call(this, paramMock.businessErrorMock,paramMock.paramBooleanMock);
        } else {
          return new Promise((resolve, reject) => {
            resolve(paramMock.paramBooleanMock);
          })
        }
    },
    abandonIndependentInterrupt: function (...args) {
      console.warn("AudioManager.abandonIndependentInterrupt interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock,paramMock.paramBooleanMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramBooleanMock);
        })
      }
    },
    getStreamManager: function (...args) {
      console.warn("AudioManager.getStreamManager interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, AudioStreamManagerMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(AudioStreamManagerMock);
        })
      }
    }
  }
  const AudioStreamManagerMock = {
    on: function (...args) {
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        if (args[0] == 'audioRendererChange') {
          console.warn("AudioStreamManager.on_audioRendererChange interface mocked in the Previewer." +
            " How this interface works on the Previewer may be different from that on a real device.")
        } else if (args[0] == 'audioCapturerChange') {
          console.warn("AudioStreamManager.on_audioCapturerChange interface mocked in the Previewer." +
            " How this interface works on the Previewer may be different from that on a real device.")
        }
      }
    },
    off: function (...args) {
      console.warn("AudioStreamManager.off interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
    },
    getCurrentAudioRendererInfoArray: function (...args) {
      console.warn("AudioStreamManager.getCurrentAudioRendererInfoArray interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      var AudioRendererChangeInfoArray = new Array(AudioRendererChangeInfoMock)
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, AudioRendererChangeInfoArray);
      } else {
        return new Promise((resolve, reject) => {
          resolve(AudioRendererChangeInfoArray);
        })
      }
    },
    getCurrentAudioCapturerInfoArray: function (...args) {
      console.warn("AudioStreamManager.getCurrentAudioCapturerInfoArray interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      var AudioCapturerChangeInfoArray = new Array(AudioCapturerChangeInfoMock)
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, AudioCapturerChangeInfoArray);
      } else {
        return new Promise((resolve, reject) => {
          resolve(AudioCapturerChangeInfoArray);
        })
      }
    }
  }
  const audio = {
    AudioState: {
      STATE_INVALID: -1,
      STATE_NEW: 0,
      STATE_PREPARED: 1,
      STATE_RUNNING: 2,
      STATE_STOPPED: 3,
      STATE_RELEASED:4,
      STATE_PAUSED: 5,
    },
    AudioVolumeType: {
      VOICE_CALL: 0,
      RINGTONE: 2,
      MEDIA: 3,
      VOICE_ASSISTANT: 9,
      ALL:100
    },
    ContentType: {
      CONTENT_TYPE_UNKNOWN: 0,
      CONTENT_TYPE_SPEECH: 1,
      CONTENT_TYPE_MUSIC: 2,
      CONTENT_TYPE_MOVIE: 3,
      CONTENT_TYPE_SONIFICATION: 4,
      CONTENT_TYPE_RINGTONE: 5,
    },
    StreamUsage: {
      STREAM_USAGE_UNKNOWN: 0,
      STREAM_USAGE_MEDIA: 1,
      STREAM_USAGE_VOICE_COMMUNICATION: 2,
      STREAM_USAGE_NOTIFICATION_RINGTONE: 6,
    },
    DeviceFlag: {
      OUTPUT_DEVICES_FLAG: 1,
      INPUT_DEVICES_FLAG: 2,
      ALL_DEVICES_FLAG: 3,
    },
    ActiveDeviceType: {
      SPEAKER: 2,
      BLUETOOTH_SCO: 7,
    },
    AudioRingMode: {
      RINGER_MODE_NORMAL: 2,
      RINGER_MODE_SILENT: 0,
      RINGER_MODE_VIBRATE: 1,
    },
    AudioSampleFormat: {
      SAMPLE_FORMAT_INVALID: -1,
      SAMPLE_FORMAT_U8: 0,
      SAMPLE_FORMAT_S16LE: 1,
      SAMPLE_FORMAT_S24LE: 2,
      SAMPLE_FORMAT_S32LE: 3,
      SAMPLE_FORMAT_F32LE: 4,
    },
    AudioChannel: {
      CHANNEL_1: 1,
      CHANNEL_2: 2,
    },
    AudioSamplingRate: {
      SAMPLE_RATE_8000: 8000,
      SAMPLE_RATE_11025: 11025,
      SAMPLE_RATE_12000: 12000,
      SAMPLE_RATE_16000: 16000,
      SAMPLE_RATE_22050: 22050,
      SAMPLE_RATE_24000: 24000,
      SAMPLE_RATE_32000: 32000,
      SAMPLE_RATE_44100: 44100,
      SAMPLE_RATE_48000: 48000,
      SAMPLE_RATE_64000: 64000,
      SAMPLE_RATE_96000: 96000,
    },
    AudioEncodingType: {
      ENCODING_TYPE_INVALID: -1,
      ENCODING_TYPE_RAW: 0,
    },
    AudioRendererRate: {
      RENDER_RATE_NORMAL: 0,
      RENDER_RATE_DOUBLE: 1,
      RENDER_RATE_HALF: 2,
    },
    SourceType: {
      SOURCE_TYPE_INVALID: -1,
      SOURCE_TYPE_MIC: 0,
      SOURCE_TYPE_VOICE_COMMUNICATION: 7,
    },
    AudioScene: {
      AUDIO_SCENE_DEFAULT: 0,
      AUDIO_SCENE_RINGING: 1,
      AUDIO_SCENE_PHONE_CALL: 2,
      AUDIO_SCENE_VOICE_CHAT: 3,
    },
    InterruptType: {
      INTERRUPT_TYPE_BEGIN: 1,
      INTERRUPT_TYPE_END: 2,
    },
    InterruptForceType: {
      INTERRUPT_FORCE: 0,
      INTERRUPT_SHARE: 1,
    },
    FocusType: {
      FOCUS_TYPE_RECORDING: 0,
    },
    InterruptMode: {
      SHARE_MODE: 0,
      INDEPENDENT_MODE: 1
    },
    getAudioManager: function () {
      console.warn("audio.getAudioManager interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      return AudioManagerMock;
    },
    createAudioCapturer: function (...args) {
      console.warn("audio.createAudioCapturer interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, AudioCapturerMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(AudioCapturerMock);
        })
      }
    },
    createAudioRenderer: function (...args) {
      console.warn("audio.createAudioRenderer interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, AudioRendererMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(AudioRendererMock);
        })
      }
    }
  }
  return audio;
}
