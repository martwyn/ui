import Link from "next/link";
import BonfireLogo from "../../svgs/bonfire.svg";

const Logo = () => {
  return (
    <Link href="/" className="flex justify-center w-16 h-16">
      <BonfireLogo className="w-10 h-10 text-white" />
    </Link>
  );
};

export default Logo;
