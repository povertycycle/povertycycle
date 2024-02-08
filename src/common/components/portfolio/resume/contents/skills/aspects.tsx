import { Fragment, useContext } from "react";
import { AspectColor, AspectColorTypes, AspectType, AspectsContext, SkillTab, TalentType } from "./constants";
import { AspectArtsIcon, AspectGeneralIcon, AspectScienceIcon, AspectSportsIcon } from "./aspect-icons";

interface Aspect { 
    description: string,
    color: AspectColor,
    icon: JSX.Element,
}

const ASPECTS : { [key in AspectType] : Aspect } =  {
    [AspectType.SCIENCE]: {
        description: "An aspect assembled from the uncharted depths of knowledge; the mind revels in its enigmatic concepts.",
        color: AspectColor.GREEN,
        icon: <AspectScienceIcon />,
    }, 
    [AspectType.ARTS]: {
        description: "An aspect crafted from the endless well of imagination; the soul wallows in the beauty it evokes.",
        color: AspectColor.BLUE,
        icon: <AspectArtsIcon />,
    }, 
    [AspectType.SPORTS]: {
        description: "An aspect forged from the pinnacle of extreme discipline; the body basks in all of its vigorous glory.",
        color: AspectColor.RED,
        icon: <AspectSportsIcon />,
    }, 
    [AspectType.GENERAL]: {
        description: "An aspect molded from the vast history of men; none knows the full potential of its reaches.",
        color: AspectColor.YELLOW,
        icon: <AspectGeneralIcon />,
    }
};

const ASPECTS_COLORS : { [key in AspectColor] : AspectColorTypes } = {
    [AspectColor.GREEN]: {
        background: "from-aspect-green/30",
        title: "from-aspect-green via-aspect-green",
    },
    [AspectColor.BLUE]: {
        background: "from-aspect-blue/30",
        title: "from-aspect-blue via-aspect-blue",
    },
    [AspectColor.RED]: {
        background: "from-aspect-red/40",
        title: "from-aspect-red via-aspect-red",
    },
    [AspectColor.YELLOW]: {
        background: "from-aspect-yellow/40",
        title: "from-aspect-yellow via-aspect-yellow",
    },
}

const AspectBanner : React.FC<{ aspect: AspectType }> = ({ aspect }) => {
    const aspectData = ASPECTS[aspect];
    const colors = ASPECTS_COLORS[aspectData.color];
    const { setActiveTab, setAspect } = useContext(AspectsContext);
    
    const setActive = () => {
        setAspect(aspect);
        setActiveTab(SkillTab.TALENTS);
    }

    return (
        <div className="flex h-full w-full cursor-pointer shrink" onClick={setActive}>
            <div className={"group/aspects w-full h-full relative p-4 flex items-center justify-center overflow-hidden"}>
                <div className={`absolute top-0 left-0 z-[1] transtion-opacity duration-500 opacity-0 group-hover/aspects:opacity-100 h-full w-full bg-gradient-radial ${colors.background}`} />
                <div className="relative w-full h-full z-[2] flex flex-col gap-[1.5rem] items-center pt-[45%]">
                    <div className={`text-[2rem] bg-gradient-to-r ${colors.title} via-50% to-white to-50% bg-[length:200%_100%] [background-position-x:100%] duration-400 group-hover/aspects:[background-position:0_100%] text-transparent bg-clip-text`}>{aspect}</div>
                    <div className="w-[8rem] h-[8rem] rounded-full shrink-0 relative">{aspectData.icon}</div>
                    <div className={`relative w-full bg-gradient-to-r from-white via-white to-transparent via-50% to-50% bg-[length:200%_100%] [background-position-x:100%] duration-400 group-hover/aspects:[background-position:0_100%] text-transparent font-bold bg-clip-text overflow-hidden tracking-[0px] font-century-gothic text-center italic`}>
                        {aspectData.description}
                    </div>
                </div>
            </div>
        </div>
    )
}

const AspectDisplay : React.FC = () => {
    const aspects = Object.keys(ASPECTS) as AspectType[];

    return (
        aspects.map((aspect: AspectType, index: number) => {
            return (
                <Fragment key={index}>
                    { index !== 0 && <div className={`shrink-0 bg-gradient-to-b from-transparent via-gold rounded-[100%] h-full w-[0.2rem]`} /> }
                    <AspectBanner aspect={aspect} />
                </Fragment>
            )
        })
    )
}

export default AspectDisplay;