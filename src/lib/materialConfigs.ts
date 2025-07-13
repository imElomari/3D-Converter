import type { MaterialType } from "@/components/MaterialSelector";

export interface Material {
  id: MaterialType;
  name: string;
  preview: string;
  category: string;
}

export const MATERIAL_CONFIGS: Material[] = [
  // Premium Metals
  {
    id: "liquid-chrome",
    name: "Liquid Chrome",
    preview: "bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500",
    category: "Premium Metal",
  },
  {
    id: "rose-gold-brushed",
    name: "Rose Gold",
    preview: "bg-gradient-to-br from-rose-300 via-rose-400 to-amber-400",
    category: "Premium Metal",
  },
  {
    id: "titanium-noir",
    name: "Titanium Noir",
    preview: "bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800",
    category: "Premium Metal",
  },
  {
    id: "platinum-mirror",
    name: "Platinum Mirror",
    preview: "bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400",
    category: "Premium Metal",
  },
  {
    id: "gold-leaf",
    name: "Gold Leaf",
    preview: "bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-500",
    category: "Premium Metal",
  },
  {
    id: "copper-aged",
    name: "Aged Copper",
    preview: "bg-gradient-to-br from-orange-600 via-orange-700 to-amber-800",
    category: "Premium Metal",
  },
  {
    id: "bronze-oxidized",
    name: "Bronze Oxidized",
    preview: "bg-gradient-to-br from-orange-800 via-amber-800 to-yellow-900",
    category: "Premium Metal",
  },
  {
    id: "steel-damascus",
    name: "Damascus Steel",
    preview: "bg-gradient-to-br from-slate-500 via-slate-600 to-slate-700",
    category: "Premium Metal",
  },

  // Precious & Gems
  {
    id: "diamond-crystal",
    name: "Diamond",
    preview: "bg-gradient-to-br from-blue-100 via-slate-100 to-blue-200",
    category: "Precious",
  },
  {
    id: "sapphire-blue",
    name: "Sapphire",
    preview: "bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700",
    category: "Precious",
  },
  {
    id: "emerald-green",
    name: "Emerald",
    preview: "bg-gradient-to-br from-emerald-500 via-emerald-600 to-green-700",
    category: "Precious",
  },
  {
    id: "ruby-red",
    name: "Ruby",
    preview: "bg-gradient-to-br from-red-500 via-red-600 to-rose-700",
    category: "Precious",
  },
  {
    id: "obsidian-black",
    name: "Obsidian",
    preview: "bg-gradient-to-br from-slate-800 via-slate-900 to-black",
    category: "Precious",
  },
  {
    id: "quartz-clear",
    name: "Clear Quartz",
    preview: "bg-gradient-to-br from-slate-100 via-white to-slate-50",
    category: "Precious",
  },

  // Advanced Materials
  {
    id: "carbon-weave",
    name: "Carbon Fiber",
    preview: "bg-gradient-to-br from-gray-800 via-gray-900 to-black",
    category: "Advanced",
  },
  {
    id: "titanium-mesh",
    name: "Titanium Mesh",
    preview: "bg-gradient-to-br from-slate-500 via-slate-600 to-slate-700",
    category: "Advanced",
  },
  {
    id: "ceramic-tech",
    name: "Tech Ceramic",
    preview: "bg-gradient-to-br from-slate-100 via-white to-slate-200",
    category: "Advanced",
  },
  {
    id: "graphene-sheet",
    name: "Graphene",
    preview: "bg-gradient-to-br from-slate-600 via-slate-700 to-gray-800",
    category: "Advanced",
  },
  {
    id: "aerogel-translucent",
    name: "Aerogel",
    preview: "bg-gradient-to-br from-blue-100 via-cyan-100 to-blue-200",
    category: "Advanced",
  },
  {
    id: "metamaterial-iridescent",
    name: "Metamaterial",
    preview: "bg-gradient-to-br from-purple-400 via-violet-500 to-indigo-600",
    category: "Advanced",
  },

  // Natural Luxe
  {
    id: "marble-carrara",
    name: "Carrara Marble",
    preview: "bg-gradient-to-br from-slate-50 via-white to-slate-100",
    category: "Natural",
  },
  {
    id: "wood-ebony",
    name: "Ebony Wood",
    preview: "bg-gradient-to-br from-gray-800 via-gray-900 to-black",
    category: "Natural",
  },
  {
    id: "leather-italian",
    name: "Italian Leather",
    preview: "bg-gradient-to-br from-amber-600 via-orange-700 to-amber-800",
    category: "Natural",
  },
  {
    id: "fabric-silk",
    name: "Silk Fabric",
    preview: "bg-gradient-to-br from-slate-100 via-white to-slate-200",
    category: "Natural",
  },

  // Futuristic
  {
    id: "holographic-rainbow",
    name: "Holographic",
    preview: "bg-gradient-to-br from-purple-400 via-pink-400 to-cyan-400",
    category: "Futuristic",
  },
  {
    id: "liquid-mercury",
    name: "Liquid Mercury",
    preview: "bg-gradient-to-br from-slate-400 via-slate-500 to-slate-600",
    category: "Futuristic",
  },
  {
    id: "plasma-glow",
    name: "Plasma Glow",
    preview: "bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600",
    category: "Futuristic",
  },
  {
    id: "quantum-shimmer",
    name: "Quantum Shimmer",
    preview: "bg-gradient-to-br from-violet-400 via-purple-500 to-indigo-600",
    category: "Futuristic",
  },
  {
    id: "neon-cyberpunk",
    name: "Neon Cyber",
    preview: "bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-purple-600",
    category: "Futuristic",
  },
  {
    id: "aurora-borealis",
    name: "Aurora",
    preview: "bg-gradient-to-br from-green-400 via-blue-500 to-purple-600",
    category: "Futuristic",
  },
];

export const MATERIAL_CATEGORIES = [
  "Premium Metal",
  "Precious",
  "Advanced",
  "Natural",
  "Futuristic",
] as const;
