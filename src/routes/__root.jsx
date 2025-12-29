import { Outlet } from "@tanstack/react-router";
import Navbar from "../components/navbar";
import FilterSidebar from "../components/filter-sidebar";

export default function RootLayout() {
  return (
    <>
      <Navbar />

      <div className="flex gap-6 px-6 py-6">
        <FilterSidebar />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </>
  );
}
