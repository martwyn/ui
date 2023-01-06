import Link from "next/link";
import { MouseEvent } from "react";
import useMessages from "../../hooks/useMessages";
import useUser from "../../hooks/useUser";
import LogoutIcon from "../../svgs/logout.svg";

interface Props {
  className?: string;
}

const ClearSession = ({ className }: Props) => {
  const { clearMessages } = useMessages();
  const { clearUser } = useUser();
  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    clearUser();
    clearMessages();
  };
  return (
    <Link href="/logout" onClick={onClick}>
      <LogoutIcon className={className} onClick={onClick} />
    </Link>
  );
};

export default ClearSession;
