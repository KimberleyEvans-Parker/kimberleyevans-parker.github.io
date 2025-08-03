import React from "react";
import { SMALL_SCREEN } from "../../helpers/Constants";
import { Link } from "react-router-dom";

interface TileProps {
    animationDelay: string;
    imgSrc: string;
    title: string;
}

export const Tile = ({ animationDelay, imgSrc, title }: TileProps) => {
    return (
        <div
            className="columns zoom-in"
            style={{
                animationDelay: animationDelay,
            }}
        >
            <Link to={title.toLowerCase()}>
                <img src={imgSrc} alt={title} className="tile-img" />
                <h3 className="centered">{title}</h3>
                <div className="layer" />
            </Link>
        </div>
    )
}