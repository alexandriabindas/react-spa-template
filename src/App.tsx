import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Layout from './components/Layout';
import PageNotFound from './components/PageNotFound';
import About from './components/About';

const App = (): JSX.Element => {
  return (
    <div>
      <h1>React Template App</h1>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
    </div>
  )
}
export default App;
