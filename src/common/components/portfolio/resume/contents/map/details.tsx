import { WheelEvent, useContext, useRef } from "react";
import { SelectionContext } from "./map";
import styles from "./animation.module.scss";
import globalStyles from "../animations.module.scss";
import { ICONS } from "./icons";
import { CUSTOM_ICONS } from "../skills/talent-icons";

export enum POIType {
    Education = "Education",
    Work = "Work",
    Exploration = "Settlement",
}

export const LEGENDS_ICON: { [key in POIType]: React.ReactNode } = {
    [POIType.Education]: <i className="ri-school-line" />,
    [POIType.Work]: <i className="ri-briefcase-4-line" />,
    [POIType.Exploration]: <i className="ri-building-line" />
}

export interface Details {
    title: string,
    type?: POIType,
    icon?: string,
    city?: string,
    job?: string,
    timeStart?: string,
    timeEnd?: string,
    description?: string[],
    externalLink?: string,
    stack?: string[]
}

const ExperienceDetails: React.FC = () => {
    const { selected } = useContext(SelectionContext);

    return (
        selected &&
        <div className={`absolute whitespace-nowrap p-4 overflow-hidden gap-2 bottom-0 left-0 w-[30%] bg-gradient-to-r from-sea-green via-25% via-sea-green-dark z-[2] flex flex-col ${styles.detailsSection}`}>
            {
                selected.icon &&
                <div className="h-[96px] w-[96px]">
                    {ICONS[selected.icon]}
                </div>
            }
            <div className={`flex gap-4 py-2 items-center text-[1.5rem] leading-[1.75rem] w-full overflow-hidden `}>
                {selected.title}
            </div>
            {selected.job && <div className="text-[1.25rem] leading-[1.25rem]">{selected.job}</div>}
            {
                selected.city &&
                <div className="text-[1.125rem] leading-[1.125rem] tracking-[0.5px] flex justify-between">
                    <span>{selected.city}</span>
                    {selected.timeStart && selected.timeEnd && <span>{`${selected.timeStart} - ${selected.timeEnd}`}</span>}
                </div>
            }
            {
                selected.description &&
                <div className={`text-[1.125rem] leading-[1.125rem] gap-4 py-2 border-y-4 border-gold tracking-[1px] font-century-gothic flex flex-col w-full overflow-scroll whitespace-normal max-h-[240px] ${globalStyles.overflowContainer}`}>
                    {
                        selected.description.map((desc: string, i: number) => (
                            <span key={i}>{desc}</span>
                        ))
                    }
                </div>
            }
            {selected.externalLink && <div className="w-full text-base tracking-[1px]"><a className="underline hover:text-gold transition-colors" href={selected.externalLink} target="_blank">{selected.externalLink}</a></div>}
            {selected.stack && <TechStack stack={selected.stack} />}
        </div>
    )
}

const TechStack: React.FC<{ stack: string[] }> = ({ stack }) => {
    const SIZE = "w-[48px] h-[48px] hover:w-[144px] transition-width";
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollHorizontal = (e: WheelEvent<HTMLDivElement>) => {
        if (!scrollRef.current) return;
        if (e.deltaY > 0) {
            scrollRef.current.scrollLeft += 100;
        } else {
            scrollRef.current.scrollLeft -= 100;
        }
    }

    return (
        <div ref={scrollRef} onWheel={scrollHorizontal} className={`scroll-smooth flex gap-4 text-[2rem] overflow-x-scroll overflow-y-hidden relative ${globalStyles.overflowContainer}`} style={{ maxHeight: `${SIZE}px` }}>
            {
                stack.map((icon: string, i: number) => {
                    const custom = CUSTOM_ICONS[icon];
                    return (
                        <div key={i} className={`group/icon ${SIZE} rounded-[4px] border-gold border-2 overflow-hidden relative shrink-0`}>
                            <div className={`h-full aspect-square relative overflow-hidden flex items-center justify-center group-hover/icon:shadow-none shadow-[inset_0_0_8px_black] ${custom.background}`}>
                                {custom.icon}
                            </div>
                            <div className="group-hover/icon:w-full w-0 h-full flex items-center transition-width text-base top-0 absolute bg-black/50 overflow-hidden transition-height">
                                <span className="px-4 text-end w-full">
                                    {icon}
                                </span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ExperienceDetails;