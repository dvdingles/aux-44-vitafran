/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Dav(props) {
  const { nodes, materials } = useGLTF("/3D VITAFRAN.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["TQ_ARD-geom001"].geometry}
        material={materials["TQ_ARD_front.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["TQ_ARD-geom001_1"].geometry}
        material={materials["TQ_ARD_back.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["TQ_ARD-geom001_2"].geometry}
        material={materials["TQ_ARD_edge.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["TQ_ARD-geom002"].geometry}
        material={materials["TQ_ARD_front.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["TQ_ARD-geom002_1"].geometry}
        material={materials["TQ_ARD_back.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["TQ_ARD-geom002_2"].geometry}
        material={materials["TQ_ARD_edge.002"]}
      />
    </group>
  );
}

useGLTF.preload("/3D VITAFRAN.gltf");
