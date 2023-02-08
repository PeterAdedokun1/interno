import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Project from "./pages/Project";
import Service from "./pages/Service";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Pricing from "./pages/Pricing";
import Error from "./pages/Error";
import Faq from "./pages/Faq";
import Team from "./pages/Team";
import BlogDetails from "./pages/BlogDetails";
import ServiceSingle from "./pages/ServiceSingle";
import { useState, useEffect } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import TeamDetails from "./pages/TeamDetails";
import SingleQuestion1 from "./component/SingleQuestion1";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });
  return (
    <>
      {loading ? (
        <ClimbingBoxLoader
          style={{ background: "blue", height: "100vh" }}
          color={"#292F36"}
          loading={loading}
          size={15}
        />
      ) : (
        <>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="service" element={<Service />} />
            <Route path="service/:singleId" element={<ServiceSingle />} />
            <Route path="project" element={<Project />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:BlogId" element={<BlogDetails />} />
            <Route path="contact" element={<Contact />} />
            <Route path="faq" element={<Faq />} />
            <Route path="team" element={<Team />} />
            <Route path="team/:TeamId" element={<TeamDetails />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
