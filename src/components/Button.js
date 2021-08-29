import { useMediaQuery } from 'react-responsive'

const Button = ({title, value, num, handleClick, activeButton, color}) => {
    const notMobile = useMediaQuery({ query: `(min-width: 700px)` });
    
    return (
        <button style={activeButton === title ? {backgroundColor: color} : {background: "none"}} onClick={() => handleClick(title, value)} className={`info-button`}>
            {notMobile ? 
                <>
                    <span>0{num}</span>
                    {" " + title}
                </>
                :
                title
            }
        </button>
    )
}

export default Button
