import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectsGrid from "./components/ProjectsGrid";
import ContactForm from "./components/ContactForm";
import Skills from "./components/Skillstemp";
import { Toaster } from "react-hot-toast";


export default function App() {
  return (
    <div className="antialiased">
      <Navbar />
      <main className="pt-20">
        <Toaster position="top-center" reverseOrder={false} />
        <Hero />
        <About />
        <ProjectsGrid />
        <Skills />
        <ContactForm />
      </main>
      <footer className="py-8 text-center text-slate-400">
        © {new Date().getFullYear()} Akeem Rokeeb Olamide
      </footer>
    </div>
  );
}
