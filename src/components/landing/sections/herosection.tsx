"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/providers/theme-provider";
import { ChevronRight } from "lucide-react";
import NumberFlow from "@number-flow/react";
import StudioUiPreview from "@/components/studio/studio-ui-preview";
import TextAnimation from "@/components/animations/text-animation";
import Sponsor from "../sponsor";
import { siteConfig } from "@/config/site";

const HeroSection = () => {
  const [starsCount, setStarsCount] = React.useState(0);
  const [isFootageHovered, setIsFootageHovered] = React.useState(false);
  const [isAsciiHovered, setIsAsciiHovered] = React.useState(false);
  const [isIntoHovered, setIsIntoHovered] = React.useState(false);
  const [isSequencesHovered, setIsSequencesHovered] = React.useState(false);
  const { theme } = useTheme();
  const defaultTextColor = theme === "dark" ? "#F9FAFC" : "#0e1410";

  React.useEffect(() => {
    let cancelled = false;
    fetch("/api/github/stars")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (cancelled || !data) return;
        if (typeof data.stars === "number") {
          setStarsCount(data.stars);
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      {" "}
      <section className="z-10 flex flex-col w-full items-center justify-center text-center mt-[12vh] md:mt-[23vh]">
        <div className="z-40 flex flex-col justify-center items-center">
          <motion.div
            layout
            transition={{ layout: { duration: 0.35, ease: "easeOut" } }}
            className="border border-[#B7F2D2]/70 p-0.5 rounded-full inline-flex justify-center items-center bg-[radial-gradient(circle_at_center,_rgba(0,197,97,0.14)_0%,_rgba(0,197,97,0.05)_50%,_rgba(0,197,97,0)_80%)]"
          >
            <Link
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className=" px-4 flex py-1.5 text-[10px] text-white"
              style={{
                background:
                  "linear-gradient(137.68deg, #00C561 22.55%, #2BE27E 86.49%)",
                boxShadow:
                  "0px 8px 24px rgba(0,197,97,0.35), inset 0px 1px 4px 2px rgba(160,255,205,0.45)",
                borderRadius: "100px",
              }}
            >
              <span className="mr-1.5 inline-block size-1.5 self-center rounded-full bg-white/95 animate-pulse" />
              <span className="mr-1 font-mono">
                <NumberFlow value={starsCount} />
              </span>
              Stargazers on GitHub
            </Link>
          </motion.div>
          <div className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl relative cursor-default">
            Convert{" "}
            <motion.span
              className="relative inline-block align-baseline"
              onHoverStart={() => setIsFootageHovered(true)}
              onHoverEnd={() => setIsFootageHovered(false)}
            >
              <span
                className={`transition-all duration-200 ${
                  isFootageHovered
                    ? "text-[#00C561]"
                    : "text-black dark:text-white"
                }`}
              >
                Videos
              </span>
            </motion.span>{" "}
            <span className=" relative inline-block align-baseline">
              <motion.span
                className="inline-block transition-all duration-200"
                onHoverStart={() => setIsIntoHovered(true)}
                onHoverEnd={() => setIsIntoHovered(false)}
                animate={{
                  color: isIntoHovered ? "#00C561" : defaultTextColor,
                  y: isIntoHovered ? -2 : 0,
                  scale: isIntoHovered ? 1.04 : 1,
                }}
                transition={{ type: "spring", stiffness: 520, damping: 26 }}
              >
                into
              </motion.span>{" "}
              <motion.span
                className="absolute left-0 -bottom-2 h-[3px] rounded-full bg-[#00C561]"
                initial={{ width: 0, opacity: 0 }}
                animate={{
                  width: isIntoHovered ? "100%" : "0%",
                  opacity: isIntoHovered ? 1 : 0,
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              />
            </span>
            <br />
            <motion.span
              className="relative inline-block align-baseline"
              onHoverStart={() => setIsAsciiHovered(true)}
              onHoverEnd={() => setIsAsciiHovered(false)}
            >
              <span
                className={`transition-all duration-200 inline-block ${
                  isAsciiHovered
                    ? "text-[#00C561]"
                    : "text-black dark:text-white"
                }`}
              >
                <TextAnimation
                  text="ASCII"
                  secondText="ASCII"
                  isActive={isAsciiHovered}
                  className="leading-none"
                  firstClassName="uppercase [font-family:var(--font-ascii-brand)]"
                  secondClassName="uppercase [font-family:var(--font-ascii-brand)]"
                />
              </span>
            </motion.span>{" "}
            <span
              className="relative inline-block"
              onMouseEnter={() => setIsSequencesHovered(true)}
              onMouseLeave={() => setIsSequencesHovered(false)}
            >
              <motion.span
                className="relative z-10 inline-block"
                animate={{
                  color: isSequencesHovered ? "#00C561" : defaultTextColor,
                  y: isSequencesHovered ? -2 : 0,
                }}
                transition={{ type: "spring", stiffness: 520, damping: 26 }}
              >
                Sequences
              </motion.span>
              <motion.span
                className="absolute inset-x-0 -bottom-1 h-[0.22em] rounded-sm bg-[#C4F5DC]"
                initial={false}
                animate={{
                  opacity: isSequencesHovered ? 1 : 0,
                  scaleX: isSequencesHovered ? 1 : 0.35,
                }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                style={{ transformOrigin: "left center" }}
              />
            </span>
          </div>
          <div
            style={{
              lineHeight: "120%",
            }}
            className="text-base sm:text-xl mt-5 px-4 sm:px-0"
          >
            Each frame is rebuilt from your charset, then played in order
            <br className="hidden sm:block" /> so the motion reads as one smooth
            stream.
          </div>
          <section className="mt-8 flex flex-col items-center gap-2 md:flex-row md:justify-center">
            <Link href={siteConfig.studioPath} className="inline-flex">
              <Button
                className="group inline-flex min-w-48 items-center justify-center gap-2"
                variant="landingBlue"
                size="landing"
              >
                Open studio
                <ChevronRight
                  className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0"
                  aria-hidden
                />
              </Button>
            </Link>

            <div className="relative group/repo inline-flex">
              <div className="relative transition-transform duration-200 group-hover/repo:-translate-y-0.5">
                <Link
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 block w-fit"
                >
                  <Button
                    className="min-w-48 justify-center transition-all duration-200 hover:shadow-[0_10px_22px_rgba(0,197,97,0.2)]"
                    variant="landing"
                    size="landing"
                  >
                    {siteConfig.githubStarCtaLabel}
                  </Button>
                </Link>
                <span className="pointer-events-none absolute -inset-1 rounded-[999px] border border-[#00C561]/35 opacity-0 group-hover/repo:opacity-100 transition-opacity duration-200" />
              </div>
            </div>
          </section>
          <div>
            <Sponsor />
          </div>
        </div>
        <div className="mt-12 relative z-40">
          <StudioUiPreview />
          <div className="pointer-events-none absolute inset-0 z-50 rounded-3xl crt-scanlines-soft" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
