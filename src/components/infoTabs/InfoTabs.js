import Button from "../button/Button"
import styles from './InfoTabs.module.css'

const InfoTabs = ({ text, handleClick, activeButton, color}) => {
    return (
        <div className={styles.infoTabs}>
            {text &&
              Object.entries(text).map(([key, value], index) => (
                <Button
                  handleClick={handleClick}
                  key={key}
                  value={value}
                  num={index + 1}
                  title={key}
                  activeButton={activeButton}
                  color={color}
                />
              ))}
          </div>
    )
}

export default InfoTabs
