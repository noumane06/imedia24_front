import "./Header.scss";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <img src={require("assets/images/imedia_icon.jpg")} width={"10%"} />
        <span>
          {" "}
          <a href="https://github.com/noumane06/imedia24_front#readme" target="_blank">Docs</a>{" "}
        </span>
      </div>
      <h2 className="header-title">Pokimon list</h2>
    </div>
  );
}
