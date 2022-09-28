import { CallSignatureDeclaration, Node, SourceFile } from 'typescript';
import {
  getFunctionAndMethodReturnInfo, getParameter, getPropertyName,
  ParameterEntity, ReturnTypeEntity
} from '../common/commonUtils';

/**
 * get nameless function info
 * @param node
 * @param sourceFile
 * @returns
 */
export function getCallSignatureDeclaration(node: Node, sourceFile: SourceFile): CallSignatureEntity {
  const callSignatureNode = node as CallSignatureDeclaration;
  let functionName = '';
  const args: Array<ParameterEntity> = [];
  const returnType = getFunctionAndMethodReturnInfo(callSignatureNode, sourceFile);
  if (callSignatureNode.name !== undefined) {
    functionName = getPropertyName(callSignatureNode.name, sourceFile);
  }

  callSignatureNode.parameters.forEach(value => {
    args.push(getParameter(value, sourceFile));
  });

  return {
    functionName: functionName,
    returnType: returnType,
    args: args
  };
}

export interface CallSignatureEntity {
  functionName: string,
  returnType: ReturnTypeEntity,
  args: Array<ParameterEntity>
}
