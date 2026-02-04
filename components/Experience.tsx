"use client";

import Section from "./Section";
import { experience } from "@/lib/data";

export default function Experience() {
    return (
        <Section id="experience">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-12 border-b border-border/50 pb-4">Professional Experience</h2>

            <div className="space-y-16">
                {experience.map((job, index) => (
                    <div key={index} className="group grid md:grid-cols-4 gap-6 md:gap-10 relative">
                        {/* Timeline Line (Desktop) */}
                        <div className="hidden md:block absolute left-[25%] top-0 bottom-0 w-px bg-border group-last:bottom-auto group-last:h-full -translate-x-1/2" />

                        <div className="md:col-span-1 relative">
                            <span className="inline-block py-1 px-3 rounded-full bg-secondary/30 text-secondary-foreground text-sm font-semibold mb-2 md:mb-0 border border-secondary/50">
                                {job.period}
                            </span>
                            {/* Timeline Dot */}
                            <div className="hidden md:block absolute right-0 top-2 w-4 h-4 bg-background border-4 border-primary rounded-full translate-x-1/2 z-10" />
                        </div>

                        <div className="md:col-span-3 bg-card border border-border/50 p-8 rounded-xl shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 relative">
                            {/* Mobile visual connector */}
                            <div className="md:hidden absolute left-8 -top-8 w-0.5 h-8 bg-border" />

                            <h3 className="text-2xl font-serif font-bold text-foreground">{job.company}</h3>
                            <p className="text-lg text-primary font-medium mb-6">{job.role}</p>

                            {job.description && (
                                <p className="mb-6 text-muted-foreground leading-relaxed">{job.description}</p>
                            )}

                            {job.achievements.length > 0 && (
                                <ul className="space-y-3">
                                    {job.achievements.map((achievement, i) => (
                                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                            <span className="leading-relaxed">{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
