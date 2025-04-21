export type LinksType = {
    github?: string;
    linkedIn?: string;
    seeMore?: string;
    project?: string;
}

export type ContentItemType = {
    heading: string;
    subheading?: string;
    dates: string;
    description: string;
    teamSize?: number;
    links?: LinksType;
    images?: string[];
    technologies?: string[];
};

