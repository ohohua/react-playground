export type FileName = `${string}.${string}`;

export function fileName2Language(fileName: FileName) {
  const extension = fileName.split('.').pop() || '';
  if (['js', 'jsx'].includes(extension)) {
    return 'javascript';
  }
  if (['ts', 'tsx'].includes(extension)) {
    return 'typescript';
  }
  return 'javascript';
}
