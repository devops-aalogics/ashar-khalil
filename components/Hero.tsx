"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Copy } from "lucide-react";
import { useState } from "react";

export default function Hero() {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText(personalInfo.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="min-h-screen flex flex-col justify-center pt-20 pb-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
            >
                <span className="text-secondary font-medium tracking-wide">
                    {personalInfo.title}
                </span>
                <h1 className="mt-4 text-5xl md:text-7xl font-serif font-bold leading-tight">
                    hello, i&apos;m <span className="text-foreground">{personalInfo.name}</span>.
                </h1>
                <p className="mt-6 text-xl text-muted-foreground max-w-2xl leading-relaxed">
                    {personalInfo.summary}
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                    <a
                        href="#contact"
                        className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors"
                    >
                        Get in Touch
                    </a>
                    <button
                        onClick={copyEmail}
                        className="group px-8 py-3 border border-input rounded-full font-medium hover:bg-accent hover:text-accent-foreground transition-colors flex items-center gap-2"
                    >
                        <Copy size={18} className="text-muted-foreground group-hover:text-foreground" />
                        {copied ? "Email Copied" : "Copy Email"}
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
