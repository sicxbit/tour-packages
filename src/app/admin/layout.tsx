import AdminShellNav from "@/components/admin/AdminShellNav";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[url('/assets/imgs/banner/beach.jpg')] bg-cover bg-center">
      <div className="min-h-screen bg-black/40 p-4 md:p-8">
        <div className="mx-auto max-w-6xl space-y-6">
          <AdminShellNav />
          <main className="rounded-3xl border border-white/30 bg-white/15 p-6 md:p-8 text-white shadow-xl backdrop-blur-xl">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
