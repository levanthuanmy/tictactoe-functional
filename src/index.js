import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Board from './components/Board'

export const Game = () => {
  const [size, setSize] = useState(3)
  const [map, setMap] = useState([[0, 1, 2], [3, 4, 5], [6, 7, 8]])
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
      lastMove: null,
    }
  ])
  const [stepNumber, setStepNumber] = useState(0)
  const [xIsNext, setXIsNext] = useState(true)
  const [styleSquare, setStyleSquare] = useState(Array(9).fill("square"))
  const [isAscending, setIsAscending] = useState(false)
  const [status, setStatus] = useState('')

  const createMap = (newSize = 3) => {
    if (newSize < 3) return
    jumpTo(0)
    const leng = newSize * newSize
    const resMap = []
    for (let i = 0; i < leng; i++) {
      const row = []
      for (let j = i; j < newSize + i; j++) {
        row.push(j)
      }
      resMap.push(row)
      i += newSize - 1
    }
    setSize(newSize)
    setMap(resMap)
    setHistory([
      {
        squares: Array(leng).fill(null),
        lastMove: null,
      }
    ])
    setStyleSquare(Array(leng).fill("square"))
  }

  const handleClick = (i) => {
    let newHistory = history.slice(0, stepNumber + 1)
    const current = newHistory[newHistory.length - 1]
    const squares = current.squares.slice()
    let newStyleSquare = styleSquare.slice()
    const lastMove = [i % size, Math.floor(i / size)]

    if (calculateWinner(size, squares) || squares[i]) {
      return
    }
    squares[i] = xIsNext ? "X" : "O"
    const winner = calculateWinner(size, squares)

    setHistory(newHistory = newHistory.concat([
      {
        squares: squares,
        lastMove: lastMove,
      }
    ]))
    setStepNumber(newHistory.length - 1)
    setXIsNext(!xIsNext)
    if (winner) {
      onWin(winner, newStyleSquare)
    }
  }

  const onWin = (winner, newStyleSquare) => {
    winner?.map(item => {
      newStyleSquare[item] += " active-square"
      return null
    })
    setStyleSquare(newStyleSquare)
  }

  const jumpTo = (step) => {
    let newHistory = history.slice(0, step + 1)
    const current = newHistory[newHistory.length - 1]
    const squares = current.squares.slice()
    let newStyleSquare = styleSquare.slice()
    const winner = calculateWinner(size, squares)

    setStepNumber(step)
    setXIsNext((step % 2) === 0)

    if (winner) {
      onWin(winner, newStyleSquare)
    } else {
      setStyleSquare(Array(size * size).fill("square"))
    }

  }

  const moves = () => history?.map((items, move) => {
    if (isAscending) {
      move = history.length - 1 - move
    }
    const desc = move ?
      <div style={{ textAlign: 'start' }}>
        Go to move #{move}
        <br />
        X: {history[move].lastMove[0]}, Y: {history[move].lastMove[1]}
        <br /> Player: {history[stepNumber].squares[history[move].lastMove[0] + history[move].lastMove[1] * size]}
      </div>
      :
      'Go to game start'
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)} className={move === stepNumber ? "hightlight-btn" : ''}>{desc}</button>
      </li>
    )
  })

  useEffect(() => {
    const winner = calculateWinner(size, history[stepNumber].squares)
    if (winner) {
      setStatus("Winner: " + history[stepNumber]?.squares[winner[0]])
    } else if (!history[stepNumber].squares.includes(null)) {
      setStatus("Draw!")
    } else {
      setStatus("Next player: " + (xIsNext ? "X" : "O"))
    }
  }, [history, size, stepNumber, xIsNext])

  return (
    <div className="game">
      <div className="game-info">
        <div className="status">{status}</div>
        <p>Current size: {size}x{size}</p>
        <div className="btn-wrapper">
          <button onClick={() => createMap(size + 1)}>Increase the size of the board by 1 unit</button>
          <button onClick={() => createMap(size - 1)}>Decrease the size of the board by 1 unit (min 3)</button>
          <button onClick={() => createMap(3)}>Reset size</button>
          <button onClick={() => setIsAscending(!isAscending)}>{isAscending ? "Ascending Order" : "Descending Order"}</button>
        </div>
        <ol className="wrapper-history">{moves()}</ol>
      </div>
      <div className="game-board">
        <Board
          map={map}
          squares={history[stepNumber].squares}
          onClick={i => handleClick(i)}
          styleSquare={styleSquare}
        />
      </div>
    </div>
  )
}

ReactDOM.render(<Game />, document.getElementById("root"))

const calculateWinner = (size = 3, squares) => {
  const numOfStreaks = size < 5 ? 3 : 5 // board size < 5x5 => rule is 3 || 5 
  const leng = size * size || squares.length
  let winPositions = []
  let winCheck = false

  for (let pos = 0; pos < leng; pos++) {
    if (!squares[pos]) {
      continue
    }
    winCheck = true
    winPositions = [pos]
    for (let point = 1; point < numOfStreaks; point++) {
      if (
        pos + point * (size + 1) > leng ||
        squares[pos] !== squares[pos + point * (size + 1)]
      ) {
        winCheck = false
        break
      }
      winPositions.push(pos + point * (size + 1))
    }
    if (winCheck) return winPositions
  }

  for (let pos = 0; pos < leng; pos++) {
    if (!squares[pos] || pos % size < (numOfStreaks - 1)) {
      continue
    }
    winCheck = true
    winPositions = [pos]
    for (let point = 1; point < numOfStreaks; point++) {
      let nextPosition = pos + point * (size - 1)
      if (nextPosition < 0 || squares[pos] !== squares[nextPosition]) {
        winCheck = false
        break
      }
      winPositions.push(nextPosition)
    }
    if (winCheck) return winPositions
  }

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - numOfStreaks + 1; j++) {
      const pos = i * size + j
      if (!squares[pos]) {
        continue
      }
      winCheck = true
      winPositions = [pos]
      for (let point = 1; point < numOfStreaks; point++) {
        if (squares[pos] !== squares[pos + point]) {
          winCheck = false
          break
        }
        winPositions.push(pos + point)
      }
      if (winCheck) return winPositions
    }
  }

  for (let j = 0; j < size - numOfStreaks + 1; j++) {
    for (let i = 0; i < size; i++) {
      const pos = j * size + i
      if (!squares[pos]) {
        continue
      }
      winCheck = true
      winPositions = [pos]
      for (let point = 1; point < numOfStreaks; point++) {
        if (squares[pos] !== squares[pos + point * size]) {
          winCheck = false
          break
        }
        winPositions.push(pos + point * size)
      }
      if (winCheck) return winPositions
    }
  }

  return null
}

