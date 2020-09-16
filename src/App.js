import React, { useState } from "react";
import generatePuzzle from "./helpers/generate-puzzle";
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
                const tr = row.map((cell) => <td>{cell}</td>);
                return <tr>{tr}</tr>;
              })}
            </table>
          </div>
          <div className="button-pane">
            <button>New game</button>
            <div className="num-board">
              {/*
                TODO:
                Number buttons to input numbers into game grid
              */}
            </div>
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
