"use client";

import React from "react";
import { forwardRef } from "react";
import { ThreeCanvas } from "@/components/ThreeCanvas";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Box, Layers } from "lucide-react";
import type { MaterialType } from "@/components/MaterialSelector";

type Props = {
  svg: string | null;
  depth: number;
  material: MaterialType;
  backgroundColor?: string;
  autoRotate?: boolean;
  rotationSpeed?: number;
  canvasRef: React.RefObject<HTMLDivElement | null>;
};

export const PreviewPanel = forwardRef<HTMLDivElement, Props>(
  (
    {
      svg,
      depth,
      material,
      backgroundColor,
      autoRotate,
      rotationSpeed,
      canvasRef,
    },
    ref
  ) => {
    return (
      <Card
        ref={ref}
        className="h-full min-h-[600px] transition-all duration-500 border border-gray-200/50 dark:border-slate-700/50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-xl hover:shadow-2xl"
      >
        <CardHeader className="border-b border-gray-200/50 dark:border-slate-700/50 bg-gradient-to-r from-gray-50/80 to-white/80 dark:from-slate-800/80 dark:to-slate-900/80 backdrop-blur-sm p-6">
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur-lg opacity-30 animate-pulse"></div>
                <div className="relative p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl shadow-lg">
                  <Layers className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <span className="text-2xl bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent font-bold">
                  3D Preview
                </span>
                <CardDescription className="text-slate-600 dark:text-slate-400 mt-1">
                  Interactive 3D model with real-time material preview
                </CardDescription>
              </div>
            </div>
            {svg && (
              <Badge
                variant="outline"
                className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800 shadow-sm px-4 py-2"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Live Preview
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 relative flex-1">
          {svg ? (
            <div className="relative h-full min-h-[500px]">
              <ThreeCanvas
                ref={canvasRef}
                svgText={svg}
                depth={depth}
                material={material}
                backgroundColor={backgroundColor}
                autoRotate={autoRotate}
                rotationSpeed={rotationSpeed}
              />

              {/* Subtle Overlay Gradients */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/5 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/5 to-transparent"></div>
              </div>
            </div>
          ) : (
            <div className="h-full min-h-[500px] flex items-center justify-center bg-gradient-to-br from-slate-50/50 to-blue-50/30 dark:from-slate-800/50 dark:to-slate-700/30 m-6 rounded-2xl border-2 border-dashed border-slate-300/50 dark:border-slate-600/50 transition-all duration-300 hover:border-blue-400/50 dark:hover:border-blue-500/50">
              <div className="text-center space-y-8 max-w-md px-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                  <Box className="relative h-24 w-24 text-slate-400 dark:text-slate-500 mx-auto" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-700 to-slate-500 dark:from-slate-300 dark:to-slate-400 bg-clip-text text-transparent">
                    Upload an SVG to get started
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Drag and drop your SVG file or use the upload button to
                    transform your 2D design into an interactive 3D model.
                  </p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    );
  }
);

PreviewPanel.displayName = "PreviewPanel";
