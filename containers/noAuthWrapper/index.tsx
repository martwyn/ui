import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import useUser from "../../hooks/useUser";

interface Props {
  children: ReactNode;
}
const NoAuthWrapper = ({ children }: Props) => {
  const router = useRouter();
  const { user } = useUser();
  useEffect(() => {
    if (user.id) {
      router.push("/");
    }
  }, [user.id]);

  return !user.id ? <>{children}</> : null;
};

export default NoAuthWrapper;
