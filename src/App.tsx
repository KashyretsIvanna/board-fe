import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';

import UserList from './pages/Board/Board';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </div>
  );
}

export default App;
