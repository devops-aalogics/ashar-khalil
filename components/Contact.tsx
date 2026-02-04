"use client";

import Section from "./Section";
import { personalInfo } from "@/lib/data";
import { ArrowUpRight, Mail, Phone, MapPin, Linkedin } from "lucide-react";

export default function Contact() {
    return (
        <Section id="contact" className="pb-24">
            <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-16 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>

                <div className="relative z-10 grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Let&apos;s Work Together</h2>
                        <p className="text-primary-foreground/70 text-lg mb-8 max-w-sm">
                            Open to discussing new opportunities, legal consultations, or potential collaborations.
                        </p>
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-medium hover:bg-secondary/90 transition-colors"
                        >
                            Send an Email <ArrowUpRight size={18} />
                        </a>
                    </div>

                    <div className="space-y-6">
                        <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group">
                            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                                <Mail size={20} />
                            </div>
                            <div>
                                <span className="block text-sm text-primary-foreground/60">Email</span>
                                <span className="font-medium">{personalInfo.email}</span>
                            </div>
                        </a>

                        <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group">
                            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                                <Phone size={20} />
                            </div>
                            <div>
                                <span className="block text-sm text-primary-foreground/60">Phone</span>
                                <span className="font-medium">{personalInfo.phone}</span>
                            </div>
                        </a>

                        <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group">
                            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <span className="block text-sm text-primary-foreground/60">Location</span>
                                <span className="font-medium">{personalInfo.address}</span>
                            </div>
                        </div>

                        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group">
                            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                                <Linkedin size={20} />
                            </div>
                            <div>
                                <span className="block text-sm text-primary-foreground/60">Social</span>
                                <span className="font-medium">Connect on LinkedIn</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <footer className="mt-16 text-center text-sm text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
            </footer>
        </Section>
    );
}
