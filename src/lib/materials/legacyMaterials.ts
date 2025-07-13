import * as THREE from "three";

/**
 * Basic legacy materials for backward compatibility
 */
export const createLegacyMaterial = (type: string): THREE.Material => {
  switch (type) {
    case "matte":
      return new THREE.MeshLambertMaterial({
        color: 0x808080,
      });

    default:
      throw new Error(`Unknown legacy material type: ${type}`);
  }
};

export const legacyMaterialTypes = [
  "matte"
] as const;
