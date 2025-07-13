import { useRef, useEffect } from "react";
import * as THREE from "three";
import { FontLoader } from "three-stdlib";
import { TextGeometry } from "three-stdlib";

interface UseThreeTextOptions {
  text?: string;
  size?: number;
  depth?: number;
  material?: THREE.Material;
}

/**
 * Hook for creating and managing 3D text geometry
 */
export const useThreeText = (
  scene: THREE.Scene | null,
  options: UseThreeTextOptions = {}
) => {
  const {
    text = "LOGO",
    size = 16,
    depth = 4,
    material
  } = options;

  const textMeshRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    if (!scene || !material) return;

    // Clean up existing text mesh
    if (textMeshRef.current) {
      scene.remove(textMeshRef.current);
      textMeshRef.current = null;
    }

    // Font loading with fallback
    const loadFont = () => {
      const loader = new FontLoader();
      const fontPaths = [
        "/fonts/helvetiker_regular.typeface.json",
        "./fonts/helvetiker_regular.typeface.json",
      ];

      let currentPathIndex = 0;

      const tryLoadFont = () => {
        if (currentPathIndex >= fontPaths.length) {
          createFallbackText();
          return;
        }

        loader.load(
          fontPaths[currentPathIndex],
          (font) => {
            createText(font);
          },
          undefined,
          () => {
            currentPathIndex++;
            tryLoadFont();
          }
        );
      };

      tryLoadFont();
    };

    // Create text with loaded font
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const createText = (font: any) => {
      const textGeometry = new TextGeometry(text, {
        font: font,
        size: size,
        height: depth,
        curveSegments: 24,
        bevelEnabled: true,
        bevelThickness: 0.4,
        bevelSize: 0.3,
        bevelOffset: 0,
      });

      textGeometry.computeBoundingBox();
      textGeometry.computeVertexNormals();

      if (textGeometry.boundingBox) {
        const centerOffsetX =
          -0.5 *
          (textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x);
        const centerOffsetY =
          -0.5 *
          (textGeometry.boundingBox.max.y - textGeometry.boundingBox.min.y);

        const textMesh = new THREE.Mesh(textGeometry, material);
        textMesh.position.x = centerOffsetX;
        textMesh.position.y = centerOffsetY;
        textMesh.position.z = 0;
        textMesh.castShadow = true;
        textMesh.receiveShadow = true;

        const textGroup = new THREE.Group();
        textGroup.add(textMesh);
        textGroup.position.set(0, 0, 0);

        scene.add(textGroup);
        textMeshRef.current = textGroup;
      }
    };

    // Fallback text creation if font loading fails
    const createFallbackText = () => {
      const textGroup = new THREE.Group();
      const letters = text.split("");
      const letterWidth = size * 0.6;
      const spacing = letterWidth * 1.2;
      const totalWidth = (letters.length - 1) * spacing;

      letters.forEach((_, index) => {
        const letterGeometry = new THREE.BoxGeometry(
          letterWidth,
          size,
          depth
        );
        const letterMesh = new THREE.Mesh(letterGeometry, material);
        letterMesh.position.x = index * spacing - totalWidth / 2;
        letterMesh.castShadow = true;
        letterMesh.receiveShadow = true;
        textGroup.add(letterMesh);
      });

      scene.add(textGroup);
      textMeshRef.current = textGroup;
    };

    loadFont();

    return () => {
      if (textMeshRef.current) {
        scene.remove(textMeshRef.current);
        textMeshRef.current = null;
      }
    };
  }, [scene, text, size, depth, material]);

  return textMeshRef.current;
};
