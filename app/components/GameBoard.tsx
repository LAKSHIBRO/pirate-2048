import { motion } from 'framer-motion'

interface GameBoardProps {
  board: number[][]
}

const tileColors: { [key: number]: string } = {
  2: 'bg-yellow-300', // Coin
  4: 'bg-blue-400', // Gem
  8: 'bg-red-400', // Ring
  16: 'bg-purple-400', // Crown
  32: 'bg-green-400', // Chalice
  64: 'bg-orange-400', // Chest
  128: 'bg-pink-400', // Map
  256: 'bg-indigo-400', // Ship
  512: 'bg-teal-400', // Island
  1024: 'bg-gray-700', // Kraken
  2048: 'bg-yellow-600', // Pirate King
}

const tileEmojis: { [key: number]: string } = {
  2: '🪙', // Coin
  4: '💎', // Gem
  8: '💍', // Ring
  16: '👑', // Crown
  32: '🏆', // Chalice
  64: '📦', // Chest
  128: '🗺️', // Map
  256: '🚢', // Ship
  512: '🏝️', // Island
  1024: '🐙', // Kraken
  2048: '🏴‍☠️', // Pirate King
}

export function GameBoard({ board }: GameBoardProps) {
  return (
    <div className="bg-blue-800 p-4 rounded-lg shadow-lg">
      <div className="grid grid-cols-4 gap-4">
        {board.flat().map((value, index) => (
          <motion.div
            key={index}
            className={`w-16 h-16 flex items-center justify-center rounded-lg text-2xl font-bold ${
              value ? tileColors[value] : 'bg-blue-700'
            }`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {value ? tileEmojis[value] : ''}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

