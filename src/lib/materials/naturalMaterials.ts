import * as THREE from "three";

/**
 * Natural and organic luxury materials
 */
export const createNaturalMaterial = (type: string): THREE.Material => {
  switch (type) {
    case "marble-carrara":
      return new THREE.MeshPhysicalMaterial({
        color: 0xf8f8ff,
        metalness: 0.0,
        roughness: 0.2,
        envMapIntensity: 1.5,
        reflectivity: 0.6,
        clearcoat: 0.8,
        clearcoatRoughness: 0.1,
        emissive: 0x111111,
        emissiveIntensity: 0.005,
      });

    case "wood-ebony":
      return new THREE.MeshPhysicalMaterial({
        color: 0x2d2d2d,
        metalness: 0.0,
        roughness: 0.8,
        envMapIntensity: 0.8,
        reflectivity: 0.2,
        clearcoat: 0.4,
        clearcoatRoughness: 0.6,
        emissive: 0x000000,
        emissiveIntensity: 0.0,
      });

    case "leather-italian":
      return new THREE.MeshPhysicalMaterial({
        color: 0x8b4513,
        metalness: 0.0,
        roughness: 0.9,
        envMapIntensity: 0.5,
        reflectivity: 0.1,
        clearcoat: 0.2,
        clearcoatRoughness: 0.8,
        emissive: 0x000000,
        emissiveIntensity: 0.0,
      });

    case "fabric-silk":
      return new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        metalness: 0.0,
        roughness: 0.7,
        envMapIntensity: 1.0,
        reflectivity: 0.3,
        clearcoat: 0.1,
        clearcoatRoughness: 0.9,
        emissive: 0x111111,
        emissiveIntensity: 0.01,
      });

    default:
      throw new Error(`Unknown natural material type: ${type}`);
  }
};

export const naturalMaterialTypes = [
  "marble-carrara",
  "wood-ebony", 
  "leather-italian",
  "fabric-silk"
] as const;
