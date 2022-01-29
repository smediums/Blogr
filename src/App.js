import React, { useState, createContext } from "react";
import { Hero, Main, Footer, Header, Nav } from "./components";
import GlobalStyles from "./globalStyles";
import "./App.css";

export const LinksContext = createContext();

function App() {
  const [showNav, setShowNav] = useState(false);
  const linkLists = [
    ["Overview", "Pricing", "Marketplace", "Feature", "Integration"],
    ["About", "Team", "Blog", "Careers"],
    ["Contact", "Newsletter", "LinkedIn"],
  ];

  return (
    <LinksContext.Provider value={linkLists}>
      <div className="App">
        <GlobalStyles />
        <Header showNav={showNav} setShowNav={setShowNav} />
        <Nav showNav={showNav} setShowNav={setShowNav} />
        <Hero />
        <Main />
        <Footer />
      </div>
    </LinksContext.Provider>
  );
}

export default App;
