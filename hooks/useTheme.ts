import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

interface Theme {
  darkMode: boolean;
  accent: Accent;
}

const themeAtom = atomWithStorage<Theme>("theme", {
  darkMode: true,
  accent: "blue",
});

const useTheme = () => {
  const [theme, setTheme] = useAtom(themeAtom);
  const setDarkMode = (darkMode: boolean) => {
    setTheme({
      darkMode,
      accent: theme.accent,
    });
  };
  const setAccent = (accent: Accent) => {
    setTheme({
      darkMode: theme.darkMode,
      accent,
    });
  };

  return { theme, setDarkMode, setAccent } as const;
};

export default useTheme;
