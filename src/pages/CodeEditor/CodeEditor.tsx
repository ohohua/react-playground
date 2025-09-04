import Editor, { OnMount } from '@monaco-editor/react';
import { createAta } from './ata';

export function CodeEditor() {
  const code = `import { useEffect, useState } from "react";

  function App() {
    const [num, setNum] = useState(() => {
      const num1 = 1 + 2;
      const num2 = 2 + 3;
      return num1 + num2
    });
    return <div onClick={() => setNum((prevNum) => prevNum + 1)}>{num}</div>
  }

  export default App;
  `;

  // Editor 挂载时
  const onEditorMount: OnMount = (editor, monaco) => {
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

  return (
    <Editor
      height="100%"
      defaultLanguage="javascript"
      onMount={onEditorMount}
      value={code}
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
      }}
    />
  );
}
