import React, { useState } from "react";
import { calculateWinner } from "../calculate_win";
import Board from "./Board";

const Game = () => {

  const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  
  const winner = calculateWinner(board);
  const next = xIsNext ? 'X': 'O';

  const handleClick = (i) => {
    if(winner === null && board[i] === null) {
      setBoard(board.map((square, ind) => {
        if(ind !== i) {
          return square;
        } else {
          return next;
        }
      }));
      setXisNext(prev => prev ? false: true);
    }
  };

  const jumpToStart = () => {
    setBoard([null, null, null, null, null, null, null, null, null]);
    setStepNumber(0);
    setXisNext(true);
  };

  const result = () => {
    if(winner !== 'tie' && winner !== null) {
      return `Winner: ${winner}`;
    } else if(winner === 'tie') {
      return 'Tie Game';
    } else {
      return `Next Player: ${next}`;
    }
  };

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Board squares={board} onClick={handleClick} />
      <div className='info-wrapper'>
          <div>
            <button className='start' onClick={jumpToStart}>Go to Start</button>
          </div>
          <h3>{result()}</h3>
      </div>
    </>
  );
};

export default Game;