import Header from "../components/header";
import MainNavigation from "../containers/mainNavigation";
import AuthWrapper from "../containers/authWrapper";
import Card from "../components/card";
import ThemePicker from "../containers/themePicker";
import UserName from "../containers/userName";
import CustomPersonality from "../containers/customPersonality";
import OpenAIApiKey from "../containers/openAIApiKey";

const Settings = () => {
  return (
    <AuthWrapper>
      <div className="flex flex-col h-screen pt-6 pb-8">
        <main className="flex flex-grow overflow-x-hidden overflow-y-auto content">
          <MainNavigation />
          <div className="flex flex-col flex-grow overflow-y-hidden">
            <Header />
            <Card
              title="Settings"
              className="flex flex-col flex-grow overflow-y-scroll"
            >
              <div className="mb-4">
                <UserName />
              </div>
              <div className="max-w-xs mb-4">
                <ThemePicker />
              </div>
              <div className="mb-4">
                <OpenAIApiKey />
              </div>
              <div className="mb-4">
                <CustomPersonality />
              </div>
            </Card>
          </div>
        </main>
      </div>
    </AuthWrapper>
  );
};

export default Settings;
