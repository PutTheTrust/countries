import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Country, Home } from "./pages";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:country" element={<Country />} />
      </Routes>
    </>
  );
}

export default App;
