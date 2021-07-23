import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Nav, NavContainer } from './styled';

export default function Header() {
  return (
    <NavContainer>
      <Nav>
        <Link to="/">
          <FaHome sise={24} />
        </Link>
        <Link to="/login">
          <FaUserAlt size={24} />
        </Link>
        <Link to="/logout">
          <FaSignInAlt size={24} />
        </Link>
      </Nav>
    </NavContainer>
  );
}
