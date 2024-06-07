// src/components/slotMachine/slotMachine.logic.ts

const symbols = ['apple', 'banana', 'lemon', 'orange', 'question'] as const; // Include question mark symbol
export type Symbol = typeof symbols[number];

const probabilities = [0.30, 0.25, 0.20, 0.15, 0.10, 0.00]; // Zero probability for 'question'

const winningCombinations: { [key: string]: number } = {
  'apple,apple,apple': 100,
  'banana,banana,banana': 50,
  'lemon,lemon,lemon': 20,
  'orange,orange,orange': 10,
  'apple,apple': 5,
  'banana,banana': 3,
  'lemon,lemon': 2,
};

const getRandomSymbol = (): Symbol => {
  const randomIndex = Math.random();
  let cumulativeProbability = 0;

  for (let i = 0; i < symbols.length - 1; i++) { // Exclude 'question' from random selection
    cumulativeProbability += probabilities[i];
    if (randomIndex < cumulativeProbability) {
      return symbols[i];
    }
  }
  return symbols[symbols.length - 2]; // Default to the last symbol (excluding 'question')
};

export const spinSlotMachine = (iterations: number = 30): Symbol[][] => {
  const reels: Symbol[][] = [[], [], []];
  for (let i = 0; i < iterations; i++) {
    reels[0].push(getRandomSymbol());
    reels[1].push(getRandomSymbol());
    reels[2].push(getRandomSymbol());
  }
  return reels;
};

export const checkWin = (reels: Symbol[]): number => {
  const key = reels.join(',');
  if (winningCombinations[key] !== undefined) {
    return winningCombinations[key];
  }
  const partialKey = reels.slice(0, 2).join(',');
  if (winningCombinations[partialKey] !== undefined) {
    return winningCombinations[partialKey];
  }
  return 0;
};
