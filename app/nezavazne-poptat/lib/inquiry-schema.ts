import { z } from "zod";
import { BUDGET_OPTIONS, SERVICE_OPTIONS } from "./inquiry-config";

const serviceValues = SERVICE_OPTIONS.map((option) => option.value);
const budgetValues = BUDGET_OPTIONS.map((option) => option.value);

export const inquirySchema = z.object({
  name: z.string().trim().min(2).max(100),

  email: z.email().max(254),

  serviceType: z
    .string()
    .refine((value) => serviceValues.some((service) => service === value)),

  message: z.string().trim().min(10).max(5000),

  phone: z.string().trim().max(30).optional(),

  budget: z
    .string()
    .refine((value) => budgetValues.some((budget) => budget === value))
    .optional(),

  websiteUrl: z.union([z.url(), z.literal("")]).optional(),

  timeframe: z.string().trim().max(100).optional(),

  website: z.string().optional(),
});

export type InquiryData = z.infer<typeof inquirySchema>;

export type InquiryPayload = Omit<InquiryData, "website">;
