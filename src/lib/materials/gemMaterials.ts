import * as THREE from "three";

/**
 * Precious stones and gem materials with realistic optical properties
 */
export const createGemMaterial = (type: string): THREE.Material => {
  switch (type) {
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
        roughness: 0.0,
        transmission: 0.9,
        transparent: true,
        opacity: 0.8,
        envMapIntensity: 4.2,
        ior: 1.54, // Real quartz IOR
        thickness: 0.9,
        clearcoat: 1.0,
        clearcoatRoughness: 0.0,
        emissive: 0x001111,
        emissiveIntensity: 0.02,
      });

    // Legacy support
    case "crystal":
      return new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        metalness: 0.0,
        roughness: 0.0,
        transmission: 0.85,
        transparent: true,
        opacity: 0.75,
        envMapIntensity: 3.5,
        ior: 1.5,
        thickness: 0.8,
        clearcoat: 1.0,
        clearcoatRoughness: 0.0,
      });

    case "glass":
      return new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        metalness: 0.0,
        roughness: 0.0,
        transmission: 0.9,
        transparent: true,
        opacity: 0.1,
        envMapIntensity: 2.0,
        ior: 1.52,
        thickness: 0.5,
      });

    default:
      throw new Error(`Unknown gem material type: ${type}`);
  }
};

export const gemMaterialTypes = [
  "diamond-crystal",
  "sapphire-blue",
  "emerald-green", 
  "ruby-red",
  "obsidian-black",
  "quartz-clear",
  "crystal",
  "glass"
] as const;
