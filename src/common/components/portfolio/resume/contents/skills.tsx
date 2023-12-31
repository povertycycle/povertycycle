import styles from "./talents.module.scss";
import { useState } from "react";
import talentData from "./talents.json";
import ControlsDescription from "./controls-description";
import { TALENT_TREES, TalentIcon } from "./skill-tree";

interface Talent {
    name: string,
    active: boolean,
}

const MAX_WIDTH = 9;
const TALENT_CATEGORIES = [ "technical", "arts", "physical", "general" ];
const CATEGORY_TREES : { [key: string]: string[] } = {
    "technical": ["engineering", "science"],
    "arts": ["forms", "theory"],
    "physical": ["sports", "knowledge"],
    "general": ["essence", "application"],
}

const TalentTree : React.FC<{ section: string }> = ({ section }) => {
    const TALENTS : {[key: string] : Talent} = talentData.talents;
    return (
        <div className="flex flex-col p-4 items-center w-full text-[1.25rem]">
            {/* <span>{section.toUpperCase()}</span>
            <span>0 POINTS AVAILABLE</span> */}
            <div className="h-full flex flex-col relative items-center" style={{
                width: `${(MAX_WIDTH * 3) + (MAX_WIDTH - 1) + 0.2}rem`
            }}>
                {
                    TALENT_TREES[section].map((icon: TalentIcon, index: number) => {
                        console.log(icon);
                        const talent = TALENTS[icon.id];

                        return (
                            <div className="absolute" style={{
                                left: `${icon.x * 4.5}rem`,
                                top: `${0.5 + icon.y * 4.5}rem`
                            }}>
                                <div key={index} className={`flex justify-center w-[3rem] h-[3rem] bg-white shadow-[inset_0_0_4px_black] border-2 border-gold absolute ${talent.active ? "rounded-[0.35rem]" : "rounded-full"}`}>
                                    {
                                        icon.children?.map((magnitude: number | null, index: number)=> {
                                            return (
                                                magnitude !== null ? 
                                                <div key={index} className={`z-[-1] top-[1.5rem] absolute h-[2.5rem] w-[0.2rem] bg-gold ${styles.talentArrow}`} style={{
                                                    height: `${2.55 + (4.5 * magnitude) + Math.abs((index - 1) * 1.15)}rem`,
                                                    marginLeft: `${(index - 1) * 4.15}rem`,
                                                    transform: `rotate(${(index - 1) * -45}deg)`,
                                                }} /> :
                                                null
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const CategoryTab : React.FC<{ category: string, active: boolean, setActive: (tag: string) => void }> = ({ category, active, setActive }) => {
    const handleSetActive = () => {
        setActive(category);
    }
    // transition-[transform,width] [transition:transform_0.15s,width_1s] !active(hover:scale-105)
    return (
        <div className={`flex gap-2 h-full border-[2px] border-white rounded-[0.25rem] px-8 ${active ? "w-full" : "w-0 cursor-pointer"}`} onClick={handleSetActive}>
            {
                active && CATEGORY_TREES[category].map((tree: string, index: number) => {
                    return <TalentTree key={index} section={tree} />;
                })
            }
        </div>
    )
}

const CategoryOptions : React.FC = () => {
    const [active, setActive] = useState<string>("");

    return (
        <div className="w-full h-full flex gap-4 justify-center px-16 tracking-[0px]">
            {
                TALENT_CATEGORIES.map((category: string, index: number) => {
                    return (
                        <CategoryTab key={index} category={category} active={active === category} setActive={setActive} />
                    )
                })
            }
        </div>
    )
}

const Skills : React.FC = () => {
    return (
        <div className="flex flex-col w-full h-full gap-2 items-end text-[1.5rem] font-market-deco">
            <CategoryOptions />
            <div className="flex w-[40%] justify-end">
                <ControlsDescription tag="skills" />
            </div>
        </div>
    )
}

export default Skills;
