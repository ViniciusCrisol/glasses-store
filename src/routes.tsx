import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import GlassesPage1 from './pages/GlaassesPage/1';
import GlassesPage2 from './pages/GlaassesPage/2';
import GlassesPage3 from './pages/GlaassesPage/3';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Home} />
      <Route path='/glasses-1' exact component={GlassesPage1} />
      <Route path='/glasses-2' exact component={GlassesPage2} />
      <Route path='/glasses-3' exact component={GlassesPage3} />
    </BrowserRouter>
  );
};

export default Routes;
