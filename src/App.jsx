import './App.css';
import ScrollToTop from './components/lol/lol';
import AppRouter from './components/routes/appRouter';
import './i18next'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <>
      <ScrollToTop />
      <AppRouter />
    </>
  );
}
export default App;