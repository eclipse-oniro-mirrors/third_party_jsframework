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

export function mockMultimediaCamera() {
  const Camera = {
    cameraId: '[PC preview] unknow pid',
    cameraPosition: '[PC preview] unknow cameraPosition',
    cameraType: '[PC preview] unknow cameraType',
    connectionType: '[PC preview] unknow connectionType'
  }
  const FlashMode = '[PC preview] unknow flashMode'
  const FocusMode = '[PC preview] unknow focusMode'
  const multimediaCameraMock = {
    getCameraManager: function (...args) {
      console.warn('camera.getCameraManager interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, CameraManager);
      } else {
        return new Promise((resolve) => {
        resolve(CameraManager);
        });
      }
    },
    createCaptureSession: function (...args) {
      console.warn('camera.createCaptureSession interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, CaptureSession);
      } else {
        return new Promise((resolve) => {
        resolve(CaptureSession);
        });
      }
    },
    createPreviewOutput: function (...args) {
      console.warn('camera.createPreviewOutput interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, PreviewOutput);
      } else {
        return new Promise((resolve) => {
        resolve(PreviewOutput);
        });
      }
    },
    createPhotoOutput: function (...args) {
      console.warn('camera.createPreviewOutput interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, PhotoOutput);
      } else {
        return new Promise((resolve) => {
        resolve(PhotoOutput);
        });
      }
    },
    createVideoOutput: function (...args) {
      console.warn('camera.createVideoOutput interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, VideoOutput);
      } else {
        return new Promise((resolve) => {
        resolve(VideoOutput);
        });
      }
    },
  }
  const CameraManager = {
    getCameras: function (...args) {
      console.warn('CameraManager.getCameras interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, [Camera]);
      } else {
        return new Promise((resolve) => {
        resolve([Camera]);
        });
      }
    },
    createCameraInput: function (...args) {
      console.warn('CameraManager.createCameraInput interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, CameraInput);
      } else {
        return new Promise((resolve) => {
        resolve(CameraInput);
        });
      }
    },
    on: function (...args) {
      console.warn('CameraManager.on interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
    }
  }
  const CameraInput = {
    getCameraId: function (...args) {
      console.warn('CameraInput.getCameraId interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock);
      } else {
        return new Promise((resolve) => {
        resolve(paramMock.paramStringMock);
        });
      }
    },
    hasFlash: function (...args) {
      console.warn('CameraInput.hasFlash interface mocked in the Previewer. How this interface works on the' +
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
    isFlashModeSupported: function (...args) {
      console.warn('CameraInput.isFlashModeSupported interface mocked in the Previewer. How this interface works on the' +
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
    getFlashMode: function (...args) {
      console.warn('CameraInput.getFlashMode interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, FlashMode);
      } else {
        return new Promise((resolve) => {
        resolve(FlashMode);
        });
      }
    },
    setFlashMode: function (...args) {
      console.warn('CameraInput.setFlashMode interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve) => {
        resolve();
        });
      }
    },
    isFocusModeSupported: function (...args) {
      console.warn('CameraInput.isFocusModeSupported interface mocked in the Previewer. How this interface works on the' +
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
    getFocusMode: function (...args) {
      console.warn('CameraInput.getFocusMode interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, FocusMode);
      } else {
        return new Promise((resolve) => {
        resolve(FocusMode);
        });
      }
    },
    setFocusMode: function (...args) {
      console.warn('CameraInput.setFocusMode interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve) => {
        resolve();
        });
      }
    },
    getZoomRatioRange: function (...args) {
      console.warn('CameraInput.getZoomRatioRange interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, [paramMock.paramNumberMock]);
      } else {
        return new Promise((resolve) => {
        resolve([paramMock.paramNumberMock]);
        });
      }
    },
    getZoomRatio: function (...args) {
      console.warn('CameraInput.getZoomRatioRange interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
      } else {
        return new Promise((resolve) => {
        resolve(paramMock.paramNumberMock);
        });
      }
    },
    setZoomRatio: function (...args) {
      console.warn('CameraInput.setZoomRatio interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve) => {
        resolve();
        });
      }
    },
    release: function (...args) {
      console.warn('CameraInput.release interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve) => {
        resolve();
        });
      }
    },
    on: function (...args) {
      console.warn('CameraInput.on interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
    }
  }
  const CaptureSession = {
    beginConfig: function (...args) {
      console.warn('CaptureSession.beginConfig interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve) => {
        resolve();
        });
      }
    },
    commitConfig: function (...args) {
      console.warn('CaptureSession.commitConfig interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve) => {
        resolve();
        });
      }
    },
    addInput: function (...args) {
      console.warn('CaptureSession.addInput interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve) => {
        resolve();
        });
      }
    },
    addOutput: function (...args) {
      console.warn('CaptureSession.addOutput interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve) => {
        resolve();
        });
      }
    },
    removeInput: function (...args) {
      console.warn('CaptureSession.removeInput interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve) => {
        resolve();
        });
      }
    },
    removeOutput: function (...args) {
      console.warn('CaptureSession.removeInput interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve) => {
        resolve();
        });
      }
    },
    start: function (...args) {
      console.warn('CaptureSession.start interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve) => {
        resolve();
        });
      }
    },
    stop: function (...args) {
      console.warn('CaptureSession.stop interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve) => {
        resolve();
        });
      }
    },
    release: function (...args) {
      console.warn('CaptureSession.release interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve) => {
        resolve();
        });
      }
    },
    on: function (...args) {
      console.warn('CaptureSession.on interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
    }
  }
  const PreviewOutput = {
    release: function (...args) {
      console.warn('PreviewOutput.release interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve) => {
        resolve();
        });
      }
    },
    on: function (...args) {
      console.warn('PreviewOutput.release interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
    },
  }
  const PhotoOutput = {
    capture: function (...args) {
      console.warn('PhotoOutput.capture interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve) => {
        resolve();
        });
      }
    },
    release: function (...args) {
      console.warn('PhotoOutput.release interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve) => {
        resolve();
        });
      }
    },
    on: function (...args) {
      console.warn('PhotoOutput.on interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
    }
  }
  const VideoOutput = {
    start: function (...args) {
      console.warn('VideoOutput.start interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve) => {
        resolve();
        });
      }
    },
    stop: function (...args) {
      console.warn('VideoOutput.stop interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve) => {
        resolve();
        });
      }
    },
    release: function (...args) {
      console.warn('VideoOutput.release interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve) => {
        resolve();
        });
      }
    },
    on: function (...args) {
      console.warn('VideoOutput.on interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
    }
  }
  return multimediaCameraMock
}