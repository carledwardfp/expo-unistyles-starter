import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as RNThemeProvider,
} from "@react-navigation/native";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useColorScheme } from "react-native";

const STORAGE_KEY = "user-theme-mode";

type ThemeMode = "light" | "dark" | "system";

interface ThemeContextType {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  resolvedTheme: "light" | "dark";
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const colorScheme = useColorScheme();
  const [mode, setMode] = useState<ThemeMode>("system");

  const resolvedTheme = useMemo(() => {
    if (mode === "system") {
      return colorScheme === "dark" ? "dark" : "light";
    }
    return mode;
  }, [mode, colorScheme]);

  const theme = resolvedTheme === "dark" ? DarkTheme : DefaultTheme;

  // Load saved theme on mount
  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((saved) => {
      if (saved === "light" || saved === "dark" || saved === "system") {
        setMode(saved);
      }
    });
  }, []);

  const handleMode = (newMode: ThemeMode) => {
    setMode(newMode);
    AsyncStorage.setItem(STORAGE_KEY, newMode);
  };

  return (
    <RNThemeProvider value={theme}>
      <ThemeContext.Provider
        value={{ mode, setMode: handleMode, resolvedTheme }}
      >
        {children}
      </ThemeContext.Provider>
    </RNThemeProvider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
