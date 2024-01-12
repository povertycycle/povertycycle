export const AspectScienceIcon : React.FC = () => {
    return (
        <div className="h-full w-full flex items-center justify-center">
            <div className="w-[0.5rem] h-[0.5rem] group-hover/aspects:bg-aspect-green bg-white transition-colors duration-200 rounded-full absolute" />
            <div className="absolute h-[80%] w-[30%] border-[3px] border-white rounded-[50%]" />
            <div className="absolute h-[80%] w-[30%] border-[3px] border-aspect-green duration-200 group-hover/aspects:opacity-100 opacity-0 transition-opacity rounded-[50%]" />

            <div className="absolute h-[80%] w-[30%] border-[3px] border-white rounded-[50%] rotate-[60deg]" />
            <div className="absolute h-[80%] w-[30%] border-[3px] border-aspect-green duration-200 group-hover/aspects:opacity-100 opacity-0 transition-opacity rounded-[50%] rotate-[60deg]" />

            <div className="absolute h-[80%] w-[30%] border-[3px] border-white rounded-[50%] rotate-[-60deg]" />
            <div className="absolute h-[80%] w-[30%] border-[3px] border-aspect-green duration-200 group-hover/aspects:opacity-100 opacity-0 transition-opacity rounded-[50%] rotate-[-60deg]" />

            <div className="w-[10px] h-[10px] group-hover/aspects:bg-aspect-green bg-white transition-colors duration-200 rounded-full absolute left-[22%] top-[22%]" />
            <div className="w-[10px] h-[10px] group-hover/aspects:bg-aspect-green bg-white transition-colors duration-200 rounded-full absolute right-[14%] top-[35%]" />
            <div className="w-[10px] h-[10px] group-hover/aspects:bg-aspect-green bg-white transition-colors duration-200 rounded-full absolute left-[38%] top-[78%]" />
        </div>
    )
}