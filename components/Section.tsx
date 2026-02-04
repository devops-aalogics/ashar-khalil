"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
    id?: string;
    className?: string;
    children: ReactNode;
    delay?: number;
}

export default function Section({ id, className, children, delay = 0 }: SectionProps) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: delay }}
            className={cn("py-16 md:py-24", className)}
        >
            {children}
        </motion.section>
    );
}
