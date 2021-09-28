import { paramMock } from "./utils"

const sizeMock = {
  height: "[PC Preview] unknow height",
  width: "[PC Preview] unknow width"
}
const imageInfoMock = {
  size: sizeMock,
  pixelFortmat: "[PC Preview] unknow pixelFortmat",
  colorSpace: "[PC Preview] unknow colorSpace",
  alphaType: "[PC Preview] unknow alphaType"
}
export const PixelMapMock = {
  isEditable: "[PC Preview]: unknow isEditable",
  readPixelsToBuffer: function (...args) {
    console.warn("PixelMap.readPixelsToBuffer interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
    const len = args.length
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock);
    } else {
      return new Promise((resolve, reject) => {
        resolve();
      })
    }
  },
  readPixels: function (...args) {
    console.warn("PixelMap.readPixels interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
    const len = args.length
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock);
    } else {
      return new Promise((resolve, reject) => {
        resolve();
      })
    }
  },
  writePixels: function (...args) {
    console.warn("PixelMap.writePixels interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
    const len = args.length
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock);
    } else {
      return new Promise((resolve, reject) => {
        resolve();
      })
    }
  },
  writeBufferToPixels: function (...args) {
    console.warn("PixelMap.writeBufferToPixels interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
    const len = args.length
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock);
    } else {
      return new Promise((resolve, reject) => {
        resolve();
      })
    }
  },
  getImageInfo: function (...args) {
    console.warn("PixelMap.getImageInfo interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
    const len = args.length
    if (len > 0 && typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock, imageInfoMock);
    } else {
      return new Promise((resolve, reject) => {
        resolve(imageInfoMock);
      })
    }
  },
  getBytesNumberPerRow: function (...args) {
    console.warn("PixelMap.getBytesNumberPerRow interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
    return paramMock.paramNumberMock
  },
  getPixelBytesNumber: function (...args) {
    console.warn("PixelMap.getPixelBytesNumber interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
    return paramMock.paramNumberMock
  },
  release: function (...args) {
    console.warn("PixelMap.release interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
    const len = args.length
    if (len > 0 && typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock);
    } else {
      return new Promise((resolve, reject) => {
        resolve();
      })
    }
  }
}

export function mockMultimediaImage() {
  global.systemplugin.multimedia = {}
  const imageSourceMock = {
    getImageInfo: function (...args) {
      console.warn("ImageSource.getImageInfo interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, imageInfoMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(imageInfoMock);
        })
      }
    },
    release: function (...args) {
      console.warn("ImageSource.release interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    createPixelMap: function (...args) {
      console.warn("ImageSource.createPixelMap interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, PixelMapMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(PixelMapMock);
        })
      }
    },
    getImageProperty: function (...args) {
      console.warn("ImageSource.getImageProperty interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramStringMock);
        })
      }
    },
    supportedFormats: "[PC Preview] unknow supportedFormats"
  }
  const imagePackerMock = {
    packing: function (...args) {
      console.warn("ImagePacker.packing interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramArrayMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramArrayMock);
        })
      }
    },
    release: function (...args) {
      console.warn("ImagePacker.release interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    supportedFormats: "[PC Preview] unknow supportedFormats"
  }
  const PixelMapFormatMock = {
    UNKNOWN: "[PC Preview]: unknow UNKNOWN",
    RGB_565: "[PC Preview]: unknow RGB_565",
    RGBA_8888: "[PC Preview]: unknow RGBA_8888",
  }
  const PropertyKeyMock = {
    BITS_PER_SAMPLE: "[PC Preview]: unknow BITS_PER_SAMPLE",
    ORIENTATION: "[PC Preview]: unknow ORIENTATION",
    IMAGE_LENGTH: "[PC Preview]: unknow IMAGE_LENGTH",
    GPS_LATITUDE: "[PC Preview]: unknow GPS_LATITUDE",
    GPS_LONGITUDE: "[PC Preview]: unknow GPS_LONGITUDE",
    GPS_LATITUDE_REF: "[PC Preview]: unknow GPS_LATITUDE_REF",
    GPS_LONGITUDE_REF: "[PC Preview]: unknow GPS_LONGITUDE_REF"
  }

  global.systemplugin.multimedia.image = {
    PixelMapFormat: PixelMapFormatMock,
    PropertyKey: PropertyKeyMock,
    createImageSource: function () {
      console.warn("multimedia.image.createImageSource interface mocked in the Previewer. How this interface works" +
        " on the Previewer may be different from that on a real device.")
      return imageSourceMock;
    },
    createImagePacker: function () {
      console.warn("multimedia.image.createImagePacker interface mocked in the Previewer. How this interface works" +
        " on the Previewer may be different from that on a real device.")
      return imagePackerMock;
    }
  }
}

export function mockMultimediaMedia() {
  const audioPlayerMock = {
    play: function () {
      console.warn("AudioPlayer.play interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return
    },
    pause: function () {
      console.warn("AudioPlayer.pause interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return
    },
    stop: function () {
      console.warn("AudioPlayer.stop interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return
    },
    seek: function (...args) {
      console.warn("AudioPlayer.seek interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return
    },
    setVolume: function (...args) {
      console.warn("AudioPlayer.setVolume interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return
    },
    release: function () {
      console.warn("AudioPlayer.release interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return
    },
    src: "[PC Preview] unknow src",
    loop: "[PC Preview] unknow loop",
    currentTime: "[PC Preview] unknow currentTime",
    duration: "[PC Preview] unknow duration",
    state: "[PC Preview] unknow state",
    on: function (...args) {
      console.warn("AudioPlayer.on interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        if (args[0] == 'error') {
          args[len - 1].call(this, paramMock.businessErrorMock);
        } else if (args[0] == 'timeUpdate') {
          args[len - 1].call(this, paramMock.paramNumberMock);
        } else {
          args[len - 1].call(this);
        }
      }
    }
  }
  const audioRecorderMock = {
    prepare: function () {
      console.warn("AudioRecorder.prepare interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    start: function () {
      console.warn("AudioRecorder.start interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
    },
    pause: function () {
      console.warn("AudioRecorder.pause interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
    },
    resume: function () {
      console.warn("AudioRecorder.resume interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    stop: function () {
      console.warn("AudioRecorder.stop interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
    },
    release: function () {
      console.warn("AudioRecorder.release interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    reset: function () {
      console.warn("AudioRecorder.reset interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
    },
    on: function (...args) {
      console.warn("AudioRecorder.on interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        if (args[0] == 'error') {
          args[len - 1].call(this, paramMock.businessErrorMock);
        } else {
          args[len - 1].call(this);
        }
      }
    }
  }
  global.systemplugin.multimedia.media = {
    createAudioPlayer: function () {
      console.warn("multimedia.media.createAudioPlayer interface mocked in the Previewer. How this interface works" +
        " on the Previewer may be different from that on a real device.")
      return audioPlayerMock;
    },
    createAudioRecorder: function () {
      console.warn("multimedia.media.createAudioRecorder interface mocked in the Previewer. How this interface works" +
        " on the Previewer may be different from that on a real device.")
      return audioRecorderMock;
    }
  }
}

export function mockMultimediaMedialibrary() {
  const FileAssetMock = {
     id: "[PC Preview] unknow id",
     uri: "[PC Preview] unknow uri",
     thumbnailUri: "[PC Preview] unknow thumbnailUri",
     mimeType: "[PC Preview] unknow mimeType",
     mediaType: "[PC Preview] unknow mediaType",
     displayName: "[PC Preview] unknow displayName",
     title: "[PC Preview] unknow title",
     size: "[PC Preview] unknow size",
     albumId: "[PC Preview] unknow albumId",
     albumName: "[PC Preview] unknow albumName",
     dateAdded: "[PC Preview] unknow dateAdded",
     dateModified: "[PC Preview] unknow dateMidified",
     dateTaken: "[PC Preview] unknow dateTaken",
     orientation: "[PC Preview] unknow orientation",
     width: "[PC Preview] unknow width",
     height: "[PC Preview] unknow height",
     extendedValues: "[PC Preview] unknow extendedValues",
  }
  const MediaLibraryMock = {
    storeMediaAsset: function (...args) {
      console.warn("MediaLibrary.storeMediaAsset interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramStringMock);
        })
      }
    },
    startImagePreview: function (...args) {
      console.warn("MediaLibrary.startImagePreview interface mocked in the Previewer. How this interface works on" +
        " the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    startMediaSelect: function (...args) {
      console.warn("MediaLibrary.startMediaSelect interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramArrayMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramArrayMock);
        })
      }
    },
    getFileAssets: function (...args) {
      console.warn("MediaLibrary.getFileAssets interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      var isCallBack = typeof args[len - 1] === 'function'
      return isCallBack ? args[len - 1].call(this, paramMock.businessErrorMock, FetchFileResultMock)
      : new Promise((resolve, reject) => {
          resolve(FetchFileResultMock);
        })
    },
    getAlbums: function (...args) {
      console.warn("MediaLibrary.getAlbums interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      var albumsMock = new Array(AlbumMock)
      var isCallBack = typeof args[len - 1] === 'function'
      return isCallBack ? args[len - 1].call(this, paramMock.businessErrorMock, albumsMock)
      : new Promise((resolve, reject) => {
          resolve(albumsMock);
        })
    },
    on: function (...args) {
      console.warn("MediaLibrary.on interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return
    },
    off: function (...args) {
      console.warn("MediaLibrary.off interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return
    }
  }
  const FetchFileResultMock = {
    getCount: function (...args) {
      console.warn("FetchFileResult.getCount interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramNumberMock
    },
    isAfterLast: function (...args) {
      console.warn("FetchFileResult.isAfterLast interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    close: function (...args) {
      console.warn("FetchFileResult.close interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return
    },
    getFirstObject: function (...args) {
      console.warn("FetchFileResult.getFirstObject interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      var isCallBack = typeof args[len - 1] === 'function'
      return isCallBack ? args[len - 1].call(this, paramMock.businessErrorMock, FileAssetMock)
      : new Promise((resolve, reject) => {
          resolve(FileAssetMock);
        })
    },
    getLastObject: function (...args) {
      console.warn("FetchFileResult.getLastObject interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      var isCallBack = typeof args[len - 1] === 'function'
      return isCallBack ? args[len - 1].call(this, paramMock.businessErrorMock, FileAssetMock)
      : new Promise((resolve, reject) => {
          resolve(FileAssetMock);
        })
    },
    getNextObject: function (...args) {
      console.warn("FetchFileResult.getNextObject interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      var isCallBack = typeof args[len - 1] === 'function'
      return isCallBack ? args[len - 1].call(this, paramMock.businessErrorMock, FileAssetMock)
      : new Promise((resolve, reject) => {
          resolve(FileAssetMock);
        })
    },
    getPositionObject: function (...args) {
      console.warn("FetchFileResult.getPositionObject interface mocked in the Previewer. How this interface works on" +
        " the Previewer may be different from that on a real device.")
      const len = args.length
      var isCallBack = typeof args[len - 1] === 'function'
      return isCallBack ? args[len - 1].call(this, paramMock.businessErrorMock, FileAssetMock)
      : new Promise((resolve, reject) => {
          resolve(FileAssetMock);
        })
    },
    getAllObject: function (...args) {
      console.warn("FetchFileResult.getAllObject interface mocked in the Previewer. How this interface works on" +
        " the Previewer may be different from that on a real device.")
      const len = args.length
      var fileAssets = new Array(FileAssetMock)
      var isCallBack = typeof args[len - 1] === 'function'
      return isCallBack ? args[len - 1].call(this, paramMock.businessErrorMock, fileAssets)
      : new Promise((resolve, reject) => {
          resolve(fileAssets);
        })
    }
  }
  const AlbumMock = {
    albumId: "[PC Preview] unknow albumId",
    albumName: "[PC Preview] unknow albumName",
    path: "[PC Preview] unknow path",
    dateModified: "[PC Preview] unknow dateModified",
    getFileAssets: function (...args) {
      console.warn("Album.getFileAssets interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      var isCallBack = typeof args[len - 1] === 'function'
      return isCallBack ? args[len - 1].call(this, paramMock.businessErrorMock, FetchFileResultMock)
           : new Promise((resolve, reject) => {
               resolve(FetchFileResultMock);
             })
    }
  }
  const AVMetadataHelperMock = {
    setSource: function (...args) {
      console.warn("AVMetadataHelper.setSource interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      var isCallBack = typeof args[len - 1] === 'function'
      return isCallBack ? args[len - 1].call(this, paramMock.businessErrorMock)
           : new Promise((resolve, reject) => {
               resolve();
             })
    },
    fetchVideoPixelMapByTime: function (...args) {
      console.warn("AVMetadataHelper.fetchVideoPixelMapByTime interface mocked in the Previewer. How this interface" +
        " works on the Previewer may be different from that on a real device.")
      const len = args.length
      var isCallBack = typeof args[len - 1] === 'function'
      return isCallBack ? args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramObjectMock)
           : new Promise((resolve, reject) => {
               resolve(paramMock.paramObjectMock);
             })
    },
    resolveMetadata: function (...args) {
      console.warn("AVMetadataHelper.resolveMetadata interface mocked in the Previewer. How this interface" +
        " works on the Previewer may be different from that on a real device.")
      const len = args.length
      var isCallBack = typeof args[len - 1] === 'function'
      return isCallBack ? args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock)
           : new Promise((resolve, reject) => {
               resolve(paramMock.paramStringMock);
             })
    },
    release: function (...args) {
      console.warn("AVMetadataHelper.release interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      var isCallBack = typeof args[len - 1] === 'function'
      return isCallBack ? args[len - 1].call(this, paramMock.businessErrorMock)
           : new Promise((resolve, reject) => {
               resolve();
             })
    }
  }
  global.systemplugin.multimedia.mediaLibrary = {
    getMediaLibrary: function () {
      console.warn("multimedia.mediaLibrary.getMediaLibrary interface mocked in the Previewer. How this interface" +
        " works on the Previewer may be different from that on a real device.")
      return MediaLibraryMock;
    },
    createAVMetadataHelper: function () {
      console.warn("multimedia.mediaLibrary.createAVMetadataHelper interface mocked in the Previewer. How this" +
        " interface works on the Previewer may be different from that on a real device.")
      return AVMetadataHelperMock;
    }
  }
}
