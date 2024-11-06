import { useState, useEffect } from "react";
import Header from "./components/header";
import MainDisplay from "./components/MainDisplay";
import UpgradesDisplay from "./components/UpgradesDisplay";

export default function App() {
  //get the values for the counters from local storage or initialise them as a default value(0 or 1)
  const [cookies, setCookies] = useState(
    parseInt(localStorage.getItem("cookies")) || 0
  ); // number of cookies
  const [cpc, setCpc] = useState(parseInt(localStorage.getItem("cpc")) || 1); //cookies per click
  const [cps, setCps] = useState(parseInt(localStorage.getItem("cps")) || 0); // cookies per second

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
