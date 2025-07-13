import * as THREE from "three";

/**
 * Futuristic and sci-fi materials with glowing and energy effects
 */
export const createFuturisticMaterial = (type: string): THREE.Material => {
  switch (type) {
    case "holographic-rainbow":
      return new THREE.MeshPhysicalMaterial({
        color: 0xff69b4,
        metalness: 0.8,
        roughness: 0.0,
        envMapIntensity: 6.0,
        reflectivity: 1.0,
        clearcoat: 1.0,
        clearcoatRoughness: 0.0,
        emissive: 0x4411cc,
        emissiveIntensity: 0.15,
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
        emissive: 0x222222,
        emissiveIntensity: 0.05,
      });

    case "plasma-glow":
      return new THREE.MeshPhysicalMaterial({
        color: 0x00ffff,
        metalness: 0.3,
        roughness: 0.1,
        envMapIntensity: 3.0,
        reflectivity: 0.8,
        clearcoat: 0.5,
        clearcoatRoughness: 0.2,
        emissive: 0x0088ff,
        emissiveIntensity: 0.3,
      });

    case "quantum-shimmer":
      return new THREE.MeshPhysicalMaterial({
        color: 0xaa88ff,
        metalness: 0.9,
        roughness: 0.05,
        envMapIntensity: 4.5,
        reflectivity: 0.95,
        clearcoat: 1.0,
        clearcoatRoughness: 0.0,
        emissive: 0x4400ff,
        emissiveIntensity: 0.2,
      });

    case "neon-cyberpunk":
      return new THREE.MeshPhysicalMaterial({
        color: 0xff0080,
        metalness: 0.5,
        roughness: 0.1,
        envMapIntensity: 3.5,
        reflectivity: 0.8,
        clearcoat: 0.8,
        clearcoatRoughness: 0.1,
        emissive: 0xff0080,
        emissiveIntensity: 0.5,
      });

    case "aurora-borealis":
      return new THREE.MeshPhysicalMaterial({
        color: 0x00ff88,
        metalness: 0.2,
        roughness: 0.2,
        envMapIntensity: 4.0,
        reflectivity: 0.7,
        clearcoat: 0.9,
        clearcoatRoughness: 0.1,
        emissive: 0x004422,
        emissiveIntensity: 0.25,
      });

    // Legacy support
    case "holographic":
      return new THREE.MeshPhysicalMaterial({
        color: 0xff69b4,
        metalness: 0.8,
        roughness: 0.0,
        envMapIntensity: 5.0,
        reflectivity: 1.0,
        clearcoat: 1.0,
        clearcoatRoughness: 0.0,
        emissive: 0x4411cc,
        emissiveIntensity: 0.12,
      });

    case "neon":
      return new THREE.MeshPhysicalMaterial({
        color: 0x00ffff,
        metalness: 0.3,
        roughness: 0.1,
        envMapIntensity: 2.5,
        reflectivity: 0.7,
        clearcoat: 0.5,
        clearcoatRoughness: 0.2,
        emissive: 0x0088ff,
        emissiveIntensity: 0.25,
      });

    default:
      throw new Error(`Unknown futuristic material type: ${type}`);
  }
};

export const futuristicMaterialTypes = [
  "holographic-rainbow",
  "liquid-mercury",
  "plasma-glow", 
  "quantum-shimmer",
  "neon-cyberpunk",
  "aurora-borealis",
  "holographic",
  "neon"
] as const;
