"use client";

import Section from "./Section";
import { personalInfo, memberships } from "@/lib/data";

export default function About() {
    return (
        <Section id="about">
            <h2 className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-6">About Membership</h2>
            <div className="grid md:grid-cols-3 gap-10">
                <div className="md:col-span-2">
                    <h3 className="text-3xl font-serif font-bold mb-6">Bar Membership</h3>
                    <ul className="space-y-4">
                        {memberships.map((item, index) => (
                            <li key={index} className="flex items-start gap-4 p-4 border rounded-lg bg-card/50">
                                <div className="h-2 w-2 rounded-full bg-secondary mt-2.5 flex-shrink-0" />
                                <span className="text-lg">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-muted p-8 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 -m-4 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
                    <h3 className="text-xl font-serif font-bold mb-4">Contact Info</h3>
                    <div className="space-y-4 text-muted-foreground">
                        <p>
                            <span className="block text-foreground font-medium text-sm mb-1">Email</span>
                            {personalInfo.email}
                        </p>
                        <p>
                            <span className="block text-foreground font-medium text-sm mb-1">Phone</span>
                            {personalInfo.phone}
                        </p>
                        <p>
                            <span className="block text-foreground font-medium text-sm mb-1">Address</span>
                            {personalInfo.address}
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
