import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from '../Language.tsx';
import { useMediaQuery } from 'react-responsive';
import Layout from '../Layout/Layout.tsx';
import LayoutMobile from '../Layout/LayoutMobile.tsx';
import Main from '../../pages/Main/Main.tsx';
import MainMobile from '../../pages/Main/MainMobile.tsx';
import Portfolio from '../../pages/Portfolio/Portfolio.tsx';
import SocialResponsibility from '../../pages/SocialResponsibility/SocialResponsibility.tsx';
import Guarantees from '../../pages/Guarantees/Guarantees.tsx';
import FAQ from '../../pages/FAQ/FAQ.tsx';
import Cooperation from '../../pages/Cooperation/Cooperation.tsx';
import RealEstateDetails from '../../pages/RealEstateDetails/RealEstateDetails.tsx'; 

function DesktopApp(): JSX.Element {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="portfolio/*" element={<Portfolio />} />
            <Route path="portfolio/:type/:id" element={<RealEstateDetails />} />
            <Route path="social-responsibility" element={<SocialResponsibility />} />
            <Route path="guarantees" element={<Guarantees />} />
            <Route path="FAQ" element={<FAQ />} />
            <Route path="cooperation" element={<Cooperation />} />
          </Route>
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
}

function MobileApp(): JSX.Element {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<LayoutMobile />}>
            <Route index element={<MainMobile />} />
            <Route path="portfolio/" element={<Portfolio />} />
            <Route path="social-responsibility" element={<SocialResponsibility />} />
            <Route path="guarantees" element={<Guarantees />} />
            <Route path="FAQ" element={<FAQ />} />
            <Route path="cooperation" element={<Cooperation />} />
          </Route>
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
}

function App(): JSX.Element {
  const isMobile = useMediaQuery({ query: '(max-width: 426px)' });

  return isMobile ? <MobileApp /> : <DesktopApp />;
}

export default App;
