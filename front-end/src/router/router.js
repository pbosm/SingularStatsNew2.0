import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewHome from '../pages/home/ViewHome';
// import ViewTournament from '../views/ViewTournament';
import ViewNotFound from '../pages/notFound/ViewNotFound';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ViewHome />} />
        {/* <Route path="/tournament" element={<ViewTournament />} /> */}
        <Route path="*" element={<ViewNotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;