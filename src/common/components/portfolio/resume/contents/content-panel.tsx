import Codex from "./codex/codex";
import Skills from "./skills/skills";
import Map from "./map/map";
import Inventory from "./inventory";
import Settings from "./settings/settings";

export const CONTENTS: {
    [key: string]: JSX.Element,
} = {
    "codex": <Codex />,
    "skills": <Skills />,
    "map": <Map />,
    "inventory": <Inventory />,
    "settings": <Settings />,
}

const ContentPanel: React.FC<{
    active: string,
}> = ({
    active,
}) => {
        return (
            <div className={`relative z-[2] w-full h-full flex items-center justify-start text-[1rem]`}>
                {CONTENTS[active]}
            </div>
        )
    }

export default ContentPanel;