import BlurFade from "@/components/magicui/blur-fade";

export const metadata = {
  title: "Resume",
  description: "Justin Pham's Resume",
};

const BLUR_FADE_DELAY = 0.04;

export default function ResumePage() {
  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">Resume</h1>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <div className="flex justify-center">
          <img
            src="/resume.png"
            alt="Justin Pham's Resume"
            className="max-w-full h-auto"
          />
        </div>
      </BlurFade>
    </section>
  );
}
