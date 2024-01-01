import { useState } from "react";
import NeonTitle from "./neon-title";
import NavIcons from "./nav-icons";

const Navigation : React.FC = () => {
    const [menu, setMenu] = useState<boolean>(false);
    const [neon, setNeon] = useState<string>("name")

    return (
        <div className="w-full h-screen">
            <NeonTitle neon={neon} setMenu={setMenu} />
            {menu && <NavIcons setNeon={setNeon} />}
        </div>
    )
}

export default Navigation;