import ChatInput from "../containers/chatInput";
import MessageList from "../containers/messageList";
import Header from "../components/header";
// import FeelingSlider from "../containers/FeelingSlider";
import BottomSticker from "../containers/bottomSticker";
import MainNavigation from "../containers/mainNavigation";
import ClearMessage from "../containers/clearMessages";
import AuthWrapper from "../containers/authWrapper";

const Home = () => {
  return (
    <AuthWrapper>
      <div className="flex flex-col h-screen pt-6 pb-8">
        <main className="flex flex-grow overflow-x-hidden overflow-y-auto content">
          <MainNavigation />
          <div className="flex flex-col flex-grow overflow-y-hidden">
            <Header />
            <div className="flex flex-col flex-grow overflow-y-scroll bg-chat-section-bg rounded-2xl">
              <BottomSticker>
                <MessageList />
              </BottomSticker>
              <div className="flex items-center p-4">
                <ChatInput className="flex-grow mr-4" />
                <ClearMessage />
              </div>
            </div>
          </div>
        </main>
      </div>
    </AuthWrapper>
  );
};

export default Home;
