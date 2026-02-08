"use client";

import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function signIn(email: string, password: string) {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = (await response.json()) as { error?: string; ok?: boolean; role?: string };

  if (!response.ok) {
    return { success: false, error: data.error || "Login failed" };
  }

  if (data.role !== "ADMIN") {
    return { success: false, error: "Admin access required" };
  }

  return { success: true };
}

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    const normalizedEmail = email.trim();
    if (!normalizedEmail || !password.trim()) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    if (!emailPattern.test(normalizedEmail)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const result = await signIn(normalizedEmail, password);

      if (!result.success) {
        setErrorMessage(result.error);
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch {
      setErrorMessage("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-3 text-center">Welcome back</h1>
          <p className="text-gray-600 mb-8 text-center">Please enter your details</p>

          <form onSubmit={handleLogin} className="space-y-6">
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-6 py-3 rounded-full bg-gray-100" required />
            <div className="relative">
              <input type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-6 py-3 rounded-full bg-gray-100" required />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {errorMessage && <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">{errorMessage}</div>}

            <button type="submit" disabled={loading} className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-300 text-black font-bold py-3 rounded-full">
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-center text-gray-700 mt-8">
            Are you new?{" "}
            <Link href="/signup" className="font-semibold text-gray-900 hover:text-yellow-400">
              Create an Account
            </Link>
          </p>
        </div>

        <div className="hidden lg:block">
          <div className="relative rounded-3xl overflow-hidden shadow-lg h-full min-h-96">
            <Image src="/assets/imgs/login/login.png" alt="Tropical island" className="w-full h-full object-cover" width={800} height={600} />
          </div>
        </div>
      </div>
    </div>
  );
}
