import { z } from "zod";
import {
  priceSchema,
  itemIdSchema,
  rateSchema,
  inverseRateSchema,
} from "./field";

export const historySchema = z.object({
  ...priceSchema.shape,
  ...itemIdSchema.shape,
  ...rateSchema.shape,
  ...inverseRateSchema.shape,
});

export type TypehistorySchema = z.infer<typeof historySchema>;