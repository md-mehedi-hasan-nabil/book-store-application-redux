import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="py-12 2xl:px-6">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
