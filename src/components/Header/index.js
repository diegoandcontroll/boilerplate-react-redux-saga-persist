import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Nav, NavContainer } from './styled';

export default function Header() {
  const increment = useSelector((state) => state.cont.counter);
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
      <div>
        <h1 style={{ marginTop: '20px', marginLeft: '20px' }}>
          {increment}
        </h1>
      </div>
    </NavContainer>
  );
}
