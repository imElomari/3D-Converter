"use client";

import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { PreviewPanel } from "@/components/PreviewPanel";
import { SidePanel } from "@/components/side-panel";
import {
  MaterialSelector,
  type MaterialType,
} from "@/components/MaterialSelector";
import { ExportButton } from "@/components/ExportButton";
import { SvgUploader } from "@/components/SvgUploader";
import { AppHeader } from "@/components/AppHeader";
import { BackgroundSelector } from "@/components/BackgroundSelector";
import { Upload, Settings, Download, Palette } from "lucide-react";

export default function AppMain() {
  const [svg, setSvg] = useState<string | null>(null);
  const [depth, setDepth] = useState<number>(8);
  const [selectedMaterial, setSelectedMaterial] =
    useState<MaterialType>("liquid-chrome");
  const [backgroundColor, setBackgroundColor] = useState<string>("#f8fafc");
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const canvasRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/20 to-indigo-50/30 dark:from-gray-900 dark:via-blue-950/20 dark:to-indigo-950/30">
      <AppHeader onBack={() => navigate("/")} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[calc(100vh-120px)]">
          {/* Sidebar Controls */}
          <div className="lg:col-span-4 xl:col-span-3 space-y-4">
            <div className="sticky top-6 space-y-4">
              {/* Upload Section */}
              <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-slate-700/50 p-6 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Upload className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Upload SVG
                  </h3>
                </div>
                <SvgUploader
                  onUpload={setSvg}
                  depth={depth}
                  onDepthChange={setDepth}
                  autoRotate={autoRotate}
                  onAutoRotateChange={setAutoRotate}
                />
              </div>
              {/* Background Section */}
              <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-slate-700/50 p-6 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Palette className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Background
                  </h3>
                </div>
                <BackgroundSelector
                  selectedColor={backgroundColor}
                  onColorChange={setBackgroundColor}
                />
              </div>

              {/* Material Section */}
              <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-slate-700/50 p-6 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Settings className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Material
                  </h3>
                </div>
                <MaterialSelector
                  selectedMaterial={selectedMaterial}
                  onMaterialChange={setSelectedMaterial}
                />
              </div>

              {/* Export Section */}
              <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-slate-700/50 p-6 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                    <Download className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Export
                  </h3>
                </div>
                <ExportButton canvasRef={canvasRef} disabled={!svg} />
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="lg:col-span-8 xl:col-span-9">
            <div className="h-full min-h-[600px]">
              <PreviewPanel
                svg={svg}
                depth={depth}
                material={selectedMaterial}
                backgroundColor={backgroundColor}
                autoRotate={autoRotate}
                canvasRef={canvasRef}
              />
            </div>
          </div>
        </div>
      </main>

      <SidePanel />
    </div>
  );
}
