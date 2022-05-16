import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import AutoComplete from './pages/AutoComplete';
import fetchCommunes from './data/getData';
import ClassicGame from './pages/ClassicGame';
const App = () => {

  fetchCommunes();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="*" element={<Home />}> </Route> {/*404*/}
        <Route path="/test" element={<AutoComplete />}> </Route>
        <Route path="/classic" element={<ClassicGame />}> </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;