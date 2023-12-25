import styles from "./index.module.scss";
import { useContext, useEffect, useState } from "react";
import { RaptureContext } from "../../global-context";
import { pSBC } from "@/common/utils/psbc";
import jsgradient from "@/common/utils/js-gradient";
import { GRADIENTS, MAX_Z_INDEX } from "./buildings";

const FISH_COLORS : string[] = [
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
]

const Fishes : React.FC = () => {
    const [schools, setSchools] = useState<number>(0);
    const { dive } = useContext(RaptureContext);

    useEffect(() => {
        if (dive) setSchools(Math.round(window.innerWidth / 128));
    }, [dive]);
    
    const Fish = () => {
        const direction = Math.random() >= 0.5 ? true : false;
        const z = 5 + Math.round(Math.random() * 5);
        const opacity = 0.5 + z / 10;
        const top = 50 + Math.random() * 40;
        const scale = 0.2 + z / 20;
        const delay = Math.random() * 30; 
        const duration = (Math.random() * 240) + 90;
        const fish = Math.round(Math.random() * Math.round(window.innerWidth / 192)) + 1;
        const baseColor = GRADIENTS[z - (2 * (z - MAX_Z_INDEX / 2))];
        const rimColor = FISH_COLORS[Math.round(Math.random() * 10)];
        const ambientOcclusion = pSBC(-0.7, rimColor, false, true);

        return (
            <div className={styles.fishSchool} 
                style={{
                    top: `${top}%`,
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`,
                    zIndex: z,
                    opacity: opacity, 
                    ...(direction ? {
                        left: "-5%",
                        animationName: styles.swim,
                    } : {
                        right: "-5%",
                        animationName: styles.swimReverse,
                    })
                }}>
                {
                    Array.from({ length: fish }, (_, index: number) => (
                        <div key={"fish-" + index} className={styles.fish} 
                            style={{
                                marginLeft: `${Math.random() * z * (Math.random() < 0.5 ? -1 : 1) / 4}rem`,
                                marginTop: `${Math.random() * z * (Math.random() < 0.5 ? -1 : 1) / 4}rem`,
                                width: `${1.5 * scale}rem`,
                                height: `${0.75 * scale}rem`,
                                transform: direction ? "" : "rotateY(180deg)",
                                animationDuration: `${Math.round(Math.random() * 30) + 60}s`
                            }}>
                            <div className={styles.fishBody} style={{
                                background: ambientOcclusion ?? baseColor,
                            }} />
                            <div className={styles.fishDorsalFin} style={{
                                borderRight: `${scale / 2}rem solid ${ambientOcclusion ?? baseColor}`,
                            }} />
                            <div className={styles.fishPectoralFin} style={{
                                borderRight: `${scale / 2}rem solid ${ambientOcclusion ?? baseColor}`,
                            }} />
                            <div className={styles.fishTail} style={{
                                borderRight: `${scale / 2}rem solid ${ambientOcclusion ?? baseColor}`,
                            }} />
                        </div>
                    ))
                }
            </div>
        )
    }

    return (
        <div className={"absolute h-full w-full"}>
            {
                Array.from({ length: schools }, (_, index: number) => (
                    <Fish key={index} />
                ))
            }
        </div>
    )
}

export default Fishes;