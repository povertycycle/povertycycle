import styles from "../animations.module.scss";
import React, { useState, useContext } from "react";
import ControlsDescription from "../controls-description";
import { AspectType, AspectsContext } from "./constants";
import AspectDisplay from "./aspects";
import TalentsDisplay from "./talents";

const SkillDisplay : React.FC = () => {
    const { isAspects } = useContext(AspectsContext);

    return (
        <div className={`w-full h-full flex relative justify-center tracking-[0px] bg-black/40 border-y-[3px] border-gold/75 ${styles.skillsAnimation}`}>
            {
                isAspects ?
                <AspectDisplay /> :
                <TalentsDisplay />
            }
        </div>
    )
}

const AspectsNavigator : React.FC = () => {
    const { isAspects, setIsAspects } = useContext(AspectsContext);

    const displayAspects = () => {
        if (isAspects) return;
        setIsAspects(true);
    }

    const displayTalents = () => {
        if (!isAspects) return;
        setIsAspects(false);
    }

    return (
        <div className={`w-full flex gap-4 px-8 h-full overflow-hidden ${styles.aspectsNavAnimation}`}>
            <div className={`${isAspects ? "opacity-100" : "cursor-pointer opacity-50 hover:opacity-75"} h-[75%] px-4 bg-sea-blue-dark flex items-center rounded-b-[0.5rem] border-gold/75 border-x-[3px] border-b-[3px]`} onClick={displayAspects}>Aspects</div>
            <div className={`${!isAspects ? "opacity-100" : "cursor-pointer opacity-50 hover:opacity-75"} h-[75%] px-4 bg-sea-blue-dark flex items-center rounded-b-[0.5rem] border-gold/75 border-x-[3px] border-b-[3px]`} onClick={displayTalents}>Talents</div>
        </div>
    )
}

const Skills : React.FC = () => {
    const [isAspects, setIsAspects] = useState<boolean>(true);
    const [aspect, setAspect] = useState<AspectType | undefined>();
    const value = { isAspects, setIsAspects, aspect, setAspect };

    return (
        <AspectsContext.Provider value={value}>
            <div className={`flex flex-col w-full h-full items-end justify-center text-[1.5rem] font-market-deco select-none`}>
                <SkillDisplay />
                <div className="flex gap-2 w-full items-between justify-start">
                    <AspectsNavigator />
                    <ControlsDescription tag="skills" />
                </div>
            </div>
        </AspectsContext.Provider>
    )
}

export default Skills;
