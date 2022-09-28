import { isComputedPropertyName, MethodDeclaration, Node, SourceFile } from 'typescript';
import {
  getFunctionAndMethodReturnInfo, getModifiers, getParameter,
  getPropertyName, ParameterEntity, ReturnTypeEntity
} from '../common/commonUtils';

/**
 * get method info
 * @param node
 * @param sourceFile
 * @returns
 */
export function getMethodDeclaration(node: Node, sourceFile: SourceFile): MethodEntity {
  const methodNode = node as MethodDeclaration;
  const functionName = {
    name: '',
    expressionKind: -1,
    kind: -1
  };

  const args: Array<ParameterEntity> = [];
  let modifiers: Array<number> = [];

  if (methodNode.modifiers !== undefined) {
    modifiers = getModifiers(methodNode.modifiers);
  }

  const returnType = getFunctionAndMethodReturnInfo(methodNode, sourceFile);
  functionName.name = getPropertyName(methodNode.name, sourceFile);
  if (isComputedPropertyName(methodNode.name)) {
    functionName.expressionKind = methodNode.name.expression.kind;
  }

  functionName.kind = methodNode.name.kind;

  methodNode.parameters.forEach(value => {
    args.push(getParameter(value, sourceFile));
  });

  return {
    modifiers: modifiers,
    functionName: functionName,
    returnType: returnType,
    args: args
  };
}

export interface StaticMethodEntity {
  className: string,
  methodEntity: MethodEntity
}

export interface MethodEntity {
  modifiers: Array<number>,
  functionName: FunctionNameEntity,
  returnType: ReturnTypeEntity,
  args: Array<ParameterEntity>
}

export interface FunctionNameEntity {
  name: string,
  expressionKind: number,
  kind: number
}
