import { ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
}

const LocalStorageWrapper = ({ children }: Props) => {
  const [doRender, setDoRender] = useState(false);
  useEffect(() => {
    setDoRender(true);
  }, []);

  if (!doRender) {
    return null;
  }

  return <>{children}</>;
};

export default LocalStorageWrapper;
