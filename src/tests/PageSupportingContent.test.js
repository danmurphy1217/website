import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { PageSupportingContent } from "../components/PageSupportingContent";
import PageSupportingContentFixtureOne from "./fixtures/PageSupportingContentFixtures";

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

it("should render a nested div with the textContent passed to the component", () => {
  act(() => {
    render(
      <PageSupportingContent content="I should be the text content!" />,
      container
    );
  });
  expect(container.querySelector("div div").textContent).toBe(
    "I should be the text content!"
  );
});

it("should render a nested div with no textContent", () => {
  act(() => {
    render(<PageSupportingContent />, container);
  });
  expect(container.querySelector("div div").textContent).toBe("");
});

it("should render a nested div with a <SupportingContentText /> child", () => {
  act(() => {
    render(
      <PageSupportingContent content={PageSupportingContentFixtureOne()} />,
      container
    );
  });

  expect(container.querySelector("div div").textContent).toBe(
    "You can contact me at my email or fill out the below form."
  );
  expect(container.querySelector("p a").className).toBe("FixtureOneATag");
  expect(container.querySelector("p").id).toBe("FixtureOne");
});
