"use client";

import { Upload, Layers, Settings, Download } from "lucide-react";

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

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/20 to-purple-50/20 dark:from-gray-800 dark:via-blue-950/20 dark:to-purple-950/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30 dark:opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%236366f1' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose Our 3D Logo Converter?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional-grade 3D rendering made simple and accessible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
