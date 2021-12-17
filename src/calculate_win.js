export function calculateWinner(squares) {
  for(let i = 0; i < 3; i++) {
    if(squares[i] && squares[i+3] && squares[i+6] && 
      squares[i] === squares[i+3] && squares[i] === squares[i+6]) {
      return squares[i];
    }

    if(squares[i*3] && squares[i*3+1] && squares[i*3+2] && 
        squares[i*3] === squares[i*3+1] && squares[i*3] === squares[i*3+2]) {
      return squares[i*3];
    }
  }

  if((squares[0] && squares[4] && squares[8] && 
    squares[0] === squares[4] && squares[0] === squares[8]) || 
      (squares[2] && squares[4] && squares[6] && 
        squares[2] === squares[4] && squares[2] === squares[6])) {
      return squares[4];
  }

  for(let i = 0; i < 9; i++) {
    if(squares[i] === null) {
      return null;
    }
  }

  return 'tie';
}
