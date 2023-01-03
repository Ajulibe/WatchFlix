import React from "react";
import { AppLayout } from "./layout";
import { SearchResults } from "pages/results";
import { Details } from "pages/details";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "results",
        element: <SearchResults />
      },
      {
        path: "results/:movieId",
        element: <Details />
      }
    ]
  }
]);
