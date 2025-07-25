import React from "react";
import { SMALL_SCREEN } from "../../helpers/Constants";
import { Link } from "react-router-dom";

interface TileProps {
    animationDelay: string;
    imgSrc: string;
    title: string;
}

export const Tile = ({ animationDelay, imgSrc, title }: TileProps) => {
    // Keeps track of the window dimensions.  Updates when window resizes
    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth,
    });
    React.useEffect(() => {
        const handleResize = () => {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth,
            })
        }

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    });

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