import Dics from "./Dics";

function Board({ name, color, gameHistory, className }) {
  const num = gameHistory[gameHistory.length - 1] || 1;
  const sum = gameHistory.reduce((a, b) => a + b, 0);
  return (
    <>
      <div className={`Board App-board ${className}`}>
        <h2 className="Board-heading">{name}</h2>
        <Dics color={color} num={num}></Dics>
        <h2 className="Board-heading">총점</h2>
        <p>{sum}</p>
        <p className="Board-heading">기록</p>
        <p>{gameHistory.join(", ")}</p>
      </div>
    </>
  );
}
export default Board;
