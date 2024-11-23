import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CartContextProvider from "./store/cart/CartContextProvider.tsx";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </StrictMode>
);
