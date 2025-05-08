import Board from "./Board";
import Button from "./Button";
import { useState } from "react";
import logo from "./assets/logo.png";
import "./App.css";
function random(n) {
  return Math.ceil(Math.random() * n);
}
function App() {
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  const myLast = myHistory.at(-1) ?? 0;
  const otherLast = otherHistory.at(-1) ?? 0;

  const isMyWinner = myLast > otherLast;
  const isOtherWinner = otherLast > myLast;

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);

    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
  };
  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  };

  return (
    <div className="App">
      <h1 className="App-logo">
        <img src={logo} alt="주사위 이미지" />
      </h1>
      <h1 className="App-title ">주사위게임</h1>
      <div>
        <Button className="App-button" onClick={handleRollClick}>
          던지기
        </Button>
        <Button className="App-button" color="red" onClick={handleClearClick}>
          처음부터
        </Button>
      </div>
      <div className="App-boards">
        <Board
          className={isMyWinner ? "Board-winner" : ""}
          name={"나"}
          color={"blue"}
          gameHistory={myHistory}
        />
        <Board
          className={isOtherWinner ? "Board-winner" : ""}
          name={"상대"}
          color={"red"}
          gameHistory={otherHistory}
        />
      </div>
    </div>
  );
}

export default App;
