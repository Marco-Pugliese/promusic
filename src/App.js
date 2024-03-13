import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Landingpage from "./Components/LandingPage/Landingpage";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import InfoPage from "./Components/InfoPage/InfoPage";
import PartnerPage from "./Components/PartnerPage/PartnerPage";
import ServicesPage from "./Components/ServicesPage/ServicesPage";

function App() {
  return (
    <div className="App">
      <div id="MainContainer">
        <Header />
        <div className="main flex-grow-1">
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="/join" element={<PartnerPage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
