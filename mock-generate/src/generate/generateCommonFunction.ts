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

import type { SourceFile } from 'typescript';
import { SyntaxKind } from 'typescript';
import type { FunctionEntity } from '../declaration-node/functionDeclaration';
import { getCallbackStatement, getReturnStatement, getWarnConsole, getReturnData } from './generateCommonUtil';

/**
 * generate function
 * @param rootName
 * @param functionArray
 * @param sourceFile
 * @returns
 */
export function generateCommonFunction(rootName: string, functionArray: Array<FunctionEntity>, sourceFile: SourceFile, mockApi: string): string {
  let functionBody = '';
  const functionEntity = functionArray[0];
  functionBody = `${functionEntity.functionName}: function(...args) {`;
  functionBody += getWarnConsole(rootName, functionEntity.functionName);

  // The callback function cannot be executed immediately, otherwise an error will be reported
  if (sourceFile.fileName.includes('@ohos.events.emitter.d.ts')) {
    functionBody += '},';
    return functionBody;
  }

  if (functionArray.length === 1) {
    const args = functionEntity.args;
    const len = args.length;
    if (args.length > 0 && args[len - 1].paramName.toLowerCase().includes('callback')) {
      functionBody += getCallbackStatement(mockApi, args[len - 1]?.paramTypeString);
    }
    if (functionEntity.returnType.returnKind !== SyntaxKind.VoidKeyword) {
      if (rootName === 'featureAbility' && functionEntity.returnType.returnKindName === 'Context') {
        functionBody += 'return _Context;';
      } else if (rootName === 'inputMethod' && functionEntity.returnType.returnKindName === 'InputMethodSubtype') {
        functionBody += 'return mockInputMethodSubtype().InputMethodSubtype;';
      } else {
        functionBody += getReturnStatement(functionEntity.returnType, sourceFile);
      }
    }
  } else {
    const argSet: Set<string> = new Set<string>();
    let argParamsSet: string = '';
    const returnSet: Set<string> = new Set<string>();
    let isCallBack = false;
    functionArray.forEach(value => {
      returnSet.add(value.returnType.returnKindName);
      value.args.forEach(arg => {
        argSet.add(arg.paramName);
        if (arg.paramName.toLowerCase().includes('callback')) {
          isCallBack = true;
          if (arg.paramTypeString) {
            argParamsSet = arg.paramTypeString;
          }
        }
      });
    });
    if (isCallBack) {
      functionBody += getCallbackStatement(mockApi, argParamsSet);
    }
    let isReturnPromise = false;
    let promiseReturnValue = '';
    let otherReturnValue = '';
    returnSet.forEach(value => {
      if (value.includes('Promise<')) {
        isReturnPromise = true;
        promiseReturnValue = value;
      } else {
        if (!otherReturnValue) {
          otherReturnValue = value;
        }
      }
    });
    if (isReturnPromise) {
      if (promiseReturnValue) {
        let returnType = null;
        functionArray.forEach(value => {
          if (value.returnType.returnKindName === promiseReturnValue) {
            returnType = value.returnType;
          }
        });
        functionBody += getReturnData(isCallBack, isReturnPromise, returnType, sourceFile, mockApi);
      } else {
        if (isCallBack) {
          functionBody += `else {
              return new Promise((resolve, reject) => {
                resolve('[PC Preview] unknow boolean');
              })
            }`;
        } else {
          functionBody += `
              return new Promise((resolve, reject) => {
                resolve('[PC Preview] unknow boolean');
              })
            `;
        }
      }
    } else if (otherReturnValue) {
      let returnType = null;
      functionArray.forEach(value => {
        if (value.returnType.returnKindName === otherReturnValue) {
          returnType = value.returnType;
        }
      });
      functionBody += getReturnData(isCallBack, isReturnPromise, returnType, sourceFile, mockApi);
    }
  }
  functionBody += '},';
  return functionBody;
}
