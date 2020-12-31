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

it("should have two a tags for each book specified in the fixture and the first href should be equal to BookFixturesTwo[0].Href", () => {
  act(() => {
    render(<Books books={BookFixturesTwo} />, container);
  });
  expect(container.querySelectorAll("a").length).toBe(
    BookFixturesTwo.length * 2
  );
  expect(container.querySelectorAll("a")[0].href).toBe(BookFixturesTwo[0].Href);
});

it("should have a nested image tag that containers a src attribute equal to BookFixturesTwo[i].Src", () => {
  act(() => {
    render(<Books books={BookFixturesTwo} />, container);
  });
  expect(container.querySelectorAll("a")[0].children.length).toBe(1);
  expect(container.querySelectorAll("a img").length).toBe(
    BookFixturesTwo.length
  );
  expect(container.querySelectorAll("a img")[0].src).toBe(
    BookFixturesTwo[0].Src
  );
  expect(container.querySelectorAll("a img")[1].src).toBe(
    BookFixturesTwo[1].Src
  );
  expect(container.querySelectorAll("a img")[2].src).toBe(
    BookFixturesTwo[2].Src
  );
});

it("should have a h3 tag that containers text content equal to BookFixturesTwo[i].Title", () => {
  act(() => {
    render(<Books books={BookFixturesTwo} />, container);
  });
  expect(container.querySelectorAll("h3")[0].children.length).toBe(0);
  expect(container.querySelectorAll("h3").length).toBe(BookFixturesTwo.length);
  expect(container.querySelectorAll("h3")[0].textContent).toBe(
    BookFixturesTwo[0].Title
  );
  expect(container.querySelectorAll("h3")[1].textContent).toBe(
    BookFixturesTwo[1].Title
  );
  expect(container.querySelectorAll("h3")[2].textContent).toBe(
    BookFixturesTwo[2].Title
  );
});

it("should have a h5 tag that contains text content equal to BookFixturesTwo[i].Author", () => {
  act(() => {
    render(<Books books={BookFixturesTwo} />, container);
  });
  expect(container.querySelectorAll("h5")[0].children.length).toBe(0);
  expect(container.querySelectorAll("h5").length).toBe(BookFixturesTwo.length);
  expect(container.querySelectorAll("h5")[0].textContent).toBe(
    BookFixturesTwo[0].Author
  );
  expect(container.querySelectorAll("h5")[1].textContent).toBe(
    BookFixturesTwo[1].Author
  );
  expect(container.querySelectorAll("h5")[2].textContent).toBe(
    BookFixturesTwo[2].Author
  );
});

it("should have a p tag that contains text content equal to BookFixturesTwo[i].Description", () => {
  act(() => {
    render(<Books books={BookFixturesTwo} />, container);
  });
  expect(container.querySelectorAll("p")[0].children.length).toBe(0);
  expect(container.querySelectorAll("p").length).toBe(BookFixturesTwo.length);
  expect(container.querySelectorAll("p")[0].textContent).toBe(
    BookFixturesTwo[0].Description
  );
  expect(container.querySelectorAll("p")[1].textContent).toBe(
    BookFixturesTwo[1].Description
  );
  expect(container.querySelectorAll("p")[2].textContent).toBe(
    BookFixturesTwo[2].Description
  );
});
