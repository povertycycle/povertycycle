import { DepthContext } from "@/stores/depth";
import { RaptureContext } from "@/stores/rapture";
import React, { useContext, useEffect, useState } from "react";
import styles from "./fishes.module.scss";
import { GRADIENTS, MAX_Z_INDEX } from "@/features/resume/constants/constants";
import { pSBC } from "@/features/resume/utils/psbc";

const FISH_COLORS: string[] = [
    "#FF6F1D",
    "#D38565",
    "#8F0380",
    "#7701AD",
    "#FEE40B",
    "#043C61",
    "#3EC46D",
    "#D7F8FF",
    "#DAAC34",
    "#B8D3DA",
];

/**
 * School of fish
 */
export const Fishes: React.FC = () => {
    const { dive } = useContext(DepthContext);
    const { settings } = useContext(RaptureContext);
    const school = dive ? settings.graphicOptions.fishes : 0;

    return (
        <div className={"z-1 absolute h-full w-full"}>
            {Array.from({ length: school }, (_, index: number) => (
                <School key={index} />
            ))}
        </div>
    );
};

interface SchoolData {
    top: number;
    delay: number;
    z: number;
    fish: number;
    dir: boolean;
}

const School: React.FC = () => {
    const [school, setSchool] = useState<SchoolData | null>(null);

    useEffect(() => {
        if (!school) {
            setSchool({
                top: 30 + Math.round(Math.random() * 40),
                delay: Math.round(Math.random() * 10),
                z: 6 + Math.round(Math.random() * 4),
                fish: Math.round((Math.random() * window.innerWidth) / 384) + 1,
                dir: Math.random() >= 0.5,
            });
        }
    }, []);

    return (
        school && (
            <div
                className={school.dir ? styles.school : styles.school2}
                style={{
                    top: `${school.top}%`,
                    animationDelay: `${school.delay}s`,
                    animationDuration: `${school.delay * 48 + 90}s`,
                    zIndex: school.z,
                    opacity: 0.5 + school.z / 10,
                }}
            >
                {Array.from({ length: school.fish }, (_, i: number) => (
                    <Fish key={i} z={school.z} dir={school.dir} />
                ))}
            </div>
        )
    );
};

const Fish: React.FC<{ z: number; dir: boolean }> = ({ z, dir }) => {
    const baseColor = GRADIENTS[z - 2 * (z - MAX_Z_INDEX / 2)];
    const rimColor = FISH_COLORS[Math.round(Math.random() * 10)];
    const ambientOcclusion = pSBC(-0.7, rimColor, false, true);

    return (
        <div
            className={styles.fish}
            style={{
                marginLeft: `${
                    (Math.random() * z * (Math.random() < 0.5 ? -1 : 1)) / 4
                }rem`,
                marginTop: `${
                    (Math.random() * z * (Math.random() < 0.5 ? -1 : 1)) / 4
                }rem`,
                width: `20px`,
                height: `8px`,

                transform: `scale(${0.2 + z / 30}) ${
                    dir ? "" : "rotateY(180deg)"
                }`,
                animationDuration: `${Math.round(Math.random() * 30) + 60}s`,
            }}
        >
            <div
                style={{
                    background: ambientOcclusion ?? baseColor,
                }}
            />
            <div
                className={styles.fishDorsalFin}
                style={{
                    borderRight: `4px solid ${ambientOcclusion ?? baseColor}`,
                }}
            />
            <div
                className={styles.fishPectoralFin}
                style={{
                    borderRight: `4px solid ${ambientOcclusion ?? baseColor}`,
                }}
            />
            <div
                className={styles.fishTail}
                style={{
                    borderRight: `4px solid ${ambientOcclusion ?? baseColor}`,
                }}
            />
        </div>
    );
};
