"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackButton({
  children = "Back to Countries",
}) {
  return (
    <Link
      href="/countries"
      className="
        inline-flex
        items-center
        justify-center
        gap-2
        px-4
        sm:px-5
        py-3
        rounded-2xl
        bg-white
        dark:bg-zinc-900
        border
        border-zinc-200
        dark:border-zinc-800
        text-zinc-800
        dark:text-zinc-100
        shadow-sm
        hover:shadow-md
        hover:-translate-y-0.5
        transition-all
        text-sm
        sm:text-base
        w-full
        sm:w-auto
      "
    >
      <ArrowLeft size={18} />

      <span className="font-medium">
        {children}
      </span>
    </Link>
  );
}
