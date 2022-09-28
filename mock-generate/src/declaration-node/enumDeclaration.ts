import { EnumDeclaration, SourceFile } from 'typescript';
import { getExportKeyword, getPropertyName } from '../common/commonUtils';

/**
 * get enum info
 * @param node
 * @param sourceFile
 * @returns
 */
export function getEnumDeclaration(node: EnumDeclaration, sourceFile: SourceFile): EnumEntity {
  const enumName = node.name.escapedText.toString();
  const enumMembers: Array<MemberEntity> = [];
  let exportModifiers: Array<number> = [];

  if (node.modifiers !== undefined) {
    exportModifiers = getExportKeyword(node.modifiers);
  }

  node.members.forEach(value => {
    const enumValueName = getPropertyName(value.name, sourceFile);
    let enumValue = '';
    if (value.initializer !== undefined) {
      enumValue = sourceFile.text.substring(value.initializer.pos, value.initializer.end).trimEnd().trimStart();
    }
    const enumKind = value.initializer?.kind === undefined ? -1 : value.initializer?.kind;
    enumMembers.push({ enumValueName: enumValueName, enumValue: enumValue, enumKind: enumKind });
  });

  return {
    enumName: enumName,
    enumMembers: enumMembers,
    exportModifiers: exportModifiers
  };
}

export interface EnumEntity {
  enumName: string,
  enumMembers: Array<MemberEntity>,
  exportModifiers: Array<number>
}

export interface MemberEntity {
  enumValueName: string,
  enumValue: string,
  enumKind: number,
}
