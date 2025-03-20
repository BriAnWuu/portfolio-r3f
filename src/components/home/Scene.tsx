"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model from "./Model";

export default function Scene() {
    return (
        <Canvas>
            <directionalLight position={[0, 0, 5]} intensity={2} />
            <ambientLight intensity={1} />
            <Suspense fallback={<p>Loading...</p>}>
                <Model />
            </Suspense>
        </Canvas>
    );
}
