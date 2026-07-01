import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LOAD_DURATION = 2400;
const EXIT_DURATION = 450;

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const exitTimer = window.setTimeout(() => {
      setIsExiting(true);
    }, LOAD_DURATION);
    const completeTimer = window.setTimeout(() => {
      onComplete();
    }, LOAD_DURATION + EXIT_DURATION);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={cn(
        "loading-screen fixed inset-0 z-[9999] overflow-hidden bg-[#e50101]",
        isExiting && "loading-screen--exiting",
      )}
      role="status"
      aria-label="Loading McRanked"
      aria-live="polite"
    >
      <div className="absolute inset-0 grid place-items-center">
        <div
          className="loading-screen__partnership flex items-center justify-center gap-5 sm:gap-8"
          aria-label="McDonald's in partnership with OpenAI"
        >
          <div className="flex h-28 w-28 items-center justify-center sm:h-40 sm:w-40">
            <img
              src="/mcdonalds-logo.png"
              alt="McDonald's"
              className="h-auto w-[260px] max-w-none select-none sm:w-[370px]"
              draggable={false}
            />
          </div>

          <span
            className="loading-screen__partner-mark grid h-9 w-9 shrink-0 place-items-center font-light text-white/90 shadow-sm backdrop-blur-sm sm:h-11 sm:w-11 sm:text-xl"
            aria-hidden="true"
          >
            ×
          </span>

          <div className="flex h-28 w-28 items-center justify-center sm:h-40 sm:w-40">
            <img
              src="/openai-logo.png"
              alt="OpenAI"
              className="h-auto w-[104px] select-none sm:w-[146px]"
              draggable={false}
            />
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-10 flex flex-col items-center gap-3 px-8 sm:bottom-14">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/65">
          Finding the best
        </span>
        <div className="h-[3px] w-full max-w-[220px] overflow-hidden rounded-full bg-black/20">
          <div className="loading-screen__progress h-full origin-left rounded-full bg-white" />
        </div>
      </div>
    </div>
  );
}
