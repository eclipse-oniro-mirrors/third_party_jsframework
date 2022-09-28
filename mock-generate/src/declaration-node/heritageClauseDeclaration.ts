import { HeritageClause, Node, SourceFile, SyntaxKind } from 'typescript';

/**
 * get heritage info
 * @param node
 * @param sourceFile
 * @returns
 */
export function getHeritageClauseDeclaration(node: Node, sourceFile: SourceFile): HeritageClauseEntity {
  const HeritageClauseNode = node as HeritageClause;
  const clauseToken = HeritageClauseNode.token === SyntaxKind.ExtendsKeyword ? 'extends' : 'implements';
  const types: Array<string> = [];

  HeritageClauseNode.types.forEach(value => {
    types.push(sourceFile.text.substring(value.pos, value.end).trimStart().trimEnd());
  });

  return {
    clauseToken: clauseToken,
    types: types
  };
}

export interface HeritageClauseEntity {
  clauseToken: string,
  types: Array<string>
}
