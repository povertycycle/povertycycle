import styles from "./index.module.scss";
import Directory from "./navigation/directory/Directory";
import Raindrops from "./navigation/raindrops/Raindrops";

const MainContainer: React.FC = () => {
    return (
        <div className={`${styles.portfolioContainer} w-screen flex flex-col overflow-scroll`}>
            <Raindrops />
            <Directory />
        </div>
    )
}

export default MainContainer;