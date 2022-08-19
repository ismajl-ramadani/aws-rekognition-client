import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { SharedStateContextWrapper } from './app/context/SharedStateContext';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <SharedStateContextWrapper>
      <App />
    </SharedStateContextWrapper>
);
