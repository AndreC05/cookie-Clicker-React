export default function HeaderButtons({ loadCounters, save }) {
  //------------------------------------------------------------------Reset function
  function reset() {
    localStorage.setItem("cookies", 0);
    localStorage.setItem("cpc", 1);
    localStorage.setItem("cps", 0);
    localStorage.setItem("upgradeLevel", JSON.stringify(Array(11).fill(0)));
    loadCounters();
  }

  return (
    <nav>
      <button onClick={save}>Save</button>
      <button onClick={reset}>Reset</button>
    </nav>
  );
}
