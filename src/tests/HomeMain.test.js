import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { formatOf } from "../components/extras/customFormatters";
import { Descriptors } from "../components/HomeMain";

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

it("should return no content since neither plaintext nor config props are set", () => {
  // test hex code
  act(() => {
    render(<Descriptors />, container);
  });
  expect(container.textContent).toBe("");
});

it("should return plaintext content since the plaintext prop is set", () => {
  act(() => {
    render(<Descriptors plaintext="Hey, I'm Plaintext!" />, container);
  });

  expect(container.textContent).toBe("Hey, I'm Plaintext!");
});

it("should return plaintext AND `|` since both properties are set", () => {
  act(() => {
    render(
      <Descriptors
        plaintext="Hi, I'm Plaintext"
        config={{
          strings: [
            `${formatOf("ENGINEER")}`,
            `${formatOf("STUDENT")}`,
            `${formatOf("MUSICIAN")}`,
            `${formatOf("WRITER")}`,
          ],
          autoStart: true,
          loop: true,
        }}
      />,
      container
    );

    expect(container.textContent).toBe("Hi, I'm Plaintext|");
  });
});

it("should RETURN `|` since the config property is set", () => {
  act(() => {
    render(
      <Descriptors
        config={{
          strings: [
            `${formatOf("ENGINEER")}`,
            `${formatOf("STUDENT")}`,
            `${formatOf("MUSICIAN")}`,
            `${formatOf("WRITER")}`,
          ],
          autoStart: true,
          loop: true,
        }}
      />,
      container
    );

    expect(container.textContent).toBe("|");
  });
});
