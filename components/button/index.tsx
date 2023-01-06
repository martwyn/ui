import { ButtonHTMLAttributes } from "react";
import cn from "classnames";
import Spinner from "../spinner";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const Button = ({ className, loading, children, ...props }: Props) => {
  const defaultClasses = cn("px-4 py-2 border rounded-md", {
    "flex justify-center": loading,
  });
  let classes = cn(
    className,
    defaultClasses,
    "bg-button-bg border-button-border text-button-text focus:bg-button-focus-bg focus:text-button-focus-text"
  );

  return (
    <button className={classes} {...props}>
      {loading ? <Spinner size="sm" /> : children}
    </button>
  );
};

export default Button;
