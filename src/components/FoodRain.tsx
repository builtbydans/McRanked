import { useEffect, type CSSProperties } from "react";

interface FoodRainProps {
  onComplete: () => void;
}

interface FoodDrop {
  id: number;
  type: "burger" | "fries";
  left: number;
  size: number;
  delay: number;
  duration: number;
  drift: number;
  rotation: number;
}

const DROP_COUNT = 48;
const RAIN_DURATION = 6200;

function seededRandom(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

const foodDrops: FoodDrop[] = Array.from({ length: DROP_COUNT }, (_, index) => ({
  id: index,
  type: seededRandom(index + 1) > 0.48 ? "burger" : "fries",
  left: seededRandom(index + 11) * 100,
  size: 58 + seededRandom(index + 21) * 82,
  delay: seededRandom(index + 31) * 1.65,
  duration: 3 + seededRandom(index + 41) * 1.65,
  drift: -90 + seededRandom(index + 51) * 180,
  rotation: -260 + seededRandom(index + 61) * 520,
}));

export function FoodRain({ onComplete }: FoodRainProps) {
  useEffect(() => {
    const timer = window.setTimeout(onComplete, RAIN_DURATION);
    return () => window.clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9000] overflow-hidden"
      aria-hidden="true"
    >
      {foodDrops.map((drop) => {
        const style = {
          "--food-left": `${drop.left}%`,
          "--food-size": `${drop.size}px`,
          "--food-delay": `${drop.delay}s`,
          "--food-duration": `${drop.duration}s`,
          "--food-drift": `${drop.drift}px`,
          "--food-rotation": `${drop.rotation}deg`,
        } as CSSProperties;

        return (
          <img
            key={drop.id}
            src={drop.type === "burger" ? "/big-mac.png" : "/fries.png"}
            alt=""
            draggable={false}
            style={style}
            className={`food-rain__drop ${
              drop.type === "burger" ? "food-rain__drop--burger" : ""
            }`}
          />
        );
      })}
    </div>
  );
}
