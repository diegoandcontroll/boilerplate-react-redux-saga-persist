import styled from 'styled-components';
import { primary } from '../../config/colors';

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  border: none;
`;
export const Nav = styled.nav`
  width: 50%;
  background: ${primary};
  padding: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4rem;

  a{
    color: #fff;
    padding-left: 1.5rem;
    font-weight: bold;
    font-size: 24px;
  }
`;
