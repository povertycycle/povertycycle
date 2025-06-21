import { TalentType } from "../interfaces";
import { ViewMode } from "../talents/interfaces";

type Notes = { version: string; changes: string[] };

export const PATCH_NOTES: Notes[] = [
    {
        version: "1.0.12.20240324",
        changes: [
            `Added full /b:${TalentType.ESSENCE}/ and /b:${TalentType.APPLICATION}/ skill talents.`,
        ],
    },
    {
        version: "1.0.11.20240316",
        changes: [
            `Added full /b:${TalentType.ENTERTAINMENT}/ skill talents and rebalanced skills costs and special resources.`,
        ],
    },
    {
        version: "1.0.10.20240305",
        changes: [
            `Added full /b:${TalentType.KNOWLEDGE}/ skill talents and rebalanced some skills' description.`,
        ],
    },
    {
        version: "1.0.9.20240227",
        changes: [
            `Added full /b:${TalentType.FORM}/ skill talents and skeleton for /b:${TalentType.KNOWLEDGE}/ skill talents.`,
        ],
    },
    {
        version: "1.0.8.20240212",
        changes: [
            `Added some /b:${TalentType.FORM}/ skill talents and rebalanced end-game talents for /b:${TalentType.THEORY}/.`,
        ],
    },
    {
        version: "1.0.7.20240209",
        changes: [`Added /b:${TalentType.THEORY}/ skill talents.`],
    },
    {
        version: "1.0.6.20240204",
        changes: [
            `Rearranged /b:${TalentType.ENGINEERING}/ and /b:${TalentType.STUDY}/ skill talents for a better visual.`,
        ],
    },
    {
        version: "1.0.5.20240202",
        changes: [
            `Balanced, fixed, and added some of the /b:${TalentType.ENGINEERING}/ skill talents. Arrows drawn using canvas instead of divs.`,
        ],
    },
    {
        version: "1.0.4.20240131",
        changes: [
            `Rearranged /b:${TalentType.ENGINEERING}/ skill talents for a more balanced flow.`,
        ],
    },
    {
        version: "1.0.3.20240129",
        changes: [`Added /b:${TalentType.ENGINEERING}/ skill talents.`],
    },
    {
        version: "1.0.2.20240124",
        changes: [
            `Added /b:${ViewMode.LIST.replace("_", " ")}/ for skill talents.`,
        ],
    },
    {
        version: "1.0.1.20240122",
        changes: [
            `Rearranged /b:${TalentType.STUDY}/ skill talents for a more balanced flow.`,
        ],
    },
    {
        version: "1.0.0.20240120",
        changes: [`Added /b:${TalentType.STUDY}/ skill talents.`],
    },
];

export const PatchNotesDisplay: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col relative p-2 sm:p-4">
            <div
                className={`w-full h-0 grow overflow-y-auto flex flex-col gap-4 sm:gap-8 form__scrollbar--custom`}
            >
                {PATCH_NOTES.map((notes: Notes, index: number) => {
                    return <Notes key={index} notes={notes} />;
                })}
            </div>
        </div>
    );
};

const Notes: React.FC<{ notes: Notes }> = ({ notes }) => {
    return (
        <div className="flex flex-col sm:gap-2">
            <span className="text-lg tracking-wider">v{notes.version}:</span>
            <div className="flex flex-col gap-1 font-century-gothic text-sm sm:text-base tracking-wider">
                {notes.changes.map((note: string, index: number) => {
                    return <span key={index}>{TextStyleParser(note)}</span>;
                })}
            </div>
        </div>
    );
};

const TextStyleParser = (text: string) => {
    const styling = text.split("/");
    return (
        <>
            -
            {styling.map((str: string, index: number) => {
                const styled = /^[bi]\:\w+/.test(str);
                if (styled) {
                    const [style, val] = str.split(":");
                    switch (style) {
                        case "b":
                            return <b key={index}>{val}</b>;
                        case "i":
                            return <em key={index}>{val}</em>;
                        default:
                            return <span key={index}>{val}</span>;
                    }
                } else {
                    return <span key={index}>{str}</span>;
                }
            })}
        </>
    );
};
