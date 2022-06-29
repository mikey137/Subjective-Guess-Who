import React from 'react';
import deckOne from '../decks/DeckOne'

const handleBlur = (card) => {
    card.classList.toggle('active')
}

function GameBoard() {
    return (
        <div className="gameboard-wrapper">
            <h1>Subjective Hypothesize Whom</h1>
            <div className="gameboard-board-messager-container">
                <div className="gameboard-board">
                    {deckOne.map((character) => (
                        <div 
                            className="card" 
                            style={{backgroundImage: `url('${character.photo}')`}}
                            onClick={(e) => handleBlur(e.target)}
                        >
                            <h1>{character.name}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default GameBoard;