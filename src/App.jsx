import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar1 from "./components/navbar/Navbar";
import RightBar from "./components/rightbar/Rightbar";
import Sidebar1 from "./components/sidebar/Sidebar1";
import Dashboard1 from "./screens/Dashboard1";
import Notifications from "./components/rightbar/Notifications";

import { CssBaseline, ThemeProvider } from "@mui/material";
import ThemeModeContext from "./context/ThemeModeContext";
import { useThemeMode } from "./hooks/useThemeMode";

function App() {
  const [theme, colorMode] = useThemeMode();

  return (
    <ThemeModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div
          className="app"
          style={{
            backgroundColor: theme.palette.background.default,
          }}
        >
          <Sidebar1 />
          <main className="content">
            <Navbar1 />
            <Routes>
              <Route path="/" element={<Dashboard1 />} />
            </Routes>
          </main>
          <RightBar />
        </div>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export default App;
