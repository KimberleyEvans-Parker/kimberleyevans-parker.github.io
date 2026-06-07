import { Link } from "react-router-dom"
import styles from "./tiles.module.css"

interface TileProps {
    animationDelay: string
    imgSrc: string
    title: string
}

export const Tile = ({ animationDelay, imgSrc, title }: TileProps) => {
    return (
        <div
            className={`${styles.columns} zoom-in`}
            style={{
                animationDelay: animationDelay,
            }}
        >
            <Link to={title.toLowerCase()}>
                <img src={imgSrc} alt={title} className={styles['tile-img']} />
                <h3 className={styles.centered}>{title}</h3>
                <div className={styles.layer} />
            </Link>
        </div>
    )
}