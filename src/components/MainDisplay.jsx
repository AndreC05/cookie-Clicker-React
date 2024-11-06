import CookieBtn from "./CookieBtn";

export default function MainDisplay() {
  return (
    <div>
      <CookieBtn />
      <p id="cookiesDisplay">Cookies: 0</p>
      <p id="cpcCDisplay">CPC: 0</p>
      <p id="cpsCDisplay">CPS: 0</p>
      <p id="warningMsg">Not Enough Cookies!!</p>
    </div>
  );
}
