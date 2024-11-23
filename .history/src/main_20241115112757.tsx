import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CartContextProvider from "./store/cart/CartContextProvider.tsx";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Supports weights 100-900
import "@fontsource-variable/kumbh-sans/400.css";
import "@fontsource-variable/kumbh-sans/700.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/collections", element: <App /> },
  { path: "/men", element: <App /> },
  { path: "/women", element: <App /> },
  { path: "/about", element: <App /> },
  { path: "/contact", element: <App /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </StrictMode>
);
