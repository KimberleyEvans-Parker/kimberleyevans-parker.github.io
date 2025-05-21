export type LinksType = {
    github?: string;
    linkedIn?: string;
    seeMore?: string;
    project?: string;
}

export type Dates = {
    start?: Date;
    end?: Date | "Present";
}

export type ContentItemType = {
    heading: string;
    subheading?: string;
    dates: Dates;
    description: string;
    teamSize?: number;
    links?: LinksType;
    images?: string[];
    technologies?: string[];
};

