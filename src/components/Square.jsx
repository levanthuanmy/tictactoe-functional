import React from "react"

const Square = ({ styleSquare, onClick, value }) => {
  return (
    <button className={styleSquare} onClick={onClick}>
      {value}
    </button>
  )
}

export default Square
