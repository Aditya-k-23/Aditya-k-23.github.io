import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="\">
      <Image
        className="hidden dark:block"
        src="/logo_dark.svg"
        alt="Logo"
        width={100}
        height={54}
      />
      <Image
        className="block dark:hidden"
        src="/logo_light.svg"
        alt="Logo"
        width={100}
        height={54}
      />
    </Link>
  );
};

export default Logo;
