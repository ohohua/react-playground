import { Splitter } from 'antd';
import { CodeEditor } from '../CodeEditor/CodeEditor';
// @ts-ignore
import { PlaygroundProvider } from '../../context/PlaygroundContext';
import { FileNameList } from '../CodeEditor/FileNameList';
// @ts-ignore
import iframeRaw from '../Preview/iframe.html';

const iframeUrl = URL.createObjectURL(
  new Blob([iframeRaw], { type: 'text/html' }),
);

function App() {
  return (
    <PlaygroundProvider>
      <div className="h-[calc(100vh-56px)]">
        <Splitter style={{ height: '100%' }}>
          <Splitter.Panel defaultSize="50%" min="20%" max="70%">
            <FileNameList />
            <CodeEditor />
          </Splitter.Panel>
          <Splitter.Panel>
            <iframe
              src={iframeUrl}
              style={{ width: '100%', height: '500px' }}
            />
          </Splitter.Panel>
        </Splitter>
      </div>
    </PlaygroundProvider>
  );
}

export default App;
