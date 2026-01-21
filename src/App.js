import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import { websiteContent } from "./mockData";

function App() {
  const [language, setLanguage] = useState('en');

  const handleLanguageToggle = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const content = websiteContent[language];

  return (
    <div className="App">
      <BrowserRouter basename="/Frenchwithsmily">
      
        <Header
          language={language}
          onLanguageChange={handleLanguageToggle}
          content={content}
        />
        <Routes>
          <Route path="/" element={<Home content={content} />} />
          <Route path="/about" element={<About content={content} />} />
          <Route path="/services" element={<Services content={content} />} />
          <Route path="/blog" element={<Blog content={content} />} />
          <Route path="/contact" element={<Contact content={content} />} />
        </Routes>
        <Footer content={content} />
      </BrowserRouter>
    </div>
  );
}

export default App;
