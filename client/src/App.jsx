import { BrowserRouter, Routes, Route } from "react-router-dom";
import "regenerator-runtime/runtime";

import Home from "./pages/Home";
// import UserDashboard from "./pages/UserDashboard";
import "./App.css";
import Interview from "./pages/Interview";
import ObjectiveQuestions from "./components/ObjectiveQuestions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index path="/" element={<Home />} />
          {/* <Route path="/dashboard" element={<UserDashboard />} /> */}
          <Route path="/interview/:section" element={<Interview />} />
          <Route path="/objective/:section" element={<ObjectiveQuestions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
