import { useState } from "react";
import ControlsDescription from "./controls-description";
import { SKILL_TREE } from "./skill-tree";


const TalentTree : React.FC<{ tree: string[][] }> = ({ tree }) => {
    return (
        <div className="w-full h-full border-2 border-white">

        </div>
    )
}

const SkillSection : React.FC<{ title: string, tree: string[][] }> = ({ title, tree }) => {
    return (
        <div className="flex flex-col p-4 items-center w-full text-[1.25rem]">
            <span>{title.toUpperCase()}</span>
            <span>0 SKILL POINTS AVAILABLE</span>
            <TalentTree tree={tree} />
        </div>
    )
}

const CategoryTab : React.FC<{ tag: string, active: boolean, trees: {[key: number] : { title: string, tree: string[][] }}, setActive: (tag: string) => void }> = ({ tag, active, trees, setActive }) => {
    const handleSetActive = () => {
        setActive(tag);
    }
    // transition-[transform,width] [transition:transform_0.15s,width_1s] !active(hover:scale-105)
    return (
        <div className={`flex gap-2 h-full border-[2px] border-white rounded-[0.25rem] px-8 ${active ? "w-full" : "w-0 cursor-pointer"}`} onClick={handleSetActive}>
            {
                active && 
                Object.values(trees).map((tree) => {
                    return (
                        <SkillSection title={tree.title} tree={tree.tree} />
                    )
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
                Object.values(SKILL_TREE).map((section) => {
                    return (
                        <CategoryTab tag={section.tag} active={active === section.tag} trees={section.skill_trees} setActive={setActive} />
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