import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Browse from './components/Browse';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Browse />} />
      </Routes>
    </div>
  );
}

export default App;
