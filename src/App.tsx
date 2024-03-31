import { BrowserRouter } from 'react-router-dom';
import Router from './routers/Router';
import 'react-tooltip/dist/react-tooltip.css';

export default function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
