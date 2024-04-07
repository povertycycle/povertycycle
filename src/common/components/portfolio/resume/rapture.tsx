import { useContext } from "react";
import { RaptureContext } from "../global-context";
import Bubbles from "./rapture/bubbles";
import Buildings from "./rapture/buildings";
import Fishes from "./rapture/fishes";

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