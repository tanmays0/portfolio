import Image from "next/image";

export function PdfEmbed({
  src,
  label = "resume.pdf",
}: {
  src: string;
  label?: string;
}) {
  return (
    <div className="brutal-box mt-10 overflow-hidden bg-card">
      <div className="flex items-center justify-between gap-3 border-b-2 border-border bg-bold-yellow px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center border-2 border-border bg-card shadow-brutal-sm">
            <Image
              src="/logos/ts-mark.png"
              alt=""
              width={20}
              height={20}
              className="h-5 w-5 object-contain"
              unoptimized
            />
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-black">
            {label}
          </span>
        </div>
        <span className="font-mono text-xs font-bold uppercase text-black">
          preview
        </span>
      </div>
      <iframe title="Resume PDF" src={src} className="h-[80vh] w-full bg-card" />
    </div>
  );
}
