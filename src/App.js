import React, { useState } from "react";
import generatePuzzle from "./helpers/generate-puzzle";
import NumberButton from "./NumberButton";
import "./App.css";

function App() {
  const [gameBoard, setGameBoard] = useState(generatePuzzle());
  return (
    <div className="App">
      <div className="container">
        <h1>Sudoku</h1>
        <div className="top-bar">
          {/*
          TODO:
          Select difficulty from options
          Toggle to turn of 'Check for mistakes'
          */}
        </div>
        <div>
          <div className="game-board">
            <table>
              {gameBoard.map((row) => {
                const tr = row.map((cell) => <td>{cell.solutionValue}</td>);
                return <tr>{tr}</tr>;
              })}
            </table>
            <div className="num-board">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                <NumberButton key={number} number={number} />
              ))}
            </div>
          </div>
          <br />
          <div className="button-pane">
            <button>New game</button>
            <div className="control-buttons">
              <button>Hint</button>
              <button>Clear</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
