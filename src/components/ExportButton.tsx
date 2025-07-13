"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Download,
  Loader2,
  CheckCircle,
  ImageIcon,
  FileImage,
} from "lucide-react";

type Props = {
  canvasRef: React.RefObject<HTMLDivElement | null>;
  disabled?: boolean;
};

export function ExportButton({ canvasRef, disabled = false }: Props) {
  const [isExporting, setIsExporting] = useState(false);
  const [exportSuccess, setExportSuccess] = useState(false);
  const [format, setFormat] = useState<string>("png");
  const [resolution, setResolution] = useState<string>("1920x1080");

  const formats = [
    { value: "png", label: "PNG (Transparent)", icon: ImageIcon },
    { value: "jpg", label: "JPG (Compressed)", icon: FileImage },
  ];

  const resolutions = [
    { value: "1920x1080", label: "Full HD (1920×1080)" },
    { value: "1280x720", label: "HD (1280×720)" },
    { value: "3840x2160", label: "4K (3840×2160)" },
    { value: "1080x1080", label: "Square (1080×1080)" },
  ];

  const handleExport = async () => {
    if (!canvasRef.current || disabled) return;

    setIsExporting(true);
    setExportSuccess(false);

    try {
      const canvas = canvasRef.current.querySelector("canvas");
      if (!canvas) throw new Error("Canvas not found");

      const [width, height] = resolution.split("x").map(Number);
      const tempCanvas = document.createElement("canvas");
      tempCanvas.width = width;
      tempCanvas.height = height;
      const ctx = tempCanvas.getContext("2d")!;

      ctx.drawImage(canvas, 0, 0, width, height);

      const mimeType = format === "jpg" ? "image/jpeg" : `image/${format}`;
      const link = document.createElement("a");
      link.download = `3d-logo-${new Date()
        .toISOString()
        .slice(0, 10)}.${format}`;
      link.href = tempCanvas.toDataURL(mimeType, 0.9);
      link.click();

      setExportSuccess(true);
      setTimeout(() => setExportSuccess(false), 3000);
    } catch (err) {
      console.error("Export failed:", err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4">
        <div className="space-y-3">
          <Label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            Export Format
          </Label>
          <Select value={format} onValueChange={setFormat}>
            <SelectTrigger className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {formats.map((f) => (
                <SelectItem key={f.value} value={f.value}>
                  <div className="flex items-center gap-2">
                    <f.icon className="h-4 w-4" />
                    {f.label}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          <Label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            Resolution
          </Label>
          <Select value={resolution} onValueChange={setResolution}>
            <SelectTrigger className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {resolutions.map((r) => (
                <SelectItem key={r.value} value={r.value}>
                  {r.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button
        onClick={handleExport}
        disabled={disabled || isExporting}
        className={`w-full h-12 text-base font-semibold transition-all duration-300 ${
          exportSuccess
            ? "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 shadow-lg shadow-green-500/25"
            : "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30"
        } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {isExporting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Exporting...
          </>
        ) : exportSuccess ? (
          <>
            <CheckCircle className="mr-2 h-5 w-5" />
            Downloaded!
          </>
        ) : (
          <>
            <Download className="mr-2 h-5 w-5" />
            Export {format.toUpperCase()}
          </>
        )}
      </Button>
    </div>
  );
}
