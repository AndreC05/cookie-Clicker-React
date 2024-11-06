import Header from "./components/header";
import MainDisplay from "./components/MainDisplay";
import UpgradesDisplay from "./components/UpgradesDisplay";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <MainDisplay />
        <h1 id="shop">Shop</h1>
        <UpgradesDisplay />
      </main>
    </div>
  );
}
