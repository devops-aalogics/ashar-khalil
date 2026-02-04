"use client";

import Section from "./Section";
import { education, internships, courses } from "@/lib/data";

export default function Education() {
    return (
        <Section id="education">
            <div className="grid md:grid-cols-2 gap-16">

                {/* Education Column */}
                <div>
                    <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-8 border-b border-border/50 pb-4">Education</h2>
                    <div className="space-y-10">
                        {education.map((edu, index) => (
                            <div key={index} className="border-l border-border pl-8 relative py-1 group">
                                <div className="absolute left-0 top-2 w-2 h-2 bg-primary rounded-full -translate-x-[5px] ring-4 ring-background transition-all group-hover:scale-125" />
                                <h3 className="text-xl font-serif font-bold text-foreground">{edu.institution}</h3>
                                <p className="text-muted-foreground font-medium mt-1">{edu.degree}</p>
                                <div className="flex flex-wrap gap-2 mt-3 text-sm">
                                    <span className="bg-secondary/20 text-secondary-foreground px-2 py-0.5 rounded border border-secondary/20">{edu.period}</span>
                                    {edu.grade && <span className="text-muted-foreground px-2 py-0.5">{edu.grade}</span>}
                                </div>
                            </div>
                        ))}

                        <div className="pt-8">
                            <h3 className="text-lg font-serif font-bold mb-6 text-foreground">Certifications & Courses</h3>
                            <ul className="space-y-3">
                                {courses.map((course, i) => (
                                    <li key={i} className="text-muted-foreground flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-border mt-2.5 flex-shrink-0" />
                                        <span>{course}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Internships Column */}
                <div>
                    <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-8 border-b border-border/50 pb-4">Previous Internships</h2>
                    <div className="space-y-6">
                        {internships.map((internship, index) => (
                            <div key={index} className="bg-card border border-border p-6 rounded-xl hover:border-primary/50 transition-colors shadow-sm">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-lg font-bold text-foreground">{internship.company}</h3>
                                    {internship.period && <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">{internship.period}</span>}
                                </div>
                                <p className="text-sm font-medium text-primary mb-3">{internship.role}</p>
                                {internship.description && (
                                    <p className="text-sm text-muted-foreground leading-relaxed">{internship.description}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </Section>
    );
}
