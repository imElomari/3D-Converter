"use client";

import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";

export type MaterialType =
  // Premium Metals
  | "liquid-chrome"
  | "rose-gold-brushed"
  | "titanium-noir"
  | "platinum-mirror"
  | "copper-aged"
  | "bronze-oxidized"
  | "gold-leaf"
  | "steel-damascus"
  // Precious & Gems
  | "diamond-crystal"
  | "sapphire-blue"
  | "emerald-green"
  | "ruby-red"
  | "obsidian-black"
  | "quartz-clear"
  // Advanced Materials
  | "carbon-weave"
  | "titanium-mesh"
  | "ceramic-tech"
  | "graphene-sheet"
  | "aerogel-translucent"
  | "metamaterial-iridescent"
  // Natural Luxe
  | "marble-carrara"
  | "wood-ebony"
  | "leather-italian"
  | "fabric-silk"
  // Futuristic
  | "holographic-rainbow"
  | "liquid-mercury"
  | "plasma-glow"
  | "quantum-shimmer"
  | "neon-cyberpunk"
  | "aurora-borealis";

type Props = {
  selectedMaterial: MaterialType;
  onMaterialChange: (material: MaterialType) => void;
};

const materials = [
  // Premium Metals
  {
    id: "liquid-chrome" as MaterialType,
    name: "Liquid Chrome",
    preview: "bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500",
    category: "Premium Metal",
  },
  {
    id: "rose-gold-brushed" as MaterialType,
    name: "Rose Gold",
    preview: "bg-gradient-to-br from-rose-300 via-rose-400 to-amber-400",
    category: "Premium Metal",
  },
  {
    id: "titanium-noir" as MaterialType,
    name: "Titanium Noir",
    preview: "bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800",
    category: "Premium Metal",
  },
  {
    id: "platinum-mirror" as MaterialType,
    name: "Platinum Mirror",
    preview: "bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400",
    category: "Premium Metal",
  },
  {
    id: "gold-leaf" as MaterialType,
    name: "Gold Leaf",
    preview: "bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-500",
    category: "Premium Metal",
  },
  {
    id: "copper-aged" as MaterialType,
    name: "Aged Copper",
    preview: "bg-gradient-to-br from-orange-600 via-orange-700 to-amber-800",
    category: "Premium Metal",
  },

  // Precious & Gems
  {
    id: "diamond-crystal" as MaterialType,
    name: "Diamond",
    preview: "bg-gradient-to-br from-blue-100 via-slate-100 to-blue-200",
    category: "Precious",
  },
  {
    id: "sapphire-blue" as MaterialType,
    name: "Sapphire",
    preview: "bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700",
    category: "Precious",
  },
  {
    id: "emerald-green" as MaterialType,
    name: "Emerald",
    preview: "bg-gradient-to-br from-emerald-500 via-emerald-600 to-green-700",
    category: "Precious",
  },
  {
    id: "ruby-red" as MaterialType,
    name: "Ruby",
    preview: "bg-gradient-to-br from-red-500 via-red-600 to-rose-700",
    category: "Precious",
  },
  {
    id: "obsidian-black" as MaterialType,
    name: "Obsidian",
    preview: "bg-gradient-to-br from-slate-800 via-slate-900 to-black",
    category: "Precious",
  },

  // Advanced Materials
  {
    id: "carbon-weave" as MaterialType,
    name: "Carbon Fiber",
    preview: "bg-gradient-to-br from-gray-800 via-gray-900 to-black",
    category: "Advanced",
  },
  {
    id: "ceramic-tech" as MaterialType,
    name: "Tech Ceramic",
    preview: "bg-gradient-to-br from-slate-100 via-white to-slate-200",
    category: "Advanced",
  },
  {
    id: "graphene-sheet" as MaterialType,
    name: "Graphene",
    preview: "bg-gradient-to-br from-slate-600 via-slate-700 to-gray-800",
    category: "Advanced",
  },

  // Natural Luxe
  {
    id: "marble-carrara" as MaterialType,
    name: "Carrara Marble",
    preview: "bg-gradient-to-br from-slate-50 via-white to-slate-100",
    category: "Natural",
  },
  {
    id: "wood-ebony" as MaterialType,
    name: "Ebony Wood",
    preview: "bg-gradient-to-br from-gray-800 via-gray-900 to-black",
    category: "Natural",
  },

  // Futuristic
  {
    id: "holographic-rainbow" as MaterialType,
    name: "Holographic",
    preview: "bg-gradient-to-br from-purple-400 via-pink-400 to-cyan-400",
    category: "Futuristic",
  },
  {
    id: "liquid-mercury" as MaterialType,
    name: "Liquid Mercury",
    preview: "bg-gradient-to-br from-slate-400 via-slate-500 to-slate-600",
    category: "Futuristic",
  },
  {
    id: "plasma-glow" as MaterialType,
    name: "Plasma Glow",
    preview: "bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600",
    category: "Futuristic",
  },
  {
    id: "quantum-shimmer" as MaterialType,
    name: "Quantum Shimmer",
    preview: "bg-gradient-to-br from-violet-400 via-purple-500 to-indigo-600",
    category: "Futuristic",
  },
  {
    id: "neon-cyberpunk" as MaterialType,
    name: "Neon Cyber",
    preview: "bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-purple-600",
    category: "Futuristic",
  },
  {
    id: "aurora-borealis" as MaterialType,
    name: "Aurora",
    preview: "bg-gradient-to-br from-green-400 via-blue-500 to-purple-600",
    category: "Futuristic",
  },
];

export function MaterialSelector({
  selectedMaterial,
  onMaterialChange,
}: Props) {
  return (
    <div className="space-y-3">
      <Label className="text-sm font-medium">Choose Material</Label>

      <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto pr-2">
        {materials.map((material) => (
          <button
            key={material.id}
            onClick={() => onMaterialChange(material.id)}
            className={`relative p-3 rounded-lg border-2 transition-all text-left hover:scale-[1.02] ${
              selectedMaterial === material.id
                ? "border-blue-500 bg-blue-50 dark:bg-blue-950/20 shadow-lg"
                : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-lg ${material.preview} border border-gray-200 dark:border-gray-700 shadow-inner`}
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {material.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {material.category}
                </p>
              </div>
            </div>

            {selectedMaterial === material.id && (
              <div className="absolute top-2 right-2 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                <Check className="h-3 w-3 text-white" />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
