import PropTypes from "prop-types"

const Button = (props) => {

    return (  
        <button
        onClick={props.onClick}
        className="btn" 
        style={{backgroundColor: props.backGroundColor}}>
        {props.text}
        </button>
    )
}

Button.defaultProps = {
    backGroundColor: "black",   
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
