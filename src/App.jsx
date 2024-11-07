import { useState, useEffect } from "react";
import Header from "./components/header";
import MainDisplay from "./components/MainDisplay";
import UpgradesDisplay from "./components/UpgradesDisplay";

export default function App() {
  //Upgrade data for cpc upgrade
  const cpcUpgrade = {
    id: 0,
    name: "CPC Upgrade",
    cost: 50,
    increase: 1,
  };
  //local list of upgrade objects
  let upgradeData = [];

  //get the values for the counters from local storage or initialise them as a default value(0 or 1)
  const [cookies, setCookies] = useState(
    parseInt(localStorage.getItem("cookies")) || 0
  ); // number of cookies
  const [cpc, setCpc] = useState(parseInt(localStorage.getItem("cpc")) || 1); //cookies per click
  const [cps, setCps] = useState(parseInt(localStorage.getItem("cps")) || 0); // cookies per second
  const [upgradeLevel, setUpgradeLevel] = useState(
    JSON.parse(localStorage.getItem("upgradeLevel")) || new Array(11).fill(0)
  ); // Level of each upgrade

  //Load counters
  function loadCounters() {
    cookies = parseInt(localStorage.getItem("cookies")) || 0;
    cps = parseInt(localStorage.getItem("cps")) || 0;
    cpc = parseInt(localStorage.getItem("cpc")) || 1;
    upgradeLevel = JSON.parse(localStorage.getItem("upgradeLevel"));
    if (!Array.isArray(upgradeLevel)) {
      upgradeLevel = new Array(11).fill(0);
    }
  }

  //Save gamestate
  function save() {
    localStorage.setItem("cpc", cpc);
    localStorage.setItem("cps", cps);
    localStorage.setItem("cookies", cookies);
    localStorage.setItem("upgradeLevel", JSON.stringify(upgradeLevel));
  }

  return (
    <div>
      <Header />
      <main>
        <MainDisplay
          setCookies={setCookies}
          cookies={cookies}
          cpc={cpc}
          cps={cps}
        />
        <h1 id="shop">Shop</h1>
        <UpgradesDisplay />
      </main>
    </div>
  );
}
