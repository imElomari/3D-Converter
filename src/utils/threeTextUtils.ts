import * as THREE from "three";

/**
 * Utility functions for Three.js text rendering
 */

/**
 * Center a geometry around the origin
 */
export const centerGeometry = (geometry: THREE.BufferGeometry): THREE.Vector3 => {
  geometry.computeBoundingBox();
  const center = new THREE.Vector3();
  
  if (geometry.boundingBox) {
    geometry.boundingBox.getCenter(center);
    geometry.translate(-center.x, -center.y, -center.z);
  }
  
  return center;
};

/**
 * Create shadow-enabled lights
 */
export const createShadowLight = (
  color: number,
  intensity: number,
  position: THREE.Vector3,
  castShadow: boolean = true
): THREE.DirectionalLight => {
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.copy(position);
  
  if (castShadow) {
    light.castShadow = true;
    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 2048;
    light.shadow.camera.near = 0.1;
    light.shadow.camera.far = 500;
    light.shadow.camera.left = -100;
    light.shadow.camera.right = 100;
    light.shadow.camera.top = 100;
    light.shadow.camera.bottom = -100;
  }
  
  return light;
};

/**
 * Apply material properties safely
 */
export const applyMaterialProperties = (
  material: THREE.Material,
  properties: Partial<THREE.MeshPhysicalMaterialParameters>
): void => {
  if (material instanceof THREE.MeshPhysicalMaterial) {
    Object.assign(material, properties);
  }
};

/**
 * Dispose of Three.js objects properly
 */
export const disposeObject = (object: THREE.Object3D): void => {
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      if (child.geometry) {
        child.geometry.dispose();
      }
      if (child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach((material) => material.dispose());
        } else {
          child.material.dispose();
        }
      }
    }
  });
};
