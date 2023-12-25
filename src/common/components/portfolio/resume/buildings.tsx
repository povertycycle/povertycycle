import { useState, useEffect, use, useContext } from "react";
import styles from "./index.module.scss";
import jsgradient from "@/common/utils/js-gradient"
import { quadraticEquationProcessor, roundWithDecimals } from "@/common/utils/math";
import { RaptureContext } from "../rapture-context";

export const MAX_Z_INDEX = 10;
export const GRADIENTS = jsgradient.generateGradient("#000000", "#136087", MAX_Z_INDEX);

const Buildings : React.FC = () => {
    const [towers, setTowers] = useState<number>(0);
    const [offset, setOffset] = useState<number>(0);
    const { dive } = useContext(RaptureContext);

    useEffect(() => {
        if (!dive) return;
        setTowers(Math.round(window.innerWidth / 80));
        setOffset(Math.round(window.innerWidth / 192));
    }, [dive]);

    const Stacks : React.FC<{ total: number, pos:number, factor: number, z:number }> = ({ total, pos, factor, z }) => {
        const width = (80 / (total + 1) / factor) * (total + 1 - pos);
        const height = (factor * 1) + Math.pow((pos - total) / (Math.pow(Math.pow(total, 4) / 4, 1 / 4)), 4);

        return (
            <div style={{
                width: `${width}%`,
                height: `${height}vh`,
                background: GRADIENTS[z - (2 * (z - MAX_Z_INDEX / 2))],
            }} />
        )    
    }

    const Tower : React.FC<{ pos: number }> = ({ pos }) => {
        const direction = pos >= towers / 2 ? -1 : 1
        const left = offset + roundWithDecimals((100 - 2 * offset) / towers * pos, 1);
        const spread = left + direction * (quadraticEquationProcessor(left, 15, offset))
        const h_variation = Math.random() * quadraticEquationProcessor(left, 25, offset);
        const z = (MAX_Z_INDEX / 2) + Math.round((MAX_Z_INDEX / 2) * Math.pow((left - 50) / (50 - offset), 2));
        const width = roundWithDecimals(3 + Math.random() * 2, 1);
        const h_curvature = 5;
        const stacks = Math.round(Math.random() * 4) + 2;
        const duration = Math.round(Math.random() * 10) + 1;
        const threshold = Math.round(Math.random() * stacks);
        let boxShadow = `0px -150px 250px 30px #1a827c, ${direction * 150}px 150px 150px 5px #1a827c, ${direction * 250}px 50px 250px 5px #67aba8`
        // boxShadow += `, ${direction * 50}px 150px 250px 5px #97fffa`;
        // boxShadow += `, ${direction * 150}px 200px 300px 5px #ffffff`
        const filter = `blur(${Math.floor((MAX_Z_INDEX - z) / 3)}px)`;

        return (
            <div className={styles.tower} style={{
                left: `${spread - width / 2}%`,
                width: `${width}%`,
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
                            <Stacks key={index} total={stacks} pos={index} factor={index <= threshold ? 1 : 5} z={z} />
                        ))
                    }
                </div>
            </div>
        )
    }
    return (
        <div className={"absolute bottom-0 w-full h-full"}>    
            <div className="absolute bottom-0 h-full flex justify-center" style={{
                left: "calc(50% - 2.5rem)",
                zIndex: MAX_Z_INDEX / 2, 
                animation: towers === 0 ? undefined : `${styles.buildRaptureMain} 3s ease`
            }}>
                <div className={`${styles.raptureMain} w-[5rem] h-full rounded-[0.5rem]`} />
                <div className={styles.raptureBeacon} />
            </div>
            <div className="w-full h-[40%] absolute bottom-0">
                {
                    Array.from({ length: towers }, (_, index: number) => (
                        <Tower key={index} pos={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default Buildings;