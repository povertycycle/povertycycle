import { MAX_Z_INDEX } from "../constants";
import styles from "./index.module.scss";

const Lighthouse: React.FC<{ shouldAnimate: boolean, effects: number }> = ({ shouldAnimate, effects }) => {
    return (
        <div className="absolute bottom-0 left-1/2 -translate-x-[50%] h-[75%] sm:h-[90%] flex justify-center" style={{
            zIndex: MAX_Z_INDEX / 2,
            animation: shouldAnimate ? `${styles.buildRaptureMain} 3s ease` : undefined
        }}>
            <div className={`${styles.raptureMain} w-[3rem] sm:w-[5rem] h-full rounded-[0.5rem]`} />
            <div className={`w-[6px] sm:w-[16px] aspect-square top-[4%] sm:top-[10%] absolute bg-white rounded-[50%] flex justify-center items-center ${effects > 0 ? styles.raptureBeacon : undefined}`} />
        </div>
    )
}

export default Lighthouse;