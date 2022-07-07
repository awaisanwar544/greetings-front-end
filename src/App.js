import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './components/greeting';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hello" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
