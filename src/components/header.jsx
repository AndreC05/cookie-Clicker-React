import HeaderButtons from "./HeaderButtons";

export default function Header({ loadCounters, save }) {
  return (
    <header>
      <h1 id="title">Cookie Clicker: BUT NOW IN REACT!!!!</h1>
      <HeaderButtons loadCounters={loadCounters} save={save} />
    </header>
  );
}
