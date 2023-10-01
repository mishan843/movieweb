import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import Layout from "./components/Layout";
import WebSeries from "./pages/WebSeries";
import SingleMovie from "./pages/SingleMovie";
import DmcaPolicy from "./pages/DmcaPolicy";
import HowToDownload from "./pages/HowToDownload";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Sitemaps from "./pages/Sitemaps";
import TermsofUse from "./pages/TermsofUse";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="container ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Movies />} />
            <Route path="/webseries" element={<WebSeries />} />
            <Route path="/singlemovie" element={<SingleMovie />} />
            <Route path="/dmcapolicy" element={<DmcaPolicy />} />
            <Route path="/howtodownload" element={<HowToDownload />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/sitemaps" element={<Sitemaps />} />
            <Route path="/termsofuse" element={<TermsofUse />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
