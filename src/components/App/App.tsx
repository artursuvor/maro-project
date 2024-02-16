import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../Layout/Layout.tsx';
import Main from '../../pages/Main/Main.tsx';
import Portfolio from '../../pages/Portfolio/Portfolio.tsx';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
