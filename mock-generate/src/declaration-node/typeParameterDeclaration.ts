import { Node, SourceFile, TypeParameterDeclaration } from 'typescript';

/**
 * get generic type node info
 * @param node
 * @param sourceFile
 * @returns
 */
export function getTypeParameterDeclaration(node: Node, sourceFile: SourceFile): TypeParameterEntity {
  const typeParameterNode = node as TypeParameterDeclaration;
  const typeParameterName = typeParameterNode.name.escapedText.toString();
  let constraitValue = '';
  let constraintDefaultValue = '';
  const constraint = typeParameterNode.constraint;
  if (constraint !== undefined) {
    constraitValue = sourceFile.text.substring(constraint.pos, constraint.end).trimStart().trimEnd();
  }

  const defaultValue = typeParameterNode.default;
  if (defaultValue !== undefined) {
    constraintDefaultValue = sourceFile.text.substring(defaultValue.pos, defaultValue.end).trimStart().trimEnd();
  }

  return {
    typeParameterName: typeParameterName,
    constraitValue: constraitValue,
    constraintDefaultValue: constraintDefaultValue
  };
}

export interface TypeParameterEntity {
  typeParameterName: string,
  constraitValue: string,
  constraintDefaultValue: string
}
