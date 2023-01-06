import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

interface User {
  id: null | string;
  name: null | string;
}

const userAtom = atomWithStorage<User>("user", {
  id: null,
  name: null,
});

const useUser = () => {
  const [user, setUser] = useAtom(userAtom);
  const updateUser = (id: string, name: string) => {
    setUser({
      ...user,
      id,
      name,
    });
  };
  const clearUser = () => {
    setUser({
      id: null,
      name: null,
    });
  };

  return { user, clearUser, updateUser } as const;
};

export default useUser;
