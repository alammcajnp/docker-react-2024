import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/How/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders again learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/How/i);
  expect(linkElement).toBeInTheDocument();
});

test("ALam", () => {
  render(<App />);
  const linkElement = screen.getByText(/How/i);
  expect(linkElement).toBeInTheDocument();
});
test("Ok it again Alam", () => {
  render(<App />);
  const linkElement = screen.getByText(/How/i);
  expect(linkElement).toBeInTheDocument();
});
