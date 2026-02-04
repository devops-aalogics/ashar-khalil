"use client";

import Section from "./Section";
import { education, internships, courses } from "@/lib/data";

export default function Education() {
    return (
        <Section id="education">
            <div className="grid md:grid-cols-2 gap-16">

                {/* Education Column */}
                <div>
                    <h2 className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-8">Education</h2>
                    <div className="space-y-10">
                        {education.map((edu, index) => (
                            <div key={index} className="border-l-2 border-muted pl-6 relative">
                                <div className="absolute left-0 top-1.5 w-2 h-2 bg-muted-foreground rounded-full -ml-[5px]" />
                                <h3 className="text-xl font-serif font-bold">{edu.institution}</h3>
                                <p className="text-foreground/80 font-medium">{edu.degree}</p>
                                <div className="flex justify-between items-center mt-1 text-sm text-muted-foreground">
                                    <span>{edu.period}</span>
                                    {edu.grade && <span className="bg-muted px-2 py-0.5 rounded">{edu.grade}</span>}
                                </div>
                            </div>
                        ))}

                        <div className="pt-6">
                            <h3 className="text-lg font-serif font-bold mb-4">Courses</h3>
                            <ul className="space-y-2">
                                {courses.map((course, i) => (
                                    <li key={i} className="text-muted-foreground border-l-2 border-secondary pl-4">
                                        {course}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Internships Column */}
                <div>
                    <h2 className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-8">Internships</h2>
                    <div className="space-y-8">
                        {internships.map((internship, index) => (
                            <div key={index} className="bg-card border p-6 rounded-lg hover:border-secondary/50 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-bold">{internship.company}</h3>
                                    {internship.period && <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">{internship.period}</span>}
                                </div>
                                <p className="text-sm font-medium mb-2">{internship.role}</p>
                                {internship.description && (
                                    <p className="text-sm text-muted-foreground">{internship.description}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </Section>
    );
}
