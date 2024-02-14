import { z } from "zod";
import {
  nameSchema,
  priceSchema,
  currencyCodeSchema,
  rateSchema,
  inverseRateSchema,
  userEmailSchema,
} from "./field";

export const itemSchema = z.object({
  ...nameSchema.shape,
  ...priceSchema.shape,
  ...currencyCodeSchema.shape,
  ...rateSchema.shape,
  ...inverseRateSchema.shape,
  ...userEmailSchema.shape,
});

export type TypeitemSchema = z.infer<typeof itemSchema>;