import { INVENTORY } from "./Data";

export const InventoryDetails: React.FC<{ selected: number }> = ({
    selected,
}) => {
    const item = INVENTORY[selected];
    return (
        <div className="w-[35%] h-full bg-gradient-to-r from-sea-green-dark/50 to-sea-green-bleak/25 rounded-semi">
            <div className="w-full h-full flex flex-col p-2 gap-2">
                {item ? (
                    <>
                        <span className="px-1 text-gold text-lg tracking-wider">
                            {item.name}
                        </span>
                        <div className="px-1 text-base w-full">
                            Version {item.version}
                        </div>
                        <div className="flex gap-4 items-end">
                            <div className="w-32 h-32 border-white border-2 rounded-semi">
                                {item.item(true)}
                            </div>
                            <a
                                href={item.redirect}
                                target="_blank"
                                className="flex items-center justify-center py-0.5 px-12 rounded-semi text-sm bg-sea-green hover:bg-sea-green-bleak transition-colors active:scale-[0.98] tracking-[1px]"
                            >
                                Use
                            </a>
                        </div>
                        <div className="px-1 text-sm">
                            Owned <span className="text-gold">1/1</span>
                        </div>
                        <div className="h-[2px] bg-gold" />
                        <div
                            className={`w-full h-0 grow overflow-y-scroll form__scrollbar--custom`}
                        >
                            <div className="w-full flex flex-col h-full gap-4 font-century-gothic text-sm tracking-[1px]">
                                {item.description.map(
                                    (desc: string, i: number) => (
                                        <span key={i}>{desc}</span>
                                    )
                                )}
                            </div>
                        </div>
                        <div className="h-[2px] bg-gold" />
                        <div className="tracking-[1px] w-full flex flex-col">
                            <span className="font-bold">Affiliation</span>
                            {item.affiliation ? (
                                <>
                                    <span className="text-base">
                                        {item.affiliation.name}
                                    </span>
                                    <a
                                        className="font-century-gothic textsm hover:text-gold transition-colors"
                                        href={item.affiliation.link}
                                        target="_blank"
                                    >
                                        {item.affiliation.link}
                                    </a>
                                </>
                            ) : (
                                <span>Self</span>
                            )}
                        </div>
                    </>
                ) : (
                    <div className="w-full text-[2rem]">??????????</div>
                )}
            </div>
        </div>
    );
};
