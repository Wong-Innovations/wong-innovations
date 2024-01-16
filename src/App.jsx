import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Aos from "aos";
import "aos/dist/aos.css";

import Cube from "./models/Cube";
import Profile from "./components/Profile";
import Nav from "./components/Nav";
import MyTimeline from "./components/MyTimeline";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import AutoHideScroll from "./components/AutoHideScroll";
import Projects from "./components/Projects";
import SunIcon from "./assets/sun.svg?react";
import MoonIcon from "./assets/moon.svg?react";

const App = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    Aos.init();

    // dark unless user prefers light
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      setDarkMode(false);
    }

    // initialize tailwind theme selector:
    const changeThemeEvent = (event) => {
      setDarkMode(!event.matches);
    };

    window
      .matchMedia("(prefers-color-scheme: light)")
      .addEventListener("change", changeThemeEvent);

    return () =>
      window
        .matchMedia("(prefers-color-scheme: light)")
        .removeEventListener("change", changeThemeEvent);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <main
      className={`h-full bg-zinc-100 dark:bg-zinc-800 dark:before:opacity-25 dark:after:opacity-25 text-zinc-800 dark:text-gray-50 pl-14 whitespace-pre-line`}
    >
      <Nav />
      <header id="#home" className="flex h-screen">
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
              {/* prop drilling so that the cube only restarts it's current animations when the page reloads. */}
              <Cube isAnimating={isAnimating} setIsAnimating={setIsAnimating} />
            </Suspense>
          </Canvas>
        </div>
      </header>
      <section id="#timeline" className="flex min-h-screen">
        <MyTimeline />
      </section>
      <section id="#code" className="flex flex-col min-h-screen justify-center">
        <Skills />
      </section>
      <section
        id="#gallery"
        className="flex flex-col justify-center items-center min-h-screen"
      >
        <Projects />
      </section>
      <section
        id="#contact"
        className="flex flex-col min-h-screen justify-center"
      >
        <Contact />
      </section>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="sticky p-2 mb-2 bottom-4 left-full rounded-md !bg-teal-400"
      >
        {darkMode ? (
          <SunIcon className="w-8 h-8 fill-zinc-800" />
        ) : (
          <MoonIcon className="w-8 h-8 fill-zinc-800" />
        )}
      </button>
      <AutoHideScroll />
    </main>
  );
};

export default App;
