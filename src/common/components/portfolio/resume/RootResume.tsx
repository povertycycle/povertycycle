// import Contents from "./contents";
// import Rapture from "./rapture";

import Contents from "./contents";
import Rapture from "./rapture/Rapture";

const RootResume: React.FC = () => {
    return (
        <div className="w-full h-dvh sm:h-screen overflow-hidden relative">
            <Rapture />
            <Contents />
        </div>
    )
}

export default RootResume;