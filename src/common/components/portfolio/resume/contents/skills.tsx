import styles from "./content.module.scss";
import talentStyles from "./talents.module.scss";
import { useState, useContext, Dispatch, SetStateAction } from "react";
import talentData from "./talents.json";
import ControlsDescription from "./controls-description";
import { TALENT_TREES, TalentIcon } from "./skill-tree";
import { AspectsContext } from "../../global-context";

interface Talent {
    name: string,
    active: boolean,
    points?: string,
}

const TALENTS = talentData.talents as { [key: string] : Talent | undefined };
const MAX_WIDTH = 9;
const ASPECTS : {[key: string] : { description: string }} =  {
    "technical": {
        description: "An aspect assembled from the uncharted depths of knowledge; none knows the full potential of its reaches."
    }, 
    "arts": {
        description: "An aspect crafted from the endless well of imagination; all revels in the spread of its beauty."
    }, 
    "physical": {
        description: "technical"
    }, 
    "general": {
        description: "technical"
    }
};

const ASPECT_TREES : { [key: string]: string[] } = {
    "technical": ["engineering", "science"],
    "arts": ["forms", "theory"],
    "physical": ["sports", "knowledge"],
    "general": ["essence", "application"],
}


const TalentDescription : React.FC<{ highlight: number }> = ({ highlight }) => {
    const talentDetails = TALENTS[highlight.toString()];

    return (
        <div className="w-full h-full bg-gradient-to-l select-none from-black flex flex-col p-4 gap-[1.5rem] tracking-[0px]">
            <div className="bg-white w-[8rem] h-[8rem]"></div>
            <div className="flex flex-col">
                <span className="text-[2rem]">{talentDetails?.name}</span>
                <span>Talent ID: #{highlight.toString().padStart(3, "0")}</span>
            </div>
        </div>
    )
}

const TalentTree : React.FC<{ aspect: string }> = ({ aspect }) => {
    return (
        <div className="flex flex-col p-4 items-center w-full text-[1.25rem]">
            {/* <span>{section.toUpperCase()}</span>
            <span>0 POINTS AVAILABLE</span> */}
            <div className="h-full flex flex-col relative items-center" style={{
                width: `${(MAX_WIDTH * 3) + (MAX_WIDTH - 1) + 0.2}rem`
            }}>
                {
                    TALENT_TREES[aspect].map((icon: TalentIcon, index: number) => {
                        const talent = TALENTS[icon.id];

                        return (
                            <div className="absolute" style={{
                                left: `${icon.x * 4.5}rem`,
                                top: `${0 + icon.y * 4.5}rem`
                            }}>
                                <div key={index} className={`flex justify-center w-[3rem] h-[3rem] bg-white shadow-[inset_0_0_4px_black] border-2 border-gold absolute ${talent?.active ? "rounded-[0.35rem]" : "rounded-full"}`}>
                                    {
                                        icon.children?.map((magnitude: number | null, index: number)=> {
                                            return (
                                                magnitude !== null ? 
                                                <div key={index} className={`z-[-1] top-[1.5rem] absolute h-[2.5rem] w-[0.2rem] bg-gold ${talentStyles.talentArrow}`} style={{
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




const AspectIcon : React.FC = () => {
    return (
        <div className="flex gap-4 w-full items-center justify-center">
            <div className="transition-width group-hover/aspects:w-full w-0 h-[0.25rem] bg-gradient-to-l from-white rounded-l-[100%]"></div>
            <div className=" w-[70px] h-[70px] shrink-0 flex items-center justify-center rounded-full bg-gradient-to-bl from-default-white to-black">
                <div className="w-[64px] h-[64px] bg-black rounded-full"></div>
            </div>
            <div className="transition-width group-hover/aspects:w-full w-0 h-[0.25rem] bg-gradient-to-r from-white rounded-r-[100%]"></div>
        </div>
    )
}


const AspectDescription : React.FC<{ aspect: string }> = ({ aspect }) => {
    const aspectData = ASPECTS[aspect];
    return (
        <div className="flex flex-col items-center gap-[1.5rem] pt-60 w-full p-4">
            <span className="text-[1.75rem] text-center">{aspect}</span>
            <AspectIcon />
            
            <span className="text-center font-century-gothic">{aspectData.description}</span>
        </div>
    )
}

const AspectSection : React.FC<{ aspect: string, active: boolean, setActiveAspect: Dispatch<SetStateAction<string>> }> = ({ aspect, active, setActiveAspect }) => {
    const { isAspects, setIsAspects } = useContext(AspectsContext);
    const handleSetActive = () => {
        setActiveAspect(aspect);
        setIsAspects(false);
    }

    return (
        <div className={`flex h-full ${isAspects ? "w-full group/aspects" : (active ? "w-full" : "w-0") } shrink-1 cursor-pointer`} onClick={handleSetActive}>
            {
                isAspects ?
                <AspectDescription aspect={aspect} /> :
                (
                    active ? 
                    <>
                        {
                            ASPECT_TREES[aspect].map((tree: string, index: number) => {
                                return <TalentTree key={index} aspect={tree} />
                            })
                        }
                    </> :
                    null
                )
            }
        </div>
    )
}

const AspectsDisplay : React.FC = () => {  
    const { isAspects } = useContext(AspectsContext);
    const [activeAspect, setActiveAspect] = useState<string>("");

    return (
        <div className={`w-full h-full flex justify-center px-4 tracking-[0px] bg-black/30 border-y-[3px] border-gold/75 overflow-hidden ${styles.skillsAnimation}`}>
            {
                Object.keys(ASPECTS).map((aspect: string, index: number) => {
                    return (
                        <>
                            {index !== 0 && <div className={`shrink-0 bg-gradient-to-b from-transparent via-gold rounded-[100%] ${isAspects ? "h-full w-[0.2rem]" : "h-0 w-0"}`}/>}
                            <AspectSection key={index} aspect={aspect} active={activeAspect === aspect} setActiveAspect={setActiveAspect} />
                        </>
                    )
                })
            }
        </div>
    )
}

const AspectsNavigator : React.FC = () => {
    const { isAspects, setIsAspects } = useContext(AspectsContext);

    const displayAspects = () => {
        setIsAspects(true);
    }

    const displayTalents = () => {
        setIsAspects(false);
    }

    return (
        <div className={`w-full flex gap-4 px-8 select-none h-full overflow-hidden ${styles.aspectsNavAnimation}`}>
            <div className={`${isAspects ? "opacity-100" : "cursor-pointer opacity-50 hover:opacity-75"} h-[75%] px-4 bg-sea-blue-dark flex items-center rounded-b-[0.5rem] border-gold/75 border-x-[3px] border-b-[3px]`} onClick={displayAspects}>Aspects</div>
            <div className={`${!isAspects ? "opacity-100" : "cursor-pointer opacity-50 hover:opacity-75"} h-[75%] px-4 bg-sea-blue-dark flex items-center rounded-b-[0.5rem] border-gold/75 border-x-[3px] border-b-[3px]`} onClick={displayTalents}>Talents</div>
        </div>
    )
}

const Skills : React.FC = () => {
    const [isAspects, setIsAspects] = useState<boolean>(true);
    const value = { isAspects, setIsAspects };

    return (
        <AspectsContext.Provider value={value}>
            <div className={`flex flex-col w-full h-full items-end justify-center text-[1.5rem] font-market-deco`}>
                <AspectsDisplay />
                <div className="flex gap-2 w-full items-between justify-start">
                    <AspectsNavigator />
                    <ControlsDescription tag="skills" />
                </div>
            </div>
        </AspectsContext.Provider>
    )
}

export default Skills;
