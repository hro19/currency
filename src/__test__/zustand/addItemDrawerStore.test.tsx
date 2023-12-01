import { renderHook, act } from "@testing-library/react";
import { addItemDrawerStore } from "@/zustand/addItemDrawerStore";

describe("addItemDrawerStoreのzustandのテスト", () => {
  it("isItemDrawerOpenの初期値がfalseであるか", () => {
    const { result } = renderHook(() => addItemDrawerStore());

    expect(result.current.isItemDrawerOpen).toBe(false);
  });

  it("onItemDrawerOpenを呼ぶとisItemDrawerOpenがtrueになるか", () => {
    const { result } = renderHook(() => addItemDrawerStore());

    // act関数を使って非同期の状態変更を待つ
    act(() => {
      result.current.onItemDrawerOpen();
    });

    expect(result.current.isItemDrawerOpen).toBe(true);
  });

  it("onItemDrawerCloseを呼ぶとisItemDrawerOpenがfalseになるか。", () => {
    const { result } = renderHook(() => addItemDrawerStore());

    // act関数を使って非同期の状態変更を待つ
    act(() => {
      result.current.onItemDrawerOpen();
    });

    // act関数を使って非同期の状態変更を待つ
    act(() => {
      result.current.onItemDrawerClose();
    });

    expect(result.current.isItemDrawerOpen).toBe(false);
  });
});