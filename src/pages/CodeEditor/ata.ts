import { setupTypeAcquisition } from '@typescript/ata';
import ts from 'typescript';

type OnDownloadFile = (code: string, path: string) => void;

export function createAta(onDownloadFile: OnDownloadFile) {
  const ata = setupTypeAcquisition({
    projectName: 'My ATA Project',
    typescript: ts,
    logger: console,
    delegate: {
      receivedFile: (code: string, path: string) => {
        onDownloadFile(code, path);
      },
    },
  });

  return ata;
}
