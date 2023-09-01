import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Search from "../Search";
import { Provider } from "react-redux";
import { store } from "../../store/store";

describe("Search Test", () => {
  render(
    <Provider store={store}>
      <Search />
    </Provider>
  );
  const dropdown = screen.getByRole("dropdown");

  test("Should show initial text", () => {
    const text = dropdown.querySelector('option[value=""]');

    expect(text?.textContent).to.equal("Filter by Region");
  });

  test("Should display Africa when africa is selected", async () => {
    const text = dropdown.querySelector('option[value="africa"]');

    expect(text?.textContent).to.equal("Africa");
  });
});
