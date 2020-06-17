import store from "@/store";

export type Rarity = {
  rarity: string;
  power: number;
};

export const Rarities: Rarity[] = [
  {
    rarity: "Common",
    power: 1,
  },
  {
    rarity: "Good",
    power: 5,
  },
  {
    rarity: "Rare",
    power: 30,
  },
  {
    rarity: "Epic",
    power: 100,
  },
  {
    rarity: "Legendary",
    power: 1000,
  },
  {
    rarity: "Post-legendary",
    power: 10000,
  },
  {
    rarity: "Ultimate",
    power: 100000,
  },
];

export const getRandomRarity = (): Rarity => {
  const chance = Math.E ** -(1 / store.state.entropy) / 2;
  const maximumRarity = store.state.maximumRarity;
  const rand = Math.random();

  let probability = chance;
  let remainingProbability = 1 - chance;

  for (let currentLevel = 0; currentLevel < maximumRarity; currentLevel++) {
    if (rand < probability) {
      return Rarities[currentLevel];
    }

    probability += remainingProbability * chance;
    remainingProbability = 1 - probability;
  }

  return Rarities[maximumRarity];
};
