import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import GamePage from '../pages/GoSecond';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/game/:tostart" element={<GamePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
