import React from "react";
import { Link } from "react-router";


const dataStructures = [
  { name: "Sorting", tag: "Sorting Algorithms", path: "/sorting", 
    image:"https://dsavisualization.com/static/media/sorts.f7fffe8735e39e84c4bf.png" },
  { name: "Searching", tag: "Searching Algorithms", path: "/searching",
     image: "https://dsavisualization.com/static/media/searching.13bb298f191a7dd10e54.png" },
  { name: "Array", tag: "Arrays", path: "/array", 
    image: "https://dsavisualization.com/static/media/arrays.710250afff56bc948363.jpg" },
  { name: "Linked List", tag: "Linked Lists", path: "/linkedlist", 
    image: "https://dsavisualization.com/static/media/linkedlists.757bf283c34d1e3e057f.png" },
  { name: "Stack", tag: "Stacks", path: "/stack", 
    image: "https://dsavisualization.com/static/media/stack.5d27e4741149bacc91bb.png" },
  { name: "Queue", tag: "Queues", path: "/queue", 
    image: "https://dsavisualization.com/static/media/queue.a3865a9f6e876fef8e7e.png" },
  { name: "Tree", tag: "Trees", path: "/tree", 
    image: "https://dsavisualization.com/static/media/trees.fab8c510128f49e77c43.png" },
  { name: "Graph", tag: "Graphs", path: "/graph", 
    image: "https://dsavisualization.com/static/media/graphs.cf3120a3611af39a7662.png" }
];

function VisualizationCard({ element }) {
  return (
    <Link to={element.path}>
      <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 ease-in-out text-center w-full h-[300] flex flex-col items-center">
          <img
            src={element.image}
            alt={element.name}
            className="object-cover h-[200]"
          />
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{element.name}</h3>
        <p className="text-sm text-gray-500">{element.tag}</p>
      </div>
    </Link>
  );
}

function Tool() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {dataStructures.map((element, index) => (
        <VisualizationCard key={index} element={element} />
      ))}
    </div>
  );
}

export default Tool;