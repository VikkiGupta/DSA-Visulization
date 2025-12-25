import React from "react";
import { Link } from "react-router";


const dataStructures = [
  { name: "Sorting", tag: "Sorting Algorithms", path: "/sorting", 
    image:"	https://dsavisualization.com/static/media/sorts.facf86ca90c2983f82d2.webp" },
  { name: "Searching", tag: "Searching Algorithms", path: "/searching",
     image: "https://dsavisualization.com/static/media/searching.b32766908a75e93ec43d.webp" },
  { name: "Array", tag: "Arrays", path: "/array", 
    image: "https://dsavisualization.com/static/media/arrays.3a7b139d496811eb2dbf.webp" },
  { name: "Linked List", tag: "Linked Lists", path: "/linkedlist", 
    image: "https://dsavisualization.com/static/media/linkedlists.aedfc9c27769b3b54f93.webp" },
  { name: "Stack", tag: "Stacks", path: "/stack", 
    image: "https://dsavisualization.com/static/media/stack.4d8d5f7066e06a0867f7.webp" },
  { name: "Queue", tag: "Queues", path: "/queue", 
    image: "https://dsavisualization.com/static/media/queue.0891dd468993135c5685.webp" },
  { name: "Tree", tag: "Trees", path: "/tree", 
    image: "https://dsavisualization.com/static/media/trees.11c2a6e680cca61793a0.webp" },
  { name: "Graph", tag: "Graphs", path: "/graph", 
    image: "https://dsavisualization.com/static/media/graphs.70ba8e9e76697a49c82c.webp" }
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