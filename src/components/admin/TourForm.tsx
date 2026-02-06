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
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-2xl shadow-sm border">
      <input className="w-full border rounded-lg p-3" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
      <input className="w-full border rounded-lg p-3" placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} required />
      <input className="w-full border rounded-lg p-3" placeholder="Duration (e.g. 5 Days)" value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} required />
      <input className="w-full border rounded-lg p-3" type="number" min="0" step="0.01" placeholder="Price" value={form.price} onChange={(e) => setForm({ ...form, price: Number(e.target.value) })} required />
      <input className="w-full border rounded-lg p-3" placeholder="Image URL (optional)" value={form.imageUrl || ""} onChange={(e) => setForm({ ...form, imageUrl: e.target.value })} />
      <textarea className="w-full border rounded-lg p-3 min-h-32" placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required />

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex gap-3">
        <button type="submit" disabled={loading} className="bg-yellow-400 hover:bg-yellow-500 px-5 py-2 rounded-full font-semibold disabled:bg-gray-300">
          {loading ? "Saving..." : mode === "create" ? "Create Tour" : "Update Tour"}
        </button>

        {mode === "edit" && (
          <button type="button" onClick={handleDelete} disabled={loading} className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full disabled:bg-red-300">
            Delete Tour
          </button>
        )}
      </div>
    </form>
  );
}
