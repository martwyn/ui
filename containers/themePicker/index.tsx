import Label from "../../components/label";
import useTheme from "../../hooks/useTheme";
import styles from "./styles.module.css";

const ThemePicker = () => {
  const { theme, setDarkMode, setAccent } = useTheme();
  const classes = "block w-8 h-8 rounded-full border cursor-pointer";

  return (
    <>
      <Label>Theme</Label>
      <div className="flex mt-2">
        <div className="flex justify-between w-full">
          <span
            className={`${classes} ${styles.light} border-icon`}
            onClick={() => setDarkMode(false)}
          />
          <span
            className={`${classes} ${styles.dark} border-icon`}
            onClick={() => setDarkMode(true)}
          />
          <span className="block mx-2 border-l-2 border-l-icon" />
          <span
            className={`${classes} ${styles.blue} border-transparent`}
            onClick={() => setAccent("blue")}
          />
          <span
            className={`${classes} ${styles.green} border-transparent`}
            onClick={() => setAccent("green")}
          />
          <span
            className={`${classes} ${styles.pink} border-transparent`}
            onClick={() => setAccent("pink")}
          />
          <span
            className={`${classes} ${styles.purple} border-transparent`}
            onClick={() => setAccent("purple")}
          />
        </div>
        <div className="flex"></div>
      </div>
    </>
  );
};

export default ThemePicker;
