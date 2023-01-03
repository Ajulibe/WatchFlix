import { createBrowserRouter } from "react-router-dom";
import Home from "pages/home";
import SearchPage from "pages/search";
import DetailsPage from "pages/details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "results",
    element: <SearchPage />
  },
  {
    path: "results/:movieId",
    element: <DetailsPage />
  }
]);
