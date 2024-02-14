import { create } from "zustand";
import { National } from "@/ts/Currency";

type useNationalType = {
  currentNational: National;
  setCurrentNational: (national: National) => void;
};

export const useNational = create<useNationalType>((set) => ({
  currentNational: "usd",
  setCurrentNational: (national) => set(() => ({ currentNational: national })),
}));

export const NATIONAL = [
  "aud",
  "cny",
  "krw",
  "thb",
  "twd",
  "vnd",
  "jpy",
  "php",
  "usd",
] as const;

export const NATIONALexceptJap: National[] = NATIONAL.filter(
  (national: National) => national !== "jpy"
);

export const NATIONAL_i18n: any = {
  aud: {
    name: {
      ja: "オーストラリア",
    },
    currencyName: {
      ja: "ドル",
    },
  },
  cny: {
    name: {
      ja: "中国",
    },
    currencyName: {
      ja: "元",
    },
  },
  krw: {
    name: {
      ja: "韓国",
    },
    currencyName: {
      ja: "ウォン",
    },
  },
  thb: {
    name: {
      ja: "タイ",
    },
    currencyName: {
      ja: "バーツ",
    },
  },
  twd: {
    name: {
      ja: "台湾",
    },
    currencyName: {
      ja: "ドル",
    },
  },
  vnd: {
    name: {
      ja: "ベトナム",
    },
    currencyName: {
      ja: "ドン",
    },
  },
  jpy: {
    name: {
      ja: "日本",
    },
    currencyName: {
      ja: "円",
    },
  },
  php: {
    name: {
      ja: "フィリピン",
    },
    currencyName: {
      ja: "ペソ",
    },
  },
  usd: {
    name: {
      ja: "アメリカ合衆国",
    },
    currencyName: {
      ja: "ドル",
    },
  },
};
