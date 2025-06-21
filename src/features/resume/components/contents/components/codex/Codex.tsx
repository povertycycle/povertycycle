import { Dispatch, SetStateAction, useState } from "react";
import { JOURNALS, MISSING, OPTIONS } from "./constants";
import { Controllers } from "../controllers/Controllers";
import styles from "./codex.module.scss";

export const Codex: React.FC = () => {
    const [active, setActive] = useState<number>(0);

    return (
        <div className="flex max-sm:flex-col w-full h-full gap-4 justify-between text-xs sm:text-base">
            <JournalOptions active={active} setActive={setActive} />
            <div className="flex flex-col gap-1 w-full sm:w-[40%] max-sm:h-0 max-sm:grow sm:h-full items-end">
                <JournalDescription active={active} />
                <Controllers tag="codex" />
            </div>
        </div>
    );
};

const JournalOptions: React.FC<{
    active: number;
    setActive: Dispatch<SetStateAction<number>>;
}> = ({ active, setActive }) => {
    return (
        <div
            className={`${styles.codexAnim} gap-0.5 p-2 sm:p-4 h-[30%] sm:h-full w-full sm:w-[30%] bg-gradient-to-r sm:from-black flex flex-col overflow-y-auto form__scrollbar--custom`}
        >
            {OPTIONS.map((journal, index: number) => {
                const isActive = active === index;
                const handleChangeActive = () => {
                    setActive(index);
                };
                return (
                    <div
                        className={`w-[90%] flex relative group cursor-pointer ${
                            isActive ? "text-black" : "text-soft-white"
                        }`}
                        key={index}
                        onClick={handleChangeActive}
                    >
                        <div
                            className={`absolute w-full h-full rounded-semi transition-transform from-60% ${
                                active == index
                                    ? "-skew-x-12 bg-gradient-to-r from-soft-white translate-x-2"
                                    : "bg-gradient-to-r from-sea-blue-dark/35 group-hover:from-sea-blue-dark/75 group-hover:-skew-x-12 group-hover:translate-x-2"
                            }`}
                        />
                        <div
                            className={`flex gap-2 px-2 py-1 w-full relative z-2 transition-transform ${
                                isActive
                                    ? "translate-x-4"
                                    : "group-hover:translate-x-4"
                            }`}
                        >
                            <span className="w-8 sm:w-12">
                                {index.toString().padStart(3, "0")}
                            </span>
                            <span>{journal}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const JournalDescription: React.FC<{ active: number }> = ({ active }) => {
    const jKey = OPTIONS[active];
    const selectedJournal = JOURNALS[jKey] ?? MISSING;

    return (
        <div
            className={`${styles.codexAnim} gap-0.5 p-2 sm:p-4 h-full w-full bg-gradient-to-l from-black/75 flex flex-col select-none`}
        >
            <div className="w-full items-center text-center text-sm sm:text-lg bg-gradient-to-l via-sea-blue-dark/25 flex flex-col gap-1">
                <div className="w-full h-0.5 bg-gradient-to-l via-white/70" />
                {selectedJournal.heading}
                <div className="w-full h-0.5 bg-gradient-to-l via-white/70" />
            </div>
            <div className="flex flex-col w-full gap-2 h-0 grow overflow-y-auto relative form__scrollbar--custom m-2 sm:mt-4 text-xxs sm:text-sm tracking-wider">
                <div className="flex w-full bg-gradient-to-l from-sea-blue-dark/35 items-center justify-center">
                    <span className="py-2 px-4 text-center italic font-century-gothic text-gold text-sm/5 sm:text-lg tracking-wide">
                        {selectedJournal.flavorText}
                    </span>
                </div>
                {selectedJournal.description.map(
                    (text: string, index: number) => {
                        return (
                            <div
                                key={index}
                                className="flex w-full bg-gradient-to-l from-sea-blue-dark/35 justify-end text-end whitespace-preline py-2 sm:py-3 px-3 sm:px-4"
                            >
                                <span>{text}</span>
                            </div>
                        );
                    }
                )}
            </div>
        </div>
    );
};
