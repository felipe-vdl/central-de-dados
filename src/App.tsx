import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout.tsx";

import HomePage from "./pages/Home.tsx";
import DashboardPage from "./pages/Dashboard.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: ":dashboardName", element: <DashboardPage /> }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
