import React, { createContext, useState, useContext } from "react";
const SidebarContext = createContext();
export const SidebarProvider = ({ children }) => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => setSidebarVisible((prev) => !prev);
  const hideSidebar = () => setSidebarVisible(false);
  const showSidebar = () => setSidebarVisible(true);

  return (
    <SidebarContext.Provider
      value={{
        isSidebarVisible,
        toggleSidebar,
        hideSidebar,
        showSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
export const useSidebar = () => useContext(SidebarContext);
