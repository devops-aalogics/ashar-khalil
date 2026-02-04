import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-secondary selection:text-secondary-foreground">
      <Header />

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Contact />
      </div>
    </main>
  );
}
