import { createRoot } from 'react-dom/client';
import App from './App';
import './App.css';

const root = document.getElementById('root');

const app = (
  <App />
);

const rootElement = createRoot(root);
rootElement.render(app);

