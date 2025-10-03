import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
          Smartfix Computer Solution
        </h1>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-600 mb-8">
            Reliable IT & Hardware Support for Your Business Needs
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Test Component Working!</h2>
            <p>This is a test to see if basic React is working.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;