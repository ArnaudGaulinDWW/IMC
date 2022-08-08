import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar.jsx';
import About from './components/About.jsx';
import HomeScreen from './screens/HomeScreen.jsx';

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path='/About' element={<About />} />
        <Route path='/HomeScreen' element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
