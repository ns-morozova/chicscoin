import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './layouts';
import { Home, DexScreener } from './pages';
import './i18n';

const App: React.FC = () => {
  return (
    // <div>
    //   <Home />
    //   <DexScreener />
    // </div>

    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dexscreener" element={<DexScreener />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;