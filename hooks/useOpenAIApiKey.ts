import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const openAiApiKeyAtom = atomWithStorage<string>("openAiApiKey", "");

const useOpenAiApiKey = () => {
  const [openAiApiKey, setOpenAiApiKey] = useAtom(openAiApiKeyAtom);
  const updateOpenAiApiKey = (openAiApiKey: string) => {
    setOpenAiApiKey(openAiApiKey);
  };
  const clearOpenAiApiKey = () => {
    setOpenAiApiKey("");
  };

  return {
    openAiApiKey,
    clearOpenAiApiKey,
    updateOpenAiApiKey,
  } as const;
};

export default useOpenAiApiKey;
