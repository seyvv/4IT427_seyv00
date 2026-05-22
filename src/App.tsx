/* Stylingová metoda: CSS Modules */
import styles from "./App.module.css";

/* Stránky */
import { WatchlistPage } from "./pages/WatchlistPage";
import { AddFilmPage } from "./pages/AddFilmPage";
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { useState } from "react";

export default function App() {

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode((prev) => !prev);
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <main className={styles.app}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <NavLink to="/" className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }>
            Můj Watchlist
          </NavLink>

          <NavLink
            to="/form"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Přidat film
          </NavLink>
        </nav>

        <button
          className={styles.secondaryButton}
          onClick={toggleDarkMode}
        >
          <span className={styles.themeIcon} aria-hidden="true">
            {isDarkMode ? "☀️" : "🌙"}
          </span>

          {isDarkMode ? "Světlý režim" : "Tmavý režim"}
        </button>
      </div>

      <Routes>
        <Route path="/" element={<WatchlistPage />} />
        <Route path="/form" element={<AddFilmPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main >
  );
}
