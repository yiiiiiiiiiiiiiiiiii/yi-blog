import ModeToggle from "./ModeToggle";
import DesktopNavigation from "./DesktopNavigation";

export default function Header() {
  return (
    <div className="flex w-full justify-between items-center py-10 px-80 space-x-20">
      <div className="flex-auto text-4xl font-black">Yi</div>
      <div className="">
        <DesktopNavigation />
      </div>
      <div className="pointer-events-auto">
        <ModeToggle />
      </div>
    </div>
  );
}
