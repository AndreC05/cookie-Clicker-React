export default function CookieBtn({ setCookies, cookies, cpc }) {
  //increase cookies by cpc
  function increaseByCpc() {
    console.log("Click");
    setCookies(cookies + cpc);
  }

  return (
    <div>
      <button onClick={increaseByCpc}>Click Me!!</button>
    </div>
  );
}
