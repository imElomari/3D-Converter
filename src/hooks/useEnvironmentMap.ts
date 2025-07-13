import { useEffect, useState, useRef, useCallback } from "react";
import * as THREE from "three";
import { createEnvironmentMap, type EnvironmentPreset } from "@/lib/threeUtils";

/**
 * Hook for managing HDRI environment maps
 */
export const useEnvironmentMap = (
  renderer: THREE.WebGLRenderer | null,
  preset: EnvironmentPreset = "studio"
) => {
  const [environmentMap, setEnvironmentMap] = useState<THREE.Texture | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const currentPresetRef = useRef<EnvironmentPreset | null>(null);

  // Cleanup function
  const cleanup = useCallback(() => {
    if (environmentMap) {
      environmentMap.dispose();
    }
  }, [environmentMap]);

  useEffect(() => {
    if (!renderer) return;

    // Don't reload if preset hasn't changed
    if (currentPresetRef.current === preset) return;

    let isCancelled = false;
    setIsLoading(true);
    setError(null);

    const loadEnvironmentMap = async () => {
      try {
        const envMap = await createEnvironmentMap(renderer, preset);
        
        if (!isCancelled) {
          // Dispose previous environment map
          if (environmentMap) {
            environmentMap.dispose();
          }
          
          setEnvironmentMap(envMap);
          currentPresetRef.current = preset;
          setIsLoading(false);
        }
      } catch (err) {
        if (!isCancelled) {
          setError(err instanceof Error ? err.message : "Failed to load environment map");
          setIsLoading(false);
        }
      }
    };

    loadEnvironmentMap();

    return () => {
      isCancelled = true;
    };
  }, [renderer, preset, environmentMap]);

  // Cleanup on unmount
  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  return { environmentMap, isLoading, error };
};
