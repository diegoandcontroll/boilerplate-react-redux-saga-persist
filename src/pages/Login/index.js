import { useDispatch, useSelector } from 'react-redux';
import { Title } from './styled';
import { Container } from '../../styles/Globalstyles';
import * as counterActions from '../../store/modules/counter/actions';

export default function index() {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(counterActions.counterRequest());
  }
  const increment = useSelector((state) => state.cont.counter);

  return (
    <>
      <Container>
        <Title>{increment}</Title>
        <button type="button" onClick={handleClick} style={{ marginLeft: '138px' }}>Enviar</button>
      </Container>
    </>
  );
}
