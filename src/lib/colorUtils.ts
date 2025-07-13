import type { RgbColor } from "react-colorful";

export const QUICK_COLORS: string[] = [
  "#ef4444", // red-500
  "#f97316", // orange-500
  "#f59e0b", // amber-500
  "#eab308", // yellow-500
  "#84cc16", // lime-500
  "#22c55e", // green-500
  "#10b981", // emerald-500
  "#14b8a6", // teal-500
  "#06b6d4", // cyan-500
  "#0ea5e9", // sky-500
  "#3b82f6", // blue-500
  "#6366f1", // indigo-500
  "#8b5cf6", // violet-500
  "#a855f7", // purple-500
  "#d946ef", // fuchsia-500
  "#ec4899", // pink-500
];

/**
 * Convert hex color to RGB color object
 */
export const hexToRgb = (hex: string): RgbColor => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
};

/**
 * Convert RGB color object to hex string
 */
export const rgbToHex = (rgb: RgbColor): string => {
  return `#${rgb.r.toString(16).padStart(2, "0")}${rgb.g
    .toString(16)
    .padStart(2, "0")}${rgb.b.toString(16).padStart(2, "0")}`;
};

/**
 * Validate if a string is a valid hex color
 */
export const isValidHex = (hex: string): boolean => {
  return /^#[0-9A-Fa-f]{6}$/.test(hex);
};
