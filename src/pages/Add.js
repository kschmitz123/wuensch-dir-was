import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FloatingActionButton from '../components/Button';

const Container = styled.div`
  background: #edf0ed;
  margin: 30px;
  text-align: center;
`;

const Add = () => {
  return (
    <Container>
      <div>
        <h1>This is a page</h1>
        <p>Add your wishlist items here.</p>
      </div>
      <Link to="/">
        <FloatingActionButton>Back</FloatingActionButton>
      </Link>
    </Container>
  );
};
export default Add;
