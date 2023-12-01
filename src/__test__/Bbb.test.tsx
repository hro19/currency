// MyComponent.test.tsx

import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Bbb from "./Bbb";

test("reactテスティングライブラリー 基礎", () => {
  render(<Bbb />);

  // テスト対象のコンポーネントがレンダリングされたことを確認
  const componentElement = screen.getByTestId("my-component");
  expect(componentElement).toBeInTheDocument();

  // h1タグが含まれるか
  const h1Element = screen.getByRole("heading", { level: 1 });
  expect(h1Element).toBeInTheDocument();

  // h1タグのテキストがハローワールドか
  expect(h1Element).toHaveTextContent("ハローワールド");

  // pタグを含んでいるか
  const pElement = screen.getByText("これはコンポーネントです");
  expect(pElement).toBeInTheDocument();

  // pタグに文字が含まれているか
  expect(pElement).toHaveTextContent("これはコンポーネントです");

    expect(pElement).toHaveClass("bg-orange-300");
});