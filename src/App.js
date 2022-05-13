import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import fetchCommunes from './data/getData';
const App = () => {

  fetchCommunes();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="*" element={<Home />}> </Route> {/*404*/}
      </Routes>
    </BrowserRouter>
  );
};

export default App;