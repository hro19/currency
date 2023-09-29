//参考サイト https://zenn.dev/funteractiveinc/articles/component-input-number

"use client";

import React, { useState, FormEvent } from "react";

type Calculation = {
  base_value: number;
  calculate_value: number;
};

const RatePhp = 2.4141; //レートの定数値

const Page = () => {
  const [calculation, setCalculation] = useState<Calculation>({
    base_value: 0,
    calculate_value: 0,
  });

  const onChangeHandler = (value: string) => {
    const v = value.replace(/[０-９．]/g, (s) =>
      String.fromCharCode(s.charCodeAt(0) - 0xfee0)
    );
    if (!isNaN(Number(v))) {
      setBaseValue(Number(v)); // 関数名を修正
    }
  };

  const setBaseValue = (value: number) => {
    // イミュータブルな操作でオブジェクトを作成する
    const newCalculation: Calculation = {
      ...calculation,
      base_value: value,
      calculate_value: RatePhp * value,
    };
    // console.log("newCalculation:", newCalculation);
    setCalculation(newCalculation);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); // イベントのデフォルト動作をキャンセルする
    console.table(calculation);
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <input
        type="text"
        inputMode="numeric"
        value={calculation.base_value}
        onChange={(e) => onChangeHandler(e.target.value)}
        className="w-48 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
      />
      <button
        type="submit"
        className="bg-emerald-400 text-white px-4 py-2 rounded-lg ml-2 hover:bg-emerald-600"
      >
        レート計算
      </button>
    </form>
  );
};

export default Page;
