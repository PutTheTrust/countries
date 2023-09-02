import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Search from "../Search";
import { Provider } from "react-redux";
import { store } from "../../store/store";

describe("Search Test", () => {
  // const user = userEvent.setup();
  render(
    <Provider store={store}>
      <Search />
    </Provider>
  );
  const textInput = screen.getByRole("search") as HTMLInputElement;

  test("Should show text typed in input", async () => {
    await userEvent.type(textInput, "Test String");
    const newValue = textInput.value;
    console.log("NEW VALUE TEXT >>>", newValue);
    expect(newValue).to.equal("Test String");
  });

  test("Should show no text", () => {
    expect(textInput?.textContent).to.equal("");
  });
});
