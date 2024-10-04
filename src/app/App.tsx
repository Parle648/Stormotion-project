import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import { Provider } from 'react-redux';
import stateStore from './stateStore';
import GamePage from '../pages/GamePage';
import SandBox from '../pages/SandBox';

function App() {
  return (
    <Provider store={stateStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/sandbox" element={<SandBox />}></Route>
          <Route path="/game/:tostart" element={<GamePage />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
