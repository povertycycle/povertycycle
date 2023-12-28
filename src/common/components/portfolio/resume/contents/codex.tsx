import { scrollPercent, scrollerHeightValue } from "@/common/utils/scroller";
import styles from "./content.module.scss";
import { useState, useRef, useEffect } from "react";
import ControlsDescription from "./controls-description";

interface Journal {
    [key: number] : {
        title: string,
        content: {
            heading: string,
            description: string[],
        }
    }
} 

const JOURNALS : Journal = {
    0: {
        title: "Introduction",
        content: {
            heading: "Arts & Music Enthusiast",
            description: [
                "Nothing is more fascinating than to fully understand the intricacies behind the work of art and music of a game or a piece of cinema.",
                "Your journey started off with the classics\u2014Star Wars, Jurassic Park, Terminator, and many more\u2014not exactly old though gold nonetheless. Yet from the start, that enjoyment for them was however a shallow and unappreciative one, ignorant of their real beauty.",
                "And with the years of exposure, stumbling across those of which values were burrowed deep within their concepts and designs, the curiosity for their details and techniques grew stronger. Suddenly, the aspiration bloomed, to fully understand the idea behind such celebrated works, and to be able to relish such feelings with the community.",
                "How amazing it is that we were blessed with such magnificence, for there is a whole world of imagination out there waiting to be explored; the works of art that transcend beyond time and space\u2014those that resonate uniquely to their fans\u2014those that can be appreciated by anyone of any background. And so, it was believed that: to truly appreciate their endless creativity, is to really be a human."
            ]
        }
    },
    1 : {
        title: "Website",
        content: {
            heading: "A software engineer with a minor in mathematics.",
            description: [
                "The time does not matter; what matters is the completion.",
                "This personal website was designed and developed as a love letter for the games and the cinemas. It incorporated a number of different styles and concepts to help enrich the experience it meant to provide.",
                "The rain, bubbles, fishes, and buildings were generated randomly with quadratic equations. The icons and shapes were made purely with CSS; no image files were stored in the repository.",
            ]
        }
    },
    ...(Array.from({ length: 20 }).reduce((acc : Journal, _, index) => {
        acc[index + 2] = {
            title: "??????????",
            content: {
                heading: "??????????",
                description: ["??????????"],
            },
        };
        return acc;
    }, {}))
}

const CodexScroller : React.FC<{ height: string, scroll: number }> = ({ height, scroll }) => {
    return (
        <div className="w-[0.25rem] h-full rounded-full flex justify-center relative">
            <div className="w-1 bg-default-white shadow-[0_0_8px_1px_white] rounded-full absolute " style={{
                height: height,
                top: `${scroll}%`
            }} />
        </div>
    )
}

const JournalOptions : React.FC<{
    active: number,
    setActive: (active: number) => void
}> = ({
    active,
    setActive
}) => {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [scroll, setScroll] = useState<number>(0);
    const [height, setHeight] = useState<string>("100%");

    useEffect(() => {
        if (scrollRef.current) {
            setHeight(scrollerHeightValue(scrollRef.current));
        };
    }, [])

    const handleScroll = (e: any) => {
        setScroll(scrollPercent(e.target));
    };

    return (
        <div className={`${styles.codexJournalContainer} h-full w-[30%] bg-gradient-to-r from-black to-transparent flex`}>
            <div ref={scrollRef} className={`flex flex-col gap-2 h-full w-full overflow-y-scroll relative ${styles.overflowContainer}`} onScroll={handleScroll}>
                <div className="w-[90%] h-full absolute flex flex-col gap-2">
                    {
                        Object.values(JOURNALS).map((journal, index: number) => {
                            const handleChangeActive = () => {
                                setActive(index);
                            }
                            return (
                                <div className={`flex select-none cursor-pointer rounded-[0.25rem] gap-8 px-4 py-1 transition-transform from-60% ${active == index ? "skew-x-[-10deg] bg-gradient-to-r from-white to-transparent text-black translate-x-[2rem]" : "bg-gradient-to-r from-sea-blue-dark/50 hover:from-sea-blue-dark/75 to-transparent hover:skew-x-[-10deg] hover:translate-x-[2rem]"}`} key={index} onClick={handleChangeActive}>
                                    <span>{index.toString().padStart(3, "0")}</span>
                                    <span>{journal.title}</span>    
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <CodexScroller scroll={scroll} height={height} /> 
        </div>
    )
}

const JournalDescription : React.FC<{ active: number }> = ({ active }) => {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [scroll, setScroll] = useState<number>(0);
    const [height, setHeight] = useState<string>("100%");

    useEffect(() => {
        if (scrollRef.current) {
            setHeight(scrollerHeightValue(scrollRef.current));
        };
    }, [])

    const handleScroll = (e: any) => {
        setScroll(scrollPercent(e.target));
    }

    return (
        <div className={`${styles.codexJournalContainer} h-full w-full bg-gradient-to-l from-black to-transparent flex`}>
            <div className="flex flex-col gap-4 w-full">
                <span className="bg-gradient-to-r text-black from-50% from-white to-transparent px-4 py-8 text-[2rem] rounded-[0.15rem]">{JOURNALS[active]?.content.heading}</span>
                <div ref={scrollRef} className={`flex flex-col h-full gap-4 overflow-scroll relative ${styles.overflowContainer}`} onScroll={handleScroll}>
                    <div className="flex flex-col gap-4 tracking-[0px] h-full w-full absolute">
                        {
                            JOURNALS[active]?.content.description.map((text: string, index: number) => {
                                return (
                                    <div key={index} className="flex flex-col bg-sea-blue-dark bg-opacity-60 px-4 py-2">
                                        <span className={`${index === 0 && "italic"} text-[1.3rem]`}>{text}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <CodexScroller scroll={scroll} height={height} /> 
        </div>

    )
}

const Codex : React.FC = () => {
    const [active, setActive] = useState<number>(-1);

    return (
        <div className="flex w-full h-full gap-4 justify-between">
            <JournalOptions active={active} setActive={setActive} />
            <div className="flex flex-col gap-4 w-[40%] h-full">
                <JournalDescription active={active} />
                <ControlsDescription />
            </div>
        </div>
    )
}

export default Codex;