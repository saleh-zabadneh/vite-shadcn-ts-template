import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./providers/theme-provider";
import { Suspense } from "react";
import { routes } from "./router/routes";
import { ErrorBoundary } from "./components/error-boundary";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          <Suspense fallback={<div>loading</div>}>
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Routes>
          </Suspense>
        </ThemeProvider>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
