import React, { useState } from "react";
import Hero from "./components/Hero";
import { Tabs } from "./components/Tabs";
import { TabContent } from "./components/TabContent";

import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

const App: React.FC = () => {
  const tabs = ["About", "Experience", "Skills", "Contact"];
  const pages = [<About />, <Experience />, <Skills />, <Contact />];

  const [active, setActive] = useState<number>(0);

  return (
    <div>
      <Hero />
      <Tabs tabs={tabs} active={active} onChange={setActive} />
      <TabContent>{pages[active]}</TabContent>
    </div>
  );
};

export default App;
