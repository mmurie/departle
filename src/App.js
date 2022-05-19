import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import AutoComplete from './pages/AutoComplete';
import ClassicGame from './pages/ClassicGame';
import ModeClassique from './pages/ModeClassique';
import ModeCarte from './pages/ModeCarte';
import ModeForme from './pages/ModeForme';
import PageStats from './pages/PageStats';
import Page404 from './pages/404';

const App = () => {
  let datasets = {};
  let n = 0;

  ["Classique", "Carte", "Forme", "Global"].forEach((r) => {
    datasets[r] = [];
    for (let i = 1; i < 100; i++) {
      datasets[r].push({ x: i, y: (Math.sin(i / 3) + 1) * 3 - n })
    }

    n++;
  });
  localStorage.setItem("userData", JSON.stringify(datasets));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/test" element={<AutoComplete />}> </Route>
        <Route path="/classic" element={<ClassicGame />}> </Route>
        <Route path="/classique" element={<ModeClassique />}> </Route>
        <Route path="/carte" element={<ModeCarte />}> </Route>
        <Route path="/forme" element={<ModeForme />}> </Route>
        <Route path="/stats" element={<PageStats />}> </Route>
        <Route path="*" element={<Page404 />}> </Route> {/*404*/}
      </Routes>
    </BrowserRouter>
  );
};

export default App;