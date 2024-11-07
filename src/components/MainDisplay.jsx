import CookieBtn from "./CookieBtn";

export default function MainDisplay({ setCookies, cookies, cpc, cps }) {
  return (
    <div id="mainDisplay">
      <CookieBtn setCookies={setCookies} cookies={cookies} cpc={cpc} />
      <p id="cookiesDisplay">Cookies: {cookies}</p>
      <p id="cpcDisplay">CPC: {cpc}</p>
      <p id="cpsDisplay">CPS: {cps}</p>
    </div>
  );
}
