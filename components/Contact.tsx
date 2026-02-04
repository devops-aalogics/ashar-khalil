"use client";

import Section from "./Section";
import { personalInfo } from "@/lib/data";
import { ArrowUpRight, Mail, Phone, MapPin, Linkedin } from "lucide-react";

export default function Contact() {
    return (
        <Section id="contact" className="pb-24">
            <div className="bg-secondary/40 border border-border/50 text-foreground rounded-3xl p-8 md:p-16 relative overflow-hidden backdrop-blur-sm">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>

                <div className="relative z-10 grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-foreground">Let&apos;s Work Together</h2>
                        <p className="text-muted-foreground text-lg mb-8 max-w-sm leading-relaxed">
                            Open to discussing new opportunities, legal consultations, or potential collaborations.
                        </p>
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                        >
                            Send an Email <ArrowUpRight size={20} />
                        </a>
                    </div>

                    <div className="space-y-6">
                        <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-5 p-5 rounded-2xl bg-background/50 border border-border/50 hover:bg-background/80 hover:border-primary/50 transition-all group">
                            <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <Mail size={22} />
                            </div>
                            <div>
                                <span className="block text-sm text-muted-foreground">Email</span>
                                <span className="font-medium text-lg">{personalInfo.email}</span>
                            </div>
                        </a>

                        <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-5 p-5 rounded-2xl bg-background/50 border border-border/50 hover:bg-background/80 hover:border-primary/50 transition-all group">
                            <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <Phone size={22} />
                            </div>
                            <div>
                                <span className="block text-sm text-muted-foreground">Phone</span>
                                <span className="font-medium text-lg">{personalInfo.phone}</span>
                            </div>
                        </a>

                        <div className="flex items-center gap-5 p-5 rounded-2xl bg-background/50 border border-border/50 hover:bg-background/80 hover:border-primary/50 transition-all group">
                            <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <MapPin size={22} />
                            </div>
                            <div>
                                <span className="block text-sm text-muted-foreground">Location</span>
                                <span className="font-medium text-lg">{personalInfo.address}</span>
                            </div>
                        </div>

                        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-5 rounded-2xl bg-background/50 border border-border/50 hover:bg-background/80 hover:border-primary/50 transition-all group">
                            <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <Linkedin size={22} />
                            </div>
                            <div>
                                <span className="block text-sm text-muted-foreground">Social</span>
                                <span className="font-medium text-lg">Connect on LinkedIn</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <footer className="mt-20 text-center text-sm text-muted-foreground/60">
                <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
            </footer>
        </Section>
    );
}
