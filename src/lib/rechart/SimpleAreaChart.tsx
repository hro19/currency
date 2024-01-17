"use client";

import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

//LineChart 用のサンプルデータ
const data = [
  {
    day: "2014",
    local_price: 100,
    conversion_price: 300,
  },
  {
    day: "2015",
    local_price: 130,
    conversion_price: 400,
  },
  {
    day: "2016",
    local_price: 150,
    conversion_price: 450,
  },
  {
    day: "2017",
    local_price: 210,
    conversion_price: 500,
  },
  {
    day: "2018",
    local_price: 230,
    conversion_price: 530,
  },
  {
    day: "2019",
    local_price: 270,
    conversion_price: 630,
  },
  {
    day: "2022",
    local_price: 310,
    conversion_price: 710,
  },
  {
    day: "2023",
    local_price: 350,
    conversion_price: 780,
  },
];

export default function Recharts() {
  return (
    <LineChart
      width={600}
      height={350}
      data={data}
      margin={{
        top: 5,
        right: 10,
        left: 10,
        bottom: 10,
      }}
    >
      {/* チャートの背景グリッド表示 */}
      <CartesianGrid stroke="#e0e0e0" strokeDasharray="5 3" />

      {/* X 軸のカスタマイズ（ラベルの角度、位置、スタイル） */}
      <XAxis
        dataKey="day"
        angle={45}
        tick={(props) => (
          <text
            x={props.x - 20} // x座標
            y={props.y + 10} // y座標
            textAnchor="start" // アンカーポイントの設定（"start" または "end" で右寄せのラベルに設定）
            fontSize={16} // フォントサイズ
            fill="#fff" // フォントの色
            transform={`rotate(${0},${props.x},${props.y})`} // ラベルを回転
          >
            {props.payload.value}
          </text>
        )}
      />

      {/* Y 軸のカスタマイズ（ラベルの位置、スタイル） */}
      <YAxis
        tick={({ x, y, payload }) => (
          <text
            x={x}
            y={y}
            textAnchor="end" // アンカーポイントの設定（"end" で右寄せのラベルに設定）
            fontSize={16} //フォントサイズ
            fill="#fff" //フォントの色
          >
            {payload.value}
          </text>
        )}
      />

      {/* ホバー時の情報表示用のツールチップ */}
      <Tooltip />

      {/* チャートの凡例表示 */}
      <Legend verticalAlign="top" height={36} />

      {/* 'local_price' データ用のライン */}
      <Line
        type="monotone" // ラインのタイプ（"monotone" は単調増加のライン）
        dataKey="local_price" // 使用するデータのキー
        stroke="#8884d8" // ラインの色
        strokeWidth="5" // ラインの太さ
        activeDot={{ r: 8 }} // ハイライト表示のドットの設定
        name="ガパオライス(タイバーツ)" // 凡例に表示される名前
      />

      {/* 'conversion_price' データ用のライン */}
      <Line
        type="monotone" // ラインのタイプ（"monotone" は単調増加のライン）
        dataKey="conversion_price" // 使用するデータのキー
        stroke="#82ca9d" // ラインの色
        strokeWidth="5" // ラインの太さ
        activeDot={{ r: 8 }} // ハイライト表示のドットの設定
        name="ガパオライス(日本円)" // 凡例に表示される名前
      />
    </LineChart>
  );
}