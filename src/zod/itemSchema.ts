import { z } from "zod";

export const itemSchema = z.object({
  name: z.string().min(1, { message: "1文字以上を入力してください" }),
  price: z.number().min(0.0001, { message: "0.0001以上を入力してください" }),
});

export type TypeitemSchema = z.infer<typeof itemSchema>;