import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "./inventory.module.scss";
import { Controllers } from "../controllers/Controllers";
import { InventoryData } from "./interfaces";
import { LayeredBorder } from "@/common/components/utils/borders";
import { INVENTORY } from "./Data";
import { InventoryDetails } from "./Details";

export const Inventory: React.FC = () => {
    const [selected, setSelected] = useState<number>(0);

    return (
        <div
            className={`flex flex-col w-full h-full items-end justify-between font-market-deco select-none relative`}
        >
            <div
                className={`${styles.inventoryAnim} w-full h-full flex items-start justify-between font-market-deco`}
            >
                <InventoryDetails selected={selected} />
                <InventoryList selected={selected} setSelected={setSelected} />
            </div>
            <Controllers tag="inventory" />
        </div>
    );
};

const InventoryList: React.FC<{
    selected: number;
    setSelected: Dispatch<SetStateAction<number>>;
}> = ({ selected, setSelected }) => {
    const NONE = "bg-black";
    const ITEM = "bg-sea-green-bleak";
    const COLUMNS = 8;
    const PADDING = 8;
    const [hover, setHover] = useState<number>(0);

    return (
        <div
            className={`w-1/3 h-1/2 overflow-y-scroll form__scrollbar--custom relative bg-gradient-to-l from-sea-green-dark/50 to-sea-green-bleak/25 rounded-[4px]`}
            style={{ padding: `${PADDING}px` }}
        >
            <div
                className="grid w-full"
                style={{
                    gridTemplateColumns: `repeat(${COLUMNS}, minmax(0, 1fr))`,
                }}
            >
                {INVENTORY.concat(Array.from({ length: 25 })).map(
                    (inventory: InventoryData, i: number) => (
                        <div
                            onClick={() => {
                                setSelected(i);
                            }}
                            key={i}
                            className={`${
                                selected === i
                                    ? "border-sea-green-bleak"
                                    : "border-transparent"
                            } border-4 rounded-[2px] transition-colors w-full aspect-square`}
                            onMouseEnter={() => {
                                setHover(i);
                            }}
                        >
                            <div
                                className={`${inventory ? ITEM : NONE} ${
                                    selected === i
                                        ? "opacity-100"
                                        : "opacity-75 hover:opacity-100 text-gold-gray hover:text-white"
                                } transition-opacity cursor-pointer z-[1] relative w-full h-full rounded-[2px] flex items-center justify-center`}
                            >
                                {inventory ? (
                                    inventory.item()
                                ) : (
                                    <i className="text-[2rem] ri-question-mark" />
                                )}
                            </div>
                        </div>
                    )
                )}
            </div>
            <div
                className="absolute aspect-square transition-transform z-[0]"
                style={{
                    top: `${PADDING}px`,
                    left: `${PADDING}px`,
                    width: `calc(${100 / COLUMNS}% - ${PADDING / 4}px)`,
                    transform: `translateX(${
                        (hover % COLUMNS) * 100
                    }%) translateY(${Math.floor(hover / COLUMNS) * 100}%)`,
                }}
            >
                <LayeredBorder />
            </div>
        </div>
    );
};
