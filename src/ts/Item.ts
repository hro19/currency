export type Item = {
  id: number;
  name: string;
  currencyCode: CurrencyCode; // この部分はCurrencyCodeの型定義に置き換える必要があります
  created_at: Date;
  updated_at: Date;
  histories: ItemHistory[];
  userEmail: string;
};

export type CurrencyCode = ["php", "thb"];

export type ItemHistory = {
  id: number;
  price: number;
  rate: number;
  inverseRate: number;
  created_at: Date;
  updated_at: Date;
  itemId: number;
};

export type ItemFormData = {
  name: string;
  price: number;
  currencyCode: string;
  rate: number;
  inverseRate: number;
  userEmail: string;
};