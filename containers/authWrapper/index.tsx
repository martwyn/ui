import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import useUser from "../../hooks/useUser";

interface Props {
  children: ReactNode;
}
const AuthWrapper = ({ children }: Props) => {
  const router = useRouter();
  const { user } = useUser();
  useEffect(() => {
    if (!user.id) {
      router.push("/auth");
    }
  }, [user.id]);

  return user.id ? <>{children}</> : null;
};

export default AuthWrapper;
