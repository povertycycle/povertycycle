export const AspectScienceIcon : React.FC = () => {
    const rotations : { [key: number]: string } = {
        0: "rotate-[0deg]",
        1: "rotate-[120deg]",
        2: "rotate-[240deg]",
    }
    return (
        <div className="h-full w-full flex items-center justify-center">
            <div className="w-[0.5rem] h-[0.5rem] group-hover/aspects:bg-aspect-green bg-white transition-colors duration-200 rounded-full absolute" />
            {
                Array.from({ length: 3 }).map((_, i: number) => {
                    return (
                        <>
                            <div className={`absolute h-[80%] w-[30%] border-[3px] border-white rounded-[50%] transition-colors duration-200 group-hover/aspects:border-aspect-green ${rotations[i]}`}>
                                <div className="w-[10px] h-[10px] group-hover/aspects:bg-aspect-green bg-white transition-colors duration-200 rounded-full absolute bottom-[5%]" />
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}