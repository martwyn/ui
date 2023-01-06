import React, { TextareaHTMLAttributes, forwardRef } from "react";
import cn from "classnames";
interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}
const Textarea = forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  const { className, children, ...rest } = props;
  const inputClassNameToUse = cn(
    "mb-2 mt-1 py-3 px-6 border block bg-input-bg border-transparent rounded-md w-full focus:border-input-focus-border focus:outline-none",
    className
  );

  return <textarea ref={ref} className={inputClassNameToUse} {...rest} />;
});

Textarea.displayName = "Textarea";

export default Textarea;
