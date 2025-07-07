import React, { useRef } from "react";
import ThemeToggleButton from "./Themetoggle";
import Tool from "./Tools";
import Footer from "./footer";

function Home() {
  const homeRef = useRef(null);
  const toolsRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
    <div className="bg-black w-full text-white scroll-smooth h-[1550]">
      {/* Header */}
      <header className="fixed top-0 w-full h-16 bg-amber-50 text-black shadow-md flex items-center justify-between px-8 z-50">
        <h1 className="font-bold text-2xl">DSA Visualization</h1>
        <nav className="flex gap-6 text-sm font-medium">
          <button
            onClick={() => scrollTo(homeRef)}
            className="cursor-pointer hover:text-blue-600 transition-colors text-2xl"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo(toolsRef)}
            className="cursor-pointer hover:text-blue-600 transition-colors text-2xl"
          >
            Tools
          </button>
          <ThemeToggleButton />
        </nav>
      </header>

      {/* Home Section */}
      <section
        ref={homeRef}
        className="pt-24 px-6 flex justify-center items-center text-center min-h-screen"
      >
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-400 mb-4">
            Welcome to our DSA Visualization Tools
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            Explore and interactively learn Data Structures and Algorithms through
            powerful visualizations and intuitive interfaces designed for better understanding.
          </p>
        </div>
      </section>

      {/* Tools Section */}
      <section ref={toolsRef} className="pt-24 px-6">
        <Tool />
      </section>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
  );
}

export default Home;