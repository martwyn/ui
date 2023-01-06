import cn from "classnames";
import { ReactNode } from "react";
import Logo from "../logo";

interface Props {
  title: string;
  children: ReactNode;
  showLogo?: boolean;
  className?: string;
}

const Card = ({ children, title, showLogo, className }: Props) => {
  return (
    <div className={cn(className, "px-8 py-4 bg-card-bg rounded-2xl")}>
      {showLogo && (
        <div className="flex justify-center">
          <Logo />
        </div>
      )}
      <h2 className="mb-8 text-2xl text-center">{title}</h2>
      {children}
    </div>
  );
};

export default Card;
