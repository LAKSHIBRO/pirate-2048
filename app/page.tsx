'use client'

import { useState, useEffect } from 'react'
import { GameBoard } from './components/GameBoard'
import { Header } from './components/header'
import { useGameLogic } from './hooks/useGameLogic'

export default function PirateTreasure2048() {
  const { board, score, bestScore, moveBoard, resetGame } = useGameLogic()
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!gameOver) {
        switch (event.key) {
          case 'ArrowUp':
            moveBoard('up')
            break
          case 'ArrowDown':
            moveBoard('down')
            break
          case 'ArrowLeft':
            moveBoard('left')
            break
          case 'ArrowRight':
            moveBoard('right')
            break
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [gameOver, moveBoard])

  useEffect(() => {
    if (board.flat().includes(2048)) {
      setGameOver(true)
    }
  }, [board])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 flex flex-col items-center justify-center p-4">
      <Header score={score} bestScore={bestScore} resetGame={resetGame} />
      <GameBoard board={board} />
      {gameOver && (
        <div className="mt-4 text-2xl font-bold text-yellow-300">
          Ye found the Pirate King's treasure! 🏴‍☠️👑
        </div>
      )}
    </div>
  )
}

