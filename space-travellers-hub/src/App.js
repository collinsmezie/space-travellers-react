import {
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import Missions from './components/Missions';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Rockets from './components/Rockets';

function App() {
  return (
    <div className="container">
      <Navbar />
      <hr />
      <Routes>
        <Route path="/missions" element={<Missions />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Rockets />} />
      </Routes>
    </div>
  );
}

export default App;
