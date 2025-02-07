"use client";

import { useState } from "react";

export default function CatalogPage() {
  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-gray-50">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg p-6">
        
        <div className="w-full aspect-[1/1.4] relative">
          <iframe
            src="/catalog.pdf#toolbar=0&navpanes=0&scrollbar=1&statusbar=0&messages=0&view=FitH"
            className="w-full h-full absolute inset-0 rounded-lg border border-gray-200"
            style={{ minHeight: "800px" }}
          />
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>PDF görüntüleyici yükleniyor... Eğer görüntüleyici çalışmazsa, <a href="/catalog.pdf" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">buraya tıklayarak</a> kataloğu doğrudan indirebilirsiniz.</p>
        </div>
      </div>
    </div>
  );
}
