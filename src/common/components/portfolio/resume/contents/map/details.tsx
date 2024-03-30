import { useContext, useState, Dispatch, SetStateAction } from "react";
import { SelectionContext } from "./map";

export enum POIType {
    Education = 0,
    Work = 1,
    EduWork = 2,
}

export interface Details {
    title: string,
    type?: POIType,
    city?: string,
    job?: string,
    timeStart?: string,
    timeEnd?: string,
    description?: string,
}

const LocationDetails: React.FC = () => {
    const { selected } = useContext(SelectionContext);
    const [view, setView] = useState<number>(-1);

    // const grouped = selected && selected.details.reduce((acc: {}, curr: Details) => {

    // }, {})

    return (
        <div className="absolute right-0 top-0 w-[25%] bg-gradient-to-l from-sea-green via-25% via-sea-green-dark z-[2] p-4 flex flex-col gap-4">
            {
                selected && selected.details.map((data: Details, i: number) => (
                    <Experience key={i} details={data} i={i} view={view} setView={setView} />
                ))
            }
        </div>
    )
}

const Experience: React.FC<{ details: Details, i: number, view: number, setView: Dispatch<SetStateAction<number>> }> = ({ details, i, view, setView }) => {
    const displayDetails = () => {
        if (view !== i) {
            setView(i);
        }
    }
    return (
        <div className="flex flex-col items-end cursor-pointer group/details relative" onClick={displayDetails}>
            <div className="flex text-end group-hover/details:text-gold transition-colors text-[1.5rem] z-[2] underline">{details.title}</div>
            <div className="text-[1.25rem] leading-[1.25rem] tracking-[0px] flex flex-col text-end">
                {details.city && <div className="">{details.city}</div>}
                {details.job && <div className="">{details.job}</div>}
                {details.timeStart && details.timeEnd && <div className="">{details.timeStart} - {details.timeEnd}</div>}
            </div>
            {
                view === i && details.description && <span className="font-century-gothic text-base">{details.description}</span>
            }
        </div>
    )
}

export default LocationDetails;