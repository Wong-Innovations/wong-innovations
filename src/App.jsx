import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import Cube from "./models/Cube";
import Profile from "./components/Profile";
import Nav from "./components/Nav";
import ScrollToAnchor from "./components/ScrollToAnchor";
import AutoHideScroll from "./components/AutoHideScroll";

const App = () => {
  return (
    <main className={`h-full bg-zinc-800 text-black dark:text-white`}>
      <Nav />
      <header id="home" className="flex h-screen">
        <section className="flex-grow max-w-1/2 flex flex-col justify-center">
          <Profile />
        </section>
        <div className="flex-grow max-w-1/2">
          <Canvas
            className="touch-none"
            resize={{ scroll: false }}
            camera={{
              position: [-2.77, 2, 5.5],
              rotation: [-0.3155, -0.4431, -0.139],
              fov: 75,
            }}
          >
            <directionalLight position={[5, 4.5, 7.5]} />
            <directionalLight position={[-8, 10, 7.5]} />
            <directionalLight position={[6, -10, 2]} intensity={0.5} />
            <Suspense fallback={null}>
              <Cube />
            </Suspense>
          </Canvas>
        </div>
      </header>
      <section id="timeline" className="flex h-screen"></section>
      <AutoHideScroll />
      <ScrollToAnchor />
    </main>
  );
};

export default App;
