# SVG to 3D Converter 🎨✨

Transform your 2D SVG logos into stunning 3D models with professional-grade materials and cinematic rendering. Built with React, TypeScript, Three.js, and modern web technologies.


## 🌟 Features

### Core Functionality

- **🎯 Simple Upload**: Drag & drop your SVG files for instant 3D conversion
- **⚡ Real-time 3D Rendering**: See changes instantly as you modify settings
- **🎮 Interactive Controls**: Zoom, pan, and rotate your 3D models with OrbitControls
- **📏 Adjustable Depth**: Control the 3D extrusion depth from flat to deep (1-50px)
- **🔄 Auto-Rotation**: Optional automatic rotation for dynamic presentations

### Professional Materials Library

#### Premium Metals

- **Liquid Chrome**: Mirror-perfect chrome with ultra-high reflectivity
- **Rose Gold Brushed**: Warm rose gold with brushed surface texture
- **Titanium Noir**: Dark titanium with sophisticated matte finish
- **Gold Leaf**: Traditional gold with subtle luminosity
- **Platinum Mirror**: Ultra-reflective platinum finish
- **Copper Aged**: Weathered copper with oxidation effects
- **Bronze Oxidized**: Antique bronze with patina
- **Steel Damascus**: Pattern-welded steel with unique textures

#### Precious Gems & Crystals

- **Diamond Crystal**: Ultra-clear diamond with realistic IOR (2.42)
- **Sapphire Blue**: Deep blue sapphire with authentic optical properties
- **Emerald Green**: Rich emerald with natural green tones
- **Ruby Red**: Vibrant ruby with deep red brilliance
- **Obsidian Black**: Volcanic glass with perfect reflection
- **Quartz Clear**: Crystal clear quartz with subtle refraction

#### Advanced Technical Materials

- **Carbon Weave**: High-tech carbon fiber composite
- **Titanium Mesh**: Industrial-grade titanium mesh
- **Ceramic Tech**: Ultra-smooth technical ceramic
- **Graphene Sheet**: Cutting-edge graphene material
- **Aerogel Translucent**: Ultra-light aerogel with low density
- **Metamaterial Iridescent**: Color-shifting metamaterial

#### Natural Materials

- **Marble Carrara**: Classic white marble with veining
- **Wood Walnut**: Rich walnut wood grain
- **Bamboo Natural**: Sustainable bamboo texture
- **Stone Granite**: Solid granite with natural patterns
- **Leather Italian**: Premium Italian leather finish
- **Fabric Silk**: Smooth silk textile appearance

#### Futuristic Materials

- **Holographic Rainbow**: Color-shifting holographic effects
- **Liquid Mercury**: Fluid mercury-like surface
- **Plasma Glow**: Energetic plasma with emission
- **Quantum Shimmer**: Quantum-effect shimmering
- **Neon Cyberpunk**: Glowing neon with cyberpunk aesthetics
- **Aurora Borealis**: Northern lights color effect

### Advanced Rendering Features

- **🌍 HDRI Environment Maps**: Realistic lighting with multiple presets
  - Studio lighting for product photography
  - Outdoor natural lighting
  - Night scene ambiance
  - Neutral balanced lighting
- **💡 Professional Lighting**: Multi-light setup with shadows and reflections
- **🎬 Cinematic Rendering**: Film-quality tone mapping and color grading
- **🌈 Advanced Materials**: PBR (Physically Based Rendering) materials with:
  - Accurate metalness and roughness values
  - Real-world IOR (Index of Refraction) for gems
  - Clearcoat and transmission effects
  - Emissive and iridescence properties

### Export Options

- **📸 High-Quality PNG**: Export crisp PNG images
- **🖼️ JPEG Format**: Standard JPEG export for web use
- **🎨 Custom Backgrounds**: Choose from various background colors

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager
- Modern web browser with WebGL support

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/svg-to-3d.git
   cd svg-to-3d
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application.

### Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory, ready for deployment.

## 🛠️ Tech Stack

### Frontend Framework

- **React 19.1.0**: Modern React with latest features
- **TypeScript 5.8.3**: Type-safe development
- **Vite 7.0.3**: Lightning-fast build tool and dev server

### 3D Graphics & Rendering

- **Three.js 0.178.0**: Advanced 3D graphics library
- **three-stdlib 2.36.0**: Additional Three.js utilities and loaders
- **SVGLoader**: Convert SVG paths to 3D geometry
- **FontLoader**: Load and render 3D text
- **RGBELoader**: HDRI environment map loading
- **OrbitControls**: Interactive camera controls

### UI Components & Styling

- **Tailwind CSS 4.0.0**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Framer Motion 12.23.3**: Smooth animations
- **Lucide React 0.525.0**: Beautiful icon library

### Development Tools

- **ESLint 9.30.1**: Code linting and quality
- **TypeScript ESLint 8.35.1**: TypeScript-specific linting
- **Vite Plugin React 4.6.0**: React integration for Vite