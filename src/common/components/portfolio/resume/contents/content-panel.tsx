import styles from "./index.module.scss";
import Codex from "./codex";
import Skills from "./skills";
import Map from "./map";
import Inventory from "./inventory";

export const CONTENTS : {
    [key: string] : JSX.Element,
} = {
    "codex": <Codex />,
    "skills": <Skills />,
    "map": <Map />,
    "inventory": <Inventory />,
    "gallery": <></>,
}

const ContentPanel : React.FC<{
    active: string,
}> = ({ 
    active,
}) => {
    return (
        <div className={`w-full h-full flex items-center justify-start p-8 text-[1rem] ${styles.contentDisplay}`}>
            <div className="w-full h-full">
                {CONTENTS[active]}
            </div>
        </div>
    )
}

export default ContentPanel;