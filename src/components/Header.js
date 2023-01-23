import PropTypes from "prop-types"
import Button from "./Button"
import { useLocation } from "react-router-dom"

const Header = (props) => {
const location = useLocation()
  return (
    <header className="header">
        <h1>{props.title}</h1>
        {location.pathname === "/"  && <Button backGroundColor="purple" text={props.showAdd ? "Hide Form" : "Show Form"} onClick={props.onAdd} />}
    </header>
  )
}

Header.defaultProps = {
 title: "Default header Title"
}

Header.propTypes  = {
  title: PropTypes.string
}

export default Header
