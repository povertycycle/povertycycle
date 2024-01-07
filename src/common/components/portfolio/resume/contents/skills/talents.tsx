import { TALENT_TREES, TalentIcon } from "./skill-tree";
import talentData from "./talents.json";
import styles from "./talents.module.scss";

interface Talent {
    name: string,
    active: boolean,
    points?: string,
}

const TALENTS = talentData.talents as { [key: string] : Talent | undefined };
const MAX_WIDTH = 9;

// const TalentDescription : React.FC<{ highlight: number }> = ({ highlight }) => {
//     const talentDetails = TALENTS[highlight.toString()];

//     return (
//         <div className="w-full h-full bg-gradient-to-l select-none from-black flex flex-col p-4 gap-[1.5rem] tracking-[0px]">
//             <div className="bg-white w-[8rem] h-[8rem]"></div>
//             <div className="flex flex-col">
//                 <span className="text-[2rem]">{talentDetails?.name}</span>
//                 <span>Talent ID: #{highlight.toString().padStart(3, "0")}</span>
//             </div>
//         </div>
//     )
// }

export const TalentTree : React.FC<{ aspect: string }> = ({ aspect }) => {
    return (
        <div className="flex flex-col p-4 items-center w-full text-[1.25rem]">
            {/* <span>{section.toUpperCase()}</span>
            <span>0 POINTS AVAILABLE</span> */}
            <div className="h-full flex flex-col relative items-center" style={{
                width: `${(MAX_WIDTH * 3) + (MAX_WIDTH - 1) + 0.2}rem`
            }}>
                {
                    TALENT_TREES[aspect].length === 0 ? 
                    <div className="h-full w-full flex justify-center items-center">In Progress</div> : 
                    TALENT_TREES[aspect].map((icon: TalentIcon, index: number) => {
                        const talent = TALENTS[icon.id];

                        return (
                            <div className="absolute" style={{
                                left: `${icon.x * 4.5}rem`,
                                top: `${0 + icon.y * 4.5}rem`
                            }}>
                                <div key={index} className={`flex justify-center w-[3rem] h-[3rem] bg-sea-blue-dark shadow-[inset_0_0_8px_black] border-2 border-gold absolute ${talent?.active ? "rounded-[0.35rem]" : "rounded-full"}`}>
                                    {
                                        icon.children?.map((magnitude: number | null, index: number)=> {
                                            return (
                                                magnitude !== null ? 
                                                <div key={index} className={`z-[-1] top-[1.5rem] absolute h-[2.5rem] w-[0.2rem] bg-gold ${styles.talentArrow}`} style={{
                                                    height: `${2.55 + (4.5 * magnitude) + Math.abs((index - 1) * magnitude)}rem`,
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



