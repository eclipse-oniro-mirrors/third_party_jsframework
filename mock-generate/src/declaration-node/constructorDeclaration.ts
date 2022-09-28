import { ConstructorDeclaration, isIdentifier, Node, SourceFile } from 'typescript';

/**
 * get constructors info
 * @param node
 * @param sourceFile
 * @returns
 */
export function getConstructorDeclaration(node: Node, sourceFile: SourceFile): Array<ConstructorEntity> {
  const constructorNode = node as ConstructorDeclaration;
  const constructors: Array<ConstructorEntity> = [];
  constructorNode.parameters.forEach(value => {
    const paramElement = value.name;
    let name = '';
    let typeName = '';
    let typeKind = -1;
    if (isIdentifier(paramElement)) {
      name = paramElement.escapedText.toString();
    } else {
      name = sourceFile.text.substring(paramElement.pos, paramElement.end).trimStart().trimEnd();
    }

    const paramTypeElement = value.type;
    if (paramTypeElement !== undefined) {
      typeName = sourceFile.text.substring(paramTypeElement.pos, paramTypeElement.end).trimStart().trimEnd();
      typeKind = paramTypeElement.kind;
    }

    constructors.push(
      {
        name: name,
        typeName: typeName,
        typeKind: typeKind
      }
    );
  });
  return constructors;
}

export interface ConstructorEntity {
  name: string,
  typeName: string,
  typeKind: number
}
