import Link from "next/link";
import ModeToggle from "./ModeToggle";
import DesktopNavigation from "./DesktopNavigation";
import GithubLink from "./GithubLink";
import IconSearch from "./Search";

export default function Header() {
  return (
    <div className="container mx-auto">
      <div className="w-full grid grid-cols-12 py-10">
        <div className="col-span-2">
          <Link href={"/"}>
            <div className="text-4xl font-black">Yi</div>
          </Link>
        </div>
        <div className="col-span-8">
          <DesktopNavigation />
        </div>
        <div className="col-span-2 flex flex-row justify-end items-center space-x-6">
          <IconSearch />
          <ModeToggle />
          <GithubLink />
        </div>
      </div>
    </div>
  );
}
