import { vi } from "vitest";

export const useI18n = () => {
  return {
    t: vi.fn((key: string) => key),
  };
};