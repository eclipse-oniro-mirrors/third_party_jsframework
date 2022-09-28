import { MethodSignature, Node, SourceFile } from 'typescript';
import {
  getFunctionAndMethodReturnInfo, getParameter, getPropertyName,
  ParameterEntity, ReturnTypeEntity
} from '../common/commonUtils';

/**
 * get interface signature info
 * @param node
 * @param sourceFile
 * @returns
 */
export function getMethodSignatureDeclaration(node: Node, sourceFile: SourceFile): MethodSignatureEntity {
  const methodSignatureNode = node as MethodSignature;
  let functionName = '';
  const args: Array<ParameterEntity> = [];
  const returnType = getFunctionAndMethodReturnInfo(methodSignatureNode, sourceFile);
  functionName = getPropertyName(methodSignatureNode.name, sourceFile);
  methodSignatureNode.parameters.forEach(value => {
    args.push(getParameter(value, sourceFile));
  });

  return {
    functionName: functionName,
    returnType: returnType,
    args: args
  };
}

export interface MethodSignatureEntity {
  functionName: string,
  returnType: ReturnTypeEntity,
  args: Array<ParameterEntity>
}
