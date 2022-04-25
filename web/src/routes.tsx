import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import CreateHero from './pages/createHero';
import Movies from "./pages/movies";
import Heroes from "./pages/heroes";
import Login from './pages/login';
import Wiki from "./pages/wiki";
import Hero from './pages/hero';

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Wiki />}/>
        <Route path="/movies" element={<Movies />} />
        <Route path="/heroes" element={<Heroes />} />
        <Route path="/hero/:id" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/:username" element={<Login />} />
        <Route path="/createHero" element={<CreateHero />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterApp;