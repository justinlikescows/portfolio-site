import Navbar from "@/components/navbar";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";

export const metadata = {
  title: "Resume",
  description: "Justin Pham's Resume",
};

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 pt-28 pb-16">
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-4" /> Back
          </Link>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 text-sm font-medium bg-foreground text-background px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            <Download className="size-4" /> Download PDF
          </a>
        </div>

        <h1 className="font-serif text-3xl tracking-tight mb-8">Resume</h1>

        <div className="flex justify-center">
          <div className="bg-white dark:bg-[hsl(30,15%,14%)] p-3 shadow-lg" style={{ transform: "rotate(-0.5deg)" }}>
            <img
              src="/resume.png"
              alt="Justin Pham's Resume"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </main>
    </>
  );
}
