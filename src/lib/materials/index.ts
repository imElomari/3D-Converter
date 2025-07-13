import * as THREE from "three";
import type { MaterialType } from "@/components/MaterialSelector";

import { createMetalMaterial, metalMaterialTypes } from "./metalMaterials";
import { createGemMaterial, gemMaterialTypes } from "./gemMaterials";
import { createAdvancedMaterial, advancedMaterialTypes } from "./advancedMaterials";
import { createNaturalMaterial, naturalMaterialTypes } from "./naturalMaterials";
import { createFuturisticMaterial, futuristicMaterialTypes } from "./futuristicMaterials";
import { createLegacyMaterial, legacyMaterialTypes } from "./legacyMaterials";

/**
 * Creates a Three.js material based on the specified material type
 * with ultra-realistic PBR properties and advanced effects
 */
export const createMaterial = (materialType: MaterialType, envMap?: THREE.Texture): THREE.Material => {
  let material: THREE.Material;
  
  // Check metal materials
  if ((metalMaterialTypes as readonly string[]).includes(materialType)) {
    material = createMetalMaterial(materialType);
  }
  // Check gem materials
  else if ((gemMaterialTypes as readonly string[]).includes(materialType)) {
    material = createGemMaterial(materialType);
  }
  // Check advanced materials
  else if ((advancedMaterialTypes as readonly string[]).includes(materialType)) {
    material = createAdvancedMaterial(materialType);
  }
  // Check natural materials
  else if ((naturalMaterialTypes as readonly string[]).includes(materialType)) {
    material = createNaturalMaterial(materialType);
  }
  // Check futuristic materials
  else if ((futuristicMaterialTypes as readonly string[]).includes(materialType)) {
    material = createFuturisticMaterial(materialType);
  }
  // Check legacy materials
  else if ((legacyMaterialTypes as readonly string[]).includes(materialType)) {
    material = createLegacyMaterial(materialType);
  }
  // Default fallback
  else {
    material = new THREE.MeshPhysicalMaterial({
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

  // Apply environment map if provided and material supports it
  if (envMap && (
    material instanceof THREE.MeshPhysicalMaterial ||
    material instanceof THREE.MeshStandardMaterial
  )) {
    material.envMap = envMap;
  }

  return material;
};

// Export all material types for external use
export const allMaterialTypes = [
  ...metalMaterialTypes,
  ...gemMaterialTypes,
  ...advancedMaterialTypes,
  ...naturalMaterialTypes,
  ...futuristicMaterialTypes,
  ...legacyMaterialTypes
] as const;

// Re-export individual creators for granular usage
export {
  createMetalMaterial,
  createGemMaterial,
  createAdvancedMaterial,
  createNaturalMaterial,
  createFuturisticMaterial,
  createLegacyMaterial
};
