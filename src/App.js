import "./App.css";
import Card from "./components/Card";
function App() {
  return (
    <div
      className="flex flex-col items-center justify-start h-screen w-full pt-6 sm:pt-12"
      style={{ backgroundColor: "rgba(17, 17, 17, 1)" }}
    >
      <div className="w-full max-w-4xl h-auto flex flex-col items-center justify-center text-center mb-24">
        <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-6xl">
          What User says
        </h1>
        <span
          className="text-white font-light text-lg sm:text-xl md:text-xl lg:text-xl mt-2"
          style={{ color: "white" }}
        >
          Testimonials that speak louder than words! Customer stories that light
          up our day.
        </span>
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
}

export default App;
