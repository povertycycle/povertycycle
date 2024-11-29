import { useState } from "react";
import Version from "./Version";
import { Menu } from "./constants";
import NeonLights from "./NeonLights";
import Navigator from "./navigator/Navigator";

const NavMenu: React.FC = () => {
    const [text, setText] = useState<Menu>(Menu.NAME);

    return (
        <div className="w-full h-dvh sm:h-screen">
            <NeonLights text={text} />
            <Navigator setText={setText} />
            <Version />
        </div>
    )
}

export default NavMenu;