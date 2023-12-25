import { useState } from "react";
import NeonTitle from "./neon-title";
import NavIcons from "./nav-icons";

const Navigation : React.FC = () => {
    const [menu, seMenu] = useState<boolean>(false);
    const [neon, setNeon] = useState<string>("name")

    const finishIntroduction = () => {
        seMenu(true);
    }

    const changeNeon = (tag: string) => {
        setNeon(tag);
    }

    return (
        <div className="w-full h-screen">
            <NeonTitle neon={neon} handleShowMenu={finishIntroduction} />
            {menu && <NavIcons handleChangeNeon={changeNeon} />}
        </div>
    )
}

export default Navigation;