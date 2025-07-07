import React, { useState } from "react";
import { Link } from "react-router";
import { VisualizationPanel, ComplexityInfo } from "./SharedVisualizer";
import ThemeToggleButton from "../home/Themetoggle";

const searchingAlgorithms = ["Linear Search", "Binary Search"];

const algorithmDescriptions = {
  "Linear Search": "Checks each element in the list one by one until a match is found or the whole list has been searched.",
  "Binary Search": "Efficiently finds the position of a target value within a sorted array by repeatedly dividing the search interval in half."
};

const Searching = () => {
  const [algorithm, setAlgorithm] = useState("Linear Search");
  const [size, setSize] = useState(10);
  const [input, setInput] = useState("");
  const [speed, setSpeed] = useState(500);
  const [target, setTarget] = useState("");
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [activeIndices, setActiveIndices] = useState([]);
  const [completedIndices, setCompletedIndices] = useState([]);
  const [showDescription, setShowDescription] = useState(false);

  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

  // Linear Search Algorithm
  const linearSearch = async (arr, target) => {
    setIsSorting(true);
    setCompletedIndices([]);
    let found = false;
    
    for (let i = 0; i < arr.length; i++) {
      setActiveIndices([i]);
      await sleep(speed);
      
      if (arr[i] === target) {
        found = true;
        setCompletedIndices([i]);
        break;
      }
    }
    
    setActiveIndices([]);
    if (!found) {
      setCompletedIndices([]);
    }
    setIsSorting(false);
  };

  // Binary Search Algorithm
  const binarySearch = async (arr, target) => {
    setIsSorting(true);
    setCompletedIndices([]);
    let found = false;
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      setActiveIndices([mid]);
      await sleep(speed);

      if (arr[mid] === target) {
        found = true;
        setCompletedIndices([mid]);
        break;
      } else if (arr[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    setActiveIndices([]);
    if (!found) {
      setCompletedIndices([]);
    }
    setIsSorting(false);
  };

  const handleSimulate = () => {
    let arr;
    if (input.trim()) {
      arr = input.split(",").map(Number).filter(n => !isNaN(n));
    } else {
      arr = Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 1);
    }
    setArray(arr);
    setCompletedIndices([]);

    const tgt = parseInt(target);
    if (!isNaN(tgt)) {
      if (algorithm === "Linear Search") {
        linearSearch([...arr], tgt);
      } else if (algorithm === "Binary Search") {
        binarySearch([...arr].sort((a, b) => a - b), tgt);
      }
    }
  };

  const resetVisualization = () => {
    setArray([]);
    setActiveIndices([]);
    setCompletedIndices([]);
    setIsSorting(false);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 w-full text-black dark:text-white">
      {/* Header */}
      <header className="fixed top-0 w-full h-16 bg-amber-50 text-black shadow-md flex items-center justify-between px-8 z-50">
        <h1 className="font-bold text-2xl">DSA Visualization</h1>
        <nav className="flex gap-6 text-sm font-medium">
          <Link
            to="/"
            className="cursor-pointer hover:text-blue-600 transition-colors text-2xl"
          >
            Home
          </Link>
          <ThemeToggleButton />
        </nav>
      </header>

      {/* Content Section */}
      <div className="pt-16 min-h-screen">
        <div className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row p-4 gap-4">
          {/* Left Controls */}
          <div className="w-full md:w-1/3 bg-gray-800 p-6 rounded-2xl shadow-lg mt-4">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-amber-400">Searching Visualizer</h1>
            </div>

            <div className="mb-6">
              <p className="text-gray-300 mb-4">
                Visualize how searching algorithms work with interactive animations.
                Select an algorithm and click Simulate to start.
              </p>
              
              <div className="mb-6 bg-gray-700 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <label className="block font-semibold text-lg">Algorithm</label>
                  <button 
                    onClick={() => setShowDescription(!showDescription)}
                    className="text-amber-400 text-sm hover:underline"
                  >
                    {showDescription ? "Hide details" : "Show details"}
                  </button>
                </div>
                
                <select
                  value={algorithm}
                  onChange={(e) => {
                    setAlgorithm(e.target.value);
                    resetVisualization();
                  }}
                  className="w-full p-3 rounded-lg bg-gray-600 text-white mb-2 border border-gray-500"
                  disabled={isSorting}
                >
                  {searchingAlgorithms.map((algo) => (
                    <option key={algo} value={algo}>{algo}</option>
                  ))}
                </select>
                
                {showDescription && (
                  <div className="mt-2 p-3 bg-gray-600 rounded-lg text-sm text-gray-200">
                    {algorithmDescriptions[algorithm]}
                  </div>
                )}
              </div>

              <div className="mb-6 bg-gray-700 p-4 rounded-lg">
                <label className="block font-semibold text-lg mb-2">Search Target</label>
                <div className="mb-4">
                  <label className="block mb-1 text-gray-300">Value to search for:</label>
                  <input
                    type="number"
                    value={target}
                    onChange={(e) => {
                      setTarget(e.target.value);
                      resetVisualization();
                    }}
                    className="w-full p-3 rounded-lg bg-gray-600 text-white border border-gray-500"
                    disabled={isSorting}
                    placeholder="Enter a number"
                  />
                </div>
              </div>

              <div className="mb-6 bg-gray-700 p-4 rounded-lg">
                <label className="block font-semibold text-lg mb-2">Array Configuration</label>
                
                <div className="mb-4">
                  <label className="block mb-1 text-gray-300">Array Size: {size}</label>
                  <input
                    type="range"
                    value={size}
                    min="5"
                    max="30"
                    onChange={(e) => {
                      setSize(Number(e.target.value));
                      resetVisualization();
                    }}
                    className="w-full"
                    disabled={isSorting}
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-1 text-gray-300">Custom Array (comma separated):</label>
                  <input
                    type="text"
                    value={input}
                    placeholder="e.g. 5, 2, 9, 1, 5, 6"
                    onChange={(e) => {
                      setInput(e.target.value);
                      resetVisualization();
                    }}
                    className="w-full p-3 rounded-lg bg-gray-600 text-white border border-gray-500"
                    disabled={isSorting}
                  />
                </div>
              </div>

              <div className="mb-6 bg-gray-700 p-4 rounded-lg">
                <label className="block font-semibold text-lg mb-2">Simulation Controls</label>
                
                <div className="mb-4">
                  <label className="block mb-1 text-gray-300">Speed: {speed}ms</label>
                  <input
                    type="range"
                    min="50"
                    max="2000"
                    step="50"
                    value={speed}
                    onChange={(e) => setSpeed(Number(e.target.value))}
                    className="w-full"
                    disabled={isSorting}
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={resetVisualization}
                  disabled={isSorting || array.length === 0}
                  className={`${
                    isSorting || array.length === 0 ? "bg-gray-600" : "bg-red-500 hover:bg-red-600"
                  } text-white font-semibold px-6 py-3 rounded-lg transition flex-1`}
                >
                  Reset
                </button>
                
                <button
                  onClick={handleSimulate}
                  disabled={isSorting || target === ""}
                  className={`${
                    isSorting 
                      ? "bg-gray-600" 
                      : "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                  } text-white font-semibold px-6 py-3 rounded-lg transition flex-1 shadow-lg`}
                >
                  {isSorting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Simulating...
                    </span>
                  ) : "Simulate"}
                </button>
              </div>
            </div>
          </div>

          {/* Right Output */}
          <div className="w-full md:w-2/3 flex flex-col mt-4">
            <VisualizationPanel 
              array={array}
              activeIndices={activeIndices}
              completedIndices={completedIndices}
              algorithm={algorithm}
              target={target}
              isSorting={isSorting}
              speed={speed}
            />
            <ComplexityInfo type="searching" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searching;