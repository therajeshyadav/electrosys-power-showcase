import { Phone } from "lucide-react";
import { site, telHref, whatsappHref } from "@/lib/site";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.16-1.35a9.93 9.93 0 0 0 4.88 1.27h.01c5.5 0 9.96-4.46 9.96-9.96A9.9 9.9 0 0 0 19.1 4.9 9.9 9.9 0 0 0 12.04 2Zm0 18.2h-.01a8.26 8.26 0 0 1-4.21-1.15l-.3-.18-3.06.8.82-2.99-.2-.31a8.24 8.24 0 0 1-1.26-4.41c0-4.56 3.71-8.27 8.28-8.27 2.21 0 4.29.86 5.85 2.43a8.22 8.22 0 0 1 2.42 5.85c0 4.57-3.71 8.23-8.33 8.23Zm4.54-6.16c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.16.25-.64.8-.79.97-.14.16-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.12.25-.29.37-.44.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.84-.2-.48-.4-.42-.55-.43h-.47c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 2s.86 2.32.98 2.48c.12.17 1.7 2.6 4.12 3.64.58.25 1.02.4 1.37.51.58.18 1.1.16 1.52.1.46-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}

export function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-3 sm:right-6 sm:bottom-6">
      <a
        href={telHref}
        aria-label={`Call Electrosys on ${site.phone}`}
        className="group flex h-13 w-13 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:text-primary-deep"
        style={{ height: "3.25rem", width: "3.25rem" }}
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
      </a>
      <a
        href={whatsappHref()}
        target="_blank"
        rel="noreferrer"
        aria-label="Send Electrosys a WhatsApp enquiry"
        className="flex items-center justify-center rounded-full bg-primary text-primary-foreground shadow-green transition-transform duration-200 hover:-translate-y-0.5"
        style={{ height: "3.25rem", width: "3.25rem" }}
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
    </div>
  );
}
