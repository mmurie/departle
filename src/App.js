import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import ModeClassique from './pages/ModeClassique';
import ModeCarte from './pages/ModeCarte';
import ModeForme from './pages/ModeForme';
import PageStats from './pages/PageStats';
import Page404 from './pages/404';
import updateHistory from './data/history';
import { Toaster } from 'react-hot-toast';

const App = () => {

  ["Classique", "Carte", "Forme"].forEach((r) => {
    updateHistory(r, parseInt((Math.random() * (7 - 1 + 1)), 10) + 1);
  });


  return (
    <div>
      <Toaster toastOptions={{
        style: {
          fontSize: '1rem',
          minWidth: 'fit-content'
        },
      }}></Toaster>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/classique" element={<ModeClassique />}> </Route>
          <Route path="/carte" element={<ModeCarte />}> </Route>
          <Route path="/forme" element={<ModeForme />}> </Route>
          <Route path="/stats" element={<PageStats />}> </Route>
          <Route path="*" element={<Page404 />}> </Route> {/*404*/}
        </Routes>
      </BrowserRouter>
    </div >
  );
};

export default App;