import { z } from "zod";
import { NATIONAL } from "@/zustand/national";

export const nameSchema = z.object({
  name: z.string().min(1, { message: "1文字以上を入力してください" }),
});

export const priceSchema = z.object({
  price: z.number().min(0.0001, { message: "0.0001以上を入力してください" }),
});

export const itemIdSchema = z.object({
  itemId: z.number(),
});

export const rateSchema = z.object({
  rate: z.number().min(0, { message: "0以上を入力してください" }),
});

export const inverseRateSchema = z.object({
  inverseRate: z.number().min(0, { message: "0以上を入力してください" }),
});

export const currencyCodeSchema = z.object({
  currencyCode: z.enum(NATIONAL),
});

export const userEmailSchema = z.object({
  userEmail: z.string(),
});