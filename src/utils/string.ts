const isAtLeast = (min: number, text: string): boolean => {
  return text.trim().length >= min;
};

const isAtMost = (max: number, text: string): boolean => {
  return text.trim().length <= max;
};

export const TextUtils = {
  isAtLeast,
  isAtMost,
};
