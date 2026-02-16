import { Sidebar } from "@/components/common/Sidebar/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />
      <main className="flex-1 p-6 lg:ml-64">{children}</main>
    </>
  );
}
