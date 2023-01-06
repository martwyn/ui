import Link from "next/link";
import Logo from "../../components/logo";
import Tooltip from "../../components/tooltip";
import ChatIcon from "../../svgs/chat.svg";
import SettingsIcon from "../../svgs/cog.svg";
import ClearSession from "../clearSession";

const MainNavigation = () => {
  return (
    <nav className="flex flex-col items-center flex-shrink-0 w-16 mr-4">
      <Logo />
      <div className="flex flex-col flex-grow text-icon">
        <div>
          <div className="my-4">
            <Tooltip text="Chat" direction="right">
              <Link href="/">
                <ChatIcon className="w-8 h-8 hover:text-icon-hover" />
              </Link>
            </Tooltip>
          </div>
          <div className="mt-4">
            <Tooltip text="Settings" direction="right">
              <Link href="/settings">
                <SettingsIcon className="w-8 h-8 hover:text-icon-hover" />
              </Link>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <Tooltip text="Clear session" direction="right">
          <ClearSession className="w-8 h-8 text-icon hover:text-icon-hover" />
        </Tooltip>
      </div>
    </nav>
  );
};

export default MainNavigation;
