import create from "zustand";
import { National } from "@/ts/Currency";

type useNationalType = {
  currentNational: National;
  setCurrentNational: (national: National) => void;
};

export const useNational = create<useNationalType>((set) => ({
  currentNational: "usd",
  setCurrentNational: (national) => set((state) => ({ currentNational: national })),
}));


export const NATIONAL: National[] = [
  "aud",
  "cny",
  "krw",
  "thb",
  "twd",
  "vnd",
  "jpy",
  "php",
  "usd",
];

export const NATIONALexceptJap: National[] = NATIONAL.filter(
  (national: National) => national !== "jpy"
);

export const NATIONAL_i18n = {
  aud: {
    name: {
      ja: "オーストラリア",
    },
    currencyName: {
      ja: "オーストラリアドル",
    },
  },
  cny: {
    name: {
      ja: "中国",
    },
    currencyName: {
      ja: "中国元",
    },
  },
  krw: {
    name: {
      ja: "韓国",
    },
    currencyName: {
      ja: "韓国ウォン",
    },
  },
  thb: {
    name: {
      ja: "タイ",
    },
    currencyName: {
      ja: "タイバーツ",
    },
  },
  twd: {
    name: {
      ja: "台湾",
    },
    currencyName: {
      ja: "台湾ドル",
    },
  },
  vnd: {
    name: {
      ja: "ベトナム",
    },
    currencyName: {
      ja: "ベトナムドン",
    },
  },
  jpy: {
    name: {
      ja: "日本",
    },
    currencyName: {
      ja: "日本円",
    },
  },
  php: {
    name: {
      ja: "フィリピン",
    },
    currencyName: {
      ja: "フィリピンペソ",
    },
  },
  usd: {
    name: {
      ja: "アメリカ合衆国",
    },
    currencyName: {
      ja: "アメリカドル",
    },
  },
};
