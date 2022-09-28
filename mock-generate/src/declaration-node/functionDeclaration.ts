import { FunctionDeclaration, Node, SourceFile } from 'typescript';
import { getFunctionAndMethodReturnInfo, getParameter, ParameterEntity, ReturnTypeEntity } from '../common/commonUtils';

/**
 * get function info
 * @param node
 * @param sourceFile
 * @returns
 */
export function getFunctionDeclaration(node: Node, sourceFile: SourceFile): FunctionEntity {
  const funcNode = node as FunctionDeclaration;
  let functionName = '';
  const args: Array<ParameterEntity> = [];
  const returnType = getFunctionAndMethodReturnInfo(funcNode, sourceFile);
  functionName = funcNode.name?.escapedText === undefined ? 'undefind' : funcNode.name.escapedText.toString();
  funcNode.parameters.forEach(value => {
    args.push(getParameter(value, sourceFile));
  });

  return {
    functionName: functionName,
    returnType: returnType,
    args: args
  };
}

export interface FunctionEntity {
  functionName: string,
  returnType: ReturnTypeEntity,
  args: Array<ParameterEntity>
}
