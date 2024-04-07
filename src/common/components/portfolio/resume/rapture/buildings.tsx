import { useRef, useEffect, memo } from "react";
import styles from "./index.module.scss";
import jsgradient from "@/common/utils/js-gradient"
import { quadraticEquationProcessor, roundWithDecimals } from "@/common/utils/math";

export const MAX_Z_INDEX = 10;
export const GRADIENTS = jsgradient.generateGradient("#000000", "#136087", MAX_Z_INDEX);

const Lighthouse: React.FC<{ shouldAnimate: boolean, effects: number }> = ({ shouldAnimate, effects }) => {
    return (
        <div className="absolute bottom-0 h-[90%] flex justify-center" style={{
            left: "calc(50% - 2.5rem)",
            zIndex: MAX_Z_INDEX / 2,
            animation: shouldAnimate ? `${styles.buildRaptureMain} 3s ease` : undefined
        }}>
            <div className={`${styles.raptureMain} w-[5rem] h-full rounded-[0.5rem]`} />
            <div className={`w-[1rem] h-[1rem] top-[11%] absolute bg-white rounded-[50%] flex justify-center items-center ${effects > 0 ? styles.raptureBeacon : undefined}`} />
        </div>
    )
}

type BuildingsProps = {
    buildings: number,
    effects: number
}

const Buildings = memo(({ buildings, effects }: BuildingsProps) => {
    const OFFSET = 10;
    const animationRef = useRef<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            animationRef.current = false;
        }, 10000);
    }, []);

    const Stacks: React.FC<{ total: number, pos: number, factor: number, z: number }> = ({ total, pos, factor, z }) => {
        const width = (80 / (total + 1) / factor) * (total + 1 - pos);
        const height = (factor * 1) + Math.pow((pos - total) / (Math.pow(Math.pow(total, 4) / 4, 1 / 4)), 4);

        return (
            <div className="rounded-t-[2px]" style={{
                width: `${width}%`,
                height: `${height}vh`,
                background: GRADIENTS[z - (2 * (z - MAX_Z_INDEX / 2))],
            }} />
        )
    }

    const Tower: React.FC<{ pos: number }> = ({ pos }) => {
        const direction = pos >= buildings / 2 ? -1 : 1
        const left = OFFSET + roundWithDecimals((100 - 2 * OFFSET) / buildings * pos, 1);
        const spread = left + direction * (quadraticEquationProcessor(left, 15, OFFSET))
        const h_variation = Math.random() * quadraticEquationProcessor(left, 25, OFFSET);
        const z = (MAX_Z_INDEX / 2) + Math.round((MAX_Z_INDEX / 2) * Math.pow((left - 50) / (50 - OFFSET), 2));
        const width = roundWithDecimals(3 + Math.random() * 3, 1);
        const h_curvature = 5;
        const stacks = Math.round(Math.random() * 4) + 2;
        const duration = Math.round(Math.random() * 7) + 3;
        const threshold = Math.round(Math.random() * stacks);
        const boxShadow = [
            "0px -150px 250px 30px #1a827c",
            `, ${direction * 150}px 150px 150px 5px #1a827c`,
            `, ${direction * 250}px 50px 250px 5px #67aba8`
        ].slice(0, effects).reduce((acc: string, curr: string) => (acc += curr), "");
        const filter = effects > 3 ? `blur(${Math.floor((MAX_Z_INDEX - z) / 3)}px)` : "";
        const lean = Math.round(Math.random() * 2);

        return (
            <div className={`absolute bottom-0 ${animationRef.current ? styles.tower : undefined}`} style={{
                left: `${spread - width / 2}%`,
                width: `${width}rem`,
                height: `${Math.round(100 - Math.pow((spread - 50) / h_curvature, 2) - h_variation)}%`,
                zIndex: z - (Math.random() > 0.5 ? 1 : -1) * 3,
                animationDuration: `${duration}s`,
                background: GRADIENTS[z - (2 * (z - MAX_Z_INDEX / 2))],
                boxShadow: boxShadow,
                filter: filter,
            }}>
                <div className="w-full h-full flex absolute flex-col-reverse items-center top-[-100%]">
                    {
                        Array.from({ length: stacks }, (_, index: number) => (
                            <Stacks key={index} total={stacks} pos={index} factor={index <= threshold ? 1 : 4} z={z} />
                        ))
                    }
                </div>
            </div>
        )
    }
    return (
        <div className={"z-[1] absolute bottom-0 w-full h-full"}>
            <Lighthouse shouldAnimate={animationRef.current} effects={effects} />
            <div className="w-full h-[40%] absolute bottom-0">
                {
                    Array.from({ length: buildings }, (_, index: number) => (
                        <Tower key={index} pos={index} />
                    ))
                }
            </div>
        </div>
    )
}, arePropsEqual);

function arePropsEqual(oldProps: BuildingsProps, newProps: BuildingsProps) {
    return (oldProps.buildings === newProps.buildings) && (oldProps.effects === newProps.effects);
}

export default Buildings;