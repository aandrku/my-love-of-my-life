import { BrowserRouter, Route, Routes } from 'react-router';
import LandingPage from '../pages/LandingPage';
import WhyYouReAwesomePage from '../pages/WhyYouReAwesomePage';
import { GiftInstructionsPage } from '../pages/GiftInstructionsPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />}></Route>
        <Route path="/why" element={<WhyYouReAwesomePage />}></Route>
        <Route
          path="/gift-instructions"
          element={<GiftInstructionsPage />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
