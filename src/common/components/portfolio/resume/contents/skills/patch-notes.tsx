import styles from "../animations.module.scss";
import React from "react";
import { TalentType, ViewMode } from "./constants";
import { TextStyleParser } from "@/common/utils/parser";

type Notes = { version: string, changes: string[] }

export const PATCH_NOTES: Notes[] = [
    { version: "1.0.9.20240212", changes: [`Added some /b:${TalentType.FORM}/ skill talents and rebalanced end-game talents for /b:${TalentType.THEORY}/.`] },
    { version: "1.0.8.20240209", changes: [`Added /b:${TalentType.THEORY}/ skill talents.`] },
    { version: "1.0.7.20240204", changes: [`Rearranged /b:${TalentType.ENGINEERING}/ and /b:${TalentType.STUDY}/ skill talents for a better visual.`] },
    { version: "1.0.6.20240203", changes: [`Arrows drawn using canvas instead of divs.`] },
    { version: "1.0.5.20240202", changes: [`Balanced, fixed, and added some of the /b:${TalentType.ENGINEERING}/ skill talents.`] },
    { version: "1.0.4.20240131", changes: [`Rearranged /b:${TalentType.ENGINEERING}/ skill talents for a more balanced flow.`] },
    { version: "1.0.3.20240129", changes: [`Added /b:${TalentType.ENGINEERING}/ skill talents.`] },
    { version: "1.0.2.20240124", changes: [`Added /b:${ViewMode.LIST.replace("_", " ")}/ for skill talents.`] },
    { version: "1.0.1.20240122", changes: [`Rearranged /b:${TalentType.STUDY}/ skill talents for a more balanced flow.`] },
    { version: "1.0.0.20240120", changes: [`Added /b:${TalentType.STUDY}/ skill talents.`] },
]

const PatchNotesDisplay: React.FC = () => {
    return (
        <div className="w-full h-full relative overflow-hidden">
            <div className={`absolute w-full h-full overflow-y-scroll flex p-8 flex-col gap-8 ${styles.overflowContainer}`}>
                {
                    PATCH_NOTES.map((notes: Notes, index: number) => {
                        return (
                            <Notes key={index} notes={notes} />
                        )
                    })
                }
            </div>
        </div>
    )
}

const Notes: React.FC<{ notes: Notes }> = ({ notes }) => {
    return (
        <div className="flex flex-col gap-2">
            <span className="font-bold text-[1.5rem] leading-[1.5rem]">v{notes.version}:</span>
            <div className="flex flex-col gap-1 font-century-gothic tracking-[1px] text-[1.25rem]">
                {
                    notes.changes.map((note: string, index: number) => {
                        return (
                            <span key={index}>{TextStyleParser(note)}</span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PatchNotesDisplay;