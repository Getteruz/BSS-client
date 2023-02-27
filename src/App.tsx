import React from 'react';
import './App.css';
import ScrollToTop from './components/lol/lol';
import AppRouter from './components/routes/appRouter';

function App() {
  return (
    <>
      <ScrollToTop />
      <AppRouter />
    </>
  );
}
export default App;