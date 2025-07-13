"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  Zap,
  Star,
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function SidePanel() {
  const [isOpen, setIsOpen] = useState(false);

  const tips = [
    {
      icon: Lightbulb,
      title: "SVG Optimization",
      description: "Use simple SVG shapes for better 3D conversion results",
    },
    {
      icon: Zap,
      title: "Material Selection",
      description: "Metallic materials work best with proper lighting",
    },
    {
      icon: Star,
      title: "Export Quality",
      description: "Higher resolutions provide better detail for printing",
    },
  ];


  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className={`fixed top-1/2 -translate-y-1/2 z-50 transition-all duration-300 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl ${
          isOpen ? "right-80" : "right-4"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <ChevronRight className="h-4 w-4" />
        ) : (
          <ChevronLeft className="h-4 w-4" />
        )}
      </Button>

      {/* Side Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-l border-slate-200 dark:border-slate-700 shadow-2xl z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 h-full overflow-y-auto">
          <div className="space-y-6">
            {/* Header */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="h-5 w-5 text-blue-500" />
                <h3 className="text-lg font-semibold">Tips & Insights</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Maximize your 3D logo creation
              </p>
            </div>

            <Separator />


            {/* Tips */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Pro Tips
              </h4>
              {tips.map((tip, index) => (
                <Card key={index} className="border-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-500 rounded-lg flex-shrink-0">
                        <tip.icon className="h-4 w-4 text-white" />
                      </div>
                      <div className="space-y-1">
                        <h5 className="text-sm font-medium">{tip.title}</h5>
                        <p className="text-xs text-muted-foreground">{tip.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            

            {/* Quick Actions */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Quick Actions
              </h4>
              <div className="grid grid-cols-1 gap-2">
                <Button variant="outline" size="sm" className="justify-start">
                  <Star className="h-4 w-4 mr-2" />
                  View My 3D Logos
                </Button>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
