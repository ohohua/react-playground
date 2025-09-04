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
        // Add code to your runtime at the path...
        console.log(`自动下载的包，${path}`);
        onDownloadFile(code, path);
      },
      started: () => {
        console.log('ATA start');
      },
      progress: (downloaded: number, total: number) => {
        console.log(`Got ${downloaded} out of ${total}`);
      },
      finished: (vfs) => {
        console.log('ATA done', vfs);
      },
    },
  });

  return ata;
  // Run that function with the new sourcefile
  // ata(`import danger from "danger"`)
}
