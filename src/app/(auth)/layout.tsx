"use client";
import Link from "next/link";
import React, { useState } from "react";
import "./style.css";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState('');
  const pathname = usePathname();

  return (
    <div className="m-8">
      <input value={input} onChange={(e)=> setInput(e.target.value)} className="border-2 border-black" type="text"/>
      {navLinks.map((link, i) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <h2
            key={i}
            className={`${
              isActive ? "text-yellow-400 underline" : "text-black"
            } `}
          >
            <Link className="text-lg text-bold mt-10" href={`${link.href}`}>{link.name}</Link>
          </h2>
        );
      })}
      <div>{children}</div>
    </div>
  );
}
