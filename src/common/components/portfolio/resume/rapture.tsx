import Bubbles from "./bubbles";
import Buildings from "./buildings";
import Fishes from "./fishes";

const Rapture : React.FC = () => {
    return (
        <div className="w-full h-full relative">
            <Bubbles />
            <Fishes />
            <Buildings />
        </div>
    )
}

export default Rapture;