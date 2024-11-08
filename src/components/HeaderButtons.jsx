export default function HeaderButtons({ loadCounters, save }) {
  //------------------------------------------------------------------Reset Btn
  function playResetSound() {
    const resetSound = new Audio("/resetAudio.mp3");
    resetSound.play();
  }

  function reset() {
    localStorage.setItem("cookies", 0);
    localStorage.setItem("cpc", 1);
    localStorage.setItem("cps", 0);
    localStorage.setItem("upgradeLevel", JSON.stringify(Array(11).fill(0)));
    loadCounters();
  }

  function handleResetBtn() {
    reset();
    playResetSound();
  }

  //------------------------------------------------------------------Save Btn
  function playSaveSound() {
    const saveSound = new Audio("/saveAudio.mp3");
    saveSound.play();
  }

  function handleSaveBtn() {
    save();
    playSaveSound();
  }

  return (
    <nav>
      <button onClick={handleSaveBtn}>Save</button>
      <button onClick={handleResetBtn}>Reset</button>
    </nav>
  );
}
