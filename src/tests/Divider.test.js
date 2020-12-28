import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Divider from "../components/extras/Divider";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("should have a different background color based on the color property passed to the component", () => {
  // test hex code
  act(() => {
    render(<Divider />, container);
  });
  expect(container.firstChild).toHaveStyle(`background-color: #748592`);

  // test plain coloring
  act(() => {
    render(<Divider color="red" />, container);
  });
  expect(container.firstChild).toHaveStyle(`background-color: red`);

  // test rgb formatting
  act(() => {
    render(<Divider color="rgb(237, 187, 153)" />, container);
  });
  expect(container.firstChild).toHaveStyle(
    `background-color: rgb(237, 187, 153)`
  );
});

it("should have other default css styles set to the divider such as: flex-basis, width, and padding-top", () => {
  act(() => {
    render(<Divider />, container);
  });
  expect(container.firstChild).toHaveStyle(`flex-basis: 100%`);
  expect(container.firstChild).toHaveStyle(`width: auto`);
  expect(container.firstChild).toHaveStyle(`padding-top: 25px`);
});
