import { Link } from "react-router-dom";
const AppBar = () => (
  <nav>
    <Link to="/">WebStudio</Link>
    <Link to="/">Studio</Link>
    <Link to="/portfolio">Portfolio</Link>
    <Link to="/contact">Contacts</Link>
  </nav>
);
export default AppBar;
