import React, { InputHTMLAttributes, forwardRef } from "react";
import cn from "classnames";
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}
const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { className, children, type, ...rest } = props;

  const inputClassNameToUse = cn(
    "mb-2 mt-1 py-3 px-6 border block bg-input-bg border-transparent rounded-md w-full focus:border-input-focus-border focus:outline-none",
    className
  );

  return (
    <input ref={ref} type={type} className={inputClassNameToUse} {...rest} />
  );
});

Input.displayName = "Input";

export default Input;
