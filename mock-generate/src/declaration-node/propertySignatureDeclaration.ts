import { PropertySignature, SourceFile } from 'typescript';
import { getPropertyName } from '../common/commonUtils';

/**
 * get interface property signature info
 * @param node
 * @param sourceFile
 * @returns
 */
export function getPropertySignatureDeclaration(node: PropertySignature, sourceFile: SourceFile): PropertySignatureEntity {
  let propertyName = '';
  let propertyTypeName = '';
  let kind = -1;

  propertyName = getPropertyName(node.name, sourceFile);
  const propertyType = node.type;
  const modifiers: Array<string> = [];
  if (node.modifiers !== undefined) {
    node.modifiers.forEach(value => {
      modifiers.push(sourceFile.text.substring(value.pos, value.end));
    });
  }

  if (propertyType !== undefined) {
    propertyTypeName = sourceFile.text.substring(propertyType.pos, propertyType.end).trimStart().trimEnd();
    kind = propertyType.kind;
  }

  return {
    modifiers: modifiers,
    propertyName: propertyName,
    propertyTypeName: propertyTypeName,
    kind: kind
  };
}

export interface PropertySignatureEntity {
  modifiers: Array<string>,
  propertyName: string,
  propertyTypeName: string,
  kind: number
}
