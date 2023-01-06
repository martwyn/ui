import cuid from "cuid";
import Button from "../components/button";
import Card from "../components/card";
import Input from "../components/input";
import Label from "../components/label";
import LocalStorageWrapper from "../containers/localStorageWrapper";
import NoAuthWrapper from "../containers/noAuthWrapper";
import ThemePicker from "../containers/themePicker";
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
            <Label>Your name</Label>
            <Input type="text" name="name" required />
            <ThemePicker />
            <Button className="w-full mt-4 text-center">Go!</Button>
          </form>
        </Card>
      </main>
    </NoAuthWrapper>
  );
};

export default Auth;
