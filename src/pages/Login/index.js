import { useDispatch } from 'react-redux';
import { Title } from './styled';
import { Container } from '../../styles/Globalstyles';
import * as counterActions from '../../store/modules/counter/actions';

export default function index() {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(counterActions.counterRequest());
  }
  return (
    <>
      <Container>
        <Title>Login</Title>
        <small>Hellow World</small>
        <p>Ullamco incididunt occaecat qui minim id.</p>
        <a href="test">In ullamco eiusmod ipsum cillum do ad consectetur pariatur.</a>
        <button type="button" onClick={handleClick}>Enviar</button>
      </Container>
    </>
  );
}
