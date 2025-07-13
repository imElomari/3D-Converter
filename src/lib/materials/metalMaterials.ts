import * as THREE from "three";

/**
 * Premium metal materials with ultra-realistic PBR properties
 */
export const createMetalMaterial = (type: string): THREE.Material => {
  switch (type) {
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

    // Legacy support
    case "chrome":
      return new THREE.MeshPhysicalMaterial({
        color: 0xc0c0c0,
        metalness: 1.0,
        roughness: 0.1,
        envMapIntensity: 3.0,
        reflectivity: 1.0,
        clearcoat: 0.8,
        clearcoatRoughness: 0.1,
      });

    case "gold":
      return new THREE.MeshPhysicalMaterial({
        color: 0xffd700,
        metalness: 0.9,
        roughness: 0.2,
        envMapIntensity: 2.5,
        reflectivity: 0.9,
        clearcoat: 0.7,
        clearcoatRoughness: 0.2,
      });

    default:
      throw new Error(`Unknown metal material type: ${type}`);
  }
};

export const metalMaterialTypes = [
  "liquid-chrome",
  "rose-gold-brushed", 
  "titanium-noir",
  "platinum-mirror",
  "gold-leaf",
  "copper-aged",
  "bronze-oxidized",
  "steel-damascus",
  "chrome",
  "gold"
] as const;
