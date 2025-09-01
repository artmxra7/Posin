import React, { useState } from "react";
import HeaderBar from "../ui/HeaderBar";
import SideBar from "../ui/SideBar";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SideBar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setSidebarOpen((prev) => !prev)}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      {/* Konten utama */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 
          ${isSidebarOpen ? (collapsed ? "ml-20" : "ml-64") : "ml-0"}`}
      >
        <HeaderBar
          onToggleSidebar={() => setSidebarOpen((prev) => !prev)} // mobile
          onToggleCollapse={() => setCollapsed((prev) => !prev)} // desktop
          isSidebarOpen={isSidebarOpen}
          isCollapsed={collapsed}
        />
        <div className="h-full flex flex-auto flex-col">
          <div className="h-full flex flex-auto flex-col justify-between">
            <main className="h-full">
              <div className="page-container relative h-full flex flex-auto flex-col px-4 sm:px-6 py-4 sm:py-6 md:px-8 container mx-auto">
                <Outlet />
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
