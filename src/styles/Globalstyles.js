import styled, { createGlobalStyle } from 'styled-components';
import { secondary, primary } from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    list-style: none;
  }

  body{
    font-family: 'Lato', sans-serif;
    background-color: ${secondary};
    color: ${primary};
  }

  html, body #root{
    height: 100%;
  }

  button{
    cursor: pointer;
    background: ${primary};
    border: none;
    color: #fff;
    padding: 0.5rem 0.8rem;
    border-radius: 1rem;
    font-weight: 700;
  }

  a{
    text-decoration: none;
    color: ${primary}
  }
`;
export const Container = styled.section`
  max-width: 400px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;
