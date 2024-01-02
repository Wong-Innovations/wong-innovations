import React, { useEffect, useRef, useMemo } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useDrag } from "react-use-gesture";
import { useThree } from "@react-three/fiber";
import { a, useSpring } from "@react-spring/three";
import * as THREE from "three";

const Cube = (props) => {
  const group = useRef();
  const euler = useMemo(() => new THREE.Euler(), []);
  const { nodes, materials, animations } = useGLTF("./cube.glb");
  const { actions, names } = useAnimations(animations, group);
  const { size } = useThree();
  const [spring, set] = useSpring(() => ({
    rotation: [-0.3155, -0.4431, -0.139],
    config: {
      mass: 1,
      tension: 5,
      friction: 15,
    },
  }));
  const bind = useDrag(({ delta: [dx, dy] }) => {
    euler.y += (dx / size.width) * 30;
    euler.x += (dy / size.width) * 30;
    set({ rotation: euler.toArray().slice(0, 3) });
  });

  const doRotate = () => {
    if (!document.hidden) {
      euler.y += (Math.round(Math.random()) ? 1 : -1) * (Math.random() * 2 + 2);
      euler.x += Math.random() * 2 + 2;
      set({ rotation: euler.toArray().slice(0, 3) });
    }
  };

  useEffect(() => {
    if (!props.isAnimating) {
      names.forEach((name) => actions[name].reset().play());
      doRotate();
      setInterval(doRotate, 3000);
      props.setIsAnimating(true);
    }
  });

  return (
    <group ref={group} {...props}>
      <a.group name="Scene" {...bind()} {...spring}>
        <mesh
          name="NB"
          castShadow
          receiveShadow
          geometry={nodes.NB.geometry}
          material={materials.cube}
          scale={0.5}
        />
        <mesh
          name="NEB"
          castShadow
          receiveShadow
          geometry={nodes.NEB.geometry}
          material={materials.cube}
          scale={0.5}
        />
        <mesh
          name="NEM"
          castShadow
          receiveShadow
          geometry={nodes.NEM.geometry}
          material={materials.cube}
          scale={0.5}
        />
        <mesh
          name="NET"
          castShadow
          receiveShadow
          geometry={nodes.NET.geometry}
          material={materials.cube}
          scale={0.5}
        />
        <mesh
          name="NM"
          castShadow
          receiveShadow
          geometry={nodes.NM.geometry}
          material={materials.cube}
          scale={0.5}
        />
        <mesh
          name="NT"
          castShadow
          receiveShadow
          geometry={nodes.NT.geometry}
          material={materials.cube}
          scale={0.5}
        />
        <mesh
          name="NWT"
          castShadow
          receiveShadow
          geometry={nodes.NWT.geometry}
          material={materials.cube}
          scale={0.5}
        />
        <mesh
          name="NWM"
          castShadow
          receiveShadow
          geometry={nodes.NWM.geometry}
          material={materials.cube}
          scale={0.5}
        />
        <mesh
          name="NWB"
          castShadow
          receiveShadow
          geometry={nodes.NWB.geometry}
          material={materials.cube}
          scale={0.5}
        />
        <mesh
          name="WT"
          castShadow
          receiveShadow
          geometry={nodes.WT.geometry}
          material={materials.cube}
          scale={0.5}
        />
        <mesh
          name="WM"
          castShadow
          receiveShadow
          geometry={nodes.WM.geometry}
          material={materials.cube}
          scale={0.5}
        />
        <mesh
          name="WB"
          castShadow
          receiveShadow
          geometry={nodes.WB.geometry}
          material={materials.cube}
          scale={0.5}
        />
        <mesh
          name="T"
          castShadow
          receiveShadow
          geometry={nodes.T.geometry}
          material={materials.cube}
          scale={0.5}
        />
        <mesh
          name="M"
          castShadow
          receiveShadow
          geometry={nodes.M.geometry}
          material={materials.cube}
          scale={0.5}
        />
        <mesh
          name="ET"
          castShadow
          receiveShadow
          geometry={nodes.ET.geometry}
          material={materials.cube}
          scale={0.5}
        />
        <mesh
          name="EM"
          castShadow
          receiveShadow
          geometry={nodes.EM.geometry}
          material={materials.cube}
          scale={0.5}
        />
        <mesh
          name="EB"
          castShadow
          receiveShadow
          geometry={nodes.EB.geometry}
          material={materials.cube}
          scale={0.5}
        />
        <mesh
          name="B"
          castShadow
          receiveShadow
          geometry={nodes.B.geometry}
          material={materials.cube}
          scale={0.5}
        />
        <mesh
          name="SWT"
          castShadow
          receiveShadow
          geometry={nodes.SWT.geometry}
          material={materials.cube}
          scale={0.5}
        />
        <mesh
          name="SWM"
          castShadow
          receiveShadow
          geometry={nodes.SWM.geometry}
          material={materials.cube}
          scale={0.5}
        />
        <mesh
          name="SWB"
          castShadow
          receiveShadow
          geometry={nodes.SWB.geometry}
          material={materials.cube}
          scale={0.5}
        />
        <mesh
          name="ST"
          castShadow
          receiveShadow
          geometry={nodes.ST.geometry}
          material={materials.cube}
          scale={0.5}
        />
        <mesh
          name="SM"
          castShadow
          receiveShadow
          geometry={nodes.SM.geometry}
          material={materials.cube}
          scale={0.5}
        />
        <mesh
          name="SET"
          castShadow
          receiveShadow
          geometry={nodes.SET.geometry}
          material={materials.cube}
          scale={0.5}
        />
        <mesh
          name="SEM"
          castShadow
          receiveShadow
          geometry={nodes.SEM.geometry}
          material={materials.cube}
          scale={0.5}
        />
        <mesh
          name="SEB"
          castShadow
          receiveShadow
          geometry={nodes.SEB.geometry}
          material={materials.cube}
          scale={0.5}
        />
        <mesh
          name="SB"
          castShadow
          receiveShadow
          geometry={nodes.SB.geometry}
          material={materials.cube}
          scale={0.5}
        />
      </a.group>
    </group>
  );
};

export default Cube;
