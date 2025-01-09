import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Navigation from "./components/Navigation";
import { Provider } from "react-redux";
import store from "./redux/store";

const queryClient = new QueryClient(); // Create QueryClient instance
const theme = createTheme();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline />
          <Navigation />
        </Provider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
