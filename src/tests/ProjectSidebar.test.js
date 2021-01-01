import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import SidebarWith from "../components/extras/buildProjectSidebar";
import { SidebarContentFixtureOne, SidebarContentFixtureTwo } from "./fixtures/SidebarContentFixture";

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

it("should have a h1 element with the text content of 'Professional Projects'", () => {
  act(() => {
    render(
      <SidebarWith companyDetails={SidebarContentFixtureOne} />,
      container
    );
  });
  expect(container.firstChild.querySelector("h1").textContent).toBe(
    "Professional Projects"
  );
});

it("should have a div element with the text content of 'Stacauto'", () => {
  act(() => {
    render(
      <SidebarWith companyDetails={SidebarContentFixtureOne} />,
      container
    );
  });
  expect(container.firstChild.querySelector("div").textContent).toBe(
    SidebarContentFixtureOne[0].companyName
  );
});