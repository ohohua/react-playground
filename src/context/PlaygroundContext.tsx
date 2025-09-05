import { initFiles } from '@/pages/Playground/files';
import { FileName, fileName2Language } from '@/utils/fileName2language';
import { createContext, PropsWithChildren, useState } from 'react';

interface File {
  name: string;
  value: string;
  language: string;
}

export interface Files {
  [key: string]: File;
}

interface PlaygroundContext {
  files: Files;
  setFiles: (files: Files) => void;

  selectedFileName: string;
  setSelectedFileName: (fileName: string) => void;

  addFile: (fileName: FileName) => void;
  removeFile: (fileName: string) => void;
  updateFileName: (oldFileName: string, newFileName: FileName) => void;
}

const defaultFileName = 'App.tsx';

export const PlaygroundContext = createContext<PlaygroundContext>({
  selectedFileName: defaultFileName,
} as PlaygroundContext);

export const PlaygroundProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const [files, setFiles] = useState<Files>(initFiles);
  const [selectedFileName, setSelectedFileName] = useState('App.tsx');

  const addFile = (fileName: FileName) => {
    setFiles({
      ...files,
      [fileName]: {
        name: fileName,
        value: '',
        language: fileName2Language(fileName),
      },
    });
  };
  const removeFile = (fileName: string) => {
    const { [fileName]: _, ...rest } = files;
    setFiles(rest);
  };
  const updateFileName = (oldFieldName: string, newFieldName: FileName) => {
    if (
      !files[oldFieldName] ||
      newFieldName === undefined ||
      newFieldName === null
    )
      return;
    const { [oldFieldName]: file, ...rest } = files;
    const newFile = {
      [newFieldName]: { ...file, language: fileName2Language(newFieldName) },
    };
    setFiles({ ...rest, ...newFile });
  };

  return (
    <PlaygroundContext.Provider
      value={{
        files,
        selectedFileName,
        setFiles,
        setSelectedFileName,
        addFile,
        removeFile,
        updateFileName,
      }}
    >
      {children}
    </PlaygroundContext.Provider>
  );
};
