import { z } from "zod";

export const inquirySchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.email().max(254),
  phone: z.string().trim().max(30).optional(),
  message: z.string().trim().min(10).max(5000),
  website: z.string().max(0).optional(),
});

export type InquiryData = z.infer<typeof inquirySchema>;
