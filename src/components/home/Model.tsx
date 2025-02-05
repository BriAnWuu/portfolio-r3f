import { getRandomColor } from "@/utils/RandomColor";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";

type Props = {
    // figure out their types later :)
    position?: any;
    size?: any;
    color?: string;
};

const TorusKnot = ({ position = [0, 0, 0], size = [1, 1, 1, 1] }: Props) => {
    const ref = useRef();

    const [color, setColor] = useState("orange");
    const [hovered, setHovered] = useState(false);
    // const [clicked, setClicked] = useState(false);

    useFrame((state, delta) => {
        if (!ref.current) return;

        const speed = hovered ? 0.7 : 1;
        ref.current.rotation.x += delta * speed;
        ref.current.position.z = Math.sin(state.clock.elapsedTime) * 1.5;
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
            <TorusKnot size={[0.5, 0.1, 100, 16]} />
        </group>
    );
}
