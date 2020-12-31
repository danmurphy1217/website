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

it("should have two a tags for each book specified in the fixture and the first href should be BookFixturesTwo[0].Href", () => {
  act(() => {
    render(<Books books={BookFixturesTwo} />, container);
  });
  expect(container.querySelectorAll("a").length).toBe(
    BookFixturesTwo.length * 2
  );
  expect(container.querySelectorAll("a")[0].href).toBe(BookFixturesTwo[0].Href);
});

// todo: wrap up more unit tests for the remainder of the keys in BookFixtureTwo
