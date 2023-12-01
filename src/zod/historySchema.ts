import { z } from "zod";

export const historySchema = z.object({
  price: z.number().min(1, { message: "1以上を入力してください" }),
  itemId: z.number(),
  rate: z
    .number()
    .step(0.01, { message: "少数２桁までで入力してください" })
    .min(0, { message: "0以上を入力してください" }),
    inverseRate: z.number()
        .step(0.01, { message: "少数２桁までで入力してください" })
        .min(0, { message: "0以上を入力してください" }),
});

export type TypehistorySchema = z.infer<typeof historySchema>;