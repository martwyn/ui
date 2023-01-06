import React, { LabelHTMLAttributes } from "react";
import cn from "classnames";

const Label = ({
  className,
  ...rest
}: LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label
      className={cn("text-sm font-medium text-text-secondary", className)}
      {...rest}
    />
  );
};

export default Label;
