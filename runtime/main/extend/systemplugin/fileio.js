import { paramMock } from "./utils"

export function mockFileio() {
  const StatMock = {
    dev: '[PC preview] unknow dev',
    ino: '[PC preview] unknow ino',
    mode: '[PC preview] unknow mode',
    nlink: '[PC preview] unknow nlink',
    uid: '[PC preview] unknow uid',
    gid: '[PC preview] unknow gid',
    rdev: '[PC preview] unknow rdev',
    size: '[PC preview] unknow size',
    blocks: '[PC preview] unknow blocks',
    atime: '[PC preview] unknow atime',
    mtime: '[PC preview] unknow mtime',
    ctime: '[PC preview] unknow ctime',
    isBlockDevice: function () {
      console.warn("Stat.isBlockDevice interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    isCharacterDevice: function () {
      console.warn("Stat.isCharacterDevice interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    isDirectory: function () {
      console.warn("Stat.isDirectory interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    isFIFO: function () {
      console.warn("Stat.isFIFO interface mocked in the Previewer. How this interface works on the Previewer may be" +
        " different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    isFile: function () {
      console.warn("Stat.isFile interface mocked in the Previewer. How this interface works on the Previewer may be" +
        " different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    isSocket: function () {
      console.warn("Stat.isSocket interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    isSymbolicLink: function () {
      console.warn("Stat.isSymbolicLink interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return paramMock.paramBooleanMock
    }
  };
  const DirentMock = {
    name: "[PC Preview]: unknow name",
    isBlockDevice: function () {
      console.warn("Dirent.isBlockDevice interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    isCharacterDevice: function () {
      console.warn("Dirent.isCharacterDevice interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    isDirectory: function () {
      console.warn("Dirent.isDirectory interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    isFIFO: function () {
      console.warn("Dirent.isFIFO interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    isFile: function () {
      console.warn("Dirent.isFile interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    isSocket: function () {
      console.warn("Dirent.isSocket interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    isSymbolicLink: function () {
      console.warn("Dirent.isSymbolicLink interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock
    }
  };
  const DirMock = {
    read: function (...args) {
      console.warn("Dir.read interface mocked in the Previewer. How this interface works on the Previewer may be" +
        " different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, DirentMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(DirentMock);
        })
      }
    },
    readSync: function (...args) {
      console.warn("Dir.readSync interface mocked in the Previewer. How this interface works on the Previewer may be" +
        " different from that on a real device.")
      return DirentMock
    },
    closeSync: function (...args) {
      console.warn("Dir.closeSync interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
    }
  };
  const ReadOutMock = {
    bytesRead: "[PC Preview]: unknow bytesRead",
    offset: "[PC Preview]: unknow offset",
    buffer: "[PC Preview]: unknow buffer"
  };
  global.systemplugin.fileio = {
    Dir: DirMock,
    Dirent: DirentMock,
    Stat: StatMock,
    ReadOut: ReadOutMock,
    hash: function (...args) {
      console.warn("fileio.hash interface mocked in the Previewer. How this interface works on the Previewer may be" +
        " different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramStringMock);
        })
      }
    },
    stat: function (...args) {
      console.warn("fileio.stat interface mocked in the Previewer. How this interface works on the Previewer may be" +
        " different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, StatMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(StatMock);
        })
      }
    },
    statSync: function (...args) {
      console.warn("fileio.statSync interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      return StatMock;
    },
    opendir: function (...args) {
      console.warn("fileio.opendir interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, DirMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(DirMock);
        })
      }
    },
    opendirSync: function (...args) {
      console.warn("fileio.opendirSync interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return DirMock;
    },
    access: function (...args) {
      console.warn("fileio.access interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    accessSync: function (...args) {
      console.warn("fileio.accessSync interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
    },
    closeSync: function (...args) {
      console.warn("fileio.closeSync interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return
    },
    copyFile: function (...args) {
      console.warn("fileio.copyFile interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    copyFileSync: function (...args) {
      console.warn("fileio.copyFileSync interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
    },
    mkdir: function (...args) {
      console.warn("fileio.mkdir interface mocked in the Previewer. How this interface works on the Previewer may be" +
        " different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    mkdirSync: function (...args) {
      console.warn("fileio.mkdirSync interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
    },
    openSync: function (...args) {
      console.warn("fileio.openSync interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      return paramMock.paramNumberMock;
    },
    read: function (...args) {
      console.warn("fileio.read interface mocked in the Previewer. How this interface works on the Previewer may be" +
        " different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, ReadOutMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(ReadOutMock);
        })
      }
    },
    readSync: function (...args) {
      console.warn("fileio.readSync interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      return paramMock.paramNumberMock;
    },
    rmdirSync: function (...args) {
      console.warn("fileio.rmdirSync interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
    },
    unlink: function (...args) {
      console.warn("fileio.unlink interface mocked in the Previewer. How this interface works on the Previewer may" +
        " be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        })
      }
    },
    unlinkSync: function (...args) {
      console.warn("fileio.unlinkSync interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
    },
    write: function (...args) {
      console.warn("fileio.write interface mocked in the Previewer. How this interface works on the Previewer may be" +
        " different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramNumberMock);
        })
      }
    },
    writeSync: function (...args) {
      console.warn("fileio.writeSync interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return paramMock.paramNumberMock;
    }
  }
}