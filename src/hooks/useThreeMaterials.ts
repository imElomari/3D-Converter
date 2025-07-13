import { useMemo } from "react";
import * as THREE from "three";
import { createMaterial } from "@/lib/materials";
import type { MaterialType } from "@/components/MaterialSelector";

/**
 * Hook for creating and managing Three.js materials
 */
export const useThreeMaterials = (materialType: MaterialType = "liquid-chrome") => {
  const material = useMemo(() => {
    const mat = createMaterial(materialType);
    
    // Ensure disposal is available
    if (mat && typeof mat.dispose === 'function') {
      return mat;
    }
    
    // Fallback material
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
  }, [materialType]);

  return material;
};
