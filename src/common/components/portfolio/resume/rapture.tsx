import { useState, useEffect } from "react";
import Bubbles from "./rapture/bubbles";
import Buildings from "./rapture/buildings";
import Fishes from "./rapture/fishes";

const Rapture: React.FC = () => {
    return (
        <div className="w-full h-full relative z-[1]">
            <Bubbles />
            <Fishes />
            <Buildings />
        </div>
    )
}

export default Rapture;