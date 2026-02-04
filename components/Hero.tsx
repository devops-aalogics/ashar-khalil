"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { ArrowRight, Copy } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Hero() {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText(personalInfo.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-10 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 select-none">
                <Image
                    src="/hero-bg.png"
                    alt="Legal Background"
                    fill
                    className="object-cover opacity-20"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="container mx-auto px-6 relative z-10 max-w-4xl"
            >
                <div>
                    <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm font-semibold tracking-wider uppercase mb-6">
                        {personalInfo.title}
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight tracking-tight text-foreground">
                        Justice, <br />
                        <span className="text-primary">Integrity</span> & <br />
                        Excellence.
                    </h1>
                    <p className="mt-8 text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-light">
                        Hello, I&apos;m <strong className="text-foreground font-semibold">{personalInfo.name}</strong>. {personalInfo.summary}
                    </p>
                </div>

                <div className="mt-12 flex flex-wrap gap-5">
                    <a
                        href="#contact"
                        className="group px-8 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 flex items-center gap-2"
                    >
                        Schedule Consultation
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <button
                        onClick={copyEmail}
                        className="group px-8 py-4 border border-input bg-background/50 backdrop-blur-sm rounded-full font-medium text-lg hover:bg-accent hover:text-accent-foreground transition-all flex items-center gap-2"
                    >
                        <Copy size={20} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                        {copied ? "Email Copied" : "Copy Email Address"}
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
