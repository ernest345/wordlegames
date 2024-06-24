                                                            import React from "react";
import { useWordle } from "../hooks/use.Wordle";
import { Tile } from "../components/Tile";
import "./WordG.css";

const WordG = () => {
  const {
    word,
    isLoading,
    guesses,
    gameOver,
    currentGuesses,
    currentIndex,
    getTileClass,
    mess,
    initializeGame,
  } = useWordle();
  console.log(word);

  return (
    <div className="word-container">
      {isLoading ? (
        <p>Загрузка...</p>
      ) : (
        <div>
          {Array.from({ length: 6 }, (_, row) => (
            <div key={row} className="row">
              {Array.from({ length: 5 }, (_, col) => {
                const index = row * 5 + col;
                const inputValue = guesses[row][col] || "";
                const tileClass =
                  currentIndex > row || gameOver ? getTileClass(inputValue, col, row) : "";
                return (
                  <Tile
                    key={index}
                    index={index}
                    inputValue={inputValue}
                    tileClass={tileClass}
                  />
                );
              })}
            </div>
          ))}
          {mess ? <p>Правильное слово: {word}</p> : null}
          {gameOver && (
            <div>
              
              <button onClick={initializeGame}>Начать заново</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WordG;