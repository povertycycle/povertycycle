export type InventoryData = {
    name: string;
    item: (full?: boolean) => JSX.Element;
    version: string;
    redirect: string;
    description: string[];
    affiliation: {
        name: string;
        link: string;
    } | null;
};
