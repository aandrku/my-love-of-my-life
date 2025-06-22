import { BrowserRouter, Route, Routes } from 'react-router';
import LandingPage from '../pages/LandingPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
