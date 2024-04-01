import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import App from "../App";
function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default AppRouter;
