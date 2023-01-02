import { AppLayout } from "./components/applayout";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SearchResults } from "components/results";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="results" element={<SearchResults />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
