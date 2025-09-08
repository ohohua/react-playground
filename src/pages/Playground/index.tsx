import { Splitter } from 'antd';
import { CodeEditor } from '../CodeEditor/CodeEditor';
import { PlaygroundProvider } from '../../context/PlaygroundContext';
import { FileNameList } from '../CodeEditor/FileNameList';
import { Preview } from '../Preview';


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
            <Preview />
          </Splitter.Panel>
        </Splitter>
      </div>
    </PlaygroundProvider>
  );
}

export default App;
