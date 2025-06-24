import { BrowserRouter, Route, Routes } from 'react-router';
import LandingPage from '../pages/LandingPage';
import WhyYouReAwesomePage from '../pages/WhyYouReAwesomePage';
import { GiftInstructionsPage } from '../pages/GiftInstructionsPage';
import { Challenge1Page } from '../pages/Challenge1Page';
import Challenge2Page from '../pages/Challenge2Page';
import Challenge3Page from '../pages/Challenge3Page';
import { FinalMessagePage } from '../pages/FinalMessagePage';

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
        <Route path="/challenge1" element={<Challenge1Page />}></Route>
        <Route path="/challenge2" element={<Challenge2Page />}></Route>
        <Route path="/challenge3" element={<Challenge3Page />}></Route>
        <Route path="/final-message" element={<FinalMessagePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
