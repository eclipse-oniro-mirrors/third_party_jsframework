import {
  InterfaceDeclaration, isCallSignatureDeclaration, isConstructSignatureDeclaration,
  isHeritageClause, isIndexSignatureDeclaration, isMethodSignature, isPropertySignature,
  isTypeParameterDeclaration, SourceFile
} from 'typescript';
import { getExportKeyword } from '../common/commonUtils';
import { CallSignatureEntity, getCallSignatureDeclaration } from './callSignatureDeclaration';
import { ConstructorEntity, getConstructorDeclaration } from './constructorDeclaration';
import { getHeritageClauseDeclaration, HeritageClauseEntity } from './heritageClauseDeclaration';
import { getIndexSignatureDeclaration, IndexSignatureEntity } from './indexSignatureDeclaration';
import { getMethodSignatureDeclaration, MethodSignatureEntity } from './methodSignatureDeclaration';
import { getPropertySignatureDeclaration, PropertySignatureEntity } from './propertySignatureDeclaration';
import { getTypeParameterDeclaration, TypeParameterEntity } from './typeParameterDeclaration';

/**
 * get interface info
 * @param interfaceNode
 * @param sourceFile
 * @returns
 */
export function getInterfaceDeclaration(interfaceNode: InterfaceDeclaration, sourceFile: SourceFile): InterfaceEntity {
  let exportModifiers: Array<number> = [];
  if (interfaceNode.modifiers !== undefined) {
    exportModifiers = getExportKeyword(interfaceNode.modifiers);
  }

  const interfaceName = interfaceNode.name.escapedText.toString();
  const heritageClauses: Array<HeritageClauseEntity> = [];
  const interfaceConstructors: Array<Array<ConstructorEntity>> = [];
  const interfaceMethodSignature: Map<string, Array<MethodSignatureEntity>> = new Map<string, Array<MethodSignatureEntity>>();
  const interfacePropertySignatures: Array<PropertySignatureEntity> = [];
  const callSignature: Array<CallSignatureEntity> = [];
  const typeParameters: Array<TypeParameterEntity> = [];
  const indexSignature: Array<IndexSignatureEntity> = [];

  interfaceNode.members.forEach(value => {
    if (isPropertySignature(value)) {
      interfacePropertySignatures.push(getPropertySignatureDeclaration(value, sourceFile));
    } else if (isMethodSignature(value)) {
      const methodSignature = getMethodSignatureDeclaration(value, sourceFile);
      if (interfaceMethodSignature.get(methodSignature.functionName) !== undefined) {
        interfaceMethodSignature.get(methodSignature.functionName)?.push(methodSignature);
      } else {
        const methodSignatureArray: Array<MethodSignatureEntity> = [];
        methodSignatureArray.push(methodSignature);
        interfaceMethodSignature.set(methodSignature.functionName, methodSignatureArray);
      }
    } else if (isHeritageClause(value)) {
      heritageClauses.push(getHeritageClauseDeclaration(value, sourceFile));
    } else if (isConstructSignatureDeclaration(value)) {
      interfaceConstructors.push(getConstructorDeclaration(value, sourceFile));
    } else if (isCallSignatureDeclaration(value)) {
      callSignature.push(getCallSignatureDeclaration(value, sourceFile));
    } else if (isTypeParameterDeclaration(value)) {
      typeParameters.push(getTypeParameterDeclaration(value, sourceFile));
    } else if (isIndexSignatureDeclaration(value)) {
      indexSignature.push(getIndexSignatureDeclaration(value, sourceFile));
    } else {
      console.log('--------------------------- uncaught interface type start -----------------------');
      console.log('interfaceName: ' + interfaceName);
      console.log(value);
      console.log('--------------------------- uncaught interface type end -----------------------');
    }
  });

  return {
    interfaceName: interfaceName,
    typeParameters: typeParameters,
    heritageClauses: heritageClauses,
    interfaceConstructors: interfaceConstructors,
    interfaceMethodSignature: interfaceMethodSignature,
    interfacePropertySignatures: interfacePropertySignatures,
    callSignatures: callSignature,
    exportModifiers: exportModifiers,
    indexSignature: indexSignature
  };
}

export interface InterfaceEntity {
  interfaceName: string,
  typeParameters: Array<TypeParameterEntity>,
  heritageClauses: Array<HeritageClauseEntity>,
  interfaceConstructors: Array<Array<ConstructorEntity>>,
  interfaceMethodSignature: Map<string, Array<MethodSignatureEntity>>,
  interfacePropertySignatures: Array<PropertySignatureEntity>,
  callSignatures: Array<CallSignatureEntity>,
  exportModifiers: Array<number>,
  indexSignature: Array<IndexSignatureEntity>
}
