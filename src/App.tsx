import { Route, Routes } from "react-router-dom";
import { Country, Home } from "./pages";
import { Header } from "./components";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:countryId" element={<Country />} />
      </Routes>
    </>
  );
}

export default App;
