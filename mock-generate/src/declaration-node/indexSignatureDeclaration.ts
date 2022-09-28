import { IndexSignatureDeclaration, SourceFile } from 'typescript';

/**
 * get index signature info
 * @param indexSignature
 * @param sourceFile
 * @returns
 */
export function getIndexSignatureDeclaration(indexSignature: IndexSignatureDeclaration, sourceFile: SourceFile): IndexSignatureEntity {
  return {
    indexSignatureKey: 'key',
    indexSignatureKind: indexSignature.type.kind,
    indexSignatureTypeName: sourceFile.text.substring(indexSignature.type.pos, indexSignature.type.end).trimStart().trimEnd()
  };
}

export interface IndexSignatureEntity {
  indexSignatureKey: string,
  indexSignatureKind: number,
  indexSignatureTypeName: string
}
