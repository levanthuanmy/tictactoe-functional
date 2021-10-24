import React from "react"
import Square from "./Square"

const Board = ({ map, squares, onClick, styleSquare }) => {
  return (
    <>
      {map.map((i) => (
        <div key={i} className="board-row">
          {i.map((j) => (
            <label key={j}>
              <Square
                value={squares[j]}
                onClick={() => onClick(j)}
                styleSquare={styleSquare[j]}
              />
            </label>
          ))}
        </div>
      ))}
    </>
  )
}

export default Board
