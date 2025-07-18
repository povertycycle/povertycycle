export const AspectScienceIcon: React.FC = () => {
    const ATOMS = 3;
    const SIZE = 8;

    return (
        <div className="h-full w-full flex items-center justify-center">
            <div
                className="aspect-bg-white group-hover/aspects:bg-aspect-green rounded-full absolute"
                style={{
                    width: `${SIZE}px`,
                    height: `${SIZE}px`,
                }}
            />
            {Array.from({ length: ATOMS }).map((_, i: number) => {
                return (
                    <div
                        key={i}
                        className={`absolute h-[80%] w-[30%] rounded-[50%] group-hover/aspects:border-aspect-green aspect-border-white`}
                        style={{
                            transform: `rotateZ(${(i * 360) / ATOMS}deg)`,
                        }}
                    >
                        <div
                            className="aspect-bg-white group-hover/aspects:bg-aspect-green rounded-full absolute bottom-0.5"
                            style={{
                                width: `${SIZE}px`,
                                height: `${SIZE}px`,
                            }}
                        />
                    </div>
                );
            })}
        </div>
    );
};

const Stripes: React.FC<{ top: boolean }> = ({ top }) => {
    return (
        <div
            className={`${
                top
                    ? "w-[80%] translate-x-[-2%] translate-y-[-30%] rotate-[-10deg] h-[15%] border-[2px]"
                    : "border-b-2 w-full h-[25%]"
            } border-white group-hover/aspects:border-aspect-blue transition-colors duration-200 flex justify-between overflow-hidden px-4`}
        >
            {Array.from({ length: 3 }).map((_, i: number) => {
                return (
                    <div
                        key={i}
                        className={`h-[110%] w-[15%] group-hover/aspects:bg-aspect-blue aspect-bg-white ${
                            top ? "skew-x-[30deg]" : "skew-x-[-30deg]"
                        }`}
                    />
                );
            })}
        </div>
    );
};

export const AspectArtsIcon: React.FC = () => {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center">
            <Stripes top={true} />
            <div className="w-[80%] h-[50%] group-hover/aspects:border-aspect-blue aspect-border-white border-2 overflow-hidden flex flex-col items-center">
                <Stripes top={false} />
                <div className="w-full h-[30%] border-white border-y-2 mt-2 group-hover/aspects:border-aspect-blue transition-colors duration-200 flex justify-between px-[30%]">
                    {Array.from({ length: 2 }).map((_, i: number) => {
                        return (
                            <div
                                key={i}
                                className="h-full w-[2px] group-hover/aspects:bg-aspect-blue aspect-bg-white"
                            />
                        );
                    })}
                </div>
                <div className="w-[80%] mt-[3px] group-hover/aspects:bg-aspect-blue aspect-bg-white h-0.5" />
            </div>
        </div>
    );
};

const Weight: React.FC<{ left: boolean }> = ({ left }) => {
    const divs = [
        <div
            key="weight-0"
            className={`w-[15%] h-[10%] group-hover/aspects:border-aspect-red transition-colors duration-200 border-y-2 border-white ${
                left ? "border-l rounded-l-md" : "border-r rounded-r-md"
            }`}
        />,
        <div
            key="weight-1"
            className="w-[35%] h-[40%] group-hover/aspects:border-aspect-red aspect-border-white border-2 rounded-full"
        />,
        <div
            key="weight-2"
            className="w-[35%] h-[65%] group-hover/aspects:border-aspect-red aspect-border-white border-2 rounded-full"
        />,
        <div
            key="weight-3"
            className="w-[15%] h-[10%] group-hover/aspects:border-aspect-red transition-colors duration-200 border-y-2 border-white"
        />,
    ];
    return left ? divs : divs.reverse();
};

export const AspectRecreationIcon: React.FC = () => {
    return (
        <div className="h-full w-full relative flex items-center">
            <div className="w-[32%] h-full flex items-center">
                <Weight left={true} />
            </div>
            <div className="w-[36%] h-[15%] group-hover/aspects:border-aspect-red aspect-border-white border-2 rounded-full" />
            <div className="w-[32%] h-full flex items-center">
                <Weight left={false} />
            </div>
        </div>
    );
};

export const AspectNatureIcon: React.FC = () => {
    const SIZE = 20;
    const PETALS = 16;
    const SIDE = 360 / PETALS;
    const FORCE = 150;

    return (
        <div className="h-full w-full relative justify-center items-center flex">
            {Array.from({ length: PETALS }).map((_, i: number) => {
                const deg = 45 + i * SIDE;
                const rad = (i * SIDE * Math.PI) / 180;
                const y = Math.round(-FORCE * Math.cos(rad) * 10) / 10;
                const x = Math.round(FORCE * Math.sin(rad) * 10) / 10;
                return (
                    <div
                        key={i}
                        className={`rounded-b-full group-hover/aspects:border-aspect-yellow rounded-r-full aspect-border-white border-2 absolute`}
                        style={{
                            width: `${SIZE}%`,
                            height: `${SIZE}%`,
                            transform: `translate(${x}%, ${y}%) rotateZ(${deg}deg)`,
                        }}
                    />
                );
            })}
        </div>
    );
};
