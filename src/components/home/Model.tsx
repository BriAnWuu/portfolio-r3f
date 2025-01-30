import { Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Vector3 } from "three";

type Props = {
    // figure out their types later :)
    position?: any;
    size?: any;
    color?: string;
};

const Cube = ({ position, size, color }: Props) => {
    const ref = useRef();

    useFrame((state, delta) => {
        ref.current.rotation.x += delta;
        ref.current.rotation.y += delta * 2;
        ref.current.position.z = Math.sin(state.clock.elapsedTime) * 1.5;
    });

    return (
        <mesh position={position} ref={ref}>
            <boxGeometry args={size} />
            <meshStandardMaterial color={color} />
        </mesh>
    );
};

const TorusKnot = ({
    position = [0, 0, 0],
    size = [1, 1, 1, 1],
    color = "orange",
}: Props) => {
    const ref = useRef();

    const [hovered, setHovered] = useState(false);
    const [clicked, setClicked] = useState(false);

    useFrame((state, delta) => {
        const speed = hovered ? 1.5 : 1;
        ref.current.rotation.x += delta * speed;
        // ref.current.rotation.y += delta * 2;
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
            onClick={() => setClicked((prev) => !prev)}
            scale={clicked ? 1.5 : 1}
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
            {/* <Cube position={[1, 0, 0]} size={[1, 1, 1]} color="blue" />
            <Cube position={[-1, 0, 0]} size={[1, 1, 1]} color="red" />
            <Cube position={[1, 2, 0]} size={[1, 1, 1]} color="green" />
            <Cube position={[-1, 2, 0]} size={[1, 1, 1]} color="yellow" /> */}
            {/* <Text position={[0, 0, 0]} fontSize={0.35} fontStyle="italic">
                BRIAN WU.
            </Text> */}
            <TorusKnot size={[0.5, 0.1, 100, 16]} />
        </group>
    );
}
