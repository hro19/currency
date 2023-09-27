export type Currency = {
  code: string;
  alphaCode: string;
  numericCode: string;
  name: string;
  rate: number;
  date: string; //ISO 8601 形式
  inverseRate: number;
};

export type CurrencyObj = {
  [currencyCode: string]: Currency;
};

//メインで使う要素+日本語訳を付ける
// jp_codeがJPY → 日本　　　　jp_codeがUSD → アメリカ合衆国
// jp_nameがJapanese Yen → 円　　　jp_nameがu.s Dollar → ドル
type CurrencyJaUnion = "jp_code" | "jp_name";  
export type CurrencyAddJa = Currency & Record<CurrencyJaUnion, string>;
