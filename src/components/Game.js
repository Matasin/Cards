import React, { useState } from "react";
import Board from './Board';
import { calculateWinner } from "../helpers";

const styles = {
    width: '300px',
    margin: '40px auto',
};

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = (i) => {
        const boardCopy = [...board];
        //if user click an occupied square or if game is won, returm
        if (winner || boardCopy[i]) return;
        //Put an X or an O in the clickek square
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }
    const renderMoves = () => {
        return <button onClick={() => setBoard(Array(9).fill(null))}>Start game</button>
    }

    return (
        <>
            <Board squares={board} onClick={handleClick} />
            <div style={styles}>
                <p>{winner ? 'Winner ' + winner : 'Next player: ' + (xIsNext ? 'X' : 'O')}</p>
                {renderMoves()}
            </div>
        </>

    )
}

export default Game