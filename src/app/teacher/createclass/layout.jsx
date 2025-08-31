"use client";

import Sidebar from "./sidebar";
import Createpopup from "./createpopup";
import { BarProvider } from "./context/Sidebarcontext";
import { useBar } from "./context/Sidebarcontext";

export default function CreateClassLayout({ children }) {
  return (
    <BarProvider>
      <LayoutContent>{children}</LayoutContent>
    </BarProvider>
  );
}

function LayoutContent({ children }) {
  const { status } = useBar();

  return (
    <div
      style={{ backgroundColor: "#E8E8E8", width: "100vw" }}
      className="flex justify-center items-center gap-[5%] pb-[5%]"
    >
      <Sidebar />
      {status && <Createpopup />}
      {children}
    </div>
  );
}
