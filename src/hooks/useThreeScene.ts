import { useRef, useEffect } from "react";
import * as THREE from "three";

interface UseThreeSceneOptions {
  backgroundColor?: string;
  enableControls?: boolean;
}

/**
 * Hook for setting up a basic Three.js scene with camera and renderer
 */
export const useThreeScene = (
  containerRef: React.RefObject<HTMLDivElement | null>,
  options: UseThreeSceneOptions = {}
) => {
  const { backgroundColor = "transparent", enableControls = true } = options;
  
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current; // Copy ref to variable for cleanup

    // Clean, professional scene setup
    const scene = new THREE.Scene();
    if (backgroundColor !== "transparent") {
      scene.background = new THREE.Color(backgroundColor);
    } else {
      scene.background = null;
    }
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 50);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      premultipliedAlpha: false,
      preserveDrawingBuffer: true,
    });

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !camera || !renderer) return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      
      if (renderer) {
        renderer.dispose();
      }
      
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [backgroundColor, enableControls]); // containerRef is intentionally excluded as it's a ref

  return {
    scene: sceneRef.current,
    camera: cameraRef.current,
    renderer: rendererRef.current,
  };
};
