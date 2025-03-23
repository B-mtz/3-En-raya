import { Children, useState } from "react";
import "./Css/App.css";

const TURNS = {
  x: "×",
  o: "o",
};

const score = {
  x: 0,
  o: 0
}
const Square = ({ children, updateBoard, index }) => {
  return <div className="board-game-cell">{children}</div>;
};

function App() {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [turn, setTurn] = useState(TURNS.x);
  const [score, setScore] = useState({ x: 0, o: 0 });

  return (
    <main className="board">
      <h1>Tres en raya</h1>
      <section className="board-score">
        <p className="board-score-data x">
          {TURNS.x} : {score.x}
        </p>
        <p className="board-score-btn">
          <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512"><path d="M386.3 160L336 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z" /></svg>
        </p>
        <p className="board-score-data o">
          {TURNS.o} : {score.x}
        </p>
      </section>
      <section className="board-game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index}>
              {board[index]}
            </Square>
          );
        })}
      </section>
      <section className="board-turn">
        <h2>Turno:</h2>
        <Square>{turn}</Square>
      </section>
    </main>
  );
}

export default App;
