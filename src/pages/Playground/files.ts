import type { Files } from '@/context/PlaygroundContext';
import { fileName2Language } from '@/utils/fileName2language';
// @ts-ignore
import importMapRaw from '!!raw-loader!./template/import-map.json';
// @ts-ignore
// @ts-ignore
import appRaw from '!!raw-loader!./template/App';
// @ts-ignore
import mainRaw from '!!raw-loader!./template/main.tsx';

// app 文件名
export const APP_COMPONENT_FILE_NAME = 'App.tsx';
// esm 模块映射文件名
export const IMPORT_MAP_FILE_NAME = 'import-map.json';
// app 入口文件名
export const ENTRY_FILE_NAME = 'main.tsx';

export const initFiles: Files = {
  [ENTRY_FILE_NAME]: {
    name: ENTRY_FILE_NAME,
    value: mainRaw,
    language: fileName2Language(ENTRY_FILE_NAME),
  },
  [IMPORT_MAP_FILE_NAME]: {
    name: IMPORT_MAP_FILE_NAME,
    value: importMapRaw,
    language: fileName2Language(IMPORT_MAP_FILE_NAME),
  },
  [APP_COMPONENT_FILE_NAME]: {
    name: APP_COMPONENT_FILE_NAME,
    value: appRaw,
    language: fileName2Language(APP_COMPONENT_FILE_NAME),
  },
};
