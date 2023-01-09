import cuid from "cuid";
import Button from "../components/button";
import Card from "../components/card";
import Input from "../components/input";
import Label from "../components/label";
import LocalStorageWrapper from "../containers/localStorageWrapper";
import NoAuthWrapper from "../containers/noAuthWrapper";
import OpenAIApiKey from "../containers/openAIApiKey";
import ThemePicker from "../containers/themePicker";
import UserName from "../containers/userName";
import useUser from "../hooks/useUser";

const Auth = () => {
  const { updateUser } = useUser();
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    updateUser(cuid(), formData.get("name") as string);
  };

  return (
    <NoAuthWrapper>
      <main className="flex items-center justify-center w-full h-screen">
        <Card title="Let's talk" showLogo>
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <UserName />
            </div>
            <div className="mb-4">
              <OpenAIApiKey />
            </div>
            <div className="mb-4">
              <ThemePicker />
            </div>
            <Button className="w-full mt-4 text-center">Go!</Button>
          </form>
        </Card>
      </main>
    </NoAuthWrapper>
  );
};

export default Auth;
