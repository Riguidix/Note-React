import { BrowserRouter } from 'react-router-dom';

import AppRouter from './AppRouter';

export default function App() {
  return (
    <div className="App bg-gray-dark flex items-center justify-center h-screen w-screen">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  )
}