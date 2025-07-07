import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./components/home/home";
import ArrayVisualization from "./components/visualizations/Array";
import Searching from "./components/visualizations/searching";
import Sorting from "./components/visualizations/sorting";
import Graph from "./components/visualizations/Graph";
import Tree from "./components/visualizations/Tree";
import Stack from "./components/visualizations/stack";
import Queue from "./components/visualizations/Queue";
import Linked from "./components/visualizations/Linkedlist";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/array" element={<ArrayVisualization />} />
        <Route path="/sorting" element={<Sorting/>}/>
        <Route path="/searching" element={<Searching/>}/>
        <Route path="/linkedlist" element={<Linked/>} />
        <Route path="/stack" element={<Stack/>}/>
        <Route path="/queue" element={<Queue/>}/>
        <Route path="/tree" element={<Tree/>} />
        <Route path="/graph" element={<Graph/>}/>
      </Routes>
    </Router>
  );
}

export default App;