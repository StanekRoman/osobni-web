"use client";

import { useRef, useState, type SubmitEvent } from "react";
import {
  ALLOWED_FILE_TYPES,
  FIELD_ERROR_MESSAGES,
  MAX_FILE_SIZE,
} from "../lib/inquiry-config";
import { inquirySchema, type InquiryData } from "../lib/inquiry-schema";

type FieldName = keyof InquiryData;

export type InquiryFormErrors = Partial<
  Record<FieldName | "attachment", string>
>;

function getString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value : undefined;
}

function validateAttachment(file: File | null): string | undefined {
  if (!file || file.size === 0) {
    return undefined;
  }

  if (file.size > MAX_FILE_SIZE) {
    return "Příloha může mít maximálně 5 MB.";
  }

  const extension = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();

  const allowedExtensions = ALLOWED_FILE_TYPES[file.type];

  if (!allowedExtensions?.includes(extension)) {
    return "Povolené formáty jsou PDF, DOCX, PNG a JPG.";
  }

  return undefined;
}

export function useInquiryForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const [errors, setErrors] = useState<InquiryFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function clearFieldError(field: keyof InquiryFormErrors) {
    setErrors((current) => {
      if (!current[field]) {
        return current;
      }

      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setErrors({});
    setSubmitError(null);

    const formData = new FormData(event.currentTarget);

    const values = {
      name: getString(formData, "name"),
      email: getString(formData, "email"),
      serviceType: getString(formData, "serviceType"),
      message: getString(formData, "message"),
      phone: getString(formData, "phone"),
      budget: getString(formData, "budget"),
      websiteUrl: getString(formData, "websiteUrl"),
      timeframe: getString(formData, "timeframe"),
      website: getString(formData, "website"),
    };

    const parsed = inquirySchema.safeParse(values);
    const nextErrors: InquiryFormErrors = {};

    if (!parsed.success) {
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as FieldName;

        if (!nextErrors[field]) {
          nextErrors[field] =
            FIELD_ERROR_MESSAGES[field as keyof typeof FIELD_ERROR_MESSAGES] ??
            "Zkontrolujte vyplněnou hodnotu.";
        }
      }
    }

    const attachmentValue = formData.get("attachment");

    const attachment =
      attachmentValue instanceof File && attachmentValue.size > 0
        ? attachmentValue
        : null;

    const attachmentError = validateAttachment(attachment);

    if (attachmentError) {
      nextErrors.attachment = attachmentError;
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    if (!parsed.success) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        body: formData,
      });

      const result: unknown = await response.json();

      if (!response.ok) {
        const message =
          typeof result === "object" &&
          result !== null &&
          "error" in result &&
          typeof result.error === "string"
            ? result.error
            : "Poptávku se nepodařilo odeslat.";

        throw new Error(message);
      }

      formRef.current?.reset();
      setIsSuccess(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Poptávku se nepodařilo odeslat. Zkuste to znovu.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function resetSuccess() {
    setIsSuccess(false);
    setErrors({});
    setSubmitError(null);
  }

  return {
    formRef,
    errors,
    isSubmitting,
    isSuccess,
    submitError,
    handleSubmit,
    clearFieldError,
    resetSuccess,
  };
}
