import React, { useEffect, useState } from "react";

function ThemeToggleButton() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="text-xl p-2 rounded bg-gray-200 dark:bg-gray-800"
    >
      {darkMode ? (
        <i className="fas fa-sun text-yellow-400"></i>
      ) : (
        <i className="fas fa-moon text-gray-800"></i>
      )}
    </button>
  );
}

export default ThemeToggleButton;