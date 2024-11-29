import { memo, useEffect, useRef, useState } from "react";
import Lighthouse from "./Lighthouse";
import Tower from "./Towers";


type BuildingsProps = {
    buildings: number,
    effects: number
}

const Buildings = memo(({ buildings, effects }: BuildingsProps) => {
    const [offset, setOffset] = useState<number>(0);
    const animationRef = useRef<boolean>(true);

    useEffect(() => {
        setOffset(window.innerWidth > 640 ? 10 : 0);
        setTimeout(() => {
            animationRef.current = false;
        }, 10000);
    }, []);

    return (
        <div className={"z-[1] absolute bottom-0 w-full h-full"}>
            <Lighthouse shouldAnimate={animationRef.current} effects={effects} />
            <div className="w-full h-[30%] sm:h-[40%] absolute bottom-0">
                {
                    Array.from({ length: buildings }, (_, i: number) => (
                        <Tower key={i} pos={i} buildings={buildings} effects={effects} offset={offset} animationRef={animationRef} />
                    ))
                }
            </div>
        </div>
    )
}, arePropsEqual);

function arePropsEqual(oldProps: BuildingsProps, newProps: BuildingsProps) {
    return (oldProps.buildings === newProps.buildings) && (oldProps.effects === newProps.effects);
}

export default Buildings;