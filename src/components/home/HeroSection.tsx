"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ThreeText } from "@/components/ThreeText";

interface HeroSectionProps {
  onNavigateToConverter: () => void;
}

export function HeroSection({ onNavigateToConverter }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 dark:from-gray-900 dark:via-blue-950/30 dark:to-indigo-950/40">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-300/30 to-purple-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-gradient-to-r from-cyan-300/25 to-blue-300/25 rounded-full blur-2xl animate-bounce delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 relative z-10">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Transform Your{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                    SVG Logos
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-full"></div>
                </span>{" "}
                into Stunning 3D
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
                Upload your 2D SVG logos and watch them come to life in 3D.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={onNavigateToConverter}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-4 group"
              >
                Start Creating
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Column - 3D Preview */}
          <div className="relative lg:h-[600px] h-[400px] flex items-center justify-center">
            <div className="relative w-full h-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl backdrop-blur-3xl border border-white/20 dark:border-gray-700/20"></div>
              <div className="relative z-10 w-full h-full p-6">
                <ThreeText
                  text="LOGO"
                  material="liquid-chrome"
                  size={24}
                  depth={6}
                  autoRotate={true}
                  className="w-full h-full"
                  cinematic={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
