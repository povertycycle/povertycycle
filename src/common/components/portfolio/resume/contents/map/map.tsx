import ControlsDescription from "../controls-description";
import World from "./world";
import styles from "../animations.module.scss";

const MapDescription: React.FC = () => {
    return (
        <div className="h-full w-[30%] bg-sea-blue-dark">

        </div>
    )
}

const MapDisplay: React.FC = () => {
    return (
        <div className="h-full w-full flex relative items-center justify-center">
            <World />
        </div>
    )
}

const Map: React.FC = () => {
    const toggle = false;
    return (
        toggle ?
            <div className="w-full h-full flex items-center justify-center text-[3rem] font-market-deco">
                In Progress
            </div> :
            <div className={`${styles.mapDisplayAnimation} flex flex-col w-full h-full items-end justify-center text-[1.5rem] font-market-deco select-none`}>
                <MapDisplay />
                <ControlsDescription tag="map" />
            </div>
    )
}

export default Map;