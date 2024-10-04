import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import stateStore from './stateStore';
import { Suspense, lazy } from 'react';
import Loader from '../shared/UI/Loader/Loader';

const Main = lazy(() => import('../pages/Main'));
const GamePage = lazy(() => import('../pages/GamePage'));
const SandBox = lazy(() => import('../pages/SandBox'));

function App() {
  return (
    <Provider store={stateStore}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Main />
              </Suspense>
            }
          ></Route>
          <Route
            path="/sandbox"
            element={
              <Suspense fallback={<Loader />}>
                <SandBox />
              </Suspense>
            }
          ></Route>
          <Route
            path="/game/:tostart"
            element={
              <Suspense fallback={<Loader />}>
                <GamePage />
              </Suspense>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
