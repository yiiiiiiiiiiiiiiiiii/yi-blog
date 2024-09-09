import Link from "next/link";
import ModeToggle from "./ModeToggle";
import DesktopNavigation from "./DesktopNavigation";
import GithubLink from "./GithubLink";
import IconSearch from "./Search";
import MobileNavigation from "./MobileNavigation";

export default function Header() {
  return (
    <div className="container mx-auto">
      <div className="hidden lg:block w-full py-5">
        <div className="grid grid-cols-12">
          <div className="col-span-2 flex jusitfy-start items-center">
            <Link href={"/"}>
              <div className="text-4xl font-black">Y18i</div>
            </Link>
          </div>
          <div className="col-span-8">
            <DesktopNavigation />
          </div>
          <div className="col-span-2">
            <div className="flex flex-row justify-end items-center space-x-6">
              <IconSearch />
              <ModeToggle />
              <GithubLink />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden w-full flex flex-row justify-between items-center py-3 px-3">
        <MobileNavigation />
        <div className="flex flex-row justify-end items-center space-x-6">
          <IconSearch />
          <ModeToggle />
          <GithubLink />
        </div>
      </div>
    </div>
  );
}
