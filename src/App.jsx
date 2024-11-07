import { useState, useEffect, useRef } from "react";
import Header from "./components/header";
import MainDisplay from "./components/MainDisplay";
import UpgradesDisplay from "./components/UpgradesDisplay";

export default function App() {
  //--------------------------------------------------------------------Variables and Constants
  //local list of upgrade objects
  const [upgradeData, setUpgradeData] = useState([]);

  //get the values for the counters from local storage or initialise them as a default value(0 or 1)
  const [cookies, setCookies] = useState(
    parseInt(localStorage.getItem("cookies")) || 0
  ); // number of cookies
  const [cpc, setCpc] = useState(parseInt(localStorage.getItem("cpc")) || 1); //cookies per click
  const [cps, setCps] = useState(parseInt(localStorage.getItem("cps")) || 1); // cookies per second
  const [upgradeLevel, setUpgradeLevel] = useState(
    JSON.parse(localStorage.getItem("upgradeLevel")) || new Array(11).fill(0)
  ); // Level of each upgrade

  //reference to each counter to use in the useEffect
  const cpcRef = useRef(cpc);
  const cpsRef = useRef(cps);
  const cookiesRef = useRef(cookies);
  const upgradeLevelRef = useRef(upgradeLevel);

  //-----------------------------------------------------------Save gamestate -- not to be used inside useEffect
  function save() {
    localStorage.setItem("cpc", cpc);
    localStorage.setItem("cps", cps);
    localStorage.setItem("cookies", cookies);
    localStorage.setItem("upgradeLevel", JSON.stringify(upgradeLevel));
  }

  //------------------------------------------------------------------------------Load counters
  function loadCounters() {
    setCookies(parseInt(localStorage.getItem("cookies")) || 0);
    setCps(parseInt(localStorage.getItem("cps")) || 0);
    setCpc(parseInt(localStorage.getItem("cpc")) || 1);
    setUpgradeLevel(JSON.parse(localStorage.getItem("upgradeLevel")));
    if (!Array.isArray(upgradeLevel)) {
      setUpgradeLevel(new Array(11).fill(0));
    }
  }

  // ----------------------------------------------------------------Update refs when state changes
  useEffect(() => {
    cookiesRef.current = cookies;
  }, [cookies]);

  useEffect(() => {
    cpcRef.current = cpc;
  }, [cpc]);

  useEffect(() => {
    cpsRef.current = cps;
  }, [cps]);

  useEffect(() => {
    upgradeLevelRef.current = upgradeLevel;
  }, [upgradeLevel]);

  //-------------------------------------------------------------create 1second interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCookies((current) => current + cpsRef.current); // increase cookies by cps

      //save values of counter references to local storage. This prevents interval from restarting every time a couter is changed
      localStorage.setItem("cpc", cpcRef.current);
      localStorage.setItem("cps", cpsRef.current);
      localStorage.setItem("cookies", cookiesRef.current);
      localStorage.setItem(
        "upgradeLevel",
        JSON.stringify(upgradeLevelRef.current)
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  //----------------------------------------------------------------fetch API upgrade data;
  useEffect(() => {
    //Upgrade data for cpc upgrade
    const cpcUpgrade = {
      id: 0,
      name: "CPC Upgrade",
      cost: 50,
      increase: 1,
    };

    async function handleFetch() {
      const response = await fetch(
        "https://cookie-upgrade-api.vercel.app/api/upgrades"
      );
      const data = await response.json();

      data.unshift(cpcUpgrade); //Add cpc upgrade to the beginning of the array

      setUpgradeData(data);
    }

    handleFetch();
  }, []);

  return (
    <div>
      <Header loadCounters={loadCounters} save={save} />
      <main>
        <MainDisplay
          setCookies={setCookies}
          cookies={cookies}
          cpc={cpc}
          cps={cps}
        />
        <h1 id="shop">Shop</h1>
        <UpgradesDisplay
          setCookies={setCookies}
          setCpc={setCpc}
          setCps={setCps}
          cookies={cookies}
          cpc={cpc}
          cps={cps}
          upgradeData={upgradeData}
          upgradeLevel={upgradeLevel}
          setUpgradeLevel={setUpgradeLevel}
          save={save}
        />
      </main>
    </div>
  );
}
