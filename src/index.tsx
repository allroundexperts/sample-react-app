import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CircularProgress, ThemeProvider } from "@mui/material";
import globalTheme from "./theme/global";

const HomePage = React.lazy(() => import("./pages/Home"));
const MovieDetailPage = React.lazy(() => import("./pages/MovieDetail"));

const App = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <ThemeProvider theme={globalTheme}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail/:slug" element={<MovieDetailPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Suspense>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
