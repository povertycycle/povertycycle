import { useEffect, useState } from "react";
import { quadraticEquation } from "../../../utils/math";
import { GRADIENTS, MAX_Z_INDEX } from "../../../constants/constants";
import styles from "./rapture.module.scss";

const OFFSET = 10;
const H_CURVATURE = 5;

interface TowerData {
    duration: number;
    width: number;
    area: -1 | 1;
    height: number;
    zRand: number;
    stacks: {
        total: number;
        threshold: number;
    };
}

interface TowerProps {
    pos: number;
    siblings: number;
    effects: number;
}

export const Tower: React.FC<TowerProps> = ({ pos, siblings, effects }) => {
    const [tower, setTower] = useState<TowerData | null>(null);

    const root = OFFSET + Math.round(((100 - 2 * OFFSET) / siblings) * pos);
    const z_factor =
        MAX_Z_INDEX / 2 +
        Math.round(
            (MAX_Z_INDEX / 2) * Math.pow((root - 50) / (50 - OFFSET), 2)
        );
    const background = GRADIENTS[z_factor - 2 * (z_factor - MAX_Z_INDEX / 2)];

    useEffect(() => {
        if (!tower) {
            const total = Math.round(Math.random() * 4) + 2;
            setTower({
                duration: Math.round(Math.random() * 7) + 3,
                width:
                    Math.round(3 + Math.random() * 3) *
                    (window && window.innerWidth < 640 ? 8 : 16),
                area: pos >= siblings / 2 ? -1 : 1,
                height: Math.round(
                    100 -
                        Math.pow((root - 50) / H_CURVATURE, 2) -
                        Math.random() * quadraticEquation(root, 25, OFFSET)
                ),
                zRand: (Math.random() > 0.5 ? 1 : -1) * 3,
                stacks: {
                    total,
                    threshold: Math.round(Math.random() * total),
                },
            });
        }
    }, []);

    function renderEffects(direction: -1 | 1) {
        return [
            "0px -150px 250px 30px #1a827c",
            `, ${direction * 150}px 150px 150px 5px #1a827c`,
            `, ${direction * 250}px 50px 250px 5px #67aba8`,
        ]
            .slice(0, effects)
            .reduce((acc: string, curr: string) => (acc += curr), "");
    }
    const filter =
        effects > 3
            ? `blur(${Math.floor((MAX_Z_INDEX - z_factor) / 3)}px)`
            : "";

    return (
        tower && (
            <div
                className={`absolute bottom-0 ${styles.tower}`}
                style={{
                    animationDuration: `${tower.duration}s`,
                    width: `${tower.width}px`,
                    height: `${tower.height}%`,
                    left: `calc(${
                        root + tower.area * quadraticEquation(root, 15, OFFSET)
                    }% - ${tower.width / 2}px)`,
                    background,
                    zIndex: z_factor - tower.zRand,
                    boxShadow: renderEffects(tower.area),
                    filter,
                }}
            >
                <div className="w-full h-full flex absolute flex-col-reverse items-center bottom-full">
                    {Array.from(
                        { length: tower.stacks.total },
                        (_, index: number) => (
                            <Stacks
                                key={index}
                                total={tower.stacks.total}
                                pos={index}
                                factor={index <= tower.stacks.threshold ? 1 : 4}
                                background={background}
                            />
                        )
                    )}
                </div>
            </div>
        )
    );
};

type StacksProps = {
    total: number;
    pos: number;
    factor: number;
    background: string;
};

const Stacks: React.FC<StacksProps> = ({ total, pos, factor, background }) => {
    const width = (80 / (total + 1) / factor) * (total + 1 - pos);
    const height =
        factor * 1 +
        Math.pow((pos - total) / Math.pow(Math.pow(total, 4) / 4, 1 / 4), 4);

    return (
        <div
            className="rounded-t-sm"
            style={{
                width: `${width}%`,
                height: `${height}vh`,
                background,
            }}
        />
    );
};
