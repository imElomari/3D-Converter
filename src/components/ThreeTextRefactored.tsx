"use client";

import { useRef, forwardRef } from "react";
import type { MaterialType } from "@/components/MaterialSelector";
import { useThreeScene } from "@/hooks/useThreeScene";
import { useThreeLighting } from "@/hooks/useThreeLighting";
import { useThreeMaterials } from "@/hooks/useThreeMaterials";
import { useThreeText } from "@/hooks/useThreeText";
import { useThreeAnimation } from "@/hooks/useThreeAnimation";

interface ThreeTextProps {
  text?: string;
  color?: number;
  size?: number;
  depth?: number;
  enableControls?: boolean;
  autoRotate?: boolean;
  className?: string;
  interactive?: boolean;
  backgroundColor?: string;
  material?: MaterialType;
  cinematic?: boolean;
}

export const ThreeText = forwardRef<HTMLDivElement, ThreeTextProps>(
  (
    {
      text = "LOGO",
      size = 16,
      depth = 4,
      enableControls = true,
      autoRotate = true,
      className = "",
      interactive = false,
      material = "liquid-chrome",
      backgroundColor = "transparent",
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Setup Three.js scene, camera, and renderer
    const { scene, camera, renderer } = useThreeScene(containerRef, {
      backgroundColor,
      enableControls,
    });

    // Setup professional lighting
    useThreeLighting(scene);

    // Create material
    const materialObject = useThreeMaterials(material);

    // Create 3D text geometry
    const textMesh = useThreeText(scene, {
      text,
      size,
      depth,
      material: materialObject,
    });

    // Setup animation and controls
    useThreeAnimation(scene, camera, renderer, textMesh, {
      autoRotate,
      interactive,
      material,
      enableControls,
    });

    return (
      <div ref={ref} className={`w-full h-full ${className}`}>
        <div
          ref={containerRef}
          className="w-full h-full"
          style={{
            background: "transparent",
          }}
        />
      </div>
    );
  }
);

ThreeText.displayName = "ThreeText";
