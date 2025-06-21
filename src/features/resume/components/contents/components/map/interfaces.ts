export enum POIType {
    Education = "Education",
    Work = "Work",
    Exploration = "Settlement",
}
export interface Details {
    title: string;
    type?: POIType;
    icon?: string;
    city?: string;
    job?: string;
    timeStart?: string;
    timeEnd?: string;
    description?: string[];
    externalLink?: string;
    stack?: string[];
}
