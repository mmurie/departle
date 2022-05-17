import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import AutoComplete from './pages/AutoComplete';
import fetchCommunes from './data/getData';
import ClassicGame from './pages/ClassicGame';
import ModeClassique from './pages/ModeClassique';
import Page404 from './pages/404';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="*" element={<Home />}> </Route> {/*404*/}
        <Route path="/test" element={<AutoComplete />}> </Route>
        <Route path="/classic" element={<ClassicGame />}> </Route>
        <Route path="/classique" element={<ModeClassique />}> </Route>
        <Route path="*" element={<Page404 />}> </Route> {/*404*/}
      </Routes>
    </BrowserRouter>
  );
};

export default App;