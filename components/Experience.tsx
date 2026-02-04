"use client";

import Section from "./Section";
import { experience } from "@/lib/data";

export default function Experience() {
    return (
        <Section id="experience">
            <h2 className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-12">Employment History</h2>

            <div className="space-y-12">
                {experience.map((job, index) => (
                    <div key={index} className="group grid md:grid-cols-4 gap-6 md:gap-10 border-l-2 border-muted pl-8 md:pl-0 md:border-l-0 relative">
                        <div className="md:col-span-1">
                            <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary-foreground text-sm font-medium mb-2 md:mb-0">
                                {job.period}
                            </span>
                            <div className="hidden md:block absolute left-0 top-0 w-3 h-3 bg-secondary rounded-full -ml-[6.5px] mt-1.5 ring-4 ring-background" />
                            <div className="md:hidden absolute left-0 top-0 w-3 h-3 bg-secondary rounded-full -ml-[33px] mt-1.5 ring-4 ring-background" />
                        </div>

                        <div className="md:col-span-3">
                            <h3 className="text-2xl font-serif font-bold">{job.company}</h3>
                            <p className="text-lg text-muted-foreground mb-4">{job.role}</p>

                            {job.description && (
                                <p className="mb-4">{job.description}</p>
                            )}

                            {job.achievements.length > 0 && (
                                <ul className="space-y-2 list-disc list-outside ml-4 text-muted-foreground">
                                    {job.achievements.map((achievement, i) => (
                                        <li key={i}>{achievement}</li>
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
