import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('splash');

  return (
    <div className="w-full h-screen bg-black overflow-hidden">
      {currentPage === 'splash' && <SplashPage onEnter={() => setCurrentPage('home')} />}
      {currentPage === 'home' && <HomePage onTimelineSelect={(timeline) => setCurrentPage(timeline)} />}
    </div>
  );
};

// Splash Page with Clock Animation
const SplashPage = ({ onEnter }) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0xffd700, 1, 100);
    pointLight.position.set(0, 0, 10);
    scene.add(pointLight);

    // Create clock face
    const clockGroup = new THREE.Group();
    
    // Clock circle
    const circleGeometry = new THREE.RingGeometry(3.8, 4, 64);
    const circleMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xd4af37,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0xd4af37,
      emissiveIntensity: 0.3
    });
    const circle = new THREE.Mesh(circleGeometry, circleMaterial);
    clockGroup.add(circle);

    // Inner circle
    const innerCircleGeometry = new THREE.RingGeometry(3.5, 3.7, 64);
    const innerCircle = new THREE.Mesh(innerCircleGeometry, circleMaterial);
    clockGroup.add(innerCircle);

    // Clock numbers
    for (let i = 0; i < 12; i++) {
      const angle = (i * 30 - 90) * (Math.PI / 180);
      const radius = 3.2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      
      const numberGeometry = new THREE.BoxGeometry(0.15, 0.3, 0.1);
      const numberMesh = new THREE.Mesh(numberGeometry, circleMaterial);
      numberMesh.position.set(x, y, 0);
      numberMesh.rotation.z = angle + Math.PI / 2;
      clockGroup.add(numberMesh);
    }

    // Create hand material
    const handMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xc0c0c0,
      metalness: 0.9,
      roughness: 0.1
    });

    // Hour hand
    const hourHandGeometry = new THREE.BoxGeometry(0.15, 2, 0.1);
    const hourHand = new THREE.Mesh(hourHandGeometry, handMaterial);
    hourHand.position.y = 1;
    clockGroup.add(hourHand);

    // Minute hand
    const minuteHandGeometry = new THREE.BoxGeometry(0.1, 2.8, 0.1);
    const minuteHand = new THREE.Mesh(minuteHandGeometry, handMaterial);
    minuteHand.position.y = 1.4;
    clockGroup.add(minuteHand);

    // Second hand
    const secondHandGeometry = new THREE.BoxGeometry(0.05, 3.2, 0.1);
    const secondHandMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xff0000,
      metalness: 0.9,
      roughness: 0.1,
      emissive: 0xff0000,
      emissiveIntensity: 0.5
    });
    const secondHand = new THREE.Mesh(secondHandGeometry, secondHandMaterial);
    secondHand.position.y = 1.6;
    clockGroup.add(secondHand);

    // Center dot
    const centerGeometry = new THREE.CircleGeometry(0.2, 32);
    const centerMesh = new THREE.Mesh(centerGeometry, circleMaterial);
    centerMesh.position.z = 0.1;
    clockGroup.add(centerMesh);

    // Add decorative elements (shattered glass effect)
    const shardGroup = new THREE.Group();
    for (let i = 0; i < 12; i++) {
      const shardGeometry = new THREE.PlaneGeometry(0.5, 2);
      const shardMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.3,
        side: THREE.DoubleSide,
        metalness: 0.5,
        roughness: 0.3
      });
      const shard = new THREE.Mesh(shardGeometry, shardMaterial);
      const angle = (i / 12) * Math.PI * 2;
      shard.position.x = Math.cos(angle) * 5;
      shard.position.y = Math.sin(angle) * 5;
      shard.rotation.z = angle;
      shardGroup.add(shard);
    }
    scene.add(shardGroup);

    scene.add(clockGroup);
    camera.position.z = 10;

    // Animation
    let time = 0;
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      time += 0.01;

      // Rotate clock hands
      secondHand.rotation.z = -time * 2;
      minuteHand.rotation.z = -time * 0.1;
      hourHand.rotation.z = -time * 0.01;

      // Gentle rotation and scale pulse
      clockGroup.rotation.z = Math.sin(time * 0.5) * 0.05;
      const scale = 1 + Math.sin(time * 2) * 0.02;
      clockGroup.scale.set(scale, scale, scale);

      // Animate shards
      shardGroup.children.forEach((shard, i) => {
        shard.position.z = Math.sin(time + i) * 0.5;
        shard.material.opacity = 0.2 + Math.sin(time * 2 + i) * 0.1;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <div ref={mountRef} className="absolute inset-0" />
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <h1 className="text-6xl md:text-8xl font-serif text-amber-200 mb-4 tracking-wider animate-pulse">
          Chronicles: Rewritten
        </h1>
        <p className="text-xl md:text-2xl text-amber-100 italic mb-12 tracking-wide">
          Walk the roads history forgotten.
        </p>
        <button
          onClick={onEnter}
          className="pointer-events-auto px-8 py-4 bg-amber-700 hover:bg-amber-600 text-white text-xl font-serif rounded-lg transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-amber-500/50"
        >
          Begin Your Journey
        </button>
      </div>
    </div>
  );
};

// Home Page with Timeline Selection
const HomePage = ({ onTimelineSelect }) => {
  const mountRef = useRef(null);
  const [hoveredTimeline, setHoveredTimeline] = useState(null);

  const timelines = [
    { id: 'ancient', title: 'Ancient World', subtitle: '3000 BCE - 500 CE', color: 0x8b4513 },
    { id: 'medieval', title: 'Medieval & Renaissance', subtitle: '500 - 1500 CE', color: 0x4a5568 },
    { id: 'exploration', title: 'Age of Exploration & Colonization', subtitle: '1500 - 1800 CE', color: 0x2563eb },
    { id: 'revolution', title: 'Revolutions & Industrial Age', subtitle: '1750 - 1900 CE', color: 0x991b1b },
    { id: 'modern', title: 'Modern History', subtitle: '20th Century', color: 0x1f2937 }
  ];

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x1a1410, 1);
    mountRef.current.appendChild(renderer.domElement);

    // Warm, candlelit lighting
    const ambientLight = new THREE.AmbientLight(0xffa500, 0.3);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xffaa66, 0.8, 100);
    pointLight1.position.set(-10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xcc6633, 0.6, 100);
    pointLight2.position.set(10, -10, 10);
    scene.add(pointLight2);

    // Create sailing ship inspired scene
    const sceneGroup = new THREE.Group();
    
    // Create water particles (foam and spray)
    const particleCount = 1500;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30 - 5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;

      const color = new THREE.Color();
      // Ocean colors: deep blue to seafoam
      color.setHSL(0.55 + Math.random() * 0.08, 0.4 + Math.random() * 0.3, 0.3 + Math.random() * 0.4);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 0.5
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    sceneGroup.add(particles);

    // Create rustic wooden sailing ships
    const boats = [];
    for (let i = 0; i < 5; i++) {
      const boatGroup = new THREE.Group();
      
      // Boat hull (wooden)
      const hullGeometry = new THREE.BoxGeometry(1.2, 0.4, 0.6);
      const woodMaterial = new THREE.MeshStandardMaterial({
        color: 0x4a3728,
        roughness: 0.9,
        metalness: 0.1
      });
      const hull = new THREE.Mesh(hullGeometry, woodMaterial);
      hull.position.y = -0.2;
      boatGroup.add(hull);
      
      // Boat bow (front point)
      const bowGeometry = new THREE.ConeGeometry(0.3, 0.5, 4);
      const bow = new THREE.Mesh(bowGeometry, woodMaterial);
      bow.rotation.z = Math.PI / 2;
      bow.position.x = 0.85;
      bow.position.y = -0.1;
      boatGroup.add(bow);
      
      // Mast (wooden pole)
      const mastGeometry = new THREE.CylinderGeometry(0.08, 0.08, 2, 8);
      const mast = new THREE.Mesh(mastGeometry, woodMaterial);
      mast.position.y = 0.8;
      boatGroup.add(mast);
      
      // Sail (canvas/cloth)
      const sailGeometry = new THREE.PlaneGeometry(1, 1.5);
      const sailColors = [0xf5e6d3, 0xe8d4b8, 0xd4c4a8, 0xc9b896, 0xb8a989];
      const sailMaterial = new THREE.MeshStandardMaterial({
        color: sailColors[i],
        roughness: 0.8,
        metalness: 0,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.9
      });
      const sail = new THREE.Mesh(sailGeometry, sailMaterial);
      sail.position.y = 1;
      sail.position.x = 0.3;
      boatGroup.add(sail);
      
      // Cross beam on mast
      const beamGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1.2, 6);
      const beam = new THREE.Mesh(beamGeometry, woodMaterial);
      beam.rotation.z = Math.PI / 2;
      beam.position.y = 1.7;
      beam.position.x = 0.3;
      boatGroup.add(beam);
      
      // Ropes
      const ropeGeometry = new THREE.CylinderGeometry(0.02, 0.02, 1.8, 4);
      const ropeMaterial = new THREE.MeshStandardMaterial({
        color: 0x3d3020,
        roughness: 1,
        metalness: 0
      });
      const rope1 = new THREE.Mesh(ropeGeometry, ropeMaterial);
      rope1.position.set(0.3, 0.9, 0.3);
      rope1.rotation.x = Math.PI / 4;
      boatGroup.add(rope1);
      
      const rope2 = new THREE.Mesh(ropeGeometry, ropeMaterial);
      rope2.position.set(0.3, 0.9, -0.3);
      rope2.rotation.x = -Math.PI / 4;
      boatGroup.add(rope2);
      
      // Position boats in a circle
      const angle = (i / 5) * Math.PI * 2;
      const radius = 10;
      boatGroup.position.x = Math.cos(angle) * radius;
      boatGroup.position.y = Math.sin(angle) * radius * 0.3;
      boatGroup.position.z = Math.sin(angle) * radius;
      boatGroup.rotation.y = -angle;
      boatGroup.userData = { angle, radius, index: i, baseY: boatGroup.position.y, sail, hull };
      
      boats.push(boatGroup);
      sceneGroup.add(boatGroup);
    }
    
    // Add seagulls (simple triangular shapes)
    const seagulls = [];
    for (let i = 0; i < 8; i++) {
      const seagullGeometry = new THREE.ConeGeometry(0.1, 0.3, 3);
      const seagullMaterial = new THREE.MeshStandardMaterial({
        color: 0xe8e8e8,
        roughness: 0.7,
        metalness: 0
      });
      const seagull = new THREE.Mesh(seagullGeometry, seagullMaterial);
      seagull.rotation.z = Math.PI / 2;
      seagull.position.x = (Math.random() - 0.5) * 30;
      seagull.position.y = 8 + Math.random() * 5;
      seagull.position.z = (Math.random() - 0.5) * 30;
      seagull.userData = { 
        speed: 0.5 + Math.random() * 0.5,
        path: Math.random() * Math.PI * 2,
        radius: 5 + Math.random() * 3
      };
      seagulls.push(seagull);
      sceneGroup.add(seagull);
    }

    scene.add(sceneGroup);
    camera.position.z = 25;
    camera.position.y = 5;
    camera.rotation.x = -0.2;

    // Animation
    let time = 0;
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      time += 0.008;

      // Animate water particles in wave pattern
      const positionsArray = particles.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const x = positionsArray[i3];
        const z = positionsArray[i3 + 2];
        positionsArray[i3 + 1] += Math.sin(time * 2 + x * 0.1 + z * 0.1) * 0.008;
        
        if (positionsArray[i3 + 1] > 10) positionsArray[i3 + 1] = -10;
        if (positionsArray[i3 + 1] < -15) positionsArray[i3 + 1] = 10;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // Gentle rotation of scene
      sceneGroup.rotation.y = Math.sin(time * 0.3) * 0.1;

      // Animate boats (bobbing on waves)
      boats.forEach((boat, index) => {
        const userData = boat.userData;
        
        // Bob up and down like on water
        boat.position.y = userData.baseY + Math.sin(time * 1.5 + index) * 0.4;
        
        // Gentle rocking motion
        boat.rotation.z = Math.sin(time * 1.2 + index) * 0.08;
        boat.rotation.x = Math.cos(time * 1.0 + index) * 0.05;
        
        // Sail billowing in wind
        userData.sail.scale.x = 1 + Math.sin(time * 3 + index) * 0.1;
        
        // Hover effect
        if (hoveredTimeline === timelines[userData.index].id) {
          boat.scale.set(1.3, 1.3, 1.3);
          userData.sail.material.emissive = new THREE.Color(0xffaa44);
          userData.sail.material.emissiveIntensity = 0.3;
          userData.hull.material.emissive = new THREE.Color(0x6b4423);
          userData.hull.material.emissiveIntensity = 0.2;
        } else {
          boat.scale.set(1, 1, 1);
          userData.sail.material.emissive = new THREE.Color(0x000000);
          userData.sail.material.emissiveIntensity = 0;
          userData.hull.material.emissive = new THREE.Color(0x000000);
          userData.hull.material.emissiveIntensity = 0;
        }
      });
      
      // Animate seagulls
      seagulls.forEach((seagull) => {
        const userData = seagull.userData;
        userData.path += userData.speed * 0.01;
        seagull.position.x = Math.cos(userData.path) * userData.radius;
        seagull.position.z = Math.sin(userData.path) * userData.radius;
        seagull.position.y += Math.sin(time * 2 + userData.path) * 0.02;
        seagull.rotation.y = -userData.path;
        
        // Flapping wings (scale effect)
        const flap = Math.abs(Math.sin(time * 5 + userData.path));
        seagull.scale.y = 0.8 + flap * 0.4;
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [hoveredTimeline]);

  return (
    <div className="relative w-full h-full">
      <div ref={mountRef} className="absolute inset-0" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <h2 className="text-4xl md:text-5xl font-serif text-amber-200 mb-2 tracking-wider drop-shadow-lg">
          Choose Your Era
        </h2>
        <p className="text-sm md:text-base text-amber-300/80 italic mb-12 drop-shadow">
          Set sail through the tides of time
        </p>
        
        <div className="flex flex-col gap-4 pointer-events-auto max-w-2xl w-full px-4">
          {timelines.map((timeline) => (
            <button
              key={timeline.id}
              onClick={() => onTimelineSelect(timeline.id)}
              onMouseEnter={() => setHoveredTimeline(timeline.id)}
              onMouseLeave={() => setHoveredTimeline(null)}
              className="group relative bg-gradient-to-r from-amber-900/40 to-amber-950/40 backdrop-blur-sm border-2 border-amber-700/60 hover:border-amber-500 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-600/40 hover:bg-amber-900/50"
              style={{
                backgroundImage: 'linear-gradient(135deg, rgba(120, 53, 15, 0.3) 0%, rgba(68, 30, 8, 0.4) 100%)',
                boxShadow: 'inset 0 1px 0 0 rgba(255, 200, 124, 0.1)'
              }}
            >
              <div className="flex flex-col items-start">
                <h3 className="text-2xl font-serif text-amber-100 group-hover:text-amber-200 transition-colors drop-shadow">
                  {timeline.title}
                </h3>
                <p className="text-sm text-amber-300/70 italic mt-1">
                  {timeline.subtitle}
                </p>
              </div>
              <div className="absolute right-6 top-1/2 transform -translate-y-1/2 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity text-2xl">
                ⚓
              </div>
            </button>
          ))}
        </div>
        
        <div className="mt-8 text-amber-400/60 text-sm italic pointer-events-none">
          ~ The ships await your command ~
        </div>
      </div>
    </div>
  );
};

export default App;
