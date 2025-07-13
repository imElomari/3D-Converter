import { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three-stdlib";

interface UseThreeAnimationOptions {
  autoRotate?: boolean;
  interactive?: boolean;
  material?: string;
  enableControls?: boolean;
}

/**
 * Hook for managing Three.js animations and controls
 */
export const useThreeAnimation = (
  scene: THREE.Scene | null,
  camera: THREE.PerspectiveCamera | null,
  renderer: THREE.WebGLRenderer | null,
  textMesh: THREE.Group | null,
  options: UseThreeAnimationOptions = {}
) => {
  const {
    autoRotate = true,
    interactive = false,
    material = "liquid-chrome",
    enableControls = true,
  } = options;

  const controlsRef = useRef<OrbitControls | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!scene || !camera || !renderer) return;

    // Setup controls
    if (enableControls && renderer.domElement) {
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.enableZoom = true;
      controls.enablePan = false;
      controls.autoRotate = autoRotate;
      controls.autoRotateSpeed = 1.5;
      controls.minDistance = 20;
      controls.maxDistance = 150;
      controls.minPolarAngle = Math.PI / 6;
      controls.maxPolarAngle = (5 * Math.PI) / 6;
      controlsRef.current = controls;
    }

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

          if (child.color.r > child.color.g && child.color.r > child.color.b) {
            // Gold/warm light
            child.position.x = -60 + Math.sin(lightTime * 0.7) * 20;
            child.position.y = 40 + Math.cos(lightTime * 0.9) * 15;
            child.position.z = 40 + Math.sin(lightTime * 0.5) * 10;
          } else if (child.color.b > child.color.r && child.color.b > child.color.g) {
            // Blue/cool light
            child.position.x = 60 + Math.cos(lightTime * 0.6) * 15;
            child.position.y = 60 + Math.sin(lightTime * 0.8) * 12;
            child.position.z = -60 + Math.cos(lightTime * 0.6) * 25;
          }
        }

        if (child instanceof THREE.SpotLight) {
          // Subtle spot light movement
          const spotTime = time * 0.3;
          child.intensity = 2.5 + Math.sin(spotTime * 3) * 0.5;
        }
      });

      // Enhanced text animations based on material type
      if (textMesh) {
        applyMaterialBasedAnimation(textMesh, material, time, interactive);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (controlsRef.current) {
        controlsRef.current.dispose();
      }
    };
  }, [scene, camera, renderer, textMesh, autoRotate, interactive, material, enableControls]);

  return { controls: controlsRef.current };
};

/**
 * Apply material-specific animations to text mesh
 */
const applyMaterialBasedAnimation = (
  textGroup: THREE.Group,
  material: string,
  time: number,
  interactive: boolean
) => {
  // Apply different animations based on material type
  switch (material) {
    case "holographic":
    case "holographic-rainbow":
    case "quantum-shimmer":
    case "aurora-borealis":
      textGroup.rotation.y = Math.sin(time * 0.5) * 0.15;
      textGroup.rotation.x = Math.cos(time * 0.3) * 0.08;
      textGroup.position.y = Math.sin(time * 1.2) * 1.5;

      // Add rainbow shimmer effect
      textGroup.traverse((child) => {
        if (
          child instanceof THREE.Mesh &&
          child.material instanceof THREE.MeshPhysicalMaterial
        ) {
          child.material.emissiveIntensity = 0.15 + Math.sin(time * 3) * 0.08;
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
          child.material.emissiveIntensity = 0.6 + Math.sin(time * 4) * 0.3;
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
          child.material instanceof THREE.MeshPhysicalMaterial
        ) {
          const material = child.material as THREE.MeshPhysicalMaterial & { iridescenceIOR?: number };
          if (material.iridescenceIOR !== undefined) {
            material.iridescenceIOR = 1.3 + Math.sin(time * 2) * 0.2;
          }
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
};
