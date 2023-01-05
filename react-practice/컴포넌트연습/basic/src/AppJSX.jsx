import logo from "./logo.svg";
import "./App.css";

function AppJSX() {
  const name = "윤정";
  const list = ["와", "신기하다", "리액트 짱 좋넹?", "음핫핫"];
  return (
    <>
      <h1>하이 {name}</h1>
      {/* <ul>
        {list.map((item) => (
          <li key="{item.id}">{item.name}</li>
        ))}
      </ul> */}
    </>
  );
}

export default AppJSX;
