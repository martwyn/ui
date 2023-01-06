import cn from "classnames";
import { ChangeEvent, InputHTMLAttributes } from "react";
import styles from "./styles.module.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  onUpdate: (value: number) => void;
}

const Slider = ({ className, onUpdate, ...props }: Props) => {
  const classes = cn("bg-transparent w-full", styles.slider, className);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    onUpdate(value);
  };
  return (
    <input
      className={classes}
      {...props}
      onChange={handleChange}
      type="range"
    />
  );
};

export default Slider;
