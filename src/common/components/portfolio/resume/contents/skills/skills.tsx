import styles from "../animations.module.scss";
import React, { useState, useContext } from "react";
import ControlsDescription from "../controls-description";
import { AspectType, AspectsContext, SkillTab } from "./constants";
import AspectDisplay from "./aspects";
import TalentsDisplay from "./talents";
import PatchNotesDisplay from "./patch-notes";

const SkillDisplay: React.FC = () => {
    const { activeTab } = useContext(AspectsContext);

    return (
        <div className={`w-full h-full flex relative justify-center tracking-[0px] bg-black/40 border-y-[3px] border-gold/75 ${styles.skillsAnimation}`}>
            {
                (() => {
                    switch (activeTab) {
                        case SkillTab.ASPECTS:
                            return <AspectDisplay />;
                        case SkillTab.TALENTS:
                            return <TalentsDisplay />;
                        case SkillTab.PATCH_NOTES:
                            return <PatchNotesDisplay />;
                    }
                })()
            }
        </div>
    )
}

const AspectsNavigator: React.FC = () => {
    const { activeTab, setActiveTab } = useContext(AspectsContext);

    return (
        <div className={`absolute z-[2] left-0 bottom-0 w-fit flex gap-4 px-8 h-full overflow-hidden ${styles.aspectsNavAnimation}`}>
            {
                (Object.values(SkillTab) as SkillTab[]).map((tab: SkillTab, index: number) => {
                    const changeTab = () => {
                        if (activeTab === tab) return;
                        setActiveTab(tab);
                    };

                    return (
                        <div key={index} className={`${activeTab === tab ? "opacity-100" : "cursor-pointer opacity-50 hover:opacity-75"} h-[75%] px-4 bg-sea-blue-dark flex items-center rounded-b-[0.5rem] border-gold/75 border-x-[3px] border-b-[3px]`} onClick={changeTab}>{tab.toUpperCase().replaceAll("-", " ")}</div>
                    )
                })
            }
        </div>
    )
}

const Skills: React.FC = () => {
    const [activeTab, setActiveTab] = useState<SkillTab>(SkillTab.ASPECTS);
    const [aspect, setAspect] = useState<AspectType | undefined>();
    const value = { activeTab, setActiveTab, aspect, setAspect };

    return (
        <AspectsContext.Provider value={value}>
            <div className={`flex flex-col w-full h-full items-end justify-center text-[1.5rem] font-market-deco select-none`}>
                <SkillDisplay />
                <div className="flex gap-2 w-full items-between justify-end relative">
                    <AspectsNavigator />
                    <ControlsDescription tag="skills" />
                </div>
            </div>
        </AspectsContext.Provider>
    )
}

export default Skills;
