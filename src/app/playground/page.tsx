import type { Metadata } from "next";
import { SceneClient } from "@/components/scene-client";

export const metadata: Metadata = {
  title: "Creative Lab",
  description: "The OrbitNode creative lab: experiments with 3D sculpture, interaction design, and frontend engineering.",
  alternates: { canonical: "/playground" }
};

export default function PlaygroundPage() {
  return (
    <main id="main-content" className="shell interior-page">
      <p className="eyebrow">05 · CREATIVE LAB</p>
      <h1 className="page-title">A LITTLE<br/><em>EXPERIMENTAL.</em></h1>
      <p className="page-intro">A space for small experiments and ideas that don't need to fit inside a case study. The first piece is an orbital sculpture built with real-time WebGL.</p>
      <section className="lab-feature">
        <div className="lab-visual"><SceneClient /></div>
        <div className="lab-info"><span className="eyebrow">EXPERIMENT 001</span><h2>ORBITAL FORM</h2><p>An original procedural 3D sculpture made with Three.js and React Three Fiber. It gently reacts to pointer movement and provides a static fallback when 3D rendering or animation isn't appropriate.</p><span className="chip">REACT THREE FIBER · WEBGL</span></div>
      </section>
    </main>
  );
}

