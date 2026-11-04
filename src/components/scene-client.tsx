"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const OrbitScene = dynamic(() => import("./scene"), {
  ssr: false,
  loading: () => <div className="orbit-fallback" aria-hidden="true"><span className="orbit-core" /></div>
});

export function SceneClient() {
  const [enhanced, setEnhanced] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    try {
      const canvas = document.createElement("canvas");
      const supported = Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
      if (supported) setEnhanced(true);
    } catch {
      // A CSS visual remains visible when WebGL is unavailable.
    }
  }, []);

  return (
    <div className="scene-frame" aria-label="Decorative orbital sculpture, the visual mark of OrbitNode" role="img">
      {enhanced ? <OrbitScene /> : <div className="orbit-fallback" aria-hidden="true"><span className="orbit-core" /></div>}
    </div>
  );
}

