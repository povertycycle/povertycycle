import styles from "../animations.module.scss";
import React from "react";
import { TalentType, ViewMode } from "./constants";
import { TextStyleParser } from "@/common/utils/parser";

type Notes = { version: string, changes: string[] }

const PATCH_NOTES : Notes[] = [
    { version: "1.0.5.20240202", changes: [`Fixed /b:${TalentType.ENGINEERING.toUpperCase()}/ skill talents.`] },
    { version: "1.0.4.20240131", changes: [`Rearranged /b:${TalentType.ENGINEERING.toUpperCase()}/ skill talents for a more balanced flow.`] },
    { version: "1.0.3.20240129", changes: [`Added /b:${TalentType.ENGINEERING.toUpperCase()}/ skill talents.`] },
    { version: "1.0.2.20240124", changes: [`Added /b:${ViewMode.LIST.toUpperCase().replace("_", " ")}/ for skill talents.`] },
    { version: "1.0.1.20240122", changes: [`Rearranged /b:${TalentType.STUDY.toUpperCase()}/ skill talents for a more balanced flow.`] },
    { version: "1.0.0.20240120", changes: [`Added /b:${TalentType.STUDY.toUpperCase()}/ skill talents.`] },
]

const PatchNotesDisplay : React.FC = () => {
    return (
        <div className="w-full h-full relative overflow-hidden">
            <div className={`absolute w-full h-full overflow-y-scroll flex p-8 flex-col gap-16 ${styles.overflowContainer}`}>
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

const Notes : React.FC<{ notes: Notes }> = ({ notes }) => {
    return (
        <div className="flex flex-col gap-4">
            <span className="font-bold text-[2.5rem] leading-[2.5rem]">Version {notes.version}:</span>
            <div className="flex flex-col gap-2 font-century-gothic tracking-[1px] text-[1.5rem]">
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