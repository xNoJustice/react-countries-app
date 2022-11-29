import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";

function App() {
  return (
    <div className="bg-gray-200 dark:bg-gray-900 w-full flex justify-center items-center font-sans">
      <Routes>
        <Route path="/:slug" element={<Details />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
