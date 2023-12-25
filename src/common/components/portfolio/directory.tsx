import { useState } from "react";
import Navigation from "./navigation/navigation";
import Resume from "./resume/resume";
import { RaptureContext } from "./rapture-context";

const Directory : React.FC = () => {
    const [dive, setDive] = useState<boolean>(false);
    const value = { dive, setDive };

    return (
        <RaptureContext.Provider value={value}>
            <div className="w-full">
                <Navigation />
                <Resume />
            </div>
        </RaptureContext.Provider>
    )
}

export default Directory;