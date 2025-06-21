import { useState } from "react";
import { Menu } from "./constants";
import { NeonLights } from "./NeonLights";
import { Icons } from "./Icons";

/**
 * Navigational display
 */
export const Navigation: React.FC = () => {
    const [text, setText] = useState<Menu>(Menu.NAME);

    return (
        <div className="w-full h-full flex flex-col items-center">
            <NeonLights text={text} />
            <Icons setText={setText} />
            <div className="select-none text-xs sm:text-base font-century-gothic fixed top-0.5 sm:top-1 z-50 left-0 sm:left-1 text-white">
                Website v1.6.1
            </div>
        </div>
    );
};
