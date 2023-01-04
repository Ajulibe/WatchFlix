/*eslint-disable*/
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { routesConfig } from "routes";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate
}));

test("test that Details Page is redirected if accessed directly ", async () => {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ["/results/3"]
  });
  render(<RouterProvider router={router} />);
  expect(mockedUsedNavigate).toBeCalledTimes(1);
});
