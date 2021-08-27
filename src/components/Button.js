import { useMediaQuery } from 'react-responsive'

const Button = ({title, num}) => {
    const notMobile = useMediaQuery({ query: `(min-width: 700px)` });
    
    return (
        <button className="info-button">
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
