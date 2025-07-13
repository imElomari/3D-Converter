import React, { useState, useCallback } from "react";
import { HexColorPicker, RgbColorPicker, type RgbColor } from "react-colorful";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Check, Palette } from "lucide-react";

interface BackgroundSelectorProps {
  selectedColor: string;
  onColorChange: (color: string) => void;
}


type PickerType = "hex" | "rgb";

const QUICK_COLORS: string[] = [
  "#ef4444",
  "#f97316",
  "#f59e0b",
  "#eab308",
  "#84cc16",
  "#22c55e",
  "#10b981",
  "#14b8a6",
  "#06b6d4",
  "#0ea5e9",
  "#3b82f6",
  "#6366f1",
  "#8b5cf6",
  "#a855f7",
  "#d946ef",
  "#ec4899",
];

// Utility functions
const hexToRgb = (hex: string): RgbColor => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
};

const rgbToHex = (rgb: RgbColor): string => {
  return `#${rgb.r.toString(16).padStart(2, "0")}${rgb.g
    .toString(16)
    .padStart(2, "0")}${rgb.b.toString(16).padStart(2, "0")}`;
};

const isValidHex = (hex: string): boolean => {
  return /^#[0-9A-Fa-f]{6}$/.test(hex);
};

export function BackgroundSelector({
  onColorChange,
}: BackgroundSelectorProps) {
  const [customColor, setCustomColor] = useState("#3b82f6");
  const [isCustomSelected, setIsCustomSelected] = useState(false);
  const [showCustomPicker, setShowCustomPicker] = useState(false);
  const [pickerType, setPickerType] = useState<PickerType>("hex");
  const [rgbColor, setRgbColor] = useState<RgbColor>(hexToRgb("#3b82f6"));

  const handleCustomColorToggle = useCallback(() => {
    setIsCustomSelected(true);
    setShowCustomPicker(!showCustomPicker);
    onColorChange(customColor);
  }, [customColor, showCustomPicker, onColorChange]);

  const handleCustomColorChange = useCallback(
    (color: string) => {
      setCustomColor(color);
      setIsCustomSelected(true);

      if (isValidHex(color)) {
        setRgbColor(hexToRgb(color));
      }

      onColorChange(color);
    },
    [onColorChange]
  );

  const handleRgbColorChange = useCallback(
    (rgb: RgbColor) => {
      setRgbColor(rgb);
      const hex = rgbToHex(rgb);
      setCustomColor(hex);
      setIsCustomSelected(true);
      onColorChange(hex);
    },
    [onColorChange]
  );

  const handleHexInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (value.match(/^#[0-9A-Fa-f]{0,6}$/)) {
        handleCustomColorChange(value);
      }
    },
    [handleCustomColorChange]
  );

  const handleQuickColorSelect = useCallback(
    (color: string) => {
      handleCustomColorChange(color);
    },
    [handleCustomColorChange]
  );

  return (
    <div className="space-y-4">

      {/* Custom Color Section */}
      <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 space-y-4">
        <button
          onClick={handleCustomColorToggle}
          className={`w-full relative p-3 rounded-lg border-2 transition-all text-left hover:scale-[1.02] ${
            isCustomSelected
              ? "border-blue-500 bg-blue-50 dark:bg-blue-950/20 shadow-lg"
              : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <div
                className="w-8 h-8 rounded-lg shadow-inner border border-gray-300 dark:border-gray-600"
                style={{ backgroundColor: customColor }}
              />
              <div className="absolute inset-0 w-8 h-8 rounded-lg bg-gradient-to-br from-transparent via-white/20 to-transparent" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                Custom Color
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                {customColor.toUpperCase()}
              </p>
            </div>
            <Palette className="h-4 w-4 text-gray-500" />
          </div>

          {isCustomSelected && (
            <div className="absolute top-2 right-2 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
              <Check className="h-3 w-3 text-white" />
            </div>
          )}
        </button>

        {/* Color Picker */}
        {showCustomPicker && (
          <div className="space-y-4">
            {/* Picker Type Toggle */}
            <div className="flex gap-2">
              <Button
                variant={pickerType === "hex" ? "default" : "outline"}
                size="sm"
                onClick={() => setPickerType("hex")}
                className="flex-1"
              >
                HEX
              </Button>
              <Button
                variant={pickerType === "rgb" ? "default" : "outline"}
                size="sm"
                onClick={() => setPickerType("rgb")}
                className="flex-1"
              >
                RGB
              </Button>
            </div>

            {/* Color Picker */}
            <div className="relative">
              <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
                {pickerType === "hex" ? (
                  <HexColorPicker
                    color={customColor}
                    onChange={handleCustomColorChange}
                    style={{ width: "100%", height: "200px" }}
                  />
                ) : (
                  <RgbColorPicker
                    color={rgbColor}
                    onChange={handleRgbColorChange}
                    style={{ width: "100%", height: "200px" }}
                  />
                )}
              </div>
            </div>

            {/* Color Preview and Hex Input */}
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-lg border border-gray-300 dark:border-gray-600 shadow-inner ring-2 ring-offset-2 ring-offset-white dark:ring-offset-slate-800 ring-gray-200 dark:ring-gray-600"
                style={{ backgroundColor: customColor }}
              />
              <div className="flex-1">
                <input
                  type="text"
                  value={customColor}
                  onChange={handleHexInputChange}
                  placeholder="#3b82f6"
                  className="w-full px-3 py-2 text-sm font-mono border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            {/* Quick Color Swatches */}
            <div className="space-y-2">
              <Label className="text-xs font-medium text-gray-600 dark:text-gray-400">
                Quick Colors
              </Label>
              <div className="grid grid-cols-8 gap-2">
                {QUICK_COLORS.map((color) => (
                  <button
                    key={color}
                    onClick={() => handleQuickColorSelect(color)}
                    className="w-6 h-6 rounded-md border border-gray-300 dark:border-gray-600 hover:scale-110 transition-transform"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              Use the color picker, quick swatches, or enter a hex code manually
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
