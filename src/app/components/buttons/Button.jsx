import React from "react";

export default function Button({ onClick }) {
  return (
    <div>
      <button
      onClick={onClick}  // Call the scroll function on click
       className="bg-blue-700 py-3 text-white px-8 hover:bg-blue-600 text-sm rounded transition-all duration-200 ease-in-out">
        Contact us
      </button>
    </div>
  );
}
