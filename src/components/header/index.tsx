import Link from "next/link";
import ModeToggle from "./ModeToggle";
import DesktopNavigation from "./DesktopNavigation";
import GithubLink from "./GithubLink";
import IconSearch from "./Search";
import MobileNavigation from "./MobileNavigation";

export default function Header() {
  return (
    <div className="container mx-auto">
      <div className="w-full py-5">
        <div className="grid grid-cols-12 items-center">
          <div className="hidden lg:flex col-span-2 jusitfy-start items-center">
            <Link href={"/"}>
              <div className="text-4xl text-blue-500 font-black">y18i</div>
            </Link>
          </div>
          <div className="hidden lg:block col-span-7">
            <DesktopNavigation />
          </div>
          <div className="lg:hidden col-span-2">
            <MobileNavigation />
          </div>
          <div className="col-span-10 lg:col-span-3">
            <div className="flex flex-row justify-end items-center space-x-6">
              <IconSearch />
              <ModeToggle />
              <GithubLink />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
