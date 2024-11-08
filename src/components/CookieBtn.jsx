export default function CookieBtn({ setCookies, cookies, cpc }) {
  //--------------------------------------------------------------increase cookies by cpc
  function increaseByCpc() {
    setCookies(cookies + cpc);
  }

  //---------------------------------------------------------------handle main Btn

  function playClickSound() {
    const clickSound = new Audio("/click.mp3");
    clickSound.play();
  }

  function handleMainBtn() {
    increaseByCpc();
    playClickSound();
  }

  return (
    <div>
      <button id="mainBtn" onClick={handleMainBtn}></button>
    </div>
  );
}
