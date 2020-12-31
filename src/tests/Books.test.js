import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Books from "../components/Books";
import { BookFixturesOne, BookFixturesTwo } from "./fixtures/BookFixtures";

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

it("should have an href equal to the href specified in the first JSON fixture", () => {
  act(() => {
    render(<Books books={BookFixturesOne} />, container);
  });
  expect(container.querySelector("a").href).toBe(BookFixturesOne[0].Href);
});

it("should have a image source equal to the Src specified in the first JSON fixture", () => {
  act(() => {
    render(<Books books={BookFixturesOne} />, container);
  });
  expect(container.querySelector("a img").src).toBe(BookFixturesOne[0].Src);
});

it("should have a book title equal to the Title specified in the first JSON fixture", () => {
  act(() => {
    render(<Books books={BookFixturesOne} />, container);
  });
  expect(container.querySelector("h3").textContent).toBe(
    BookFixturesOne[0].Title
  );
});

it("should have a book author equal to the Author specified in the first JSON fixture", () => {
  act(() => {
    render(<Books books={BookFixturesOne} />, container);
  });
  expect(container.querySelector("h5").textContent).toBe(
    BookFixturesOne[0].Author
  );
});

it("should have a book description equal to the Description specified in the first JSON fixture", () => {
  act(() => {
    render(<Books books={BookFixturesOne} />, container);
  });
  expect(container.querySelector("p").textContent).toBe(
    BookFixturesOne[0].Description
  );
});
