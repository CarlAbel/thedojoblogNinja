import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div>
      <h2>Sorry</h2>
      <p>Can't find the page</p>
      <Link to="/home">Go to home page</Link>
    </div>
  )
}

export default NotFound
