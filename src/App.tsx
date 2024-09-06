import React from "react";
import ParentComponent from "./components/ParentComponent";

const App: React.FC = () => {
  return (
    <div className="p-10 bg-gray-100">
      <h1 className="text-2xl font-bold text-center">
        Debugging React with Developer Tools
      </h1>
      <ParentComponent />
    </div>
  );
};

export default App;
