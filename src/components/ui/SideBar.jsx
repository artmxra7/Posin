import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ChevronDown,
} from "lucide-react";
import logo from "../../assets/images/logo.png";
import { menuItems } from "../../configs/menus";

const SideBar = ({ isOpen, collapsed }) => {
  const [openMenu, setOpenMenu] = useState({});
  const baseLinkClass =
    "flex items-center gap-3 px-4 py-2 rounded-lg font-semibold transition-colors duration-150";
  const activeClass =
    "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-gray-100";
  const inactiveClass =
    "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700";

  const toggleSubMenu = (label) => {
    setOpenMenu((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };
  return (
    <>
     <a class="side-nav-header flex flex-col justify-center" href="/dashboards/ecommerce" data-discover="true" >
      <div class="logo px-6" 
      >
        <img class="max-h-10" alt="Posin Logo" src={logo}/>
        </div>
        </a>
    <div className="side-nav-content">

        {/* Sidebar */}
        <div
          className={`bg-white dark:bg-gray-800
        ${collapsed ? "w-23" : "w-64"}
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        simplebar-wrapper left-0 z-40 flex flex-col transition-all duration-200 overflow-hidden`}
        >


          {/* Menu scrollable */}
          <div className="flex-1 overflow-y-auto mt-2">
            <nav className="flex flex-col gap-1 px-2">
              {menuItems.map((item, idx) => {
                const Icon = item.icon; // <-- Ini penting
                if (item.collapse) {
                  return (
                    <div key={idx}>
                      <div
                        className="flex justify-between items-center px-4 py-2 rounded-lg font-semibold text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-150"
                        onClick={() => toggleSubMenu(item.label)}
                      >
                        <div className="flex items-center gap-3">
                          {Icon && <Icon className="w-4 h-4" />}{" "}
                          {/* ✅ render JSX */}
                          {!collapsed && <span>{item.label}</span>}
                        </div>
                        {!collapsed && (
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${openMenu[item.label] ? "rotate-180" : ""
                              }`}
                          />
                        )}
                      </div>
                      {openMenu[item.label] && !collapsed && (
                        <div
                          className={`flex flex-col pl-12 gap-1 transition-all duration-300 overflow-hidden
    ${openMenu[item.label] ? "max-h-40" : "max-h-0"}
  `}
                        >
                          {item.children.map((child, i) => {
                            const ChildIcon = child.icon;
                            return (
                              <NavLink
                                key={i}
                                to={child.to}
                                title={child.label}
                                className={({ isActive }) =>
                                  `${baseLinkClass} ${isActive ? activeClass : inactiveClass
                                  }`
                                }
                              >
                                {ChildIcon && <ChildIcon className="w-4 h-4" />}
                                {!collapsed && <span>{child.label}</span>}
                              </NavLink>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                } else {
                  return (
                    <NavLink
                      key={idx}
                      to={item.to}
                      title={item.label}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-2 rounded-lg font-semibold text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 transition-colors duration-150
           ${isActive
                          ? "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-gray-100"
                          : ""
                        }`
                      }
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                      {!collapsed && <span>{item.label}</span>}
                    </NavLink>
                  );
                }
              })}

              {/* Divider */}
              <div className="border-b border-gray-200 dark:border-gray-700 my-2"></div>

              {/* Notification example */}
              {!collapsed && (
                <div className="bg-white dark:bg-gray-700 border border-gray-100 dark:border-transparent rounded-xl shadow-md p-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-800 dark:text-white">
                      Notifikasi
                    </span>
                    <button className="text-gray-400 dark:text-gray-200">
                      &times;
                    </button>
                  </div>
                  <p className="text-gray-600 dark:text-gray-200 mt-2">
                    Ini adalah pesan notifikasi.
                  </p>
                </div>
              )}
            </nav>
          </div>
        </div>
    </div>

    </>
  );
};

export default SideBar;
