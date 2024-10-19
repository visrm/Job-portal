import React from "react";
import AppNavBar from "./AppNavBar";

const HomePage = () => {
  return (
    <>
      <header>
        <AppNavBar />
      </header>
      <main id="home-main">
        <hgroup>
          <h1 id="home-title" align="center">
            For every hardwork,<span> help to get better opportunity</span>
          </h1>
          <h3 id="home-subtitle" align="right">
            <div id="hgroup-bg"></div>
            Job hunting made easy.
          </h3>
        </hgroup>
      </main>
    </>
  );
};

export default HomePage;
