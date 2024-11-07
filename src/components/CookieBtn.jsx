export default function CookieBtn({ setCookies, cookies, cpc }) {
  //--------------------------------------------------------------increase cookies by cpc
  function increaseByCpc() {
    setCookies(cookies + cpc);
  }

  return (
    <div>
      <button id="mainBtn" onClick={increaseByCpc}>
        Click Me!!
      </button>
    </div>
  );
}
