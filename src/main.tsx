import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Toaster } from "@/components/ui/toaster";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactQueryProvider } from "./providers/react-query.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQueryProvider>
      <App />
      <Toaster />
      <ReactQueryDevtools initialIsOpen={false} />
    </ReactQueryProvider>
  </StrictMode>
);
