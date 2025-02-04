import { vi } from "vitest";

export const useRouter = vi.fn(() => {
  return {
    push: (path: string) => path,
  };
});

export const useRoute = vi.fn(() => {
  return {
    path: "",
  };
});