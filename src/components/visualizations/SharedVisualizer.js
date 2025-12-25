import React from "react";

// --- VISUALIZATION PANEL COMPONENT ---
export const VisualizationPanel = ({ 
  array, 
  activeIndices, 
  completedIndices, 
  algorithm, 
  target, 
  speed 
}) => {
  return (
    // flex-1 and min-h-0 are the "magic" that prevents the scrollbar
    <div className="flex flex-col flex-1 min-h-0 bg-gray-800 p-4 rounded-2xl shadow-lg border border-gray-700">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold text-amber-300">Visualization</h2>
        <div className="flex gap-4 items-center">
          {algorithm && (
            <p className="text-xs text-gray-400">
              {algorithm} {target && `(Target: ${target})`}
            </p>
          )}
          <span className="text-[10px] bg-gray-700 px-2 py-0.5 rounded text-gray-300">
            {array.length} Elements
          </span>
        </div>
      </div>
      
      {/* Visual Area */}
      <div className="flex-1 bg-gray-900/40 rounded-xl p-4 flex flex-col justify-end min-h-0 border border-gray-700/50">
        {array.length === 0 ? (
          <div className="h-full flex items-center justify-center text-gray-500 italic text-sm">
            No data to visualize. Configure and click Simulate.
          </div>
        ) : (
          <div className="flex items-end justify-center gap-1 h-full w-full overflow-hidden">
            {array.map((val, idx) => {
              const maxVal = Math.max(...array, 1);
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center"
                  style={{
                    width: `${100 / array.length}%`,
                    maxWidth: "45px",
                    height: "100%",
                    justifyContent: "flex-end"
                  }}
                >
                  <div
                    className={`w-full rounded-t-sm transition-all duration-200 ${
                      activeIndices.includes(idx) ? "bg-red-400 shadow-[0_0_10px_rgba(248,113,113,0.4)]" : 
                      completedIndices.includes(idx) ? "bg-green-400" : "bg-amber-400"
                    }`}
                    style={{
                      // Scale relative to 85% of container height to leave room for labels
                      height: `${(val / maxVal) * 85}%`, 
                      transition: `height ${speed/1000}s ease`
                    }}
                  />
                  <span className="text-[10px] text-gray-300 mt-1 font-mono">{val}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

// --- COMPLEXITY INFO COMPONENT ---
export const ComplexityInfo = ({ type }) => {
  const complexities = type === "sorting" 
    ? [
        { name: "Bubble Sort", time: "O(n²)", space: "O(1)" },
        { name: "Selection Sort", time: "O(n²)", space: "O(1)" },
        { name: "Insertion Sort", time: "O(n²)", space: "O(1)" }
      ]
    : [
        { name: "Linear Search", time: "O(n)", space: "O(1)" },
        { name: "Binary Search", time: "O(log n)", space: "O(1)" }
      ];

  return (
    <div className="mt-3 bg-gray-800 p-3 rounded-2xl border border-gray-700">
      <h3 className="text-[10px] font-bold text-amber-300 mb-2 uppercase tracking-widest opacity-80">
        Algorithm Complexity
      </h3>
      <div className="grid grid-cols-3 gap-3">
        {complexities.map((algo, index) => (
          <div key={index} className="bg-gray-700/30 p-2 rounded-lg border border-gray-600/50">
            <h4 className="text-xs font-bold text-gray-100 truncate">{algo.name}</h4>
            <div className="flex flex-col mt-1">
              <span className="text-[10px] text-gray-400">Time: <span className="text-amber-200/80">{algo.time}</span></span>
              <span className="text-[10px] text-gray-400">Space: <span className="text-amber-200/80">{algo.space}</span></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- RECOMMENDED PAGE LAYOUT WRAPPER ---
/* Use this structure in your main page file to ensure the 
  "No-Scroll" behavior works correctly.
*/
export const MainLayout = () => {
  return (
    <div className="h-screen w-full flex flex-col bg-gray-900 text-white overflow-hidden p-4">
      {/* Header Area */}
      <header className="flex justify-between items-center h-10 mb-4 shrink-0">
        <h1 className="text-2xl font-bold tracking-tight">DSA Visualization</h1>
        <button className="text-sm font-medium hover:text-amber-300">Home</button>
      </header>

      {/* Main Body */}
      <div className="flex flex-1 gap-6 min-h-0 overflow-hidden">
        {/* Left Sidebar (Controls) */}
        <aside className="w-80 flex flex-col gap-4 overflow-y-auto pr-2 custom-scrollbar shrink-0">
          <div className="bg-gray-800 p-4 rounded-2xl border border-gray-700">
             {/* Put your Sidebar content/inputs here */}
             <h3 className="text-lg font-bold text-amber-300 mb-4">Sorting Visualizer</h3>
             <p className="text-xs text-gray-400 leading-relaxed">Visualize how sorting algorithms work with interactive animations.</p>
          </div>
          {/* Add other Sidebar sections here */}
        </aside>

        {/* Right Section (Visualization + Complexity) */}
        <main className="flex-1 flex flex-col min-h-0">
           <VisualizationPanel 
              array={[10, 20, 30, 40, 50]} 
              activeIndices={[]} 
              completedIndices={[]} 
              speed={500}
           />
           <ComplexityInfo type="sorting" />
        </main>
      </div>
    </div>
  );
};