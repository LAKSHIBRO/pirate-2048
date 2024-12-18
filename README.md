# Pirate-Themed 2048 Game

Welcome to the Pirate-Themed 2048 Game! This is a fun and adventurous twist on the classic 2048 game, where you collect treasures and face mythical creatures in your journey to become the Pirate King. The game board is styled with pirate-themed elements, including coins, gems, rings, crowns, ships, and even a Kraken!

## Features

- **Pirate-themed Tiles:** Each tile represents a different pirate item, ranging from coins to the Pirate King!
- **Animated Tile Movements:** Tiles animate smoothly as they merge or move on the board, providing a dynamic visual experience.
- **Responsive Design:** The game board is responsive, and the grid is styled to look great on different screen sizes.
- **Challenging Gameplay:** The goal is to reach the 2048 tile (Pirate King), combining tiles like coins, gems, ships, and mythical sea creatures.

## Game Board Layout

The game board consists of a 4x4 grid, with tiles representing different items, creatures, and landmarks that tell the story of a pirate's treasure hunt.

### Tile Values and Their Corresponding Items

| Value  | Item         | Emoji  | Color          |
|--------|--------------|--------|----------------|
| 2      | Coin         | 🪙     | bg-yellow-300  |
| 4      | Gem          | 💎     | bg-blue-400    |
| 8      | Ring         | 💍     | bg-red-400     |
| 16     | Crown        | 👑     | bg-purple-400  |
| 32     | Chalice      | 🏆     | bg-green-400   |
| 64     | Chest        | 📦     | bg-orange-400  |
| 128    | Map          | 🗺️     | bg-pink-400    |
| 256    | Ship         | 🚢     | bg-indigo-400  |
| 512    | Island       | 🏝️     | bg-teal-400    |
| 1024   | Kraken       | 🐙     | bg-gray-700    |
| 2048   | Pirate King  | 🏴‍☠️  | bg-yellow-600  |

### The Board Style

- The board has a vibrant pirate-inspired theme, with different colors associated with each tile value.
- Each tile is animated using the `framer-motion` library to provide smooth transitions when merging or moving.
- The tiles are rounded and styled with bold text and emojis to represent each item visually.

## How It Works

1. **Game Start:** A 4x4 grid is initialized with a few randomly placed tiles.
2. **Moving and Merging Tiles:** You move the tiles on the board using the arrow keys or swipe gestures. Matching tiles with the same value merge into one, doubling in value.
3. **Goal:** The objective is to reach the "Pirate King" tile, which is the 2048 tile. However, the game ends when no more moves can be made.

## Getting Started

To run this game in your own environment, follow these steps:

### Prerequisites

- Node.js (>= 14.x)
- React (>= 17.x)
- Tailwind CSS (for styling)
- Framer Motion (for animation)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-repo/pirate-themed-2048.git
