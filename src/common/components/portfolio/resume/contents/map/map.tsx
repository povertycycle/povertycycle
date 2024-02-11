import ControlsDescription from "../controls-description";

const MapDescription: React.FC = () => {
    return (
        <div className="h-full w-[30%]">

        </div>
    )
}

const MapDisplay: React.FC = () => {
    return (
        <div className="h-full w-full flex">
            <div className="">

            </div>
            <MapDescription />
        </div>
    )
}

const Map: React.FC = () => {
    const toggle = true;
    return (
        toggle ?
            <div className="w-full h-full flex items-center justify-center text-[3rem] font-market-deco">
                In Progress
            </div> :
            <div className={`flex flex-col w-full h-full items-end justify-center text-[1.5rem] font-market-deco select-none`}>
                <MapDisplay />
                <ControlsDescription tag="map" />
            </div>
    )
}

export default Map;