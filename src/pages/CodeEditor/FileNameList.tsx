import { PlaygroundContext } from '@/context/PlaygroundContext';
import { useContext, useEffect, useState } from 'react';

import { FileNameItem } from './FileNameItem';
import styles from './index.module.less';

export function FileNameList() {
  const { files, selectedFileName, setSelectedFileName } =
    useContext(PlaygroundContext);

  const [tabs, setTabs] = useState(['']);

  useEffect(() => {
    setTabs(Object.keys(files));
  }, [files]);

  return (
    <div className={styles.tabs}>
      {tabs.map((item, index) => (
        <FileNameItem
          key={item + index}
          value={item}
          active={selectedFileName === item}
          onClick={() => setSelectedFileName(item)}
        ></FileNameItem>
      ))}
    </div>
  );
}
