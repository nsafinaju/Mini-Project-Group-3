import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/HomeClass/Home';
import About from './Components/About/About';
import reportWebVitals from './reportWebVitals';
import Menu from './Components/Menu/Menu';
import Blog from './Components/BlogSection/Blog';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <React.StrictMode>
  <Menu/>
    <Routes>
      <Route path="/about" element={<About/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/" exact element={<Home/>} />
    </Routes>
  </React.StrictMode>
  </BrowserRouter>
);



reportWebVitals();
