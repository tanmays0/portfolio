import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { AccentButton } from "@/components/ui/AccentButton";
import { site } from "@/content/site";

export function ContactSection() {
  return (
    <section id="contact" className="page-pad scroll-mt-24 py-12 md:pb-20">
      <div className="overflow-hidden border-2 border-border bg-coral-pink text-black shadow-brutal">
        <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="border-b-2 border-border p-8 md:p-12 lg:border-b-0 lg:border-r-2">
            <h2 className="font-display text-3xl font-black uppercase leading-[0.95] tracking-tight text-black md:text-5xl lg:text-6xl">
              Let&apos;s build something loud together.
            </h2>
            <p className="mt-4 max-w-lg text-base font-medium text-black/80 md:text-lg">
              Currently open to internships, collaborations, and full-time
              roles. Based in {site.location}.
            </p>
            <AccentButton
              as="a"
              href={`mailto:${site.email}`}
              tone="yellow"
              className="mt-8"
            >
              Email Me @ {site.email}
            </AccentButton>
          </div>

          <div className="flex flex-col justify-center gap-3 bg-card p-8 md:p-10">
            <a
              href={site.socials.github}
              target="_blank"
              rel="noreferrer"
              className="brutal-press flex items-center gap-3 border-2 border-border bg-main px-4 py-3 font-bold uppercase text-black shadow-brutal"
            >
              <FaGithub size={18} /> GitHub
            </a>
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="brutal-press flex items-center gap-3 border-2 border-border bg-sky-blue px-4 py-3 font-bold uppercase text-black shadow-brutal"
            >
              <FaLinkedinIn size={18} /> LinkedIn
            </a>
            <a
              href={site.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="brutal-press flex items-center gap-3 border-2 border-border bg-bold-yellow px-4 py-3 font-bold uppercase text-black shadow-brutal"
            >
              <FaWhatsapp size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
