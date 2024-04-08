import { INVENTORY } from "./constants";
import styles from "../animations.module.scss";

const InventoryDetails: React.FC<{ selected: number }> = ({ selected }) => {
    const item = INVENTORY[selected];
    return (
        <div className="w-[35%] h-full bg-gradient-to-r from-sea-green-dark/50 to-sea-green-bleak/25 rounded-[4px]">
            <div className="w-full h-full flex flex-col p-4 gap-2">
                {
                    item ?
                        <>
                            <span className="px-1 text-gold leading-[2.5rem] text-[2.5rem]">{item.name}</span>
                            <div className="px-1 text-[1.25rem] leading-[1.25rem] w-full">
                                Version {item.version}
                            </div>
                            <div className="flex gap-4 items-end">
                                <div className="w-[256px] h-[256px] border-white border-2 rounded-[4px]">
                                    {item.item(true)}
                                </div>
                                <a href={item.redirect} target="_blank" className="flex items-center justify-center py-1 px-16 rounded-[4px] bg-sea-green hover:bg-sea-green-bleak transition-colors active:scale-[0.98] tracking-[1px]">Use</a>
                            </div>
                            <div className="px-1 text-[1.25rem] leading-[1.25rem] tracking-[0.5px]">
                                Owned <span className="text-gold">1/1</span>
                            </div>
                            <div className="h-[2px] bg-gold" />
                            <div className={`w-full h-0 grow overflow-y-scroll ${styles.overflowContainer}`}>
                                <div className="w-full flex flex-col items-end h-full gap-4 font-century-gothic text-[1.125rem] leading-[1.125rem] tracking-[1px]">
                                    {
                                        item.description.map((desc: string, i: number) => (
                                            <span key={i}>
                                                {desc}
                                            </span>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="h-[2px] bg-gold" />
                            <div className="text-[1.25rem] leading-[1.5rem] tracking-[1px] w-full flex flex-col">
                                <span className="font-bold">Affiliation</span>
                                {
                                    item.affiliation ?
                                        <>
                                            <span className="text-base">{item.affiliation.name}</span>
                                            <a className="font-century-gothic text-[1.25rem] hover:text-gold transition-colors" href={item.affiliation.link} target="_blank">{item.affiliation.link}</a>
                                        </> :
                                        <span>Self</span>
                                }
                            </div>
                        </> :
                        <div className="w-full text-[2rem]">??????????</div>
                }
            </div>
        </div>
    )
}

export default InventoryDetails;