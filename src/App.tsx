import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';

import UserList from './pages/Board/Board';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/board" element={<UserList />} />
        <Route path="*" element={<Navigate to={'/board'} />} />
      </Routes>
    </div>
  );
}

export default App;
