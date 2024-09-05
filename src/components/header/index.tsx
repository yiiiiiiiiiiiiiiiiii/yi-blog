import Link from "next/link";
import ModeToggle from "./ModeToggle";
import DesktopNavigation from "./DesktopNavigation";

export default function Header() {
  return (
    <div className="container mx-auto">
      <div className=" flex w-full justify-between items-center py-10 space-x-20">
        <Link href={"/"}>
          <div className="text-4xl font-black">Yi</div>
        </Link>
        <DesktopNavigation />
        <ModeToggle />
      </div>
    </div>
  );
}
