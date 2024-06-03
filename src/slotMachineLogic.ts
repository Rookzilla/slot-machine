const symbols = ['Cherry', 'Lemon', 'Bell', 'Bar', 'Seven'] as const;
type Symbol = typeof symbols[number];

const probabilities = [0.30, 0.25, 0.20, 0.15, 0.10];

const winningCombinations: { [key: string]: number } = {
  'Seven,Seven,Seven': 100,
  'Bar,Bar,Bar': 50,
  'Bell,Bell,Bell': 20,
  'Lemon,Lemon,Lemon': 10,
  'Cherry,Cherry,Cherry': 5,
  'Seven,Seven': 5,
};

const getRandomSymbol = (): Symbol => {
  const randomIndex = Math.random();
  let cumulativeProbability = 0;

  for (let i = 0; i < symbols.length; i++) {
    cumulativeProbability += probabilities[i];
    if (randomIndex < cumulativeProbability) {
      return symbols[i];
    }
  }
  return symbols[symbols.length - 1]; // Default to the last symbol
};

export const spinSlotMachine = (): Symbol[] => {
  return [getRandomSymbol(), getRandomSymbol(), getRandomSymbol()];
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