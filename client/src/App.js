import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import Layout from "./components/Layout";
import WebSeries from "./pages/WebSeries";
import SingleMovie from "./pages/SingleMovie";

function App() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Movies />} />
            <Route path="/webseries" element={<WebSeries />} />
          </Route>
          <Route path="/singlemovie" element={<SingleMovie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
