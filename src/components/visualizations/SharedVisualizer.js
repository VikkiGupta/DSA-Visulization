import React from "react";

export const VisualizationPanel = ({ 
  array, 
  activeIndices, 
  completedIndices, 
  algorithm, 
  target, 
  isSorting,
  speed 
}) => {
  return (
    <div className="w-full flex flex-col">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg h-full flex flex-col">
        <h2 className="text-2xl font-bold text-amber-300 mb-2">
          Visualization Panel
        </h2>
        
        <div className="mb-4 flex justify-between items-center">
          <div>
            {algorithm && (
              <p className="text-gray-400">
                Current: {algorithm} {target && `(Target: ${target})`}
              </p>
            )}
          </div>
          {array.length > 0 && (
            <div className="text-sm bg-gray-700 px-3 py-1 rounded-full">
              {array.length} elements
            </div>
          )}
        </div>
        
        <div className="flex-1 flex flex-col justify-center">
          {array.length === 0 ? (
            <div className="text-center py-12 bg-gray-700 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-medium text-gray-400 mb-2">No data to visualize</h3>
              <p className="text-gray-500">Configure your settings and click Simulate to begin</p>
            </div>
          ) : (
            <div className="relative">
              <div className="flex flex-wrap justify-center gap-3 bg-gray-700 p-6 rounded-lg min-h-[400px] items-end">
                {array.map((val, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col items-center transition-all duration-300 ${
                      activeIndices.includes(idx)
                        ? "transform scale-110" 
                        : ""
                    }`}
                    style={{
                      height: `${val * 3}px`,
                      minHeight: "30px",
                      width: `${Math.max(30, 100 / array.length)}px`,
                      transition: `height ${speed/1000}s ease, background-color 0.3s ease`
                    }}
                  >
                    <div
                      className={`w-full rounded-t-md flex items-end justify-center font-bold text-xs ${
                        activeIndices.includes(idx)
                          ? "bg-red-400"
                          : completedIndices.includes(idx)
                            ? "bg-green-400"
                            : "bg-amber-400"
                      }`}
                      style={{
                        height: "100%"
                      }}
                    >
                      <span className="absolute -bottom-6 text-white">{val}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              {isSorting && (
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <div className="inline-flex items-center bg-black bg-opacity-70 px-4 py-2 rounded-full text-sm">
                    <svg className="animate-spin h-4 w-4 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Visualizing {algorithm}...
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const ComplexityInfo = ({ type }) => {
  const sortingComplexities = [
    { name: "Bubble Sort", time: "O(n²)", space: "O(1)" },
    { name: "Selection Sort", time: "O(n²)", space: "O(1)" },
    { name: "Insertion Sort", time: "O(n²)", space: "O(1)" }
  ];

  const searchingComplexities = [
    { name: "Linear Search", time: "O(n)", space: "O(1)" },
    { name: "Binary Search", time: "O(log n)", space: "O(1)" }
  ];

  const complexities = type === "sorting" ? sortingComplexities : searchingComplexities;

  return (
    <div className="mt-4 bg-gray-800 p-4 rounded-2xl shadow-lg">
      <h3 className="text-lg font-semibold text-amber-300 mb-2">Algorithm Complexity</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {complexities.map((algo, index) => (
          <div key={index} className="bg-gray-700 p-3 rounded-lg">
            <h4 className="font-medium mb-1">{algo.name}</h4>
            <p className="text-sm text-gray-400">Time: {algo.time} | Space: {algo.space}</p>
          </div>
        ))}
      </div>
    </div>
  );
};