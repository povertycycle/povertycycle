import { useState, Dispatch, SetStateAction, createContext } from "react";
import ControlsDescription from "../controls-description";
import styles from "../animations.module.scss";
import WorldDisplay from "./world";
import Chapters from "./chapters";
import ExperienceDetails, { Details } from "./details";

export const SelectionContext = createContext<{
    selected: Details | null;
    setSelected: Dispatch<SetStateAction<Details | null>>;
}>({
    selected: null,
    setSelected: () => { }
})

const Map: React.FC = () => {
    const [selected, setSelected] = useState<Details | null>(null);
    const value = { selected, setSelected };

    return (
        <div className={`${styles.mapDisplayAnimation} flex flex-col w-full h-full items-end justify-center text-[1.5rem] font-market-deco select-none relative`}>
            <div className="h-full w-full flex relative items-center justify-center bg-gradient-to-r from-black via-transparent to-black">
                <SelectionContext.Provider value={value}>
                    <WorldDisplay />
                    <Chapters />
                    <ExperienceDetails />
                </SelectionContext.Provider>
            </div>
            <ControlsDescription tag="map" />
        </div>
    )
}

export default Map;