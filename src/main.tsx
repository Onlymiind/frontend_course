import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './containers/App';
import { PostsPage } from './containers/Posts';
import { FilmsPage } from './containers/FilmsPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FilmsPage />
  </StrictMode>,
);
