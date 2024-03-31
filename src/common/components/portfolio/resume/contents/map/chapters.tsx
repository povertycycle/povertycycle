import styles from "./animation.module.scss";

type Objective = { done: boolean | null, desc: string }

const Chapters: React.FC = () => {
    const CURRENT_CHAPTER = 3;
    const CHAPTERS = [
        {
            title: "Prologue"
        },
        {
            title: "Strange Tales"
        },
        {
            title: "Dreamchasers",
            objectives: [
                { done: true, desc: "Graduate with a bachelor's degree" },
                { done: false, desc: "Find a job with a STEM OPT" },
                { done: true, desc: "Get a job post-graduation" },
                { done: null, desc: "Get a job and settle overseas" },
                { done: null, desc: "??????????" }
            ]
        }
    ]
    return (
        <div className={`absolute top-0 right-0 w-[365px] bg-gradient-to-l from-black z-[2] flex flex-col items-end gap-2 overflow-hidden whitespace-nowrap ${styles.chapterAnimation}`}>
            {
                CHAPTERS.map((chapter, i) => (
                    <div key={i} className={`bg-gradient-to-l ${i + 1 === CURRENT_CHAPTER ? "from-sea-green" : "text-gold-gray from-sea-green/75"} via-30% via-sea-green-dark flex flex-col justify-center items-end gap-2 px-2 ${i + 1 === CURRENT_CHAPTER ? "py-2" : "py-1"}`}>
                        <Title current={i + 1 === CURRENT_CHAPTER} chapter={i + 1} title={chapter.title} completed={chapter.objectives?.filter(o => (o.done)).length ?? 0} />
                        {chapter.objectives && <Objectives objectives={chapter.objectives} />}
                    </div>
                ))
            }
        </div>
    )
}

const Title: React.FC<{ current: boolean, chapter: number, title: string, completed: number }> = ({ current, chapter, title, completed }) => {
    return (
        <>
            <div className={`${current ? "text-[1.75rem] leading-[1.75rem]" : "text-[1.5rem] leading-[1.5rem]"} items-center flex gap-2`}>
                <span className={current ? "text-gold" : ""}>{title}</span> <div className="shrink-0 bg-white" style={{ width: `${current ? 24 : 16}px`, height: `${current ? 4 : 2}px` }} /> Chapter {chapter}
            </div>
            {current && <span className="text-[1.25rem] leading-[1.25rem] text-end">Objectives {completed}/???</span>}
            {!current && <div className="absolute w-full h-[2px] bg-gradient-to-l from-white from-25%" />}
        </>

    )
}

const Objectives: React.FC<{ objectives: Objective[] }> = ({ objectives }) => {
    return (
        <div className="flex flex-col text-base tracking-[0px] gap-1 w-full pl-1 items-end">
            {
                objectives.map((objective: Objective, i: number) => (
                    <div key={i} className={`flex items-center gap-2 w-full`}>
                        <div className={`flex items-center relative w-full justify-end ${objective.done === false ? "text-gold-gray" : ""}`}>
                            <span className={objective.done ? "text-gold" : ""}>{objective.desc}</span>
                            {objective.done !== null && <div className={`absolute w-full h-[2px] bg-gradient-to-l from-50% ${objective.done === false ? "from-gold-gray" : "from-white"}`} />}
                        </div>
                        <Completion done={objective.done} />
                    </div>
                ))
            }
        </div>
    )
}

const Completion: React.FC<{ done: boolean | null }> = ({ done }) => {
    const SIZE = 18;
    return (
        <div className={`shrink-0 flex items-center justify-center font-bold rounded-[2px] ${done !== null ? (done ? "text-sea-green bg-white" : "text-white bg-black") : "border-2 border-white"}`} style={{ height: `${SIZE}px`, width: `${SIZE}px` }}>
            {
                (() => {
                    switch (done) {
                        case false:
                            return <i className="ri-close-line" />;
                        case true:
                            return <i className="ri-check-line" />
                    }
                })()
            }
        </div>
    )
}

export default Chapters;