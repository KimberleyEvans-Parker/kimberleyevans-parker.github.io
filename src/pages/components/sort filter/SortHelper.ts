import { ContentItemType } from "../../../data/types"

export const sortByStartDate = (a: ContentItemType, b: ContentItemType) => {
    if (a.dates.start && b.dates.start) {
        return a.dates.start.getTime() - b.dates.start.getTime()
    } else if (a.dates.start && !b.dates.start) {
        return 1
    } else if (!a.dates.start && b.dates.start) {
        return -1
    } else {
        return 0
    }
}

export const sortByEndDate = (a: ContentItemType, b: ContentItemType) => {
    if (a.dates.end === "Present" && b.dates.end === "Present") {
        return 0
    } else if (a.dates.end === "Present") {
        return -1
    }
    else if (b.dates.end === "Present") {
        return 1
    }
    const aDate = a.dates.end || a.dates.start
    const bDate = b.dates.end || b.dates.start
    if (aDate && bDate) {
        return aDate.getTime() - bDate.getTime()
    } else if (aDate && !bDate) {
        return 1
    } else if (!aDate && bDate) {
        return -1
    } else {
        return 0
    }
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