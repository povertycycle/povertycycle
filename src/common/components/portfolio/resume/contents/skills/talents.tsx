import "remixicon/fonts/remixicon.css";
import React, { Fragment, Dispatch, SetStateAction, memo, useContext, useState, useRef, useEffect } from "react";
import talentData from "./talents.json";
import styles from "./talents.module.scss";
import overflow from "../animations.module.scss";
import { AspectType, AspectsContext, ResourceType, Talent, TalentIcon, TalentType, ViewMode } from "./constants";
import { checkOverlap, getExperienceData } from "@/common/utils/math";
import { CustomIcon, CUSTOM_COLORS } from "./talent-icons";

const { SIZE, GAP }  = { SIZE: 3, GAP: 1.5 };
const { TITLE, POINTS } = { TITLE: 2.5, POINTS: 1.25 };
const { HEIGHT, BORDER } = { HEIGHT: 2.5, BORDER: 0.25 }
const OFFSET_IN_PX = (SIZE * 16) + 4;
const TALENTS = talentData.talents as { [ key: string ] : Talent | undefined };
const MAX_WIDTH = 9;
const MAX_HEIGHT = 10;
const REMAINING_POINTS = Math.floor((new Date().getTime() - new Date(2023, 9, 2).getTime()) / (1000 * 60 * 60 * 24 * 365)) * 3;

const BRANCHES : { [key in AspectType] : TalentType[] } = {
    [AspectType.SCIENCE]: [TalentType.ENGINEERING, TalentType.STUDY],
    [AspectType.ARTS]: [TalentType.FORM, TalentType.THEORY],
    [AspectType.PHYSIQUE]: [TalentType.SPORT, TalentType.KNOWLEDGE],
    [AspectType.GENERAL]: [TalentType.ESSENCE, TalentType.APPLICATION],
}

const VIEW_MODE_ICON : { [key in ViewMode] : string } = {
    [ViewMode.TREE]: "ri-git-fork-line",
    [ViewMode.LIST]: "ri-align-justify",
}

const ICON_COLORS : { [key in AspectType] : string } = {
    [AspectType.SCIENCE]: "bg-aspect-green-darker",
    [AspectType.ARTS]: "bg-aspect-blue-darker",
    [AspectType.PHYSIQUE]: "bg-aspect-red-darker",
    [AspectType.GENERAL]: "bg-aspect-yellow-darker"
}

const LIST_COLORS : { [key in AspectType] : string[] } = {
    [AspectType.SCIENCE]: ["via-aspect-green-darker", "from-aspect-green/75", "via-aspect-green-darker/50"],
    [AspectType.ARTS]: ["via-aspect-blue-darker", "from-aspect-blue/75", "via-aspect-blue-darker/50"],
    [AspectType.PHYSIQUE]: ["via-aspect-red-darker", "from-aspect-red/75", "via-aspect-red-darker/50"],
    [AspectType.GENERAL]: ["via-aspect-yellow-darker", "from-aspect-yellow/75", "via-aspect-yellow-darker/50"],
}

const RESOURCE_COLORS : { [key in ResourceType] : string } = {
    [ResourceType.MANA]: "text-mana-cost",
}

const TALENT_TREES : { [key in TalentType] : TalentIcon[] } = {
    [TalentType.ENGINEERING]: [
        { id: 48, x: 4, y: 0, children: [1.4, 0, 1] },
        { id: 49, x: 3, y: 1, children: [1.4, 0] }, { id: 50, x: 4, y: 1, children: [null, 0] }, { id: 51, x: 5, y: 1, children: [null, 0, 1.4] }, 
        { id: 52, x: 2, y: 2, children: [null, 5.5] }, { id: 53, x: 3, y: 2, children: [null, 0] }, { id: 54, x: 4, y: 2, children: [null, 0] }, { id: 55, x: 5, y: 2, children: [null, 0] }, { id: 56, x: 6, y: 2, children: [null, 5.5] }, 
        { id: 57, x: 3, y: 3, children: [1.4, 0] }, { id: 58, x: 4, y: 3, children: [1, 0, 1] }, { id: 59, x: 5, y: 3, children: [null, 0, 1.4] }, 
        { id: 60, x: 2, y: 4, children: [1, null, 1.4] }, { id: 61, x: 3, y: 4, children: [null, 0, 1] }, { id: 62, x: 4, y: 4, children: [null, 0] }, { id: 63, x: 5, y: 4, children: [1, 0] }, { id: 64, x: 6, y: 4, children: [1.4, 0, 1.4] }, 
        { id: 65, x: 1, y: 5, children: [1.4, null, 1.4] }, { id: 66, x: 3, y: 5, children: [1.4, null, 1.4] }, { id: 67, x: 4, y: 5, children: [null, 0] }, { id: 68, x: 5, y: 5, children: [1.4, null, 1.4] }, { id: 69, x: 6, y: 5, children: [null, 0] }, { id: 70, x: 7, y: 5, children: [1.4, null, 1.4] }, 
        { id: 71, x: 0, y: 6, children: [null, null, 1] }, { id: 72, x: 2, y: 6, children: [1, null, 1.4] }, { id: 73, x: 4, y: 6, children: [1.4, null, 1.4] }, { id: 74, x: 6, y: 6, children: [1.4, null, 1] }, { id: 75, x: 8, y: 6, children: [1] }, 
        { id: 76, x: 1, y: 7, children: [null, 0, 1.4] }, { id: 77, x: 3, y: 7, children: [1.4, 0, 1.4] }, { id: 78, x: 5, y: 7, children: [1.4, null, 1.4] }, { id: 79, x: 7, y: 7, children: [1.4, 0] }, 
        { id: 80, x: 1, y: 8, children: [null, 0] }, { id: 81, x: 2, y: 8, children: [1.4] }, { id: 82, x: 3, y: 8, children: [null, 0] }, { id: 83, x: 4, y: 8, children: [1.4, null, 1.4] }, { id: 84, x: 6, y: 8, children: [1.4, null, 1.4] }, { id: 85, x: 7, y: 8, children: [null, 0] }, 
        { id: 86, x: 1, y: 9 }, { id: 87, x: 3, y: 9 }, { id: 88, x: 5, y: 9 }, { id: 89, x: 7, y: 9 }, 
    ],
    [TalentType.STUDY]: [
        { id: 0, x: 4, y: 0, children: [1, 0, 1] },
        { id: 1, x: 3, y: 1, children: [1, 0] }, { id: 2, x: 4, y: 1, children: [null, 0, 1.4] }, { id: 3, x: 5, y: 1, children: [null, 0, 1] },
        { id: 4, x: 2, y: 2, children: [1.4, 5.5, 1.4] }, { id: 5, x: 3, y: 2, children: [null, 0, 1.4] }, { id: 6, x: 4, y: 2, children: [null, 0] }, { id: 7, x: 5, y: 2, children: [1.4, 0] }, { id: 8, x: 6, y: 2, children: [1.4, null, 1] },
        { id: 9, x: 1, y: 3, children: [1.4, 0, 1] }, { id: 10, x: 3, y: 3, children: [1, null, 1] }, { id: 11, x: 4, y: 3, children: [null, 0] }, { id: 12, x: 5, y: 3, children: [1, null, 1.4] }, { id: 13, x: 7, y: 3, children: [1.4, 0, 1.4] },
        { id: 14, x: 0, y: 4, children: [null, 5.5, 1] }, { id: 15, x: 1, y: 4 }, { id: 16, x: 2, y: 4, children: [null, 0] }, { id: 17, x: 4, y: 4, children: [1.4, 0, 1] }, { id: 18, x: 6, y: 4, children: [null, 0, 1.4] }, { id: 19, x: 7, y: 4, children: [null, 0] }, { id: 20, x: 8, y: 4, children: [null, 5.5] },
        { id: 21, x: 1, y: 5 }, { id: 22, x: 2, y: 5, children: [null, 0] }, { id: 23, x: 3, y: 5, children: [1, 0] }, { id: 24, x: 4, y: 5, children: [1, 0, 1.4] }, { id: 25, x: 5, y: 5, children: [null, 0] }, { id: 26, x: 6, y: 5, children: [1.4, 0] }, { id: 27, x: 7, y: 5, children: [1, null, 1] },
        { id: 28, x: 0, y: 6 }, { id: 29, x: 2, y: 6, children: [null, 0] }, { id: 30, x: 3, y: 6, children: [null, 0] }, { id: 31, x: 4, y: 6, children: [1.4, 0, 1.4] }, { id: 32, x: 5, y: 6, children: [null, 0] }, { id: 33, x: 6, y: 6, children: [null, 0] }, { id: 34, x: 8, y: 6 },
        { id: 35, x: 2, y: 7, children: [null, 5.5, 1] }, { id: 36, x: 3, y: 7 }, { id: 37, x: 4, y: 7, children: [null, 0, 1] }, { id: 38, x: 5, y: 7 }, { id: 39, x: 6, y: 7, children: [1, 5.5] }, 
        { id: 40, x: 3, y: 8, children: [null, 0] }, { id: 41, x: 4, y: 8, children: [1.4, 0, 1.4] }, { id: 42, x: 5, y: 8, children: [null, 0, 1] },
        { id: 43, x: 2, y: 9 }, { id: 44, x: 3, y: 9 }, { id: 45, x: 4, y: 9 }, { id: 46, x: 5, y: 9 }, { id: 47, x: 6, y: 9 },
    ],
    [TalentType.FORM]: [],
    [TalentType.THEORY]: [], // fine-arts", "music", "writings" "theme", "color", "structure" "documentation" "typography" "markup", "accessibility" "design-hierarchy" "uiux"
    [TalentType.SPORT]: [], // "strength", "agility", "dexterity" endurance", "motor soccer 
    [TalentType.KNOWLEDGE]: [],
    [TalentType.ESSENCE]: [], // logic", "initiative", "versatility" analysis", "management cross-referencing research
    [TalentType.APPLICATION]: [],
}

const TalentsDisplay : React.FC = () => {
    const { aspect } = useContext(AspectsContext);

    return (
        aspect && 
        <>
            {
                BRANCHES[aspect].map((category: TalentType, index: number) => {
                    return (
                        <Fragment key={index}>
                            { index !== 0 && <div className={`shrink-0 bg-gradient-to-b from-transparent via-gold rounded-[100%] h-full w-[0.2rem]`} /> }
                            <TalentContents category={category} pos={index} />
                        </Fragment>
                    )
                })
            }
            <TreeVersion />
        </>
    )
}

const TalentContents : React.FC<{ category: TalentType, pos: number }> = ({ category, pos }) => {
    const [mode, setMode] = useState<ViewMode>(ViewMode.TREE);
    const width = (MAX_WIDTH * SIZE) + ((MAX_WIDTH - 1) * GAP);
    const height = (MAX_HEIGHT * SIZE) + (MAX_WIDTH * GAP);
    
    return (
        <div className="flex flex-col p-[1.25rem] items-center justify-center w-full text-[1.25rem] relative select-none" style={{ zIndex: 2 - pos }}>
            <Navigator title={category} mode={mode} setMode={setMode} />
            <div className={`z-[1] flex flex-col relative items-center`} style={{ width: `${width}rem`, height: `${height}rem` }}>
                {
                    (() => {
                        switch (mode) {
                            case ViewMode.TREE:
                                return <TreeView category={category} />;
                            case ViewMode.LIST:
                                return <ListView category={category} />;
                            default:
                                return null;
                        }
                    })()
                }
            </div>
        </div>
    )
}

const Navigator : React.FC<{ title: TalentType, mode: ViewMode, setMode: Dispatch<SetStateAction<ViewMode>> }> = ({ title, mode, setMode }) => {
    return (
        <div className="z-[2] absolute left-0 top-0 p-4 flex flex-col gap-4">
            <div className="flex flex-col">
                <span style={{ fontSize: `${TITLE}rem`, lineHeight: `${TITLE}rem` }}>{title.toUpperCase()}</span>
                <span style={{ fontSize: `${POINTS}rem`, lineHeight: `${POINTS}rem` }}>{REMAINING_POINTS} POINTS AVAILABLE</span>
            </div>
            {
                (Object.values(ViewMode) as ViewMode[]).map((m: ViewMode, i: number) => {
                    const selectView = () => {
                        setMode(m);
                    }
                    return (
                        <div key={i} className={`${mode === m ? "bg-white text-black w-[11rem]" : "text-white bg-black cursor-pointer hover:w-[11rem] w-[2.5rem]"} border-2 border-white flex relative overflow-hidden shrink-0 justify-end h-full transition-width duration-300 group/tree rounded-[0.25rem]`} onClick={selectView}>
                            <div className="h-full w-full px-4 flex items-center absolute overflow-hidden whitespace-nowrap">{m.toUpperCase().replace("_", " ")}</div>
                            <div className="h-full flex items-center justify-center w-[2.5rem] bg-inherit z-[2] rotate-[180deg]"><i className={VIEW_MODE_ICON[m]} /></div>
                        </div>
                    )
                })
            }
        </div>
    )
}

type TierList = { [key: string]: number[] }

const ListView : React.FC<{ category: TalentType }> = ({ category }) => {
    const tiers = TALENT_TREES[category].reduce((acc: TierList, item: TalentIcon) => {
        const { y, id } = item;
        if (!acc[y]) acc[y] = [];
        acc[y].push(id);
        return acc;
    }, {});

    return (
        Object.keys(tiers).length === 0 ? 
        <div className="h-full w-full flex justify-center items-center">In Progress</div> : 
        <div className={`w-full h-full flex flex-col px-4 overflow-y-scroll ${overflow.overflowContainer}`} style={{ marginTop: `${TITLE + POINTS}rem` }}>
            {
                Object.keys(tiers).map((tier: string, index: number) => {
                    return (
                        <TieredTalents key={index} tier={tier} talents={tiers[tier]} />
                    )
                })
            }
        </div>
    )
}

const TieredTalents : React.FC<{ tier: string, talents: number[] }> = ({ tier, talents }) => {
    const { aspect } = useContext(AspectsContext);
    const color = aspect ? LIST_COLORS[aspect] : ["via-bg-sea-blue-dark", "via-bg-sea-blue-dark/25 hover:via-sea-blue-dark-50", "via-sea-blue-dark-50"];
    const [selected, setSelected] = useState<number[]>([]);

    const collapse = () => {
        setSelected([]);
    }
    
    return (
        <div className="w-full flex flex-col">
            <div className="w-full bg-gradient-to-r from-transparent via-10% via-gold h-[2px]" />
            <div className={`flex justify-between py-2 bg-gradient-to-r from-transparent via-10%  ${color[0]} px-12 text-[1.5rem] leading-[1.5rem]`}>
                <div>Tier {parseInt(tier) + 1}</div>
                { selected.length > 0 ? <div className="cursor-pointer text-[1.25rem] leading-[1.25rem]" onClick={collapse}><i className="ri-contract-up-down-line" /></div> : null }
            </div>
            <div className="w-full bg-gradient-to-r from-transparent via-10% via-gold h-[2px]" />
            <div className="flex flex-col w-full px-4 py-2 gap-2">
                {
                    talents.map((talent: number, index: number) => {
                        const talentData = TALENTS[talent];
                        return (
                            talentData && <ListedTalent id={talent} active={selected.includes(talent)} setSelected={setSelected} talent={talentData} color={color} key={index}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

const ListedTalent = memo(({ id, active, talent, color, setSelected } : { id: number, active: boolean, talent: Talent, color: string[], setSelected: Dispatch<SetStateAction<number[]>> }) => {
    const { p, req } = getExperienceData(talent.experience, talent.rank);
    const activate = () => {
        setSelected(prev => {
            if (prev.includes(id))return prev.filter((val) => { return val != id });
            return prev.concat([id]);
        });
    }

    return (
        <div className="group/listed w-full relative flex flex-col cursor-pointer px-8" onClick={activate}>
            <div className={`${active ? "w-full" : "w-0 group-hover/listed:w-full"} ${color[1]} shrink-0 rounded-[0.25rem] relative z-[1] py-1 flex justify-end transition-width duration-400 bg-gradient-to-r`} style={{ height: `${HEIGHT}rem` }}>
                <div className={`${active ? "w-0" : "w-full"} h-full bg-sea-blue-darker transition-width duration-400`} style={{ marginLeft: `${BORDER}rem` }} />
            </div>
            <div className="absolute z-[2] flex items-center justify-between px-8" style={{ lineHeight: `${HEIGHT}rem`, width: `calc(100% - 4rem)` }}>
                <span>{talent.name}</span>
                <span>{`Rank ${talent.rank} / ${talent.maxRank}`}</span>
            </div>
            <div className={`${active ? "h-full" : "h-0"} w-full px-8 overflow-hidden tracking-[1px]`}>
                <div className="w-full h-full flex flex-col gap-2 justify-center py-4">
                    <div className="w-full flex gap-4">
                        <div className={`${talent?.ability.active ? "rounded-[0.375rem]" : "rounded-full"} ${talent.rank !== 0 ? `bg-aspect-green-darker` : "text-white/50 bg-sea-blue-gray"} flex items-center justify-center font-normal z-[2] shadow-[inset_0_0_8px_black]`} style={{ height: `${SIZE}rem`, width: `${SIZE}rem`, fontSize: `${Math.round(SIZE * 2 / 3 * 10) / 10}rem` }}>
                            {
                                talent.icon.startsWith("cust") ?
                                <div className={`${talent.rank !== 0 ? `${CUSTOM_COLORS[talent.icon.replace("cust-", "")]} border-gold` : "text-white/50 border-gold-gray bg-sea-blue-gray"} h-full flex items-center justify-center font-normal w-full z-[2] border-2 shadow-[inset_0_0_8px_black] rounded-[inherit] overflow-hidden`} style={{ fontSize: `${Math.round(SIZE * 2 / 3 * 10) / 10}rem` }}>
                                    <CustomIcon icon={talent.icon.replace("cust-", "")} />
                                </div> :
                                <div className={`${talent.rank !== 0 ? `${color} border-gold` : "text-white/50 border-gold-gray bg-sea-blue-gray"} h-full flex items-center justify-center font-normal w-full z-[2] border-2 shadow-[inset_0_0_8px_black] rounded-[inherit] overflow-hidden`} style={{ fontSize: `${Math.round(SIZE * 2 / 3 * 10) / 10}rem` }}>
                                    {
                                        talent.icon.startsWith("ri") ? 
                                        <i className={talent.icon} /> :
                                        <i className="ri-question-mark" />
                                    }
                                </div>
                            }
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="text-[1rem] ">Experience: {talent.experience} {talent.experience > 1 ? "years" : "year"}</div>
                            <div className="text-[0.875rem] ">{req}</div>
                        </div>
                    </div>
                    <div className="w-full h-[4px] rounded-full overflow-hidden bg-gold-gray">
                        <div className="h-full bg-gold/75" style={{ width: active ? `${Math.round(p * 100)}%` : 0 }}></div>
                    </div>
                    <div className="flex flex-col w-full text-[1rem]">
                        {
                            talent.ability.active ? 
                            <div className="flex flex-col w-full gap-1">
                                { talent.ability.resource && <div className={`leading-[1rem] ${RESOURCE_COLORS[talent.ability.resource]}`}>{talent.ability.cost} {talent.ability.resource}</div> }
                                <div className="w-full flex justify-between leading-[1rem]">
                                    { talent.ability.cast_time && <div>{talent.ability.cast_time}</div> }
                                    { talent.ability.cooldown && <div>{talent.ability.cooldown} cooldown</div> }
                                </div>
                            </div> : 
                            <div className="flex w-full justify-between">
                                <div>Passive</div>
                                { talent.ability.cooldown && <div>{talent.ability.cooldown} cooldown</div> }
                            </div>
                        }
                    </div>
                    <div className="flex flex-col font-century-gothic text-[1rem] leading-[1rem] text-gold">
                        <div>{talent.description === "" ? "??????????" : talent.description}</div>
                    </div>
                </div>
            </div>
        </div>
    )
})

interface DetailsPayload {
    talent: Talent,
    x: number, 
    bottom: number,
}

const TreeView : React.FC<{ category: TalentType }> = ({ category }) => {
    const [details, setDetails] = useState<DetailsPayload | null>(null);

    return (
        <>
            <TalentTree category={category} setDetails={setDetails} />
            { details && <Details data={details} /> }
        </>
    )
}

const TalentTree = memo(({ category, setDetails } : { category: TalentType, setDetails: Dispatch<SetStateAction<DetailsPayload | null>> }) => {
    const tree = TALENT_TREES[category];
    const { aspect } = useContext(AspectsContext);
    const color = aspect ? ICON_COLORS[aspect] : "bg-sea-blue-dark";

    return (
        tree.length === 0 ? 
        <div className="h-full w-full flex justify-center items-center">In Progress</div> : 
        (
            tree.map((icon: TalentIcon, index: number) => {
                const talentData = TALENTS[icon.id];
                return (
                    talentData && <Talent key={index} icon={icon} talent={talentData} color={color} setDetails={setDetails} /> 
                )
            })
        )
    )    
});

const Talent : React.FC<{ icon: TalentIcon, talent: Talent, color: string, setDetails: Dispatch<SetStateAction<DetailsPayload | null>> }> = ({ icon, talent, color, setDetails }) => {
    const ref = useRef<HTMLDivElement>(null);
    const enter = () => {
        if (ref.current) {
            const bound = ref.current.getBoundingClientRect();
            setDetails({
                talent: talent,
                x: bound.x,
                bottom: window.innerHeight - bound.bottom,
            });
        }
    }

    const leave = () => {
        setDetails(null);
    }

    return (
        <div className="absolute" style={{ 
            left: `${icon.x * (SIZE + GAP)}rem`,
            top: `${icon.y * (SIZE + GAP)}rem`,
            width: `${SIZE}rem`, 
            height: `${SIZE}rem`
        }}>
            <div className="flex w-full h-full justify-center absolute">
                <div ref={ref} className={`relative z-[2] w-full h-full ${talent?.ability.active ? "rounded-[0.375rem]" : "rounded-full"}`}>
                    {
                        talent.icon.startsWith("cust") ?
                        <div className={`${talent.rank !== 0 ? `${CUSTOM_COLORS[talent.icon.replace("cust-", "")]} border-gold` : "text-white/50 border-gold-gray bg-sea-blue-gray"} h-full flex items-center justify-center font-normal w-full z-[2] border-2 shadow-[inset_0_0_8px_black] rounded-[inherit] overflow-hidden`} style={{ fontSize: `${Math.round(SIZE * 2 / 3 * 10) / 10}rem` }} onMouseEnter={enter} onMouseLeave={leave}>
                            <CustomIcon icon={talent.icon.replace("cust-", "")} />
                        </div> :
                        <div className={`${talent.rank !== 0 ? `${color} border-gold` : "text-white/50 border-gold-gray bg-sea-blue-gray"} h-full flex items-center justify-center font-normal w-full z-[2] border-2 shadow-[inset_0_0_8px_black] rounded-[inherit] overflow-hidden`} style={{ fontSize: `${Math.round(SIZE * 2 / 3 * 10) / 10}rem` }} onMouseEnter={enter} onMouseLeave={leave}>
                            {
                                talent.icon.startsWith("ri") ? 
                                <i className={talent.icon} /> :
                                <i className="ri-question-mark" />
                            }
                        </div>
                    }
                    <div className={`${talent.rank ? "text-gold border-gold" : "text-gold-gray border-gold-gray"} absolute rounded-[0.2rem] leading-[1rem] text-[0.9rem] right-[-1.25rem] bottom-[-0.3rem] px-1 z-[3] bg-black border-2`}>
                        {talent.rank}/{talent.maxRank}
                    </div>
                </div>
                { icon.children && <Branches branches={icon.children} /> }
            </div>
        </div> 
    )
}

const Branches : React.FC<{ branches: (number | null)[] }> = ({ branches }) => {
    return (
        branches.map((magnitude: number | null, index: number)=> {
            return (
                magnitude !== null && 
                (() => {
                    const degree = ((index - 1) * -45);
                    const height = (SIZE / 2 + GAP) / Math.cos(degree) + (index === 1 ? 1 : -1) * (magnitude * 0.8);
                    const left = - (Math.tan(degree) * (height / 2 - 0.6));
                    const top = SIZE / 2 + ((index - 1)  * Math.sin(degree)) - 0.2;

                    return (
                        <div key={index} className={`z-[1] absolute w-[2px] bg-gold-desaturated ${styles.talentArrow}`} style={{
                            transform: `rotate(${degree}deg)`,
                            height: `${height}rem`,
                            marginLeft: `${left}rem`,
                            top: `${top}rem`,
                        }} />
                    );
                })()
            )
        })
    )
}

const Details : React.FC<{ data: DetailsPayload }> = ({ data }) => {
    const ref =  useRef<HTMLDivElement>(null);
    const { talent, x, bottom } = data;
    const { p, req } = getExperienceData(talent.experience, talent.rank);
    const [pos, setPos] = useState<[number, number]>([x + OFFSET_IN_PX, bottom + OFFSET_IN_PX]);

    useEffect(() => {
        if (ref.current) {
            const bound = ref.current.getBoundingClientRect();
            if (bound.top < 0 || bound.right > window.innerWidth) {
                setPos(prev => { 
                    const newPos : [number, number] = [
                        bound.right > window.innerWidth ? window.innerWidth - bound.width - 8 : prev[0], 
                        bound.top < 0 ? prev[1] + bound.top - 8 : prev[1]
                    ]
                    if (checkOverlap(newPos, [x + (SIZE * 16), bottom + (SIZE * 16)])) return [newPos[0], bottom - bound.height - 4]
                    return [newPos[0], newPos[1]];
                });
            }
            return;
        }
    }, []);

    return (
        <div ref={ref} className="fixed z-[100] font-century-gothic tracking-[1px] border-gold/75 border-2 rounded-[0.375rem] w-[25rem] select-none bg-black/75 flex flex-col p-[0.75rem] gap-[0.75rem]" style={{
            left: `${pos[0]}px`,
            bottom: `${pos[1]}px`,
        }}>
            <div className="flex flex-col w-full">
                <div className="font-market-deco tracking-[0px] text-[1.25rem] leading-[1.25rem]">{talent.name}</div>
                <div className="text-[0.875rem]">Rank {talent.rank}/{talent.maxRank}</div>
            </div>
            <div className="flex flex-col w-full text-[1.125rem]">
                {
                    talent.ability.active ? 
                    <div className="flex flex-col w-full gap-1">
                        { talent.ability.resource && <div className={`leading-[1rem] ${RESOURCE_COLORS[talent.ability.resource]}`}>{talent.ability.cost} {talent.ability.resource}</div> }
                        <div className="w-full flex justify-between leading-[1rem]">
                            { talent.ability.cast_time && <div>{talent.ability.cast_time}</div> }
                            { talent.ability.cooldown && <div>{talent.ability.cooldown} cooldown</div> }
                        </div>
                    </div> : 
                    <div className="flex w-full justify-between">
                        <div>Passive</div>
                        { talent.ability.cooldown && <div>{talent.ability.cooldown} cooldown</div> }
                    </div>
                }
            </div>
            <div className="flex flex-col text-[1rem] leading-[1rem] text-gold">
                <div>{talent.description === "" ? "??????????" : talent.description}</div>
            </div>
            <div className="w-full text-[1rem] tracking-[0px]">
                <div className="flex justify-between">
                    <div>Experience</div>
                    <div>{talent.experience} year{talent.experience > 1 && "s"}</div>
                </div>
                <div className={`w-full rounded-[0.25rem] bg-gold-gray overflow-hidden`}>
                    <div className={`h-[4px] bg-gold`} style={{ width: `${Math.round(p * 100)}%` }}></div>
                </div>
                <div className="text-[0.875rem] tracking-[1px]">{req}</div>
            </div>
        </div>
    )
}

const TreeVersion : React.FC = () => {
    return (
        <div className="absolute bottom-0 right-0 font-century-gothic tracking-[1px] text-[1.25rem]">Tree v1.0.4.20240131</div>
    )
}

export default TalentsDisplay;