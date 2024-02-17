import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../Layout/Layout.tsx';
import Main from '../../pages/Main/Main.tsx';
import Portfolio from '../../pages/Portfolio/Portfolio.tsx';
import SocialResponsibility from '../../pages/SocialResponsibility/SocialResponsibility.tsx';
import Guarantees from '../../pages/Guarantees/Guarantees.tsx';
import FAQ from '../../pages/FAQ/FAQ.tsx';
import Cooperation from '../../pages/Cooperation/Cooperation.tsx';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="social-responsibility" element={<SocialResponsibility />} />
          <Route path="guarantees" element={<Guarantees />} />
          <Route path="FAQ" element={<FAQ />} />
          <Route path="cooperation" element={<Cooperation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
