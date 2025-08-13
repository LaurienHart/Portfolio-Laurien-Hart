"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Home() {
    const mountRef = useRef<HTMLDivElement | null>(null);
    const scrollRef = useRef(0);

    useEffect(() => {
        if (!mountRef.current) return;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xf0f0f0);

        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(5, 5, 10);
        scene.add(light);

        const cards: THREE.Mesh[] = [];
        const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffaa00, 0xaa00ff];
        colors.forEach((color, i) => {
            const geometry = new THREE.BoxGeometry(2, 1, 0.5);
            const material = new THREE.MeshStandardMaterial({ color });
            const cube = new THREE.Mesh(geometry, material);
            cube.rotation.x = 0.4;
            cube.rotation.y = 0.2;
            cube.position.z = -i * 10;
            scene.add(cube);
            cards.push(cube);
        });

        const animate = () => {
            requestAnimationFrame(animate);
            const targetZ = 5 - (scrollRef.current / window.innerHeight) * 10;
            camera.position.z += (targetZ - camera.position.z) * 0.1;
            renderer.render(scene, camera);
        };
        animate();

        const handleScroll = () => {
            scrollRef.current = window.scrollY;
        };
        window.addEventListener("scroll", handleScroll);

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
            mountRef.current?.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div>
            {/* Canvas behind navbar */}
            <div
                ref={mountRef}
                className="fixed top-0 left-0 w-full h-full -z-10"
            />

            {/* Spacer for scrolling */}
            <div style={{ height: "500vh" }} />
        </div>
    );
}
