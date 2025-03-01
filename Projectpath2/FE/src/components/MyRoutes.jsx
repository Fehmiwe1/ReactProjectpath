import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";
import SinglePost from "./SinglePost";
import Contact from "./Contact";
import EditPost from "./EditPost";
import CreateIncident from "./CreateIncident";
import Incident from "./Incident";

function MyRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/editpost/:id" element={<EditPost />} />
        <Route path="/createincident" element={<CreateIncident />} />
        <Route path="/incident" element={<Incident />} />
      </Routes>
      <Footer />
    </>
  );
}

export default MyRoutes;
