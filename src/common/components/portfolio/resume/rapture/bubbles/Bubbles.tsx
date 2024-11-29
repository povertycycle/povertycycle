import styles from "./index.module.scss";
import { memo, useEffect, useState } from "react";

type BubbleProps = { bubbles: boolean }

const Bubbles = memo(({ bubbles }: BubbleProps) => {
    const [num, setNum] = useState<number>(0);

    useEffect(() => {
        setNum(!!window && window.innerWidth >= 640 ? 20 : 10);
    }, []);

    return (
        <div className="w-full h-full absolute z-[2] overflow-hidden">
            {
                bubbles && Array.from({ length: num }, (_, i: number) => (
                    <Bubble key={i} />
                ))
            }
        </div>
    )
}, arePropsEqual)

function arePropsEqual(oldProps: BubbleProps, newProps: BubbleProps) {
    return oldProps.bubbles === newProps.bubbles;
}

export default Bubbles;

const Bubble: React.FC = () => {
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
        }} />
    )
}