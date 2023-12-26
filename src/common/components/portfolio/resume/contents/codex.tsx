import { scrollPercent } from "@/common/utils/scroller";
import styles from "./content.module.scss";
import { useState, useRef } from "react";

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
                "How amazing it is that we were blessed with such magnificence, for there is a whole world of imagination to be delved into; the works of art that transcend beyond time and space\u2014those that resonate uniquely to their fans\u2014those that can be appreciated by anyone of any background. And so, it was believed that: to truly appreciate their endless creativity, is to really be a human."
            ]
        }
    },
    1 : {
        title: "Website",
        content: {
            heading:                 "A software engineer with a minor in mathematics.",
            description: [
                "This website was designed and developed as a love letter for their [efforts] in [guiding] everyone through the journeys they made\u2014filled with a [range of emotions]. From the rain, the bubbles, the fishes, and the buildings, all were randomly generated with quadratic equations. And all the icons and shapes were made purely from CSS; no image files were stored in repository.",
            ]
        }
    },
    ...(Array.from({ length: 20 }).reduce((acc : Journal, _, index) => {
        acc[index + 2] = {
            title: "??????????",
            content: {
                heading: "",
                description: [""],
            },
        };
        return acc;
    }, {}))
}

const CodexScroller : React.FC<{ scroll: number }> = ({ scroll }) => {
    return (
        <div className="flex flex-col items-center justify-between py-2 gap-2">
            <div className={styles.codexArrowUp}></div>
            <div className="h-[80%] w-[0.25rem] bg-default-white rounded-full flex justify-center relative">
                <div className="w-4 h-4 bg-default-white rounded-full absolute mt-[-0.5rem]" style={{
                    top: `${scroll}%`
                }}/>
            </div>
            <div className={styles.codexArrowDown}></div>
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
    const [scroll, setScroll] = useState<number>(0);

    const handleScroll = (e: any) => {
        setScroll(scrollPercent(e.target));
    };

    return (
        <div className={`${styles.codexJournalContainer} h-full w-[30%] bg-black bg-opacity-50`}>
            <div className={`flex flex-col gap-2 h-full w-full overflow-y-scroll relative ${styles.overflowContainer}`} onScroll={handleScroll}>
                <div className="w-full h-full absolute">
                    {
                        Object.values(JOURNALS).map((journal, index: number) => {
                            const handleChangeActive = () => {
                                setActive(index);
                            }
                            
                            return (
                                <div className={`flex cursor-pointer gap-8 px-4 py-1 bg-sea-blue-dark ${active == index ? "bg-opacity-90" : "bg-opacity-40 hover:bg-opacity-65"}`} key={index} onClick={handleChangeActive}>
                                    <span>{index.toString().padStart(3, "0")}</span>
                                    <span>{journal.title}</span>    
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <CodexScroller scroll={scroll} /> 
        </div>
    )
}

const JournalDescription : React.FC<{ active: number }> = ({ active }) => {
    const [scroll, setScroll] = useState<number>(0);

    const handleScroll = (e: any) => {
        setScroll(scrollPercent(e.target));
    }

    return (
        <div className={`${styles.codexJournalContainer} h-[90%] w-[40%] bg-black bg-opacity-50`}>
            <div className="flex flex-col gap-4 w-full">
                <span className="bg-sea-blue-dark bg-opacity-60 px-4 text-[2rem] rounded-[0.15rem]">{JOURNALS[active].content.heading}</span>
                <div className={`flex flex-col h-full gap-4 overflow-scroll relative ${styles.overflowContainer}`} onScroll={handleScroll}>
                    <div className="flex flex-col gap-4 tracking-[0px] h-full w-full absolute">
                        {
                            JOURNALS[active].content.description.map((text: string, index: number) => {
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
            <CodexScroller scroll={scroll} /> 
        </div>

    )
}

const Codex : React.FC = () => {
    const [active, setActive] = useState<number>(0);

    return (
        <div className="flex w-full h-full gap-4 justify-between">
            <JournalOptions active={active} setActive={setActive} />
            <JournalDescription active={active} />
        </div>
    )
}

export default Codex;