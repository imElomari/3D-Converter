import * as THREE from "three";
import { RGBELoader } from "three-stdlib";

/**
 * Available HDRI environment map presets
 */
export type EnvironmentPreset = "studio" | "outdoor" | "night" | "neutral";

/**
 * Creates an HDRI environment map for realistic material rendering
 */
export const createEnvironmentMap = async (
  renderer: THREE.WebGLRenderer,
  preset: EnvironmentPreset = "studio"
): Promise<THREE.Texture> => {
  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  pmremGenerator.compileEquirectangularShader();

  try {
    // Load HDRI environment map based on preset
    const hdriUrls: Record<EnvironmentPreset, string> = {
      studio: "/hdri/studio.hdr",
      outdoor: "/hdri/outdoor.hdr", 
      night: "/hdri/night.hdr",
      neutral: "/hdri/studio.hdr" // fallback to studio
    };

    const rgbeLoader = new RGBELoader();
    const hdriTexture = await new Promise<THREE.DataTexture>((resolve, reject) => {
      rgbeLoader.load(
        hdriUrls[preset],
        (texture) => {
          resolve(texture);
        },
        undefined,
        (error) => {
          console.warn(`Failed to load HDRI ${preset}, falling back to neutral`, error);
          // Fallback to a different preset or create a basic environment
          reject(error);
        }
      );
    });

    // Generate environment map from HDRI
    const envMap = pmremGenerator.fromEquirectangular(hdriTexture).texture;
    hdriTexture.dispose();
    pmremGenerator.dispose();

    return envMap;
  } catch (error) {
    console.warn("Failed to load HDRI, creating procedural environment", error);
    
    // Fallback: Create a procedural environment map
    return createProceduralEnvironment(pmremGenerator);
  }
};

/**
 * Creates a procedural environment map as fallback
 */
const createProceduralEnvironment = (
  pmremGenerator: THREE.PMREMGenerator
): THREE.Texture => {
  const scene = new THREE.Scene();
  
  // Create a gradient sky
  const skyGeometry = new THREE.SphereGeometry(100, 32, 32);
  const skyMaterial = new THREE.ShaderMaterial({
    uniforms: {
      topColor: { value: new THREE.Color(0x87ceeb) },
      bottomColor: { value: new THREE.Color(0xffffff) },
      offset: { value: 0.1 },
      exponent: { value: 0.6 }
    },
    vertexShader: `
      varying vec3 vWorldPosition;
      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 topColor;
      uniform vec3 bottomColor;
      uniform float offset;
      uniform float exponent;
      varying vec3 vWorldPosition;
      void main() {
        float h = normalize(vWorldPosition + offset).y;
        gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0)), 1.0);
      }
    `,
    side: THREE.BackSide
  });
  
  const sky = new THREE.Mesh(skyGeometry, skyMaterial);
  scene.add(sky);
  
  // Generate environment map from procedural sky
  const envMap = pmremGenerator.fromScene(scene).texture;
  pmremGenerator.dispose();
  
  return envMap;
};

/**
 * Sets up professional lighting for the 3D scene
 */
export const setupLighting = (scene: THREE.Scene): void => {
  // Remove existing lights
  const existingLights = scene.children.filter(child => child instanceof THREE.Light);
  existingLights.forEach(light => scene.remove(light));

  // Main directional light (key light)
  const mainLight = new THREE.DirectionalLight(0xffffff, 2.5);
  mainLight.position.set(5, 10, 5);
  mainLight.castShadow = true;
  mainLight.shadow.mapSize.width = 2048;
  mainLight.shadow.mapSize.height = 2048;
  mainLight.shadow.camera.near = 0.1;
  mainLight.shadow.camera.far = 50;
  mainLight.shadow.camera.left = -10;
  mainLight.shadow.camera.right = 10;
  mainLight.shadow.camera.top = 10;
  mainLight.shadow.camera.bottom = -10;
  scene.add(mainLight);

  // Fill light (softer, from opposite side)
  const fillLight = new THREE.DirectionalLight(0x4a90e2, 0.8);
  fillLight.position.set(-5, 5, -5);
  scene.add(fillLight);

  // Rim light (from behind/above)
  const rimLight = new THREE.DirectionalLight(0xffffff, 1.2);
  rimLight.position.set(0, 8, -8);
  scene.add(rimLight);

  // Ambient light for overall illumination
  const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
  scene.add(ambientLight);

  // Point lights for extra sparkle
  const pointLight1 = new THREE.PointLight(0x64b5f6, 0.5, 30);
  pointLight1.position.set(10, 10, 10);
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight(0xba68c8, 0.5, 30);
  pointLight2.position.set(-10, 10, -10);
  scene.add(pointLight2);
};

/**
 * Creates and configures the camera
 */
export const createCamera = (containerWidth: number, containerHeight: number): THREE.PerspectiveCamera => {
  const camera = new THREE.PerspectiveCamera(
    60,
    containerWidth / containerHeight,
    0.1,
    1000
  );
  camera.position.set(0, 0, 25);
  return camera;
};

/**
 * Handles window resize for the renderer and camera
 */
export const handleResize = (
  container: HTMLDivElement,
  renderer: THREE.WebGLRenderer,
  camera: THREE.PerspectiveCamera
): void => {
  const { clientWidth, clientHeight } = container;
  
  renderer.setSize(clientWidth, clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  
  camera.aspect = clientWidth / clientHeight;
  camera.updateProjectionMatrix();
};
