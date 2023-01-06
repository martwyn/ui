import cn from "classnames";
import { ReactNode } from "react";
import useTheme from "../../hooks/useTheme";
import styles from "./styles.module.css";

interface Props {
  className?: string;
  children: ReactNode;
}

const ThemeWrapper = ({ className, children }: Props) => {
  const { theme } = useTheme();

  const classes = cn(className, styles[theme.accent], {
    [styles.dark]: theme.darkMode,
    [styles.light]: !theme.darkMode,
  });

  return <div className={classes}>{children}</div>;
};

export default ThemeWrapper;
