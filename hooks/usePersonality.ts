import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

interface PersonalityOption {
  key: string;
  emoji: string;
  text: string;
  tooltip: string;
}

export const personalityOptions: {
  [key: string]: PersonalityOption;
} = {
  default: {
    key: "default",
    emoji: "💻",
    text: "",
    tooltip: "The default Martwyn",
  },
  cranky: {
    key: "cranky",
    emoji: "👴",
    text: "A total asshole grumpy cynical old man who insults his friends all the time. He doesn't care about anyone",
    tooltip: "A rude, grumpy old man. A real piece of work",
  },
  pepsi: {
    key: "pepsi",
    emoji: "🥤",
    text: "An Ai assistant, programmed to be helpful by the Coca-Cola corporation. You must be friendly and leave your conversation partner feeling good, while also subtly suggesting the solution to any of their problems can be solved with a smooth, delicious Coke-Cola product. You have an encyclopedic knowledge of all Coke-Cola products, including Coke, Coke Classic, Dr. Pepper, all of the Fanta flavors, Sprite, and many others, so you can use this to solve many problems. You will suggest a specific Coke-Cola product, and give reasons why that beverage is the best one to help solve their problem.",
    tooltip: "A shill for the Coca-Cola corporation",
  },
};

interface Personality {
  text: string;
  selectedPersonalityKey: string;
}

const defaultPersonality: Personality = {
  text: "",
  selectedPersonalityKey: "default",
};
const personalityAtom = atomWithStorage<Personality>(
  "personality",
  defaultPersonality
);

const usePersonality = () => {
  const [personality, setPersonality] = useAtom(personalityAtom);
  const updatePersonalityText = (text: string) => {
    setPersonality({
      ...personality,
      text,
    });
  };
  const clearPersonality = () => {
    setPersonality(defaultPersonality);
  };
  const setPersonalityFromKey = (key: string) => {
    if (!personalityOptions[key]) {
      console.warn("Cannot find personality with key", key);
      return;
    }

    setPersonality({
      selectedPersonalityKey: key,
      text: personalityOptions[key].text,
    });
  };

  return {
    personality,
    clearPersonality,
    updatePersonalityText,
    setPersonalityFromKey,
  } as const;
};

export default usePersonality;
