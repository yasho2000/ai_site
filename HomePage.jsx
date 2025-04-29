import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center text-cyan-300 mb-8">
        AI Website Generator
      </h1>

      <div className="max-w-xl mx-auto shadow-xl bg-zinc-800 border border-zinc-700 rounded-xl p-6 space-y-4">
        <input
          placeholder="نام سایت را وارد کنید..."
          className="w-full p-2 bg-zinc-700 text-white rounded"
        />
        <textarea
          placeholder="توضیح بده سایتت قراره چه کاری بکنه..."
          className="w-full p-2 bg-zinc-700 text-white rounded"
          rows={4}
        />
        <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white p-2 rounded">
          ساخت سایت با هوش مصنوعی
        </button>
      </div>
    </div>
  );
}
