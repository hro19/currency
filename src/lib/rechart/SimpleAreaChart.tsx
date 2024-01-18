"use client";

import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

export default function Recharts({ graphData, currencyName, currencyLineColor, jpyLineColor }: any) {
  return (
    <LineChart
      width={600}
      height={350}
      data={graphData}
      margin={{
        top: 5,
        right: 10,
        left: 10,
        bottom: 10,
      }}
    >
      {/* チャートの背景グリッド表示 */}
      <CartesianGrid stroke="#fff" strokeDasharray="5 3" />

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
        stroke={currencyLineColor} // ラインの色
        strokeWidth="5" // ラインの太さ
        activeDot={{ r: 8 }} // ハイライト表示のドットの設定
        name={currencyName} // 凡例に表示される名前
      />

      {/* 'conversion_price' データ用のライン */}
      <Line
        type="monotone" // ラインのタイプ（"monotone" は単調増加のライン）
        dataKey="jpy_price" // 使用するデータのキー
        stroke={jpyLineColor} // ラインの色
        strokeWidth="5" // ラインの太さ
        activeDot={{ r: 8 }} // ハイライト表示のドットの設定
        name="日本円" // 凡例に表示される名前
      />
    </LineChart>
  );
}