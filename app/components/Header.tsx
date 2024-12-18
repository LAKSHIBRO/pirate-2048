import { Button } from "@/components/ui/button"

interface HeaderProps {
  score: number
  bestScore: number
  resetGame: () => void
}

export function Header({ score, bestScore, resetGame }: HeaderProps) {
  return (
    <div className="w-full max-w-md mb-4">
      <h1 className="text-4xl font-bold text-center text-yellow-300 mb-4">Pirate's Treasure 2048</h1>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-white">Score: {score}</p>
          <p className="text-white">Best: {bestScore}</p>
        </div>
        <Button onClick={resetGame} variant="secondary">New Game</Button>
      </div>
    </div>
  )
}

