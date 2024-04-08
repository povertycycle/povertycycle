import React, { useState } from "react";
import styles from "../animations.module.scss";
import ControlsDescription from "../controls-description";
import InventoryDetails from "./details";
import InventoryList from "./list";

const Inventory: React.FC = () => {
    return (
        <div className={`flex flex-col w-full h-full items-end justify-between font-market-deco select-none relative`}>
            <InventoryDisplay />
            <ControlsDescription tag="inventory" />
        </div>
    )
}

const InventoryDisplay: React.FC = () => {
    const [selected, setSelectd] = useState<number>(0);

    return (
        <div className={`${styles.inventoryAnimation} w-full h-full flex items-start justify-between font-market-deco`}>
            <InventoryDetails selected={selected} />
            <InventoryList selected={selected} setSelected={setSelectd} />
        </div>
    )
}


export default Inventory;