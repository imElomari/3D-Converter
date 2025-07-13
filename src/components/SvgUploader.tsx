"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Upload, FileText, CheckCircle, X, AlertCircle } from "lucide-react";

type Props = {
  onUpload: (svg: string) => void;
  depth: number;
  onDepthChange: (depth: number) => void;
  autoRotate: boolean;
  onAutoRotateChange: (autoRotate: boolean) => void;
};

export function SvgUploader({
  onUpload,
  depth,
  onDepthChange,
  autoRotate,
  onAutoRotateChange,
}: Props) {
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = Array.from(e.dataTransfer.files);
    const svgFile = files.find(
      (file) => file.type === "image/svg+xml" || file.name.endsWith(".svg")
    );

    if (svgFile) {
      processFile(svgFile);
    } else {
      setError("Please upload a valid SVG file");
    }
  };

  const processFile = (file: File) => {
    setError(null);
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const svgContent = e.target?.result as string;
        if (svgContent.includes("<svg") && svgContent.includes("</svg>")) {
          onUpload(svgContent);
          setFileName(file.name);
        } else {
          setError("Invalid SVG file format");
        }
      } catch {
        setError("Failed to read the file");
      }
    };
    reader.onerror = () => {
      setError("Failed to read the file");
    };
    reader.readAsText(file);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type === "image/svg+xml" || file.name.endsWith(".svg")) {
        processFile(file);
      } else {
        setError("Please select an SVG file");
      }
    }
  };

  const clearFile = () => {
    setFileName(null);
    setError(null);
    onUpload("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  return (
    <div className="space-y-4">
      {/* Upload Area */}
      <div
        className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
          dragActive
            ? "border-blue-400 bg-blue-50 dark:bg-blue-950/20"
            : fileName
            ? "border-green-400 bg-green-50 dark:bg-green-950/20"
            : error
            ? "border-red-400 bg-red-50 dark:bg-red-950/20"
            : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        {fileName && (
          <button
            onClick={clearFile}
            className="absolute top-2 right-2 p-1 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
            title="Remove file"
          >
            <X className="h-4 w-4" />
          </button>
        )}

        {error ? (
          <div className="space-y-2">
            <AlertCircle className="h-8 w-8 text-red-500 mx-auto" />
            <p className="text-sm font-medium text-red-700 dark:text-red-400">
              {error}
            </p>
          </div>
        ) : fileName ? (
          <div className="space-y-2">
            <CheckCircle className="h-8 w-8 text-green-500 mx-auto" />
            <p className="text-sm font-medium text-green-700 dark:text-green-400">
              {fileName}
            </p>
            <p className="text-xs text-green-600 dark:text-green-400">
              Ready for 3D conversion
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            <FileText className="h-8 w-8 text-gray-400 mx-auto" />
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Drop your SVG here
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              or click to browse
            </p>
          </div>
        )}

        <Button
          variant="outline"
          size="sm"
          onClick={() => fileInputRef.current?.click()}
          className="mt-3"
        >
          <Upload className="h-4 w-4 mr-2" />
          {fileName ? "Change File" : "Browse Files"}
        </Button>

        <input
          ref={fileInputRef}
          type="file"
          accept=".svg,image/svg+xml"
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>

      {/* Depth Control */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">3D Depth</Label>
          <span className="text-sm text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
            {depth}px
          </span>
        </div>
        <Slider
          value={[depth]}
          onValueChange={([value]) => onDepthChange(value)}
          min={1}
          max={50}
          step={1}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>Flat</span>
          <span>Deep</span>
        </div>
      </div>

      {/* Auto Rotate Control */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">Auto Rotate</Label>
          <Switch checked={autoRotate} onCheckedChange={onAutoRotateChange} />
        </div>
        <p className="text-xs text-gray-500">
          Automatically rotate the 3D model
        </p>
      </div>
    </div>
  );
}
