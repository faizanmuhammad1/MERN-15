import "./App.css";

function App() {
  return (
    <>
      <dir className="p-2">
        <div className="flex gap-4 sm: flex-col md:flex-col lg:flex-row">
          <div className="w-full sm:h-20 lg:h-40 bg-blue-500"></div>
          <div className="w-full sm:h-20 lg:h-40 bg-blue-500"></div>
        </div>
        <div className="flex my-3 w-full sm:h-20 lg:h-40 bg-yellow-500"></div>
        <div className="flex gap-4 sm:flex-col md:flex-col lg:flex-row">
          <div className="w-full sm:h-20 lg:h-40 h-40 bg-green-500"></div>
          <div className="w-full sm:h-20 lg:h-40 h-40 bg-green-500"></div>
          <div className="w-full sm:h-20 lg:h-40 h-40 bg-green-500"></div>
        </div>
        <div className="flex gap-4 my-3 sm:flex-col md:flex-col lg:flex-row">
          <div className="sm:w-1/4 md:w-1/2 lg:w-full sm:h-20 lg:h-40 h-40 bg-red-500"></div>
          <div className="sm:w-1/4 md:w-1/2 lg:w-full sm:h-20 lg:h-40 h-40 bg-red-500"></div>
          <div className="sm:w-1/4 md:w-1/2 lg:w-full sm:h-20 lg:h-40 h-40 bg-red-500"></div>
          <div className="sm:w-1/4 md:w-1/2 lg:w-full sm:h-20 lg:h-40 h-40 bg-red-500"></div>
        </div>
      </dir>
    </>
  );
}

export default App;
