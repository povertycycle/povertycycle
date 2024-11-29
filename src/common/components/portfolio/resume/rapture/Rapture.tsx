import { RaptureContext } from "@/common/contexts/global-context";
import { useContext } from "react";
import Bubbles from "./Bubbles";
import Buildings from "./buildings/Buildings";
import Fishes from "./Fishes";

const Rapture: React.FC = () => {
    const { dive, userSettings } = useContext(RaptureContext);

    return (
        <div className="w-full h-full relative z-[1]">
            {
                dive &&
                <>
                    <Bubbles bubbles={userSettings.graphicOptions.bubbles} />
                    <Fishes fishes={userSettings.graphicOptions.fishes} />
                    <Buildings buildings={userSettings.graphicOptions.buildings} effects={userSettings.graphicOptions.effects} />
                </>
            }
        </div>
    )
}

export default Rapture;