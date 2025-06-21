import { useState } from "react";
import { Details } from "./interfaces";
import styles from "./map.module.scss";
import { SelectionContext } from "./store";
import { Controllers } from "../controllers/Controllers";
import { WorldDisplay } from "./WorldDisplay";
import { Chapters } from "./Chapters";
import { ExperienceDetails } from "./ExperienceDetails";

export const Map: React.FC = () => {
    const [selected, setSelected] = useState<Details | null>(null);
    const value = { selected, setSelected };

    return (
        <div
            className={`${styles.mapAnim} flex flex-col w-full h-full items-end justify-center text-[1.5rem] font-market-deco select-none relative`}
        >
            <div className="h-full w-full flex relative items-center justify-center bg-gradient-to-r from-black via-transparent to-black">
                <SelectionContext.Provider value={value}>
                    <WorldDisplay />
                    <Chapters />
                    <ExperienceDetails />
                </SelectionContext.Provider>
            </div>
            <Controllers tag="map" />
        </div>
    );
};
