import { z } from "zod";

export const nameSchema = z.object({
  name: z.string().min(1, { message: "1文字以上を入力してください" }),
});

export const priceSchema = z.object({
  price: z.number().min(0.0001, { message: "0.0001以上を入力してください" }),
});

export const itemSchema = z.object({
  ...nameSchema.shape,
  ...priceSchema.shape,
});

export type TypeitemSchema = z.infer<typeof itemSchema>;