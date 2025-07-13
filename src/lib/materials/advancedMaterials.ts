import * as THREE from "three";

/**
 * Advanced technical materials with cutting-edge properties
 */
export const createAdvancedMaterial = (type: string): THREE.Material => {
  switch (type) {
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
        opacity: 0.7,
        envMapIntensity: 2.0,
        ior: 1.05, // Very low for aerogel
        thickness: 0.5,
        clearcoat: 0.3,
        clearcoatRoughness: 0.5,
        emissive: 0x001122,
        emissiveIntensity: 0.01,
      });

    case "metamaterial-iridescent":
      return new THREE.MeshPhysicalMaterial({
        color: 0x9966ff,
        metalness: 0.7,
        roughness: 0.1,
        envMapIntensity: 5.0,
        reflectivity: 0.9,
        clearcoat: 1.0,
        clearcoatRoughness: 0.0,
        emissive: 0x330066,
        emissiveIntensity: 0.08,
      });

    default:
      throw new Error(`Unknown advanced material type: ${type}`);
  }
};

export const advancedMaterialTypes = [
  "carbon-weave",
  "titanium-mesh",
  "ceramic-tech",
  "graphene-sheet",
  "aerogel-translucent",
  "metamaterial-iridescent"
] as const;
