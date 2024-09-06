import React, { useState } from "react";

interface ChildComponentProps {
  updateMessage: (newMessage: string) => void;
}

const ChildComponent: React.FC<ChildComponentProps> = ({ updateMessage }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleClick = () => {
    updateMessage(inputValue);
  };

  return (
    <div className="mt-4 p-2 border border-gray-200">
      <h3 className="text-lg font-medium">Form</h3>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border p-1 mr-2"
      />
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-3 py-1 rounded"
      >
        Update Message
      </button>
    </div>
  );
};

export default ChildComponent;
