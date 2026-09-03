import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../pages/Home";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow isolate">
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
