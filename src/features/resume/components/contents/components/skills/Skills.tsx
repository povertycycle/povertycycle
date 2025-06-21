import { useContext, useState } from "react";
import { Controllers } from "../controllers/Controllers";
import { AspectDisplay } from "./aspect-display/AspectDisplay";
import { AspectType, SkillTab } from "./constants";
import { PatchNotesDisplay } from "./patch-notes/PatchNotesDisplay";
import styles from "./skills.module.scss";
import { AspectsContext } from "./store";
import { TalentsDisplay } from "./talents/TalentsDisplay";

/**
 * Skills tab
 */
export const Skills: React.FC = () => {
    const [activeTab, setActiveTab] = useState<SkillTab>(SkillTab.ASPECTS);
    const [aspect, setAspect] = useState<AspectType | undefined>();
    const value = { activeTab, setActiveTab, aspect, setAspect };

    return (
        <AspectsContext.Provider value={value}>
            <div
                className={`flex flex-col w-full h-full items-end justify-center font-market-deco select-none`}
            >
                <SkillDisplay />
                <div className="flex max-sm:flex-col w-full items-end justify-end relative gap-4">
                    <AspectsNavigator />
                    <Controllers tag="skills" />
                </div>
            </div>
        </AspectsContext.Provider>
    );
};

const SkillDisplay: React.FC = () => {
    const { activeTab } = useContext(AspectsContext);

    return (
        <div
            className={`w-full h-full flex relative justify-center tracking-[0px] bg-black/40 border-y sm:border-y-2 border-gold/75 ${styles.skillsAnim}`}
        >
            {(() => {
                switch (activeTab) {
                    case SkillTab.ASPECTS:
                        return <AspectDisplay />;
                    case SkillTab.TALENTS:
                        return <TalentsDisplay />;
                    case SkillTab.PATCH_NOTES:
                        return <PatchNotesDisplay />;
                    default:
                        return <></>;
                }
            })()}
        </div>
    );
};

const AspectsNavigator: React.FC = () => {
    const { activeTab, setActiveTab } = useContext(AspectsContext);

    return (
        <div
            className={`sm:absolute z-2 left-0 top-0 flex sm:gap-2 sm:px-6 max-sm:w-full h-fit overflow-hidden text-xs sm:text-sm ${styles.aspectAnim}`}
        >
            {Object.values(SkillTab).map((tab) => {
                const changeTab = () => {
                    if (activeTab === tab) return;
                    setActiveTab(tab);
                };

                return (
                    <div
                        key={tab}
                        className={`${
                            activeTab === tab
                                ? "opacity-100"
                                : "cursor-pointer opacity-50 hover:opacity-75"
                        } h-full sm:h-3/4 max-sm:w-full px-4 bg-sea-blue-dark flex items-center sm:rounded-b-lg py-1 border-gold/75 sm:border-x-2 border-b sm:border-b-2`}
                        onClick={changeTab}
                    >
                        <span className="mx-auto">
                            {tab.toUpperCase().replaceAll("-", " ")}
                        </span>
                    </div>
                );
            })}
        </div>
    );
};
