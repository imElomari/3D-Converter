import { useEffect } from "react";
import * as THREE from "three";

/**
 * Hook for setting up professional Three.js lighting for 3D text rendering
 */
export const useThreeLighting = (scene: THREE.Scene | null) => {
  useEffect(() => {
    if (!scene) return;

    // Clear existing lights
    const lightsToRemove: THREE.Light[] = [];
    scene.traverse((child) => {
      if (child instanceof THREE.Light) {
        lightsToRemove.push(child);
      }
    });
    lightsToRemove.forEach((light) => scene.remove(light));

    // Professional studio lighting setup
    const ambientLight = new THREE.AmbientLight(0x4a5568, 0.4);
    scene.add(ambientLight);

    // Key light - main illumination
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(80, 80, 80);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    keyLight.shadow.camera.near = 0.1;
    keyLight.shadow.camera.far = 500;
    keyLight.shadow.camera.left = -100;
    keyLight.shadow.camera.right = 100;
    keyLight.shadow.camera.top = 100;
    keyLight.shadow.camera.bottom = -100;
    scene.add(keyLight);

    // Fill light - softens shadows
    const fillLight = new THREE.DirectionalLight(0xa0c4ff, 1.2);
    fillLight.position.set(-60, 40, 60);
    scene.add(fillLight);

    // Rim light - edge definition
    const rimLight = new THREE.DirectionalLight(0xffc0cb, 1.0);
    rimLight.position.set(0, -80, -80);
    scene.add(rimLight);

    // Multiple point lights for dynamic reflections
    const pointLight1 = new THREE.PointLight(0x87ceeb, 2.0, 200);
    pointLight1.position.set(60, 60, 60);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffd700, 1.5, 200);
    pointLight2.position.set(-60, 40, 40);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xff69b4, 1.8, 200);
    pointLight3.position.set(0, -60, 60);
    scene.add(pointLight3);

    const pointLight4 = new THREE.PointLight(0x00ffff, 1.2, 200);
    pointLight4.position.set(40, 0, -60);
    scene.add(pointLight4);

    // Accent spot lights for premium materials
    const spotLight1 = new THREE.SpotLight(
      0xffffff,
      3.0,
      0,
      Math.PI / 6,
      0.25,
      2
    );
    spotLight1.position.set(100, 100, 100);
    spotLight1.target.position.set(0, 0, 0);
    spotLight1.castShadow = true;
    scene.add(spotLight1);
    scene.add(spotLight1.target);

    const spotLight2 = new THREE.SpotLight(
      0x87ceeb,
      2.5,
      0,
      Math.PI / 8,
      0.3,
      2
    );
    spotLight2.position.set(-80, 80, -80);
    spotLight2.target.position.set(0, 0, 0);
    scene.add(spotLight2);
    scene.add(spotLight2.target);

    // Hemisphere light for overall ambient illumination
    const hemisphereLight = new THREE.HemisphereLight(0x87ceeb, 0x8b4513, 0.3);
    scene.add(hemisphereLight);

    // Return cleanup function
    return () => {
      const lightsToCleanup: THREE.Light[] = [];
      scene.traverse((child) => {
        if (child instanceof THREE.Light) {
          lightsToCleanup.push(child);
        }
      });
      lightsToCleanup.forEach((light) => scene.remove(light));
    };
  }, [scene]);
};
