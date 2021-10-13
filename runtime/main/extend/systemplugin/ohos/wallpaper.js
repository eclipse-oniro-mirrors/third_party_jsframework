import {paramMock} from "../utils"
import {PixelMapMock} from "../multimedia"

export function mockWallpaper() {
    global.ohosplugin.wallpaper = {
        WallpaperType: {
            WALLPAPER_SYSTEM: '[PC preview] unknow WALLPAPER_SYSTEM',
            WALLPAPER_LOCKSCREEN: '[PC preview] unknow WALLPAPER_LOCKSCREEN'
        },
        getColors: function (...args) {
            console.warn("wallpaper.getColors interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length;
            let colors = new Array();
            colors.push(RgbaColorMock);
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, colors);
            } else {
                return new Promise((resolve, reject) => {
                    resolve(colors);
                })
            }
        },
        getId: function (...args) {
            console.warn("wallpaper.getId interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock)
            } else {
                return new Promise((resolve, reject) => {
                    resolve(paramMock.paramNumberMock);
                })
            }
        },
        getMinHeight: function (...args) {
            console.warn("wallpaper.getMinHeight interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock)
            } else {
                return new Promise((resolve, reject) => {
                    resolve(paramMock.paramNumberMock);
                })
            }
        },
        getMinWidth: function (...args) {
            console.warn("wallpaper.getMinWidth interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock)
            } else {
                return new Promise((resolve, reject) => {
                    resolve(paramMock.paramNumberMock);
                })
            }
        },
        isChangePermitted: function (...args) {
            console.warn("wallpaper.isChangePermitted interface mocked in the Previewer. How this interface works on the" +
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
        isOperationAllowed: function (...args) {
            console.warn("wallpaper.isOperationAllowed interface mocked in the Previewer. How this interface works on the" +
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
        reset: function (...args) {
            console.warn("wallpaper.reset interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock)
            } else {
                return new Promise((resolve, reject) => {
                    resolve();
                })
            }
        },
        setWallpaper: function (...args) {
            console.warn("wallpaper.setWallpaper interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock)
            } else {
                return new Promise((resolve, reject) => {
                    resolve();
                })
            }
        },
        getPixelMap: function (...args) {
            console.warn("wallpaper.getPixelMap interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, PixelMapMock)
            } else {
                return new Promise((resolve, reject) => {
                    resolve(PixelMapMock);
                })
            }
        },
        screenshotLiveWallpaper: function (...args) {
            console.warn("wallpaper.screenshotLiveWallpaper interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, PixelMapMock)
            } else {
                return new Promise((resolve, reject) => {
                    resolve(PixelMapMock);
                })
            }
        },
        on: function (...args) {
            console.warn("wallpaper.on interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.");
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                if (args[0] == 'colorChange') {
                    let colors = new Array();
                    colors.push(RgbaColorMock);
                    args[len - 1].call(this, colors, global.ohosplugin.wallpaper.WallpaperType.WALLPAPER_SYSTEM);
                }
            }
        },
        off: function (...args) {
            console.warn("wallpaper.off interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.");
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                if (args[0] == 'colorChange') {
                    let colors = new Array();
                    colors.push(RgbaColorMock);
                    args[len - 1].call(this, colors, global.ohosplugin.wallpaper.WallpaperType.WALLPAPER_SYSTEM);
                }
            }
        }
    }
    const RgbaColorMock = {
        red: '[PC preview] unknow red',
        green: '[PC preview] unknow green',
        blue: '[PC preview] unknow blue',
        alpha: '[PC preview] unknow alpha'
    }
}