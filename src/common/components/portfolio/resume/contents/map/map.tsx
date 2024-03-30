import { useState, Dispatch, SetStateAction, createContext } from "react";
import ControlsDescription from "../controls-description";
import styles from "../animations.module.scss";
import WorldDisplay from "./world";
import Chapters from "./chapters";
import LocationDetails, { Details } from "./details";

export type SelectDetails = {
    location: string,
    details: Details[]
}

export const SelectionContext = createContext<{
    selected: SelectDetails | null;
    setSelected: Dispatch<SetStateAction<SelectDetails | null>>;
}>({
    selected: null,
    setSelected: () => { }
})

const Map: React.FC = () => {
    const [selected, setSelected] = useState<SelectDetails | null>(null);

    return (
        <div className={`${styles.mapDisplayAnimation} flex flex-col w-full h-full items-end justify-center text-[1.5rem] font-market-deco select-none relative`}>
            <div className="absolute z-[1000] top-0 flex items-center justify-center w-[200px] left-[calc(50%-100px)] py-2 text-[2rem]">BETA FEATURE</div>
            <div className="h-full w-full flex relative items-center justify-center bg-gradient-to-r from-black via-transparent to-black">
                <SelectionContext.Provider value={{ selected, setSelected }}>
                    <WorldDisplay />
                    <Chapters />
                    <LocationDetails />
                </SelectionContext.Provider>
            </div>
            <ControlsDescription tag="map" />
        </div>
    )
}

export default Map;