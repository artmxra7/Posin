import { useState } from "react";
import {SideBar, HeaderBar} from "@components/ui";
import { Outlet } from "react-router-dom";
import { useSidebar } from "./context/SidebarContext";

const Layout = () => {
  const { isSidebarVisible, hideSidebar, showSidebar } = useSidebar();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="app-layout-collapsible-side flex flex-auto flex-col">
      <div className="flex flex-auto min-w-0">
        <div className="flex flex-col flex-auto min-h-screen min-w-0 relative w-full">
          {/* Sidebar */}
          {isSidebarVisible && (
            <SideBar
              isOpen={true} // Menjaga sidebar tetap terbuka
              toggleSidebar={() => showSidebar()} // Untuk menampilkan sidebar
              collapsed={collapsed}
              setCollapsed={setCollapsed}
            />
          )}

          {/* Konten utama */}
          <div
            className={`flex-1 flex flex-col transition-all duration-300 
            ${isSidebarVisible ? (collapsed ? "ml-20" : "ml-64") : "ml-0"}`}
          >
            <HeaderBar
              onToggleSidebar={() => hideSidebar()} // Untuk tampilan mobile
              onToggleCollapse={() => setCollapsed((prev) => !prev)} // Untuk desktop
              isSidebarOpen={isSidebarVisible}
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
      </div>
    </div>
  );
};

export default Layout;
