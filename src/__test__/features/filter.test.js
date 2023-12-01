import { filterCurrentNationalData, isfilteredDataEmpty } from "@/features/filter";

  const items = [
    { currencyCode: "usd", price: 100 },
    { currencyCode: "php", price: 200 },
  ];

describe("filterCurrentNationalDataのテスト", () => {
  let filteredData = filterCurrentNationalData(items, "php");

  it("国名でfilterする", () => {
    expect(filteredData).toEqual([{ currencyCode: "php", price: 200 }]);
  });

  it("空配列でなければfalse", () => {
    expect(isfilteredDataEmpty(filteredData)).toEqual(false);
  });
});

describe("isfilteredDataEmptyのテスト", () => {
  let filteredData = filterCurrentNationalData(items, "thb");
  it("空配列のときtrue", () => {
    expect(isfilteredDataEmpty(filteredData)).toEqual(true);
  });
});