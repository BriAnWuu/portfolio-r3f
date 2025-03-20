import { getRandomColor } from "@/utils/RandomColor";
import { useFrame, useThree, Vector3 } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh } from "three";

type TorusKnotArgs = [
    radius?: number,
    tube?: number,
    tubularSegments?: number,
    radialSegments?: number,
    p?: number,
    q?: number
];

type Props = {
    position?: Vector3;
    size: TorusKnotArgs;
    color?: string;
};

const TorusKnot = ({ position = [0, 0, 0], size = [] }: Props) => {
    const ref = useRef<Mesh | null>(null);

    const [color, setColor] = useState("orange");
    const [hovered, setHovered] = useState(false);
    // const [clicked, setClicked] = useState(false);

    useFrame((state, delta) => {
        const speed = hovered ? 0.5 : 1;
        ref.current!.rotation.x += delta * speed;
        ref.current!.position.z = Math.sin(state.clock.elapsedTime) * 1.5;
    });

    return (
        <mesh
            position={position}
            ref={ref}
            onPointerEnter={(event) => {
                event.stopPropagation();
                setHovered(true);
            }}
            onPointerLeave={() => setHovered(false)}
            onClick={() => {
                // setClicked((prev) => !prev);
                setHovered(false);
                setColor(getRandomColor());
            }}
            scale={1.5}
        >
            <torusKnotGeometry args={size} />
            <meshStandardMaterial color={hovered ? "white" : color} wireframe />
        </mesh>
    );
};

export default function Model() {
    const { viewport } = useThree();

    return (
        <group position={[0, 0, -5]} scale={viewport.width / 3}>
            <TorusKnot size={[0.5, 0.1, 100, 16, 2, 3]} />
        </group>
    );
}
