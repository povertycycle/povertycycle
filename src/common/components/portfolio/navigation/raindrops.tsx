import { useState, useEffect } from "react";
import styles from "./index.module.scss";

const START_DELAY = 5;

const Raindrops : React.FC = () => {
    const [raindrops, setRaindrops] = useState<number>(0);

    useEffect(() => {
        setRaindrops(Math.round(window.innerWidth / 64));
    }, []);

    const Raindrop = () => {
        const left = Math.random() * 100;
        const height = Math.round((Math.random() * 0.7 + 0.3) * 10) / 10;
        const top = Math.random() * 100 + 50;
        const opacity = 1 - Math.pow((left - 50) / 60, 2);
        const delay = Math.random() * 5 + START_DELAY;
        const duration = Math.random() + 0.5;
        const scale = Math.random();

        return (
            <div>
                <div className={`absolute border border-l-rain ${styles.raindrop}`} style={{
                    height: `${height}rem`,
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`,
                    left: `${left}%`,
                    top: `calc(-10% - ${top}px)`,
                    transform: `scaleY(${scale})`,
                    opacity: opacity,
                }} />
                <div className={`absolute opacity-0 border-2 border-white rounded-full w-[30px] h-[30px] ${styles.ripple}`} style={{
                    animationName: styles["ripple" + Math.ceil((duration * 3) - 1.5)],
                    animationDelay: `${delay + duration}s`,
                    animationDuration: `${duration}s`,
                    top: `calc(85vh - 10% - ${top}px)`,
                    left: `${left}%`,
                }} />
            </div>
        )
    }

    return (
        <div className="absolute z-[2] w-full h-full overflow-hidden">
            {Array.from({ length: raindrops }, (_, index: number) => (
                <Raindrop key={index} />
            ))}
        </div>
    )
}

export default Raindrops;