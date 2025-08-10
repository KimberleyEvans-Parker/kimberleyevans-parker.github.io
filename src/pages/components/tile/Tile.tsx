import { Link } from "react-router-dom";
import "./tiles.css";

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