/*eslint-disable*/
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { routesConfig } from "routes";
import axios from "axios";
import { moviesMockData } from "tests/data/search.mock";
import mockAxios from "jest-mock-axios";

function getMovies() {
  mockAxios.get.mockResolvedValue(moviesMockData);
}
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate
}));

describe("Testing Search Page", () => {
  beforeEach(() => {
    mockedUsedNavigate.mockReset();
  });

  beforeEach(() => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/results"]
    });
    render(<RouterProvider router={router} />);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  const locationObject = {
    state: {
      emissionType: "movie",
      item: {
        id: 436969,
        original_title: "The Suicide Squad",
        overview:
          "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
        popularity: 3692.281,
        poster_path: "/iXbWpCkIauBMStSTUT9v4GXvdgH.jpg",
        release_date: "2021-07-28",
        title: "The Suicide Squad",
        vote_average: 8
      }
    }
  };

  test("check that api is called when Screen page is rendered", async () => {
    expect(screen.queryByTestId("header")).toBeInTheDocument();
    getMovies();
    const rowValues = await waitFor(() => screen.getAllByTestId("card").map((row) => row));
    const header = screen.getByText("The Suicide Squad");
    expect(rowValues[0]).toContainElement(header);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  test("accepts a search term", async () => {
    const inputElement = screen.getByTestId("search-input");
    await waitFor(() => userEvent.type(inputElement, "cruella"));
    expect(screen.getByTestId("search-input")).toHaveValue("cruella");
    expect(screen.queryByTestId("error-message")).not.toBeInTheDocument();
  });

  test("test select tag is working", () => {
    userEvent.selectOptions(
      screen.getByRole("combobox"),
      screen.getByRole("option", { name: "Movies" })
    );
    expect((screen.getByRole("option", { name: "Movies" }) as HTMLOptionElement).selected).toBe(
      true
    );
  });

  test("loading spinner is shown while API request is in progress", async () => {
    const inputEl = screen.getByTestId("search-input");
    userEvent.type(inputEl, "cruella");
    const loading = screen.getByTestId("loading-icon");
    await waitFor(() => expect(loading).toBeInTheDocument());
  });

  test("clicking a card navigates to the details page", async () => {
    getMovies();
    const firstCard = await waitFor(() => screen.getAllByTestId("card").map((row) => row));
    userEvent.click(firstCard[0]);
    expect(mockedUsedNavigate).toBeCalledTimes(1);
    expect(mockedUsedNavigate).toBeCalledWith(
      "/results/436969",
      expect.objectContaining({ ...locationObject })
    );
  });
});
