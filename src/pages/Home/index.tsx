// @ts-ignore
import { Splitter } from 'antd';
import { CodeEditor } from '../CodeEditor/CodeEditor';
import iframeRaw from './iframe.html';

const iframeUrl = URL.createObjectURL(
  new Blob([iframeRaw], { type: 'text/html' }),
);

function App() {
  return (
    <div className="h-[calc(100vh-56px)]">
      <Splitter style={{ height: '100%' }}>
        <Splitter.Panel defaultSize="50%" min="20%" max="70%">
          <CodeEditor />
        </Splitter.Panel>
        <Splitter.Panel>
          <iframe
            src={iframeUrl}
            style={{ width: '100%', height: '500px' }}
          ></iframe>
        </Splitter.Panel>
      </Splitter>
    </div>
  );
}

export default App;
