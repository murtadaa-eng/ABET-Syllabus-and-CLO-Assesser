
import React from 'react';

const Spinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div
        className="animate-spin rounded-full h-12 w-12 border-b-2 border-t-2 border-indigo-500"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
      <p className="text-indigo-300">Gemini is thinking...</p>
    </div>
  );
};

export default Spinner;
