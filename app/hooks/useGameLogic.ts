import { useState, useCallback, useEffect } from 'react'

const GRID_SIZE = 4

export function useGameLogic() {
  const [board, setBoard] = useState<number[][]>(getInitialBoard())
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  useEffect(() => {
    const savedBestScore = localStorage.getItem('bestScore')
    if (savedBestScore) {
      setBestScore(parseInt(savedBestScore, 10))
    }
  }, [])

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score)
      localStorage.setItem('bestScore', score.toString())
    }
  }, [score, bestScore])

  const moveBoard = useCallback((direction: 'up' | 'down' | 'left' | 'right') => {
    let newBoard = JSON.parse(JSON.stringify(board))
    let newScore = score
    let moved = false

    const moveTiles = (line: number[]): [number[], number, boolean] => {
      let newLine = line.filter((tile) => tile !== 0)
      let lineScore = 0
      let lineMoved = newLine.length !== line.length

      for (let i = 0; i < newLine.length - 1; i++) {
        if (newLine[i] === newLine[i + 1]) {
          newLine[i] *= 2
          lineScore += newLine[i]
          newLine.splice(i + 1, 1)
          lineMoved = true
        }
      }

      while (newLine.length < GRID_SIZE) {
        newLine.push(0)
      }

      return [newLine, lineScore, lineMoved]
    }

    if (direction === 'left' || direction === 'right') {
      for (let i = 0; i < GRID_SIZE; i++) {
        let line = newBoard[i]
        if (direction === 'right') line.reverse()
        let [newLine, lineScore, lineMoved] = moveTiles(line)
        if (direction === 'right') newLine.reverse()
        newBoard[i] = newLine
        newScore += lineScore
        moved = moved || lineMoved
      }
    } else {
      for (let j = 0; j < GRID_SIZE; j++) {
        let line = newBoard.map((row) => row[j])
        if (direction === 'down') line.reverse()
        let [newLine, lineScore, lineMoved] = moveTiles(line)
        if (direction === 'down') newLine.reverse()
        for (let i = 0; i < GRID_SIZE; i++) {
          newBoard[i][j] = newLine[i]
        }
        newScore += lineScore
        moved = moved || lineMoved
      }
    }

    if (moved) {
      newBoard = addNewTile(newBoard)
      setBoard(newBoard)
      setScore(newScore)
    }
  }, [board, score])

  const resetGame = useCallback(() => {
    setBoard(getInitialBoard())
    setScore(0)
  }, [])

  return { board, score, bestScore, moveBoard, resetGame }
}

function getInitialBoard(): number[][] {
  const board = Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(0))
  return addNewTile(addNewTile(board))
}

function addNewTile(board: number[][]): number[][] {
  const emptyTiles = []
  for (let i = 0; i < GRID_SIZE; i++) {
    for (let j = 0; j < GRID_SIZE; j++) {
      if (board[i][j] === 0) {
        emptyTiles.push({ i, j })
      }
    }
  }

  if (emptyTiles.length > 0) {
    const { i, j } = emptyTiles[Math.floor(Math.random() * emptyTiles.length)]
    board[i][j] = Math.random() < 0.9 ? 2 : 4
  }

  return board
}

