import React from "react";
import { render } from "@testing-library/react";
import * as rtl from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

describe("App", () => {
  it('has an element with the text "Lambda"', () => {
    const simulatedDOM = rtl.render(<App />);
    const h1 = simulatedDOM.queryByText(/lambda/i);
    expect(h1).toBeInTheDocument();
    // console.log(h1);
  });
});

//arrange -our test by setting up our code such that it can be tested

//act -calling a method or function that returns a result

//assert -  if our expected return matched the actual return
