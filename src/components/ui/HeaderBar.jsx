import { Menu, Bell } from "lucide-react";

export default function HeaderBar({ onToggleSidebar, onToggleCollapse }) {
  const handleClick = () => {
    if (window.innerWidth < 1024) {
      onToggleSidebar();
    } else {
      onToggleCollapse();
    }
  };
  return (
    <header className="header shadow-sm dark:shadow-2xl top-0 z-50  bg-white border-b border-gray-200 sm:h-18 h-13 shrink-0 gap-2 md:px-6 px-4">
      <div className="header-wrapper" style={{ height: "64px" }}>
        {/* Left: hamburger (tetap di kiri) */}
        <div className="flex items-center">
          <button
            onClick={handleClick}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Right: notif + profile */}
        <div className="flex items-center space-x-4">
          <button className="relative p-2 rounded-full hover:bg-gray-100">
            <Bell className="w-6 h-6 text-gray-700" />
            <span className="absolute top-1.5 right-1.5 bg-red-500 text-white text-[10px] rounded-full w-3 h-3 flex items-center justify-center">
              1
            </span>
          </button>
          <div className="cursor-pointer flex items-center">
            <span className="avatar avatar-circle">
              <img
                src="https://i.pravatar.cc/40"
                alt="profile"
                className="avatar-img avatar-circle"
              />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
