import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent: React.FC = () => {
  const [message, setMessage] = useState<string>("Hello from Parent!");

  const updateMessage = (newMessage: string) => {
    setMessage(newMessage);
  };

  return (
    <div className="mt-6 p-4 bg-white shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Props</h2>
      <p className="text-gray-700 mb-2">Message: {message}</p>
      <ChildComponent updateMessage={updateMessage} />
    </div>
  );
};

export default ParentComponent;
