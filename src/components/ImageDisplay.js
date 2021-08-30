const ImageDisplay = ({ image, geologyImage }) => {
    return (
        <div className="img-wrapper">
            <img src={image} alt="" className="img" />
            <img src={geologyImage} alt="" className="img__geology" />
          </div>
    )
}

export default ImageDisplay
