import React from 'react';
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import GamePage from './pages/GamePage';
import HomePage from './pages/HomePage';

function MainLayout() {
  const location = useLocation();
  const isGameRoute = location.pathname === '/game';

  return (
    <>
      <Navbar />
      <Outlet />
      {!isGameRoute ? (
        <footer className="site-footer">
          <div className="site-footer-inner">© 2026 Chủ Nghĩa Xã Hội Khoa Học.</div>
        </footer>
      ) : null}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
