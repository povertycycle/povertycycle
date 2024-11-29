import { quadraticEquationProcessor, roundWithDecimals } from "@/common/utils/math";
import styles from "./index.module.scss";
import { GRADIENTS, MAX_Z_INDEX } from "../constants";
import { MutableRefObject } from "react";
import Stacks from "./Stacks";

type TowerProps = {
    pos: number;
    offset: number;
    buildings: number;
    effects: number;
    animationRef: MutableRefObject<boolean>;
}

const Tower: React.FC<TowerProps> = ({ pos, offset, buildings, effects, animationRef }) => {
    const direction = pos >= buildings / 2 ? -1 : 1
    const left = offset + roundWithDecimals((100 - 2 * offset) / buildings * pos, 1);
    const spread = left + direction * (quadraticEquationProcessor(left, 15, offset))
    const h_variation = Math.random() * quadraticEquationProcessor(left, 25, offset);
    const z = (MAX_Z_INDEX / 2) + Math.round((MAX_Z_INDEX / 2) * Math.pow((left - 50) / (50 - offset), 2));
    const width = roundWithDecimals(3 + Math.random() * 3, 1);
    const h_curvature = 5;
    const stacks = Math.round(Math.random() * 4) + 2;
    const duration = Math.round(Math.random() * 7) + 3;
    const threshold = Math.round(Math.random() * stacks);
    const boxShadow =
        (offset === 0 ?
            [
                "0px -100px 250px 5px #1a827c",
                `, ${direction * 30}px 30px 30px 1px #1a827c`,
                `, ${direction * 50}px 10px 50px 1px #67aba8`
            ] :
            [
                "0px -150px 250px 30px #1a827c",
                `, ${direction * 150}px 150px 150px 5px #1a827c`,
                `, ${direction * 250}px 50px 250px 5px #67aba8`
            ])
            .slice(0, effects).reduce((acc: string, curr: string) => (acc += curr), "");
    const filter = effects > 3 ? `blur(${Math.floor((MAX_Z_INDEX - z) / 3)}px)` : "";

    return (
        <div className={`absolute bottom-0 ${animationRef.current ? styles.tower : undefined}`} style={{
            left: `${spread - width / 2}%`,
            width: `${width}rem`,
            height: `${Math.round(100 - Math.pow((spread - 50) / h_curvature, 2) - h_variation)}%`,
            zIndex: z - (Math.random() > 0.5 ? 1 : -1) * 3,
            animationDuration: `${duration}s`,
            background: GRADIENTS[z - (2 * (z - 10 / 2))],
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

export default Tower;