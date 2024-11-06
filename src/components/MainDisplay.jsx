import CookieBtn from "./CookieBtn";

export default function MainDisplay({ setCookies, cookies, cpc, cps }) {
  return (
    <div>
      <CookieBtn setCookies={setCookies} cookies={cookies} cpc={cpc} />
      <p id="cookiesDisplay">Cookies: {cookies}</p>
      <p id="cpcCDisplay">CPC: {cpc}</p>
      <p id="cpsCDisplay">CPS: {cps}</p>
      <p id="warningMsg">Not Enough Cookies!!</p>
    </div>
  );
}
