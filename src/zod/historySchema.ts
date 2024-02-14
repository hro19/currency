import { z } from "zod";

export const historySchema = z.object({
  price: z.number().min(0.0001, { message: "0.0001以上を入力してください" }),
  itemId: z.number(),
  rate: z.number().min(0, { message: "0以上を入力してください" }),
  inverseRate: z.number().min(0, { message: "0以上を入力してください" }),
});

export type TypehistorySchema = z.infer<typeof historySchema>;