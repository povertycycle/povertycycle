import { DepthContext } from "@/stores/depth";
import { RaptureContext } from "@/stores/rapture";
import React, { useContext, useEffect, useState } from "react";
import styles from "./bubbles.module.scss";

/**
 * Bubbles container
 */
export const Bubbles: React.FC = () => {
    const { dive } = useContext(DepthContext);
    const { settings } = useContext(RaptureContext);
    const bubbles = dive && settings.graphicOptions.bubbles ? 20 : 0;

    return (
        <div className="w-full h-full absolute z-2 overflow-hidden">
            {Array.from({ length: bubbles }, (_, i: number) => (
                <Bubble key={i} />
            ))}
        </div>
    );
};

type BubbleData = {
    radius: number;
    left: number;
    delay: number;
    duration: number;
};

const Bubble: React.FC = () => {
    const [bubble, setBubble] = useState<BubbleData | null>(null);

    useEffect(() => {
        if (!bubble) {
            setBubble({
                radius: Math.round(Math.random() * 10) + 1,
                left: Math.floor(Math.random() * 100),
                delay: Math.round(Math.random() * 20),
                duration: Math.round(Math.random() * 20) + 5,
            });
        }
    }, []);

    return (
        bubble && (
            <div
                className={`absolute ${styles.bubble2}`}
                style={{
                    left: `${bubble.left}%`,
                    animationDelay: `${bubble.delay}s`,
                    animationDuration: `${bubble.duration}s`,
                }}
            >
                <div
                    className={`rounded-full opacity-0 ${styles.bubble}`}
                    style={{
                        width: `${bubble.radius}px`,
                        height: `${bubble.radius}px`,
                        animationDelay: `${bubble.delay}s`,
                        animationDuration: `${bubble.duration}s`,
                    }}
                />
            </div>
        )
    );
};
