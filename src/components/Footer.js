import { Link } from "react-router-dom"
const footer = () => {
  return (
    <footer className="footer">
      <p>Crud test app</p>
      <Link to="/about">About us</Link>
    </footer>
  )
}

export default footer
