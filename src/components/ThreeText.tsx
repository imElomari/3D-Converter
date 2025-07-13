"use client";

import { useEffect, useRef, forwardRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three-stdlib";
import { FontLoader } from "three-stdlib";
import { TextGeometry } from "three-stdlib";

interface ThreeTextProps {
  text?: string;
  color?: number;
  size?: number;
  depth?: number;
  enableControls?: boolean;
  autoRotate?: boolean;
  className?: string;
  interactive?: boolean;
  backgroundColor?: string;
  material?: // Premium Metals
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
    | "aurora-borealis"
    // Legacy support
    | "chrome"
    | "gold"
    | "matte"
    | "glass"
    | "neon"
    | "crystal"
    | "holographic";
  cinematic?: boolean;
}

export const ThreeText = forwardRef<HTMLDivElement, ThreeTextProps>(
  (
    {
      text = "LOGO",
      color = 0x4f46e5,
      size = 16,
      depth = 4,
      enableControls = true,
      autoRotate = true,
      className = "",
      interactive = false,
      material = "liquid-chrome",
      backgroundColor = "transparent",
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const controlsRef = useRef<OrbitControls | null>(null);
    const textMeshRef = useRef<THREE.Group | null>(null);
    const animationIdRef = useRef<number | null>(null);

    useEffect(() => {
      if (!containerRef.current) return;

      // Clean, professional scene setup
      const scene = new THREE.Scene();
      if (backgroundColor !== "transparent") {
        scene.background = new THREE.Color(backgroundColor);
      } else {
        scene.background = null;
      }
      sceneRef.current = scene;

      const camera = new THREE.PerspectiveCamera(
        50,
        containerRef.current.clientWidth / containerRef.current.clientHeight,
        0.1,
        1000
      );
      camera.position.set(0, 0, 80);

      // Enhanced cinematic renderer for professional output
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        preserveDrawingBuffer: true,
      });
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
      renderer.setClearColor(0x000000, 0);

      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      // Professional controls
      if (enableControls) {
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.enableZoom = true;
        controls.enablePan = false;
        controls.maxDistance = 150;
        controls.minDistance = 40;
        controls.autoRotate = autoRotate;
        controls.autoRotateSpeed = 1.0;
        controlsRef.current = controls;
      }

      // Enhanced professional lighting setup for mirror-like materials
      const setupLighting = () => {
        // Enhanced ambient light for global illumination
        const ambientLight = new THREE.AmbientLight(0x4a5568, 0.4);
        scene.add(ambientLight);

        // Primary key light with enhanced properties
        const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
        keyLight.position.set(80, 80, 80);
        keyLight.castShadow = true;
        keyLight.shadow.mapSize.width = 4096;
        keyLight.shadow.mapSize.height = 4096;
        keyLight.shadow.camera.near = 0.1;
        keyLight.shadow.camera.far = 400;
        keyLight.shadow.bias = -0.0001;
        keyLight.shadow.radius = 8;
        scene.add(keyLight);

        // Fill light with cooler tone
        const fillLight = new THREE.DirectionalLight(0xa0c4ff, 1.2);
        fillLight.position.set(-60, 50, 50);
        scene.add(fillLight);

        // Rim light for edge definition
        const rimLight = new THREE.DirectionalLight(0xffc0cb, 1.0);
        rimLight.position.set(0, -80, -80);
        scene.add(rimLight);

        // Multiple point lights for dynamic reflections
        const pointLight1 = new THREE.PointLight(0x87ceeb, 2.0, 200);
        pointLight1.position.set(60, 60, 60);
        scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0xffd700, 1.5, 200);
        pointLight2.position.set(-60, 40, 40);
        scene.add(pointLight2);

        const pointLight3 = new THREE.PointLight(0xff69b4, 1.8, 200);
        pointLight3.position.set(0, -60, 60);
        scene.add(pointLight3);

        const pointLight4 = new THREE.PointLight(0x00ffff, 1.2, 200);
        pointLight4.position.set(40, 0, -60);
        scene.add(pointLight4);

        // Spot lights for dramatic highlights
        const spotLight1 = new THREE.SpotLight(
          0xffffff,
          3.0,
          300,
          Math.PI * 0.15,
          0.3
        );
        spotLight1.position.set(100, 100, 100);
        spotLight1.target.position.set(0, 0, 0);
        spotLight1.castShadow = true;
        scene.add(spotLight1);
        scene.add(spotLight1.target);

        const spotLight2 = new THREE.SpotLight(
          0x87ceeb,
          2.0,
          250,
          Math.PI * 0.2,
          0.5
        );
        spotLight2.position.set(-80, 80, 80);
        spotLight2.target.position.set(0, 0, 0);
        scene.add(spotLight2);
        scene.add(spotLight2.target);

        // Environment hemisphere light for realistic color grading
        const hemisphereLight = new THREE.HemisphereLight(
          0x87ceeb,
          0x2d3748,
          0.6
        );
        scene.add(hemisphereLight);
      };

      setupLighting();

      // Create Environment Map for realistic reflections
      const createEnvironmentMap = () => {
        const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(512);
        const cubeCamera = new THREE.CubeCamera(1, 1000, cubeRenderTarget);

        // Create a simple environment scene for reflections
        const envScene = new THREE.Scene();

        // Add gradient background for environment reflections
        const gradientTexture = new THREE.DataTexture(
          new Uint8Array([
            135,
            206,
            235,
            255, // Sky blue
            255,
            255,
            255,
            255, // White
            70,
            130,
            180,
            255, // Steel blue
            25,
            25,
            112,
            255, // Midnight blue
          ]),
          2,
          2,
          THREE.RGBAFormat
        );
        gradientTexture.needsUpdate = true;

        const envGeometry = new THREE.SphereGeometry(500, 32, 32);
        const envMaterial = new THREE.MeshBasicMaterial({
          map: gradientTexture,
          side: THREE.BackSide,
        });
        const envSphere = new THREE.Mesh(envGeometry, envMaterial);
        envScene.add(envSphere);

        // Update the environment map
        cubeCamera.update(renderer, envScene);
        return cubeRenderTarget.texture;
      };

      const envMap = createEnvironmentMap();

      // Enhanced material creation with ultra-realistic PBR properties and advanced effects
      const createMaterial = () => {
        switch (material) {
          // Premium Metals
          case "liquid-chrome":
            return new THREE.MeshPhysicalMaterial({
              color: 0xf0f0f0,
              metalness: 1.0,
              roughness: 0.0,
              envMap: envMap,
              envMapIntensity: 4.0,
              reflectivity: 1.0,
              clearcoat: 1.0,
              clearcoatRoughness: 0.0,
              emissive: 0x111122,
              emissiveIntensity: 0.02,
            });

          case "rose-gold-brushed":
            return new THREE.MeshPhysicalMaterial({
              color: 0xe8b4b8,
              metalness: 0.95,
              roughness: 0.15,
              envMap: envMap,
              envMapIntensity: 2.8,
              reflectivity: 0.9,
              clearcoat: 0.8,
              clearcoatRoughness: 0.2,
              emissive: 0x221111,
              emissiveIntensity: 0.03,
            });

          case "titanium-noir":
            return new THREE.MeshPhysicalMaterial({
              color: 0x2a2a2a,
              metalness: 0.9,
              roughness: 0.25,
              envMap: envMap,
              envMapIntensity: 3.2,
              reflectivity: 0.85,
              clearcoat: 0.6,
              clearcoatRoughness: 0.3,
              emissive: 0x000011,
              emissiveIntensity: 0.01,
            });

          case "platinum-mirror":
            return new THREE.MeshPhysicalMaterial({
              color: 0xf5f5f5,
              metalness: 1.0,
              roughness: 0.02,
              envMap: envMap,
              envMapIntensity: 4.5,
              reflectivity: 1.0,
              clearcoat: 1.0,
              clearcoatRoughness: 0.0,
              emissive: 0x111111,
              emissiveIntensity: 0.02,
            });

          case "gold-leaf":
            return new THREE.MeshPhysicalMaterial({
              color: 0xffd700,
              metalness: 0.98,
              roughness: 0.08,
              envMap: envMap,
              envMapIntensity: 3.5,
              reflectivity: 0.95,
              clearcoat: 0.9,
              clearcoatRoughness: 0.1,
              emissive: 0x332200,
              emissiveIntensity: 0.05,
            });

          case "copper-aged":
            return new THREE.MeshPhysicalMaterial({
              color: 0x8b4513,
              metalness: 0.8,
              roughness: 0.4,
              envMap: envMap,
              envMapIntensity: 2.0,
              reflectivity: 0.7,
              clearcoat: 0.3,
              clearcoatRoughness: 0.6,
              emissive: 0x110500,
              emissiveIntensity: 0.02,
            });

          case "bronze-oxidized":
            return new THREE.MeshPhysicalMaterial({
              color: 0x654321,
              metalness: 0.7,
              roughness: 0.5,
              envMap: envMap,
              envMapIntensity: 1.8,
              reflectivity: 0.6,
              clearcoat: 0.2,
              clearcoatRoughness: 0.7,
              emissive: 0x0a0300,
              emissiveIntensity: 0.01,
            });

          case "steel-damascus":
            return new THREE.MeshPhysicalMaterial({
              color: 0x71797e,
              metalness: 0.85,
              roughness: 0.35,
              envMap: envMap,
              envMapIntensity: 2.5,
              reflectivity: 0.8,
              clearcoat: 0.5,
              clearcoatRoughness: 0.4,
              emissive: 0x000505,
              emissiveIntensity: 0.01,
            });

          // Precious & Gems
          case "diamond-crystal":
            return new THREE.MeshPhysicalMaterial({
              color: 0xffffff,
              metalness: 0.0,
              roughness: 0.0,
              transmission: 0.95,
              transparent: true,
              opacity: 0.9,
              envMap: envMap,
              envMapIntensity: 5.0,
              ior: 2.42, // Real diamond IOR
              thickness: 1.0,
              clearcoat: 1.0,
              clearcoatRoughness: 0.0,
              emissive: 0x001122,
              emissiveIntensity: 0.03,
            });

          case "sapphire-blue":
            return new THREE.MeshPhysicalMaterial({
              color: 0x0f52ba,
              metalness: 0.0,
              roughness: 0.05,
              transmission: 0.8,
              transparent: true,
              opacity: 0.85,
              envMap: envMap,
              envMapIntensity: 4.0,
              ior: 1.77, // Real sapphire IOR
              thickness: 0.8,
              clearcoat: 1.0,
              clearcoatRoughness: 0.0,
              emissive: 0x000044,
              emissiveIntensity: 0.05,
            });

          case "emerald-green":
            return new THREE.MeshPhysicalMaterial({
              color: 0x50c878,
              metalness: 0.0,
              roughness: 0.1,
              transmission: 0.75,
              transparent: true,
              opacity: 0.8,
              envMap: envMap,
              envMapIntensity: 3.8,
              ior: 1.58, // Real emerald IOR
              thickness: 0.7,
              clearcoat: 1.0,
              clearcoatRoughness: 0.05,
              emissive: 0x004400,
              emissiveIntensity: 0.04,
            });

          case "ruby-red":
            return new THREE.MeshPhysicalMaterial({
              color: 0xe0115f,
              metalness: 0.0,
              roughness: 0.08,
              transmission: 0.7,
              transparent: true,
              opacity: 0.82,
              envMap: envMap,
              envMapIntensity: 3.5,
              ior: 1.76, // Real ruby IOR
              thickness: 0.6,
              clearcoat: 1.0,
              clearcoatRoughness: 0.02,
              emissive: 0x440000,
              emissiveIntensity: 0.06,
            });

          case "obsidian-black":
            return new THREE.MeshPhysicalMaterial({
              color: 0x1a1a1a,
              metalness: 0.1,
              roughness: 0.1,
              envMap: envMap,
              envMapIntensity: 3.0,
              reflectivity: 0.9,
              clearcoat: 1.0,
              clearcoatRoughness: 0.05,
              emissive: 0x000000,
              emissiveIntensity: 0.0,
            });

          case "quartz-clear":
            return new THREE.MeshPhysicalMaterial({
              color: 0xffffff,
              metalness: 0.0,
              roughness: 0.05,
              transmission: 0.9,
              transparent: true,
              opacity: 0.85,
              envMap: envMap,
              envMapIntensity: 3.0,
              ior: 1.54, // Real quartz IOR
              thickness: 0.9,
              clearcoat: 1.0,
              clearcoatRoughness: 0.0,
              emissive: 0x001111,
              emissiveIntensity: 0.02,
            });

          // Advanced Materials
          case "carbon-weave":
            return new THREE.MeshPhysicalMaterial({
              color: 0x1a1a1a,
              metalness: 0.2,
              roughness: 0.8,
              envMap: envMap,
              envMapIntensity: 1.5,
              reflectivity: 0.3,
              clearcoat: 0.8,
              clearcoatRoughness: 0.2,
              emissive: 0x000000,
              emissiveIntensity: 0.0,
            });

          case "titanium-mesh":
            return new THREE.MeshPhysicalMaterial({
              color: 0x708090,
              metalness: 0.9,
              roughness: 0.3,
              envMap: envMap,
              envMapIntensity: 2.8,
              reflectivity: 0.85,
              clearcoat: 0.7,
              clearcoatRoughness: 0.3,
              emissive: 0x000011,
              emissiveIntensity: 0.01,
            });

          case "ceramic-tech":
            return new THREE.MeshPhysicalMaterial({
              color: 0xffffff,
              metalness: 0.0,
              roughness: 0.02,
              envMap: envMap,
              envMapIntensity: 2.5,
              reflectivity: 0.9,
              clearcoat: 1.0,
              clearcoatRoughness: 0.0,
              emissive: 0x111111,
              emissiveIntensity: 0.01,
            });

          case "graphene-sheet":
            return new THREE.MeshPhysicalMaterial({
              color: 0x2a2a2a,
              metalness: 0.95,
              roughness: 0.1,
              envMap: envMap,
              envMapIntensity: 4.0,
              reflectivity: 0.95,
              clearcoat: 0.9,
              clearcoatRoughness: 0.05,
              emissive: 0x000022,
              emissiveIntensity: 0.03,
            });

          case "aerogel-translucent":
            return new THREE.MeshPhysicalMaterial({
              color: 0xe6f3ff,
              metalness: 0.0,
              roughness: 0.3,
              transmission: 0.85,
              transparent: true,
              opacity: 0.4,
              envMap: envMap,
              envMapIntensity: 2.0,
              ior: 1.05, // Very low like aerogel
              thickness: 2.0,
              clearcoat: 0.5,
              clearcoatRoughness: 0.4,
              emissive: 0x001122,
              emissiveIntensity: 0.01,
            });

          case "metamaterial-iridescent":
            return new THREE.MeshPhysicalMaterial({
              color: 0x9370db,
              metalness: 0.8,
              roughness: 0.1,
              envMap: envMap,
              envMapIntensity: 4.0,
              reflectivity: 0.9,
              clearcoat: 1.0,
              clearcoatRoughness: 0.0,
              iridescence: 1.0,
              iridescenceIOR: 1.3,
              iridescenceThicknessRange: [100, 800],
              emissive: 0x220044,
              emissiveIntensity: 0.05,
            });

          // Natural Luxe
          case "marble-carrara":
            return new THREE.MeshPhysicalMaterial({
              color: 0xf8f8ff,
              metalness: 0.0,
              roughness: 0.15,
              envMap: envMap,
              envMapIntensity: 1.2,
              reflectivity: 0.3,
              clearcoat: 0.4,
              clearcoatRoughness: 0.2,
              emissive: 0x000000,
              emissiveIntensity: 0.0,
            });

          case "wood-ebony":
            return new THREE.MeshPhysicalMaterial({
              color: 0x1a1a1a,
              metalness: 0.0,
              roughness: 0.7,
              envMap: envMap,
              envMapIntensity: 0.8,
              reflectivity: 0.2,
              clearcoat: 0.6,
              clearcoatRoughness: 0.3,
              emissive: 0x000000,
              emissiveIntensity: 0.0,
            });

          case "leather-italian":
            return new THREE.MeshPhysicalMaterial({
              color: 0x8b4513,
              metalness: 0.0,
              roughness: 0.8,
              envMap: envMap,
              envMapIntensity: 0.6,
              reflectivity: 0.1,
              clearcoat: 0.2,
              clearcoatRoughness: 0.8,
              emissive: 0x000000,
              emissiveIntensity: 0.0,
            });

          case "fabric-silk":
            return new THREE.MeshPhysicalMaterial({
              color: 0xf5f5dc,
              metalness: 0.0,
              roughness: 0.9,
              envMap: envMap,
              envMapIntensity: 0.4,
              reflectivity: 0.05,
              clearcoat: 0.1,
              clearcoatRoughness: 0.9,
              emissive: 0x000000,
              emissiveIntensity: 0.0,
            });

          // Futuristic
          case "holographic-rainbow":
            return new THREE.MeshPhysicalMaterial({
              color: 0xffffff,
              metalness: 0.9,
              roughness: 0.05,
              envMap: envMap,
              envMapIntensity: 5.0,
              reflectivity: 0.95,
              clearcoat: 1.0,
              clearcoatRoughness: 0.0,
              iridescence: 1.0,
              iridescenceIOR: 1.5,
              iridescenceThicknessRange: [50, 1000],
              emissive: 0x334455,
              emissiveIntensity: 0.1,
            });

          case "liquid-mercury":
            return new THREE.MeshPhysicalMaterial({
              color: 0xc0c0c0,
              metalness: 1.0,
              roughness: 0.0,
              envMap: envMap,
              envMapIntensity: 5.0,
              reflectivity: 1.0,
              clearcoat: 1.0,
              clearcoatRoughness: 0.0,
              emissive: 0x111122,
              emissiveIntensity: 0.02,
            });

          case "plasma-glow":
            return new THREE.MeshPhysicalMaterial({
              color: 0x00ffff,
              metalness: 0.3,
              roughness: 0.1,
              envMap: envMap,
              envMapIntensity: 3.0,
              reflectivity: 0.8,
              clearcoat: 0.8,
              clearcoatRoughness: 0.1,
              emissive: 0x0066ff,
              emissiveIntensity: 0.4,
              transmission: 0.2,
              transparent: true,
              opacity: 0.9,
            });

          case "quantum-shimmer":
            return new THREE.MeshPhysicalMaterial({
              color: 0x9932cc,
              metalness: 0.7,
              roughness: 0.2,
              envMap: envMap,
              envMapIntensity: 4.0,
              reflectivity: 0.9,
              clearcoat: 1.0,
              clearcoatRoughness: 0.1,
              iridescence: 0.8,
              iridescenceIOR: 1.4,
              iridescenceThicknessRange: [200, 600],
              emissive: 0x4400ff,
              emissiveIntensity: 0.15,
            });

          case "neon-cyberpunk":
            return new THREE.MeshPhysicalMaterial({
              color: 0xff1493,
              metalness: 0.4,
              roughness: 0.15,
              envMap: envMap,
              envMapIntensity: 3.5,
              reflectivity: 0.8,
              clearcoat: 0.9,
              clearcoatRoughness: 0.1,
              emissive: 0xff0066,
              emissiveIntensity: 0.5,
              transmission: 0.1,
              transparent: true,
              opacity: 0.95,
            });

          case "aurora-borealis":
            return new THREE.MeshPhysicalMaterial({
              color: 0x40e0d0,
              metalness: 0.2,
              roughness: 0.3,
              envMap: envMap,
              envMapIntensity: 3.0,
              reflectivity: 0.6,
              clearcoat: 0.8,
              clearcoatRoughness: 0.2,
              iridescence: 1.0,
              iridescenceIOR: 1.2,
              iridescenceThicknessRange: [100, 900],
              emissive: 0x00ff88,
              emissiveIntensity: 0.3,
              transmission: 0.3,
              transparent: true,
              opacity: 0.8,
            });

          // Legacy support (enhanced versions)
          case "chrome":
            return new THREE.MeshPhysicalMaterial({
              color: 0xf0f0f0,
              metalness: 1.0,
              roughness: 0.0,
              envMap: envMap,
              envMapIntensity: 3.0,
              reflectivity: 1.0,
              clearcoat: 1.0,
              clearcoatRoughness: 0.0,
              emissive: 0x222222,
              emissiveIntensity: 0.05,
            });

          case "gold":
            return new THREE.MeshPhysicalMaterial({
              color: 0xffd700,
              metalness: 1.0,
              roughness: 0.02,
              envMap: envMap,
              envMapIntensity: 2.5,
              reflectivity: 0.9,
              clearcoat: 1.0,
              clearcoatRoughness: 0.1,
              emissive: 0x332200,
              emissiveIntensity: 0.1,
            });

          case "glass":
            return new THREE.MeshPhysicalMaterial({
              color: 0xffffff,
              metalness: 0.0,
              roughness: 0.0,
              transmission: 0.98,
              transparent: true,
              opacity: 0.9,
              envMap: envMap,
              envMapIntensity: 4.0,
              ior: 1.52,
              thickness: 1.0,
              clearcoat: 1.0,
              clearcoatRoughness: 0.0,
              emissive: 0x001122,
              emissiveIntensity: 0.02,
            });

          case "neon":
            return new THREE.MeshPhysicalMaterial({
              color: color,
              metalness: 0.3,
              roughness: 0.1,
              envMap: envMap,
              envMapIntensity: 2.0,
              emissive: color,
              emissiveIntensity: 0.8,
              clearcoat: 0.8,
              clearcoatRoughness: 0.2,
            });

          case "crystal":
            return new THREE.MeshPhysicalMaterial({
              color: 0xe6f7ff,
              metalness: 0.0,
              roughness: 0.0,
              transmission: 0.95,
              transparent: true,
              opacity: 0.9,
              envMap: envMap,
              envMapIntensity: 3.5,
              ior: 1.7,
              thickness: 0.8,
              clearcoat: 1.0,
              clearcoatRoughness: 0.0,
              emissive: 0x0066cc,
              emissiveIntensity: 0.1,
            });

          case "holographic":
            return new THREE.MeshPhysicalMaterial({
              color: 0xffffff,
              metalness: 0.9,
              roughness: 0.05,
              envMap: envMap,
              envMapIntensity: 4.0,
              reflectivity: 0.95,
              clearcoat: 1.0,
              clearcoatRoughness: 0.0,
              emissive: 0x6600cc,
              emissiveIntensity: 0.15,
              iridescence: 1.0,
              iridescenceIOR: 1.3,
              iridescenceThicknessRange: [100, 800],
            });

          case "matte":
            return new THREE.MeshStandardMaterial({
              color: color,
              metalness: 0.1,
              roughness: 0.9,
              envMap: envMap,
              envMapIntensity: 0.3,
              emissive: new THREE.Color(color).multiplyScalar(0.05),
              emissiveIntensity: 0.02,
            });

          default:
            return new THREE.MeshPhysicalMaterial({
              color: 0xe8e8e8,
              metalness: 1.0,
              roughness: 0.01,
              envMap: envMap,
              envMapIntensity: 3.5,
              reflectivity: 1.0,
              clearcoat: 1.0,
              clearcoatRoughness: 0.0,
              emissive: 0x111133,
              emissiveIntensity: 0.03,
            });
        }
      };

      const materials = createMaterial();

      // Font loading
      const loadFont = () => {
        const loader = new FontLoader();
        const fontPaths = [
          "/fonts/helvetiker_regular.typeface.json",
          "./fonts/helvetiker_regular.typeface.json",
        ];

        let currentPathIndex = 0;

        const tryLoadFont = () => {
          if (currentPathIndex >= fontPaths.length) {
            createFallbackText();
            return;
          }

          loader.load(
            fontPaths[currentPathIndex],
            (font) => {
              createText(font);
            },
            undefined,
            () => {
              currentPathIndex++;
              tryLoadFont();
            }
          );
        };

        tryLoadFont();
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const createText = (font: any) => {
        const textGeometry = new TextGeometry(text, {
          font: font,
          size: size,
          height: depth,
          curveSegments: 24,
          bevelEnabled: true,
          bevelThickness: 0.4,
          bevelSize: 0.3,
          bevelOffset: 0,
        });

        textGeometry.computeBoundingBox();
        textGeometry.computeVertexNormals();

        if (textGeometry.boundingBox) {
          const centerOffsetX =
            -0.5 *
            (textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x);
          const centerOffsetY =
            -0.5 *
            (textGeometry.boundingBox.max.y - textGeometry.boundingBox.min.y);

          const textMesh = new THREE.Mesh(textGeometry, materials);
          textMesh.position.x = centerOffsetX;
          textMesh.position.y = centerOffsetY;
          textMesh.position.z = 0;
          textMesh.castShadow = true;
          textMesh.receiveShadow = true;

          // Add additional visual effects based on material
          const textGroup = new THREE.Group();

          // Create glow effect for certain materials
          if (
            material === "neon" ||
            material === "crystal" ||
            material === "holographic" ||
            material === "holographic-rainbow" ||
            material === "glass" ||
            material === "diamond-crystal" ||
            material === "sapphire-blue" ||
            material === "emerald-green" ||
            material === "ruby-red" ||
            material === "quartz-clear" ||
            material === "plasma-glow" ||
            material === "quantum-shimmer" ||
            material === "neon-cyberpunk" ||
            material === "aurora-borealis"
          ) {
            // Create outer glow
            const glowGeometry = textGeometry.clone();
            const glowMaterial = new THREE.MeshBasicMaterial({
              color: material === "glass" ? 0x87ceeb : color,
              transparent: true,
              opacity: 0.2,
              side: THREE.BackSide,
            });
            const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
            glowMesh.position.copy(textMesh.position);
            glowMesh.scale.setScalar(1.08);
            textGroup.add(glowMesh);

            // Create inner glow
            const innerGlowGeometry = textGeometry.clone();
            const innerGlowMaterial = new THREE.MeshBasicMaterial({
              color: material === "glass" ? 0xa0c4ff : color,
              transparent: true,
              opacity: 0.15,
              side: THREE.FrontSide,
            });
            const innerGlowMesh = new THREE.Mesh(
              innerGlowGeometry,
              innerGlowMaterial
            );
            innerGlowMesh.position.copy(textMesh.position);
            innerGlowMesh.scale.setScalar(1.04);
            textGroup.add(innerGlowMesh);
          }

          // Add reflection/refraction effects for transparent and gem materials
          if (
            material === "glass" ||
            material === "crystal" ||
            material === "diamond-crystal" ||
            material === "sapphire-blue" ||
            material === "emerald-green" ||
            material === "ruby-red" ||
            material === "quartz-clear" ||
            material === "aerogel-translucent"
          ) {
            // Create a subtle reflection plane beneath the text
            const reflectionGeometry = new THREE.PlaneGeometry(
              size * text.length,
              size * 0.8
            );
            const reflectionMaterial = new THREE.MeshPhysicalMaterial({
              color: 0xffffff,
              metalness: 0.0,
              roughness: 0.1,
              transmission: 0.8,
              transparent: true,
              opacity: 0.3,
              envMap: envMap,
              envMapIntensity: 2.0,
            });
            const reflectionMesh = new THREE.Mesh(
              reflectionGeometry,
              reflectionMaterial
            );
            reflectionMesh.rotation.x = -Math.PI / 2;
            reflectionMesh.position.y = centerOffsetY - size * 0.8;
            textGroup.add(reflectionMesh);
          }

          textGroup.add(textMesh); // Add main text on top
          scene.add(textGroup);
          textMeshRef.current = textGroup;
        }
      };

      const createFallbackText = () => {
        const textGroup = new THREE.Group();
        const letters = text.split("");
        const letterWidth = size * 0.6;
        const spacing = letterWidth * 1.2;
        const totalWidth = (letters.length - 1) * spacing;

        letters.forEach((_, index) => {
          const letterGeometry = new THREE.BoxGeometry(
            letterWidth,
            size,
            depth
          );
          const letterMesh = new THREE.Mesh(letterGeometry, materials);
          letterMesh.position.x = index * spacing - totalWidth / 2;
          letterMesh.castShadow = true;
          letterMesh.receiveShadow = true;
          textGroup.add(letterMesh);
        });

        scene.add(textGroup);
        textMeshRef.current = textGroup;
      };

      loadFont();

      // Enhanced dynamic animation with sophisticated effects
      const animate = () => {
        animationIdRef.current = requestAnimationFrame(animate);

        if (controlsRef.current) {
          controlsRef.current.update();
        }

        const time = Date.now() * 0.001;

        // Dynamic lighting animation for all materials
        scene.traverse((child) => {
          if (child instanceof THREE.PointLight) {
            // Create smooth, organic light movement
            const lightTime = time * 0.8;
            child.intensity = 1.2 + Math.sin(lightTime * 2) * 0.4;

            if (
              child.color.r > child.color.g &&
              child.color.r > child.color.b
            ) {
              // Gold/warm light
              child.position.x = -60 + Math.sin(lightTime * 0.7) * 20;
              child.position.y = 40 + Math.cos(lightTime * 0.9) * 15;
              child.position.z = 40 + Math.sin(lightTime * 0.5) * 10;
            } else if (
              child.color.b > child.color.r &&
              child.color.b > child.color.g
            ) {
              // Blue/cool light
              child.position.x = 60 + Math.cos(lightTime * 0.6) * 25;
              child.position.y = 60 + Math.sin(lightTime * 1.1) * 20;
              child.position.z = 60 + Math.cos(lightTime * 0.8) * 15;
            } else if (child.color.r > 0.8 && child.color.g < 0.5) {
              // Pink/magenta light
              child.position.x = Math.sin(lightTime * 0.9) * 30;
              child.position.y = -60 + Math.cos(lightTime * 1.2) * 25;
              child.position.z = 60 + Math.sin(lightTime * 0.7) * 20;
            } else {
              // Cyan light
              child.position.x = 40 + Math.cos(lightTime * 1.1) * 35;
              child.position.y = Math.sin(lightTime * 0.8) * 15;
              child.position.z = -60 + Math.cos(lightTime * 0.6) * 25;
            }
          }

          if (child instanceof THREE.SpotLight) {
            // Subtle spot light movement
            const spotTime = time * 0.3;
            child.intensity = 2.5 + Math.sin(spotTime * 3) * 0.5;
          }
        });

        // Enhanced text animations based on material
        if (textMeshRef.current) {
          const textGroup = textMeshRef.current;

          // Apply different animations based on material type
          switch (material) {
            case "holographic":
            case "holographic-rainbow":
            case "quantum-shimmer":
            case "aurora-borealis":
              textGroup.rotation.y = Math.sin(time * 0.5) * 0.15;
              textGroup.rotation.x = Math.cos(time * 0.3) * 0.08;
              textGroup.position.y = Math.sin(time * 1.2) * 1.5;

              // Color shifting for holographic effect
              textGroup.traverse((child) => {
                if (
                  child instanceof THREE.Mesh &&
                  child.material instanceof THREE.MeshPhysicalMaterial
                ) {
                  const hue = (time * 0.1) % 1;
                  child.material.emissive.setHSL(hue, 0.8, 0.3);
                }
              });
              break;

            case "crystal":
            case "glass":
            case "diamond-crystal":
            case "sapphire-blue":
            case "emerald-green":
            case "ruby-red":
            case "quartz-clear":
            case "aerogel-translucent":
              textGroup.rotation.y = Math.sin(time * 0.4) * 0.1;
              textGroup.position.y = Math.cos(time * 0.8) * 0.8;

              // Subtle opacity animation for transparency effect
              textGroup.traverse((child) => {
                if (child instanceof THREE.Mesh && child.material.transparent) {
                  child.material.opacity = 0.85 + Math.sin(time * 2) * 0.1;
                }
              });
              break;

            case "neon":
            case "neon-cyberpunk":
            case "plasma-glow":
              textGroup.position.y = Math.sin(time * 1.5) * 2;

              // Pulsing glow effect
              textGroup.traverse((child) => {
                if (
                  child instanceof THREE.Mesh &&
                  child.material instanceof THREE.MeshPhysicalMaterial
                ) {
                  child.material.emissiveIntensity =
                    0.6 + Math.sin(time * 4) * 0.3;
                }
              });
              break;

            case "liquid-chrome":
            case "liquid-mercury":
            case "platinum-mirror":
              // Fluid-like motion for liquid metals
              textGroup.rotation.y = Math.sin(time * 0.3) * 0.08;
              textGroup.position.y = Math.cos(time * 0.6) * 1.2;
              textGroup.scale.setScalar(1 + Math.sin(time * 1.5) * 0.02);
              break;

            case "chrome":
            case "gold":
            case "gold-leaf":
            case "rose-gold-brushed":
            case "titanium-noir":
            case "steel-damascus":
              // Subtle rotation for metallic materials
              textGroup.rotation.y = Math.sin(time * 0.2) * 0.05;
              textGroup.position.y = Math.sin(time * 0.6) * 0.5;
              break;

            case "metamaterial-iridescent":
              // Complex multi-axis rotation for metamaterials
              textGroup.rotation.y = Math.sin(time * 0.4) * 0.12;
              textGroup.rotation.z = Math.cos(time * 0.3) * 0.06;
              textGroup.position.y = Math.sin(time * 0.9) * 1.0;

              // Iridescence intensity variation
              textGroup.traverse((child) => {
                if (
                  child instanceof THREE.Mesh &&
                  child.material instanceof THREE.MeshPhysicalMaterial &&
                  child.material.iridescence
                ) {
                  child.material.iridescenceIOR =
                    1.3 + Math.sin(time * 2) * 0.2;
                }
              });
              break;

            case "obsidian-black":
            case "carbon-weave":
            case "graphene-sheet":
              // Minimal movement for dark materials
              textGroup.rotation.y = Math.sin(time * 0.15) * 0.03;
              textGroup.position.y = Math.cos(time * 0.4) * 0.3;
              break;

            case "marble-carrara":
            case "wood-ebony":
            case "leather-italian":
            case "fabric-silk":
              // Natural, organic movement
              textGroup.rotation.y = Math.sin(time * 0.25) * 0.04;
              textGroup.position.y = Math.cos(time * 0.5) * 0.4;
              break;

            case "copper-aged":
            case "bronze-oxidized":
              // Weathered metal movement
              textGroup.rotation.y = Math.sin(time * 0.18) * 0.04;
              textGroup.position.y = Math.cos(time * 0.45) * 0.6;
              break;

            case "ceramic-tech":
            case "titanium-mesh":
              // Precise, technical movement
              textGroup.rotation.y = Math.sin(time * 0.35) * 0.06;
              textGroup.position.y = Math.cos(time * 0.7) * 0.7;
              break;

            default:
              // Default elegant animation
              textGroup.rotation.y = Math.sin(time * 0.3) * 0.08;
              textGroup.position.y = Math.cos(time * 0.7) * 1;
          }

          // Interactive mouse response (if enabled)
          if (interactive) {
            textGroup.rotation.y += 0.003;
            textGroup.scale.setScalar(1 + Math.sin(time * 2) * 0.02);
          }
        }

        renderer.render(scene, camera);
      };

      animate();

      // Resize handler
      const handleResize = () => {
        if (!containerRef.current) return;

        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };

      window.addEventListener("resize", handleResize);

      // Cleanup
      return () => {
        if (animationIdRef.current) {
          cancelAnimationFrame(animationIdRef.current);
        }
        window.removeEventListener("resize", handleResize);

        if (controlsRef.current) {
          controlsRef.current.dispose();
        }

        renderer.dispose();
        materials.dispose();
      };
    }, [
      text,
      color,
      size,
      depth,
      enableControls,
      autoRotate,
      material,
      interactive,
      backgroundColor,
    ]);

    return (
      <div ref={ref} className={`w-full h-full ${className}`}>
        <div
          ref={containerRef}
          className="w-full h-full"
          style={{
            background: "transparent",
          }}
        />
      </div>
    );
  }
);

ThreeText.displayName = "ThreeText";
