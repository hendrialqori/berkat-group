import React from "react";
import Sidebar from "./sidebar";
import { twMerge } from "tailwind-merge";
import Header from "./header";

interface Props { className?: string; children: React.ReactNode }

export default function AdminLayout({ className, children, }: Props) {

    return (
        <main className="flex font-inter">
            <Sidebar />
            <section className={twMerge(
                "bg-gray-50 px-4 w-full md:w-10/12 max-w-[1800px] mx-auto",
                className
            )}
            >
                <Header />
                {children}
            </section>
        </main>
    )
}

