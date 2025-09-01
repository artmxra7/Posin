import React from 'react';

const ButtonMenu = ({ props }) => {
  return (
    <button className="button bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700 ring-primary dark:ring-white hover:border-primary dark:hover:border-white hover:ring-1 hover:text-primary dark:hover:text-white dark:hover:bg-transparent text-gray-600 dark:text-gray-100 h-10 rounded-xl px-3 py-2 text-sm button-press-feedback">View Orders</button>
  );
};

export default ButtonMenu;