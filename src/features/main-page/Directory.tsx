import { Navigation } from "./components/navigation/Navigation";
import { Raindrops } from "./components/raindrops/Raindrops";

/**
 * Main directory display controls
 */
export const Directory: React.FC = () => {
    return (
        <div className="w-full h-dvh sm:h-screen flex flex-col items-center">
            <Raindrops />
            <Navigation />
        </div>
    );
};
