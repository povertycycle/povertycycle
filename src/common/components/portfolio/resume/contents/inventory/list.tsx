import { LayeredBorder } from "@/common/components/utils/borders";
import { INVENTORY, Inventory } from "./constants";
import { useState, Dispatch, SetStateAction } from "react";
import styles from "../animations.module.scss";

const InventoryList: React.FC<{ selected: number, setSelected: Dispatch<SetStateAction<number>> }> = ({ selected, setSelected }) => {
    const NONE = "bg-black";
    const ITEM = "bg-sea-green-bleak";
    const COLUMNS = 8;
    const PADDING = 8;
    const [hover, setHover] = useState<number>(0);

    return (
        <div className={`${styles.overflowContainer} w-[40%] h-[60%] overflow-y-scroll relative bg-gradient-to-l from-sea-green-dark/50 to-sea-green-bleak/25 rounded-[4px]`} style={{ padding: `${PADDING}px` }}>
            <div className="grid w-full" style={{ gridTemplateColumns: `repeat(${COLUMNS}, minmax(0, 1fr))` }}>
                {
                    INVENTORY.concat(Array.from({ length: 25 })).map((inventory: Inventory, i: number) => (
                        <div onClick={() => { setSelected(i) }} key={i} className={`${selected === i ? "border-sea-green-bleak" : "border-transparent"} border-4 rounded-[2px] transition-colors w-full aspect-square`} onMouseEnter={() => { setHover(i) }}>
                            <div className={`${inventory ? ITEM : NONE} ${selected === i ? "opacity-100" : "opacity-75 hover:opacity-100 text-gold-gray hover:text-white"} transition-opacity cursor-pointer z-[1] relative w-full h-full rounded-[2px] flex items-center justify-center`}>
                                {inventory ? inventory.item() : <i className="text-[2rem] ri-question-mark" />}
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="absolute aspect-square transition-transform z-[0]" style={{
                top: `${PADDING}px`,
                left: `${PADDING}px`,
                width: `calc(${100 / COLUMNS}% - ${PADDING / 4}px)`,
                transform: `translateX(${(hover % COLUMNS) * 100}%) translateY(${Math.floor(hover / COLUMNS) * 100}%)`
            }}>
                <LayeredBorder>
                </LayeredBorder>
            </div>
        </div>
    )
}

export default InventoryList;