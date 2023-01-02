import { AppLayout } from "./layout";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SearchResults } from "pages/results";
import { Details } from "pages/details";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="results" element={<SearchResults />} />
          <Route path="results/:movieId" element={<Details />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
