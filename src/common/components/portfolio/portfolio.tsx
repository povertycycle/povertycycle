import styles from "./index.module.scss";
import Directory from "./directory";
import Raindrops from "./navigation/raindrops";

const Portfolio : React.FC = () => {
    return (
        <div className={`${styles.portfolioContainer} w-screen flex flex-col overflow-scroll`}>
            <Raindrops />
            <Directory />
        </div>
    )
}

export default Portfolio;