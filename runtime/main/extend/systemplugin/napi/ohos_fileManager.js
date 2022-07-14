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

export function mockFileManager() {
  const FileInfoMock = {
    name: '[PC preview] unknow name',
    path: '[PC preview] unknow path',
    type: '[PC preview] unknow type',
    size: '[PC preview] unknow size', 
    addedTime: '[PC preview] unknow addedTime', 
    modifiedTime: '[PC preview] unknow modifiedTime'
  };
  const DevInfoMock  = {
    name: '[PC preview] unknow name' 
  };
  const filemanager = {
    FileInfo: FileInfoMock,
    DevInfo: DevInfoMock,
    getRoot: function (...args) {
      console.warn("filemanager.getRoot interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, Array(FileInfoMock))
      } else {
        return new Promise((resolve, reject) => {
          resolve(Array(FileInfoMock));
        })
      }
    },
    listFile: function (...args) {
      console.warn("filemanager.listFile interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, Array(FileInfoMock))
      } else {
        return new Promise((resolve, reject) => {
          resolve(Array(FileInfoMock));
        })
      }
    },
    createFile: function (...args) {
      console.warn("filemanager.createFile interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramStringMock);
        })
      }
    }
  }
  return filemanager;
}
