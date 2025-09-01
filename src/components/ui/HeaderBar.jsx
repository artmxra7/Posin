import { Menu, Bell } from "lucide-react";

export default function HeaderBar({
  onToggleSidebar,
  onToggleCollapse,
  isSidebarOpen,
  isCollapsed,
}) {
  const handleClick = () => {
    if (window.innerWidth < 1024) {
      onToggleSidebar();
    } else {
      onToggleCollapse();
    }
  };
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-white border-b border-gray-200 px-4 h-14">
      {/* Left: hamburger (tetap di kiri) */}
      <div className="flex items-center">
        <button
          onClick={handleClick}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <Menu className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Right: notif + profile */}
      <div className="flex items-center space-x-4">
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <Bell className="w-5 h-5 text-gray-700" />
          <span className="absolute top-1.5 right-1.5 bg-red-500 text-white text-[10px] rounded-full w-3 h-3 flex items-center justify-center">
            1
          </span>
        </button>
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-5 h-5 rounded-full border cursor-pointer"
        />
      </div>
    </header>
  );
}
