import React from 'react';
import { VideosPage } from './features/youtubeVideos/videosPage';
import { PageHeader } from './features/header/pageHeader';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <header>
        <PageHeader />
      </header>
      <VideosPage />
      <footer style={{ minHeight: '2vh' }}>

      </footer>
    </React.Fragment>
  );
}

export default App;
