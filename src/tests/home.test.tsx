/*eslint-disable*/
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { routesConfig } from "routes";

describe("Testing Home Page", () => {
  beforeEach(() => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/"]
    });
    render(<RouterProvider router={router} />);
  });

  test("renders Home Page", async () => {
    expect(screen.getByText(/Look Into An Experience/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        "Stream the newest blockbuster hits, classic favorites, and exclusive original content all in one place. Our intuitive interface and vast selection makes it easy to find your next movie marathon. So why wait? Start watching now and join the millions of satisfied subscribers already enjoying the best movies and TV shows."
      )
    ).toBeInTheDocument();
  });

  test("clicking browse button navigates to search page", async () => {
    const linkButton = screen.getByTestId("browse-button");
    await waitFor(() => userEvent.click(linkButton));
    expect(screen.getByTestId("search-input")).toBeInTheDocument();
  });
});
