import React, { useState } from "react";
import generatePuzzle from "./helpers/generate-puzzle";
import NumberButton from "./NumberButton";
import "./App.css";

function App() {
  const [gameBoard, setGameBoard] = useState(generatePuzzle());
  const [isGameWon, setIsGameWon] = useState(false);
  const makeSeleted = (i, j) => {
    setGameBoard((prevBoard) => {
      let updatedBoard = prevBoard.map((row, a) =>
        row.map((cell, b) => {
          return { ...cell, isSelected: a === i && b === j ? true : false };
        })
      );
      return updatedBoard;
    });
  };
  const handleNewGameButton = () => {
    setGameBoard(generatePuzzle());
  };
  const isGameSolved = (board) => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j].solutionValue !== board[i][j].userInputValue && !board[i][j].partOfInitialPuzzle) {
          return false;
        }
      }
    }
    return true;
  };
  function handleNumberButton(n) {
    setGameBoard((prevBoard) => {
      let updatedBoard = prevBoard.map((row, a) =>
        row.map((cell, b) => {
          if (cell.isSelected === true) {
            return { ...cell, userInputValue: n };
          } else {
            return { ...cell };
          }
        })
      );
      console.log(updatedBoard);
      setIsGameWon(isGameSolved(updatedBoard));
      return updatedBoard;
    });
  }
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
        {isGameWon && <div className="game-won-message">Game won</div>}
        <div>
          <div className="game-board">
            <table>
              <tbody>
                {gameBoard.map((row, i) => {
                  const tr = row.map((cell, j) => {
                    const classes = cell.isSelected ? `selected` : "";
                    const cellValue = cell.partOfInitialPuzzle ? cell.solutionValue : cell.userInputValue;
                    return (
                      <td key={`${i}-${j}`} className={classes} onClick={() => makeSeleted(i, j)}>
                        {cell.partOfInitialPuzzle ? <strong>{cellValue}</strong> : cellValue}
                      </td>
                    );
                  });
                  return <tr key={i}>{tr}</tr>;
                })}
              </tbody>
            </table>
            <div className="num-board">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                <NumberButton key={number} number={number} handleNumberButton={handleNumberButton} />
              ))}
            </div>
          </div>
          <br />
          <div className="button-pane">
            <button onClick={handleNewGameButton}>New game</button>
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
