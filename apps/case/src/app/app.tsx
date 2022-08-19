import { useEffect, useState } from 'react';

import MainLayout from './layout/main';

/**
 * View Components
 */
import FileUploader from './view/FileUploader';
import ImageList from './view/ImageList';

const VIEW_MODE = {
  FILE_UPLOADER: 0,
  IMAGE_LIST: 1,
};

export function App() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [viewMode, setViewMode] = useState(VIEW_MODE.FILE_UPLOADER);

  useEffect(() => {
    const _viewMode = selectedFiles.length > 0 ? VIEW_MODE.IMAGE_LIST : VIEW_MODE.FILE_UPLOADER;
    setViewMode(_viewMode);
  }, [selectedFiles]);

  return (
    <MainLayout>
      {viewMode === VIEW_MODE.FILE_UPLOADER && (
        <FileUploader onChange={setSelectedFiles} />
      )}
      {viewMode === VIEW_MODE.IMAGE_LIST && (
        <ImageList images={selectedFiles} />
      )}
    </MainLayout>
  );
}

export default App;
