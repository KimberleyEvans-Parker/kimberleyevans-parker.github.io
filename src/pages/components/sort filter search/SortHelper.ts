import { ContentItemType } from "../../../data/types"

export const sortByDate = (
    aDate: Date | "Present" | undefined,
    bDate: Date | "Present" | undefined
) => {
    if (aDate === "Present" && bDate === "Present") {
        return 0;
    } else if (aDate === "Present") {
        return -1;
    } else if (bDate === "Present") {
        return 1;
    }

    if (!aDate && !bDate) {
        return 0;
    } else if (!aDate) {
        return 1;
    } else if (!bDate) {
        return -1;
    }

    return aDate.getTime() - bDate.getTime();
};

export const sortByStartDate = (a: ContentItemType, b: ContentItemType) => {
    const aDate = a.dates?.start;
    const bDate = b.dates?.start;

    return sortByDate(aDate, bDate)
}

export const sortByEndDate = (a: ContentItemType, b: ContentItemType) => {
    const aDates = a.dates?.end || a.dates?.start;
    const bDates = b.dates?.end || b.dates?.start;
    
    return sortByDate(aDates, bDates)
}

export const sortByName = (a: ContentItemType, b: ContentItemType) => {
    return a.heading.localeCompare(b.heading)
}

export const sortByTeamSize = (a: ContentItemType, b: ContentItemType) => {
    if (a.teamSize && b.teamSize) {
        return b.teamSize - a.teamSize
    } else if (a.teamSize && !b.teamSize) {
        return 1
    } else if (!a.teamSize && b.teamSize) {
        return -1
    } else {
        return 0
    }
}

export const sortByTechnology = (a: ContentItemType, b: ContentItemType) => {
    if (a.technologies && b.technologies) {
        return b.technologies.length - a.technologies.length
    } else if (a.technologies && !b.technologies) {
        return 1
    } else if (!a.technologies && b.technologies) {
        return -1
    } else {
        return 0
    }
}