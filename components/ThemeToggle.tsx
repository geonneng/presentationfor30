'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // 초기 테마 설정
    const root = document.documentElement;
    const isDarkMode = root.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove('dark');
      setIsDark(false);
    } else {
      root.classList.add('dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1"
      style={{
        backgroundColor: isDark ? 'var(--highlight-color)' : 'var(--primary-color)',
      }}
      aria-label="테마 전환"
    >
      <span
        className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 flex items-center justify-center text-xs"
        style={{
          transform: isDark ? 'translateX(1.5rem)' : 'translateX(0)',
        }}
      >
        {isDark ? '🌙' : '☀️'}
      </span>
    </button>
  );
}

