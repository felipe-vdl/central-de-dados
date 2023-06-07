import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen font-">
      <Navbar />
      <main className="flex-1 flex flex-col bg-white bg-gradient-to-br">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}