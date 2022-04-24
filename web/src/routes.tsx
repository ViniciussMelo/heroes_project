import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import Movies from "./pages/movies";
import Wiki from "./pages/wiki";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Wiki />}/>
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterApp;