import "remixicon/fonts/remixicon.css";
import { useState } from "react";
import { TALENT_TREES, TalentIcon } from "./skill-tree";
import talentData from "./talents.json";
import styles from "./talents.module.scss";

interface Talent {
    name: string,
    active: boolean,
    points?: number,
    maxPoints?: number,
    icon?: string,
    description?: string,
    levelDescription?: string[],
}

const { SIZE, GAP }  = { SIZE: 3, GAP: 1.5 };
const TALENTS = talentData.talents as { [key: string] : Talent | undefined };
const MAX_WIDTH = 9;

const TalentImage : React.FC<{ icon: string }> = ({ icon }) => {
    return (
        icon.startsWith("ri") ?
        <i className={icon}></i> :
        <div></div>
    )
}

const TalentIcon : React.FC<{ icon: TalentIcon, talent: Talent }> = ({ icon, talent }) => {
    const [desc, setDesc] = useState<boolean>(false);

    const showDesc = () => { setDesc(true); };
    const hideDesc = () => { setDesc(false); }

    return (
        <div className="absolute" style={{
            left: `${icon.x * (SIZE + GAP)}rem`,
            top: `${icon.y * (SIZE + GAP)}rem`
        }}>
            <div className={`flex justify-center absolute ${talent.points ? "" : "opacity-60"} ${talent?.active ? "rounded-[0.35rem]" : "rounded-full"}`} style={{
                width: `${SIZE}rem`,
                height: `${SIZE}rem`,
            }}>
                {
                    <div className="h-full flex items-center justify-center text-[2rem] font-normal w-full bg-sea-blue-dark z-[2] border-2 border-gold shadow-[inset_0_0_8px_black] rounded-[inherit]">
                        {
                            talent.icon ? 
                            <TalentImage icon={talent.icon} /> :
                            <div />
                        }
                    </div>
                }
                {
                    talent.points !== undefined && 
                    <div className="absolute rounded-[0.2rem] text-gold leading-[1rem] text-[0.9rem] right-[-1.25rem] bottom-[-0.3rem] px-1 z-[3] bg-black border-2 border-gold">
                        {talent.points}/{talent.maxPoints}
                    </div>
                }
                {
                    desc &&
                    <div className="absolute z-[4] left-[100%] w-[10rem] select-none bg-black/50 flex flex-col p-4 gap-[1.5rem] tracking-[0px]">
                        <div className="bg-sea-blue-dark aspect-square border-2 border-gold rounded-[0.25rem] flex items-center justify-center font-normal text-[4rem]">
                            {
                                talent.icon ? 
                                <TalentImage icon={talent.icon} /> :
                                <div />
                            }
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-[1rem]">{talent?.name}</span>
                            <span className="text-[0.8rem]">{talent.description}</span>
                        </div>
                    </div>
                }
                {
                    icon.children?.map((magnitude: number | null, index: number)=> {
                        return (
                            magnitude !== null ? 
                            (() => {
                                const degree = ((index - 1) * -45);
                                const height = (SIZE / 2 + GAP) / Math.cos(degree) + (index === 1 ? 1 : -1) * (magnitude * 1);
                                const left = - (Math.tan(degree) * (height / 2 - 0.4));
                                const top = SIZE / 2 + ((index - 1)  * Math.sin(degree)) - 0.2;

                                return (
                                    <div key={index} className={`z-[1] absolute w-[2px] bg-gold ${styles.talentArrow}`} style={{
                                        transform: `rotate(${degree}deg)`,
                                        height: `${height}rem`,
                                        marginLeft: `${left}rem`,
                                        top: `${top}rem`,
                                    }} />
                                );
                            })() :
                            null
                        )
                    })
                }
            </div>
        </div>
    )
}

// {
//     Array.from({ length: 10 }).map((_, index: number) => {
//         return (
//             <div className="z-[0] flex items-center justify-end px-4 text-[1.5rem] absolute w-full bg-gradient-to-l from-transparent via-sea-blue-dark/25" style={{ opacity: 0.5, height: `${SIZE}rem`, top: `${1.25 + (SIZE + GAP) * index}rem` }}>
//                 <div>Tier {index + 1}</div>
//             </div>
//         )
//     })
// }

export const TalentTree : React.FC<{ aspect: string }> = ({ aspect }) => {
    return (
        <div className="flex flex-col p-[1.25rem] items-center w-full text-[1.25rem] relative">
            <div className="z-[1] absolute left-0 top-0 p-4 flex flex-col">
                <span className="text-[3rem]">{aspect.toUpperCase()}</span>
                <span>0 POINTS AVAILABLE</span>
            </div>
            <div className={`z-[1] h-full flex flex-col relative items-center overflow-hidden`} style={{
                width: `${(MAX_WIDTH * 3) + ((MAX_WIDTH - 1) * 1.5)}rem`
            }}>
                
                {
                    // TALENT_TREES[aspect].length === 0 ? 
                    <div className="h-full w-full flex justify-center items-center">In Progress</div>
                    // TALENT_TREES[aspect].map((icon: TalentIcon, index: number) => {
                    //     const talent = TALENTS[icon.id];
                    //     return (
                    //         talent ? 
                    //         <TalentIcon key={index} talent={talent} icon={icon} /> :
                    //         null
                    //     )
                    // })
                }
            </div>
        </div>
    )
}



