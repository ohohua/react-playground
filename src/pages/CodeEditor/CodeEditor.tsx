import { PlaygroundContext } from '@/context/PlaygroundContext';
import Editor, { OnMount } from '@monaco-editor/react';
import { debounce } from 'lodash-es';
import { editor } from 'monaco-editor';
import { useContext } from 'react';
import { createAta } from './ata';

interface Props {
  option?: editor.IStandaloneEditorConstructionOptions;
}

export function CodeEditor(props: Props) {
  const { option } = props;

  const onEditorMount: OnMount = (editor, monaco) => {
    // 配置格式化快捷键
    editor.addCommand(
      monaco.KeyMod.Alt | monaco.KeyMod.Shift | monaco.KeyCode.KeyF,
      () => {
        editor.getAction('editor.action.formatDocument')?.run();
      },
    );

    // 配置编辑器的 tsconfig
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      jsx: monaco.languages.typescript.JsxEmit.Preserve,
      esModuleInterop: true,
    });

    const ata = createAta((code, path) => {
      monaco.languages.typescript.typescriptDefaults.addExtraLib(
        code,
        `file://${path}`,
      );
    });

    editor.onDidChangeModelContent(() => {
      ata(editor.getValue());
    });

    ata(editor.getValue());
  };

  const { files, selectedFileName, setFiles } = useContext(PlaygroundContext);

  const file = files[selectedFileName];

  function onChange(value?: string) {
    files[selectedFileName].value = value || '';
    setFiles({ ...files });
  }
  return (
    <Editor
      height="100%"
      language={file.language}
      path={file.name}
      onMount={onEditorMount}
      value={file.value}
      options={{
        fontSize: 14,
        scrollBeyondLastLine: false,
        minimap: {
          enabled: false,
        },
        scrollbar: {
          verticalScrollbarSize: 6,
          horizontalScrollbarSize: 6,
        },
        ...option,
      }}
      onChange={debounce(onChange, 600)}
    />
  );
}
