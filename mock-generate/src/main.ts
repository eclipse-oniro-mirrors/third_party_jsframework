/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

import fs from 'fs';
import path from 'path';
import os from 'os';
import { createSourceFile, ScriptTarget } from 'typescript';
import { collectAllFileName, getAllClassDeclaration, dtsFileList, getOhosInterfacesDir, getApiInputPath } from './common/commonUtils';
import { getSourceFileAssembly } from './declaration-node/sourceFileElementsAssemply';
import { generateEntry } from './generate/generateEntry';
import { generateIndex } from './generate/generateIndex';
import { generateSourceFileElements } from './generate/generateMockJsFile';
import { generateSystemIndex } from './generate/generateSystemIndex';

/**
 * get all api .d.ts file path
 * @param dir
 * @returns
 */
function getAllDtsFile(dir: string): Array<string> {
  const arr = fs.readdirSync(dir);
  if (!dir.toString().includes('node_modules') && !dir.toString().includes(path.join('@internal', 'component'))) {
    arr.forEach(value => {
      const fullPath = path.join(dir, value);
      const stats = fs.statSync(fullPath);
      if (stats.isDirectory()) {
        getAllDtsFile(fullPath);
      } else {
        dtsFileList.push(fullPath);
      }
    });
  }
  return dtsFileList;
}

/**
 * delete the old mock file befor generate new mock file
 * @param outDir
 */
function deleteOldMockJsFile(outDir: string): void {
  const arr = fs.readdirSync(outDir);
  arr.forEach(value => {
    const currPath = path.join(outDir, value);
    const stas = fs.statSync(currPath);
    if (stas.isDirectory()) {
      deleteOldMockJsFile(currPath);
    } else {
      fs.unlink(currPath, function(err) {
        if (err) {
          console.log(err);
        }
      });
    }
  });
}

/**
 * mkdir
 * @param dirname
 * @returns
 */
function mkdirsSync(dirname): boolean {
  if (fs.existsSync(dirname)) {
    return true;
  } else {
    if (mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      return true;
    }
  }
  return false;
}

function main(): void {
  const dtsDir = getApiInputPath();
  const outMockJsFileDir = path.join(__dirname, '../../runtime/main/extend/systemplugin');
  // deleteOldMockJsFile(outMockJsFileDir);
  getAllDtsFile(dtsDir);

  dtsFileList.forEach(value => {
    collectAllFileName(value);
    if (value.endsWith('.d.ts') || value.endsWith('.d.ets')) {
      const code = fs.readFileSync(value);
      const sourceFile = createSourceFile(value, code.toString(), ScriptTarget.Latest);
      getAllClassDeclaration(sourceFile);
    }
  });

  let index = 0;
  while (index < dtsFileList.length) {
    const value = dtsFileList[index];
    index++;

    if (!value.endsWith('.d.ts') && !value.endsWith('.d.ets')) {
      continue;
    }

    const code = fs.readFileSync(value);
    const sourceFile = createSourceFile(value, code.toString(), ScriptTarget.Latest);
    let fileName: string;
    if (value.endsWith('.d.ts')) {
      fileName = path.basename(value, '.d.ts');
    } else if (value.endsWith('.d.ets')) {
      fileName = path.basename(value, '.d.ets');
    } else {
      continue;
    }
    let outputFileName = '';
    if (fileName.includes('@')) {
      outputFileName = fileName.split('@')[1].replace(/\./g, '_');
    } else {
      outputFileName = fileName;
    }

    let tmpOutputMockJsFileDir = outMockJsFileDir;
    if (!outputFileName.startsWith('system_')) {
      tmpOutputMockJsFileDir = path.join(outMockJsFileDir, 'napi');
    }

    if (value.startsWith(getOhosInterfacesDir()) && !dtsDir.startsWith(getOhosInterfacesDir())) {
      tmpOutputMockJsFileDir = path.join(tmpOutputMockJsFileDir, '@ohos');
    }

    let dirName = '';
    dirName = path.join(tmpOutputMockJsFileDir, path.dirname(value).split(`${path.sep}api`)[1]);
    if (!fs.existsSync(dirName)) {
      mkdirsSync(dirName);
    }
    const sourceFileEntity = getSourceFileAssembly(sourceFile, fileName);
    const filePath = path.join(dirName, outputFileName + '.js');
    fs.writeFileSync(filePath, '');
    fs.appendFileSync(path.join(filePath), generateSourceFileElements('', sourceFileEntity, sourceFile, outputFileName));
  }

  if (!fs.existsSync(path.join(outMockJsFileDir, 'napi'))) {
    mkdirsSync(path.join(outMockJsFileDir, 'napi'));
  }
  fs.writeFileSync(path.join(outMockJsFileDir, 'napi', 'index.js'), generateIndex());
  fs.writeFileSync(path.join(outMockJsFileDir, 'index.js'), generateSystemIndex());
  fs.writeFileSync(path.join(outMockJsFileDir, 'entry.js'), generateEntry());
}

main();
