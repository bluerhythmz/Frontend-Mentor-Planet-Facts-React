import styles from './ImageDisplay.module.css'

const ImageDisplay = ({ image, geologyImage }) => {
    return (
        <div className={styles.imgWrapper}>
            <img src={image} alt="" className={styles.img} />
            <img src={geologyImage} alt="" className={styles.imgGeology} />
          </div>
    )
}

export default ImageDisplay
