import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex bg-white bg-gradient-to-br from-roxo/30">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}