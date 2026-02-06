import Link from "next/link";

export default function AdminPage() {
  return (
    <div>
      <h1 className="mb-2 text-3xl font-bold">Admin Dashboard</h1>
      <p className="mb-8 text-white/80">Manage tours and homepage featured content.</p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Link href="/admin/tours" className="rounded-2xl border border-white/30 bg-white/10 p-6 backdrop-blur-md transition hover:bg-white/20">
          <h2 className="mb-2 text-xl font-semibold">Tours</h2>
          <p className="text-sm text-white/80">Create, edit, delete, and feature tours for homepage display.</p>
        </Link>
      </div>
    </div>
  );
}
