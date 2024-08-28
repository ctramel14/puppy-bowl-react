import { Link } from 'react-router-dom'

const Nav = () => {
    return (
      <nav style={{ display: "flex", gap: "8px" }}>
        <Link to="/">All Players</Link>
      </nav>
    );
  };
  
  export default Nav;