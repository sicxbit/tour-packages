"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

interface TourFormValues {
  title: string;
  location: string;
  duration: string;
  price: number;
  description: string;
  imageUrl?: string;
  isFeatured: boolean;
  featuredOrder?: number;
}

interface TourFormProps {
  mode: "create" | "edit";
  initialValues?: TourFormValues;
  tourId?: string;
}

export default function TourForm({ mode, initialValues, tourId }: TourFormProps) {
  const router = useRouter();
  const [form, setForm] = useState<TourFormValues>(
    initialValues ?? {
      title: "",
      location: "",
      duration: "",
      price: 0,
      description: "",
      imageUrl: "",
      isFeatured: false,
      featuredOrder: undefined,
    },
  );
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const endpoint = mode === "create" ? "/api/admin/tours" : `/api/admin/tours/${tourId}`;
    const method = mode === "create" ? "POST" : "PATCH";

    const response = await fetch(endpoint, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      const data = (await response.json().catch(() => ({}))) as { error?: string };
      setError(data.error || "Failed to save tour");
      setLoading(false);
      return;
    }

    router.push("/admin/tours");
    router.refresh();
  };

  const handleDelete = async () => {
    if (!tourId) return;

    const confirmed = window.confirm("Are you sure you want to delete this tour?");
    if (!confirmed) return;

    setLoading(true);
    const response = await fetch(`/api/admin/tours/${tourId}`, { method: "DELETE" });

    if (!response.ok) {
      setError("Failed to delete tour");
      setLoading(false);
      return;
    }

    router.push("/admin/tours");
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-white/30 bg-white/10 p-6 shadow-sm backdrop-blur-md">
      <input className="w-full rounded-lg border border-white/40 bg-white/20 p-3 placeholder:text-white/70" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
      <input className="w-full rounded-lg border border-white/40 bg-white/20 p-3 placeholder:text-white/70" placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} required />
      <input className="w-full rounded-lg border border-white/40 bg-white/20 p-3 placeholder:text-white/70" placeholder="Duration (e.g. 5 Days)" value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} required />
      <input className="w-full rounded-lg border border-white/40 bg-white/20 p-3 placeholder:text-white/70" type="number" min="0" step="0.01" placeholder="Price" value={form.price} onChange={(e) => setForm({ ...form, price: Number(e.target.value) })} required />
      <input className="w-full rounded-lg border border-white/40 bg-white/20 p-3 placeholder:text-white/70" placeholder="Image URL (optional)" value={form.imageUrl || ""} onChange={(e) => setForm({ ...form, imageUrl: e.target.value })} />
      <textarea className="min-h-32 w-full rounded-lg border border-white/40 bg-white/20 p-3 placeholder:text-white/70" placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required />

      <label className="flex items-center gap-3 rounded-lg border border-white/30 bg-white/10 p-3">
        <input type="checkbox" checked={form.isFeatured} onChange={(e) => setForm({ ...form, isFeatured: e.target.checked })} />
        <span>Show in homepage featured section</span>
      </label>

      <input
        className="w-full rounded-lg border border-white/40 bg-white/20 p-3 placeholder:text-white/70 disabled:opacity-50"
        type="number"
        min="1"
        step="1"
        placeholder="Featured order (optional)"
        value={form.featuredOrder ?? ""}
        disabled={!form.isFeatured}
        onChange={(e) =>
          setForm({
            ...form,
            featuredOrder: e.target.value === "" ? undefined : Number(e.target.value),
          })
        }
      />

      {error && <p className="text-sm text-red-200">{error}</p>}

      <div className="flex gap-3">
        <button type="submit" disabled={loading} className="rounded-full border border-white/40 bg-white/25 px-5 py-2 font-semibold transition hover:bg-white/35 disabled:opacity-60">
          {loading ? "Saving..." : mode === "create" ? "Create Tour" : "Update Tour"}
        </button>

        {mode === "edit" && (
          <button type="button" onClick={handleDelete} disabled={loading} className="rounded-full bg-red-500 px-5 py-2 text-white disabled:opacity-70">
            Delete Tour
          </button>
        )}
      </div>
    </form>
  );
}
