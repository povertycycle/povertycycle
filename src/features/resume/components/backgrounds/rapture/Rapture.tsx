import { DepthContext } from "@/stores/depth";
import { RaptureContext } from "@/stores/rapture";
import React, { useContext } from "react";
import { MAX_Z_INDEX } from "../../../constants/constants";
import styles from "./rapture.module.scss";
import { Tower } from "./Tower";

export const Rapture: React.FC = () => {
    const { dive } = useContext(DepthContext);
    const {
        settings: {
            graphicOptions: { effects, buildings },
        },
    } = useContext(RaptureContext);
    const towers = dive ? buildings : 0;

    return (
        <div className={"z-1 absolute bottom-0 w-full h-full"}>
            {dive && <Lighthouse effects={effects} />}
            <div className="w-full h-[30%] sm:h-[40%] absolute bottom-0">
                {dive &&
                    Array.from({ length: towers }, (_, i: number) => (
                        <Tower
                            key={i}
                            pos={i}
                            siblings={towers}
                            effects={effects}
                        />
                    ))}
            </div>
        </div>
    );
};

/**
 * Lighthouse component
 */
const Lighthouse: React.FC<{ effects: number }> = ({ effects }) => {
    return (
        <div
            className={styles.lighthouse}
            style={{
                zIndex: MAX_Z_INDEX / 2,
            }}
        >
            <div className={`${styles.raptureMain}`} />
            <div className={`${effects > 0 ? styles.beacon : undefined}`} />
        </div>
    );
};
