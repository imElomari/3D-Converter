"use client";

import { Button } from "@/components/ui/button";
import {
  Box,
  Upload,
  Settings,
  Download,
  ArrowRight,
  Layers,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ThreeText } from "@/components/ThreeText";
import FooterNavbar from "@/components/FooterNavbar";

export default function Home() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Upload className="h-5 w-5" />,
      title: "Simple Upload",
      description: "Drag & drop your SVG files",
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: "Real-time 3D",
      description: "See changes instantly",
    },
    {
      icon: <Settings className="h-5 w-5" />,
      title: "Professional Materials",
      description: "Chrome, gold, wood & more",
    },
    {
      icon: <Download className="h-5 w-5" />,
      title: "Multiple Formats",
      description: "PNG, JPG",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-200/20 dark:border-gray-700/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Box className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  Zed
                </span>
              </div>
            </div>
           
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
                  onClick={() => navigate("/logoConverter")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-4 group"
                >
                  Start Creating
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Right Column - Dynamic 3D Experience */}
            <div className="relative threejs-preview h-[700px]">
              {/* Enhanced 3D Text - Full Integration */}
              <div className="absolute inset-0 z-10">
                <ThreeText
                  text="Zed"
                  color={0x87ceeb}
                  size={20}
                  depth={12}
                  enableControls={true}
                  autoRotate={true}
                  interactive={true}
                  material="chrome"
                  cinematic={true}
                  className="w-full h-full"
                />
              </div>

              {/* Enhanced Floating Elements with Better Positioning */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/3 -left-10 w-20 h-20 bg-gradient-to-br from-cyan-500/15 to-blue-500/15 rounded-full blur-2xl animate-bounce delay-500"></div>
              <div className="absolute top-2/3 -right-6 w-24 h-24 bg-gradient-to-br from-indigo-500/15 to-purple-500/15 rounded-full blur-2xl animate-pulse delay-700"></div>

              {/* Additional atmospheric effects */}
              <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 rounded-full blur-xl animate-ping delay-300"></div>
              <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-gradient-to-br from-violet-400/10 to-fuchsia-400/10 rounded-full blur-2xl animate-pulse delay-1500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/20 to-purple-50/20 dark:from-gray-800 dark:via-blue-950/20 dark:to-purple-950/20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100/80 dark:bg-blue-900/30 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-200/50 dark:border-blue-800/50 mb-6">
              <Layers className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="text-blue-700 dark:text-blue-300 text-sm font-medium">
                Powerful Features
              </span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Everything You Need for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                3D Excellence
              </span>
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Professional tools and materials to transform your SVG
              logos into stunning 3D models with cinema-quality results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300/50 dark:hover:border-blue-600/50 hover:-translate-y-2"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                    {feature.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterNavbar />
    </div>
  );
}
