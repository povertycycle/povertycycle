import { useState, useEffect, useContext } from "react";
import styles from "./index.module.scss";
import { RaptureContext } from "../../global-context";

const Bubbles : React.FC = () => {
    const [bubbles, setBubbles] = useState<number>(0);
    const { dive } = useContext(RaptureContext);

    useEffect(() => {
        if (dive) setBubbles(Math.round(window.innerWidth / 100));
    }, [dive]);

    const Bubble = () => {
        const radius = Math.round(Math.random() * 10) + 1;
        const left = Math.floor(Math.random() * 100); 
        const delay = Math.round(Math.random() * 20);
        const duration = Math.round(Math.random() * 20) + 1;
        return (
            <div className={`rounded-full absolute opacity-0 ${styles.bubble}`} style={{
                left: `${left}%`,
                width: `${radius}px`,
                height: `${radius}px`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
            }}/>
        )
    }

    return (
        <div className="w-full h-full absolute z-[2] overflow-hidden">
            {
                Array.from({ length: bubbles }, (_, index: number) => (
                    <Bubble key={index} />
                ))
            }
        </div>
    )
}

export default Bubbles;