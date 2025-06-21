import { WheelEvent, useContext, useRef } from "react";
import { SelectionContext } from "./store";
import { ICONS } from "./Icons";
import { CUSTOM_ICONS } from "@/constants/icons";

export const ExperienceDetails: React.FC = () => {
    const { selected } = useContext(SelectionContext);

    return (
        selected && (
            <div
                className={`absolute whitespace-nowrap p-2 overflow-hidden bottom-0 left-0 w-[30%] bg-gradient-to-r from-sea-green via-25% via-sea-green-dark z-20 flex flex-col`}
            >
                {selected.icon && (
                    <div className="h-12 w-12">{ICONS[selected.icon]}</div>
                )}
                <div
                    className={`flex gap-4 py-2 items-center text-lg w-full overflow-hidden `}
                >
                    {selected.title}
                </div>
                {selected.job && <div className="text-sm">{selected.job}</div>}
                {selected.city && (
                    <div className="text-sm tracking-[0.5px] flex justify-between">
                        <span>{selected.city}</span>
                        {selected.timeStart && selected.timeEnd && (
                            <span>{`${selected.timeStart} - ${selected.timeEnd}`}</span>
                        )}
                    </div>
                )}
                {selected.description && (
                    <div
                        className={`text-sm gap-2 py-2 my-1 border-y-4 border-gold tracking-[1px] font-century-gothic flex flex-col w-full overflow-y-auto form__scrollbar--custom whitespace-normal max-h-[240px]`}
                    >
                        {selected.description.map((desc: string, i: number) => (
                            <span key={i}>{desc}</span>
                        ))}
                    </div>
                )}
                {selected.externalLink && (
                    <div className="w-full text-sm tracking-[1px]">
                        <a
                            className="underline hover:text-gold transition-colors"
                            href={selected.externalLink}
                            target="_blank"
                        >
                            {selected.externalLink}
                        </a>
                    </div>
                )}
                {selected.stack && <TechStack stack={selected.stack} />}
            </div>
        )
    );
};

const TechStack: React.FC<{ stack: string[] }> = ({ stack }) => {
    const SIZE = "w-10 h-10 hover:w-[144px] transition-width";
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollHorizontal = (e: WheelEvent<HTMLDivElement>) => {
        if (!scrollRef.current) return;
        if (e.deltaY > 0) {
            scrollRef.current.scrollLeft += 100;
        } else {
            scrollRef.current.scrollLeft -= 100;
        }
    };

    return (
        <div
            ref={scrollRef}
            onWheel={scrollHorizontal}
            className={`scroll-smooth flex gap-4 text-[2rem] overflow-x-scroll form__scrollbar--custom overflow-y-hidden relative`}
            style={{ maxHeight: `${SIZE}px` }}
        >
            {stack.map((icon: string, i: number) => {
                const custom = CUSTOM_ICONS[icon];
                return (
                    <div
                        key={i}
                        className={`group/icon ${SIZE} rounded-[4px] border-gold border-2 overflow-hidden relative shrink-0`}
                    >
                        <div
                            className={`h-full aspect-square relative overflow-hidden flex items-center justify-center group-hover/icon:shadow-none shadow-[inset_0_0_8px_black] ${custom.background}`}
                        >
                            {custom.icon}
                        </div>
                        <div className="group-hover/icon:w-full w-0 h-full flex items-center transition-width text-sm top-0 absolute bg-black/50 overflow-hidden">
                            <span className="px-4 text-end w-full">{icon}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
