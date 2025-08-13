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

        const pages = [
            { title: "Home", info: "Welcome! Find a short intro and highlights.", color: "#ff9999" },
            { title: "About", info: "Learn more about me and my skills.", color: "#99ff99" },
            { title: "Projects", info: "Check out my work and side projects.", color: "#9999ff" },
            { title: "Skills", info: "See what technologies I know.", color: "#ffcc66" },
            { title: "Contact", info: "Get in touch with me easily.", color: "#cc66ff" },
        ];

        const cards: THREE.Mesh[] = [];

        pages.forEach((page, i) => {
            // Canvas for front face
            const canvas = document.createElement("canvas");
            canvas.width = 512;
            canvas.height = 256;
            const ctx = canvas.getContext("2d")!;

            // Fill background with the page color
            ctx.fillStyle = page.color;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw text
            ctx.fillStyle = "#000000"; // text color
            ctx.font = "bold 36px Arial";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(page.title, canvas.width / 2, 80);

            ctx.font = "24px Arial";
            const lines = page.info.match(/.{1,40}/g);
            if (lines) {
                lines.forEach((line, idx) => {
                    ctx.fillText(line, canvas.width / 2, 140 + idx * 30);
                });
            }

            const texture = new THREE.CanvasTexture(canvas);
            texture.needsUpdate = true;

            // Materials
            const frontMaterial = new THREE.MeshStandardMaterial({ map: texture });
            const sideMaterial = new THREE.MeshStandardMaterial({ color: page.color });

            const materials = [
                sideMaterial, // right
                sideMaterial, // left
                sideMaterial, // top
                sideMaterial, // bottom
                frontMaterial, // front with text
                sideMaterial, // back
            ];

            const geometry = new THREE.BoxGeometry(2.5, 1.5, 0.5);
            const cube = new THREE.Mesh(geometry, materials);

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
