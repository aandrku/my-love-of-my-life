import { BrowserRouter, Route, Routes } from 'react-router';
import LandingPage from '@/components/pages/LandingPage';
import WhyYouReAwesomePage from '@/components/pages/WhyYouReAwesomePage';
import { GiftInstructionsPage } from '@/components/pages/GiftInstructionsPage';
import { Challenge1Page } from '@/components/pages/Challenge1Page';
import Challenge2Page from '@/components/pages/Challenge2Page';
import Challenge3Page from '@/components/pages/Challenge3Page';
import { FinalMessagePage } from '@/components/pages/FinalMessagePage';

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
