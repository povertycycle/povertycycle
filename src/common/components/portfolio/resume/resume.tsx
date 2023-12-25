import Contents from "./contents";
import Rapture from "./rapture";

const Resume : React.FC = () => {
    return (
        <div className="w-full h-screen overflow-hidden relative">
            <Rapture />
            <Contents />
        </div>
    )
}

export default Resume;