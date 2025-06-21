import { useContext, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { DepthContext } from "@/stores/depth";

/**
 * Droplet data
 */
interface DropletData {
    left: number;
    top: number;
    height: number;
    opacity: number;
    delay: number;
    duration: number;
    scale: number;
}

/**
 * Constants
 */
const START_DELAY = 5;

/**
 * Raindrop container
 */
export const Raindrops: React.FC = () => {
    const { dive } = useContext(DepthContext);

    return (
        <div className="absolute z-2 w-full h-full overflow-hidden mx-auto max-w-screen-xl">
            {Array.from({ length: !dive ? 24 : 0 }, (_, i: number) => (
                <Droplet key={i} />
            ))}
        </div>
    );
};

/**
 * Droplet component
 */
const Droplet: React.FC = () => {
    const [droplet, setDroplet] = useState<DropletData | null>(null);

    useEffect(() => {
        if (droplet === null) {
            const left = Math.round(Math.random() * 100);
            setDroplet({
                left,
                height: Math.round((Math.random() * 0.7 + 0.3) * 10) / 10,
                top: Math.random() * 5 + 55,
                opacity: 1 - Math.pow((left - 50) / 60, 2),
                delay: Math.random() * 5 + START_DELAY,
                duration: Math.random() + 0.5,
                scale: Math.random(),
            });
        }
    }, []);

    return (
        droplet && (
            <div
                className="absolute flex items-center justify-center"
                style={{
                    left: `${droplet.left}%`,
                    top: `${droplet.top}%`,
                    opacity: droplet.opacity,
                }}
            >
                <div
                    className={`absolute border border-[#565960] opacity-0 ${styles.raindrop}`}
                    style={{
                        height: `${droplet.height}rem`,
                        animationDelay: `${droplet.delay}s`,
                        animationDuration: `${droplet.duration}s`,
                        transform: `scaleY(${droplet.scale})`,
                    }}
                />
                <div
                    className={`absolute`}
                    style={{
                        transform: "perspective(100vh) rotateX(80deg)",
                    }}
                >
                    <div
                        className="opacity-0 border border-rain rounded-full w-12 h-12"
                        style={{
                            animationIterationCount: "infinite",
                            animationName:
                                styles[
                                    "ripple" +
                                        Math.ceil(droplet.duration * 3 - 1.5)
                                ],
                            animationDelay: `${
                                droplet.delay + droplet.duration - 0.15
                            }s`,
                            animationDuration: `${droplet.duration}s`,
                        }}
                    />
                </div>
            </div>
        )
    );
};
