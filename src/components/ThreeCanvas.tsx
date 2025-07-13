"use client";

import { useEffect, useRef, forwardRef } from "react";
import * as THREE from "three";
import { SVGLoader } from "three-stdlib";
import { OrbitControls } from "three-stdlib";
import type { MaterialType } from "@/components/MaterialSelector";
import { createMaterial } from "@/lib/materials";
import {
  setupLighting,
  createCamera,
  handleResize,
  type EnvironmentPreset,
} from "@/lib/threeUtils";
import { useEnvironmentMap } from "@/hooks/useEnvironmentMap";

type Props = {
  svgText: string | null;
  depth: number;
  material: MaterialType;
  backgroundColor?: string;
  autoRotate?: boolean;
  rotationSpeed?: number;
  environmentPreset?: EnvironmentPreset;
};

export const ThreeCanvas = forwardRef<HTMLDivElement | null, Props>(
  (
    {
      svgText,
      depth,
      material,
      backgroundColor = "#f8fafc",
      autoRotate = true,
      rotationSpeed = 2.0,
      environmentPreset = "studio",
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const controlsRef = useRef<OrbitControls | null>(null);

    // Use HDRI environment maps
    const { environmentMap } = useEnvironmentMap(
      rendererRef.current,
      environmentPreset
    );

    // Enhanced material creation with ultra-realistic PBR properties and advanced effects
    const createMaterial = (materialType: MaterialType): THREE.Material => {
      switch (materialType) {
        // Premium Metals
        case "liquid-chrome":
          return new THREE.MeshPhysicalMaterial({
            color: 0xf0f0f0,
            metalness: 1.0,
            roughness: 0.0,
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
            envMapIntensity: 5.0,
            reflectivity: 1.0,
            clearcoat: 1.0,
            clearcoatRoughness: 0.0,
            emissive: 0x111133,
            emissiveIntensity: 0.02,
          });

        case "plasma-glow":
          return new THREE.MeshPhysicalMaterial({
            color: 0x00ffff,
            metalness: 0.3,
            roughness: 0.1,
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

        default:
          return new THREE.MeshPhysicalMaterial({
            color: 0xf0f0f0,
            metalness: 1.0,
            roughness: 0.0,
            envMapIntensity: 4.0,
            reflectivity: 1.0,
            clearcoat: 1.0,
            clearcoatRoughness: 0.0,
            emissive: 0x111122,
            emissiveIntensity: 0.02,
          });
      }
    };

    useEffect(() => {
      if (!svgText || !containerRef.current) return;

      // Scene setup
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(backgroundColor);
      sceneRef.current = scene;

      const camera = new THREE.PerspectiveCamera(
        75,
        containerRef.current.clientWidth / containerRef.current.clientHeight,
        0.1,
        1000
      );
      camera.position.set(0, 0, 100);

      // Enhanced renderer settings
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

      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      // Add orbit controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.enableZoom = true;
      controls.enablePan = true;
      controls.maxDistance = 300;
      controls.minDistance = 50;
      controls.autoRotate = autoRotate;
      controls.autoRotateSpeed = rotationSpeed;
      controlsRef.current = controls;

      // Enhanced lighting setup for better material rendering
      const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
      scene.add(ambientLight);

      // Main directional light
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
      directionalLight.position.set(50, 50, 50);
      directionalLight.castShadow = true;
      directionalLight.shadow.mapSize.width = 4096;
      directionalLight.shadow.mapSize.height = 4096;
      directionalLight.shadow.camera.near = 0.1;
      directionalLight.shadow.camera.far = 500;
      directionalLight.shadow.camera.left = -100;
      directionalLight.shadow.camera.right = 100;
      directionalLight.shadow.camera.top = 100;
      directionalLight.shadow.camera.bottom = -100;
      directionalLight.shadow.bias = -0.0001;
      scene.add(directionalLight);

      // Fill light
      const fillLight = new THREE.DirectionalLight(0xffffff, 0.4);
      fillLight.position.set(-30, 30, 30);
      scene.add(fillLight);

      // Rim light for better edge definition
      const rimLight = new THREE.DirectionalLight(0xffffff, 0.6);
      rimLight.position.set(-50, -50, -50);
      scene.add(rimLight);

      // Environment light for better reflections
      const envLight = new THREE.HemisphereLight(0x87ceeb, 0x8b4513, 0.4);
      scene.add(envLight);

      // Create environment map for realistic reflections using HDRI
      const createEnvironmentMap = () => {
        // This will be replaced by the HDRI environment map from the hook
        // Fallback for when HDRI is loading
        const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(512, {
          format: THREE.RGBFormat,
          generateMipmaps: true,
          minFilter: THREE.LinearMipmapLinearFilter,
        });

        const cubeCamera = new THREE.CubeCamera(1, 1000, cubeRenderTarget);

        // Create a gradient sky environment
        const envScene = new THREE.Scene();
        const skyGeometry = new THREE.SphereGeometry(500, 32, 32);
        const skyMaterial = new THREE.ShaderMaterial({
          uniforms: {
            topColor: { value: new THREE.Color(0x87ceeb) },
            bottomColor: { value: new THREE.Color(0x2c3e50) },
            offset: { value: 33 },
            exponent: { value: 0.6 },
          },
          vertexShader: `
            varying vec3 vWorldPosition;
            void main() {
              vec4 worldPosition = modelMatrix * vec4(position, 1.0);
              vWorldPosition = worldPosition.xyz;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,
          fragmentShader: `
            uniform vec3 topColor;
            uniform vec3 bottomColor;
            uniform float offset;
            uniform float exponent;
            varying vec3 vWorldPosition;
            void main() {
              float h = normalize(vWorldPosition + offset).y;
              gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0)), 1.0);
            }
          `,
          side: THREE.BackSide,
        });

        const sky = new THREE.Mesh(skyGeometry, skyMaterial);
        envScene.add(sky);

        cubeCamera.update(renderer, envScene);
        return cubeRenderTarget.texture;
      };

      // Use HDRI environment map if available, otherwise fallback to procedural
      const currentEnvironmentMap = environmentMap || createEnvironmentMap();

      const loader = new SVGLoader();
      const svgData = loader.parse(svgText);

      const svgGroup = new THREE.Group();
      const selectedMaterial = createMaterial(material);

      // Apply environment map to materials that support it
      if (
        selectedMaterial instanceof THREE.MeshPhysicalMaterial ||
        selectedMaterial instanceof THREE.MeshStandardMaterial
      ) {
        selectedMaterial.envMap = currentEnvironmentMap;
      }

      svgData.paths.forEach((path) => {
        const shapes = SVGLoader.createShapes(path);
        shapes.forEach((shape) => {
          const geometry = new THREE.ExtrudeGeometry(shape, {
            depth: depth, // How "thick" the 3D object is
            bevelEnabled: true, // Smooth edges
            bevelThickness: 1.0, // Edge thickness
            bevelSize: 0.8, // Edge size
            bevelSegments: 8, // Edge smoothness
            curveSegments: 32, // Curve detail
            steps: 2, // Extrusion steps
          });

          geometry.computeVertexNormals();
          const smoothGeometry = geometry.clone();
          smoothGeometry.computeVertexNormals();

          const mesh = new THREE.Mesh(smoothGeometry, selectedMaterial);
          mesh.castShadow = true;
          mesh.receiveShadow = true;

          svgGroup.add(mesh);
        });
      });

      // Fix vertical flipping - SVG coordinate system needs to be flipped
      svgGroup.scale.y = -1;

      // Center the logo
      const box = new THREE.Box3().setFromObject(svgGroup);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());

      svgGroup.position.sub(center);
      scene.add(svgGroup);

      // Adjust camera position
      const maxDim = Math.max(size.x, size.y, size.z);
      camera.position.z = maxDim * 2;
      controls.target.set(0, 0, 0);
      controls.update();

      // Handle resize
      const handleResize = () => {
        if (!containerRef.current) return;

        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      };

      window.addEventListener("resize", handleResize);

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };
      animate();

      return () => {
        window.removeEventListener("resize", handleResize);
        controls.dispose();
        renderer.dispose();
        selectedMaterial.dispose();
      };
    }, [
      svgText,
      depth,
      material,
      backgroundColor,
      autoRotate,
      rotationSpeed,
      environmentMap,
    ]);

    // Update autoRotate setting when prop changes
    useEffect(() => {
      if (controlsRef.current) {
        controlsRef.current.autoRotate = autoRotate;
      }
    }, [autoRotate]);

    // Update rotation speed when prop changes
    useEffect(() => {
      if (controlsRef.current) {
        controlsRef.current.autoRotateSpeed = rotationSpeed;
      }
    }, [rotationSpeed]);

    return (
      <div className="relative" ref={ref}>
        <div
          ref={containerRef}
          className="w-full h-[600px] rounded-lg overflow-hidden"
        />
      </div>
    );
  }
);

ThreeCanvas.displayName = "ThreeCanvas";
