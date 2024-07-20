import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import { Home, Projects } from "./pages";
import { Footer, Header } from "./components";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <ScrollToTopButton />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
