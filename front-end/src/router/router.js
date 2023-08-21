import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ComponentIndex from '../views/ViewIndex';
// import ViewTournament from '../views/ViewTournament';
import ViewNotFound from '../views/ViewNotFound';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComponentIndex />} />
        <Route path="*" element={<ViewNotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;