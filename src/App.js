import logo from "./logo.svg";
import "./App.css";
import AdminLandingPage from "./pages/AdminLandingPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<AdminLandingPage />} />
      </Routes> */}
      <AdminLandingPage/>
    </div>
  );
}

export default App;
